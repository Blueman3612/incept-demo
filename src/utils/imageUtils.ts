// Client-side image utilities
export function getImagePathForArticle(title: string): string {
  // Convert title to kebab case for file naming
  const filename = title.toLowerCase().replace(/\s+/g, '-');
  return `/images/${filename}.jpg`;
}

// Function to extract image links from content
export function extractImageLinks(content: string): string[] {
  const regex = /!\[(.*?)\]\((.*?)\)/g;
  const matches = [...content.matchAll(regex)];
  return matches.map(match => match[2]);
}

// Function to get image path based on description
function getImagePath(description: string): string {
  const filename = description
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  return `/images/content/${filename}.jpg`;
}

// Function to process content and handle image paths
export async function processArticleContent(content: string): Promise<string> {
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