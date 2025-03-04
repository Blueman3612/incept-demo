import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

export function getImagePathForArticle(title: string): string {
  // Convert title to kebab case for file naming
  const filename = title.toLowerCase().replace(/\s+/g, '-');
  return `/images/${filename}.jpg`;
}

async function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, response => {
      // Check if we got a successful response
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      // Check if the content is an image
      const contentType = response.headers['content-type'];
      if (!contentType || !contentType.startsWith('image/')) {
        reject(new Error(`Invalid content type: ${contentType}`));
        return;
      }

      const file = fs.createWriteStream(filepath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });

      file.on('error', err => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', err => {
      reject(err);
    });
  });
}

// Function to extract image links from content
export function extractImageLinks(content: string): string[] {
  const regex = /!\[(.*?)\]\((.*?)\)/g;
  const matches = [...content.matchAll(regex)];
  return matches.map(match => match[2]);
}

// Function to get a stock image URL based on description
async function getStockImageUrl(description: string): Promise<string> {
  // Use Unsplash API for stock images
  const searchQuery = encodeURIComponent(description);
  const url = `https://source.unsplash.com/1600x900/?${searchQuery}`;
  return url;
}

// Function to get image path based on description
function getImagePath(description: string): string {
  const filename = description
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  return `/images/content/${filename}.jpg`;
}

// Function to process content and use downloaded images
export function processArticleContent(content: string): string {
  // Split content into sections
  const sections = content.split('**');
  let processedContent = '';
  
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    
    if (i % 2 === 1) { // This is a header
      processedContent += `**${section}**`;
    } else {
      // Process the content section
      const paragraphs = section.split('\n\n');
      
      for (const paragraph of paragraphs) {
        const imageMatch = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
        if (imageMatch) {
          const [fullMatch, altText] = imageMatch;
          // Get the path for the pre-downloaded image
          const imagePath = getImagePath(altText);
          
          // Replace the image markdown with the new image path
          processedContent += paragraph.replace(imageMatch[2], imagePath) + '\n\n';
        } else {
          processedContent += paragraph + '\n\n';
        }
      }
    }
  }
  
  return processedContent.trim();
} 