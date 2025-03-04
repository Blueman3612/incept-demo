const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');
require('dotenv').config();

// Function to extract image descriptions from markdown content
function extractImageDescriptions(content) {
  const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
  const matches = [...content.matchAll(imageRegex)];
  return matches.map(match => match[1]).filter(desc => desc && desc !== '');
}

// Get the API key from environment variables
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

if (!UNSPLASH_ACCESS_KEY) {
  console.error('Error: UNSPLASH_ACCESS_KEY not found in environment variables');
  process.exit(1);
}

async function downloadImage(description) {
  try {
    // Create a filename from the description
    const filename = description
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const outputDir = path.join(process.cwd(), 'public', 'images', 'content');
    const outputPath = path.join(outputDir, `${filename}.jpg`);

    // Create directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });

    // First, search for an image
    const searchResponse = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
      },
      params: {
        query: description,
        orientation: 'landscape',
        per_page: 1
      }
    });

    if (!searchResponse.data.results.length) {
      throw new Error('No images found for this description');
    }

    // Get the image URL
    const imageUrl = searchResponse.data.results[0].urls.regular;
    
    console.log(`Downloading image for: ${description}`);
    const imageResponse = await axios.get(imageUrl, {
      responseType: 'arraybuffer'
    });

    // Save the image
    await fs.writeFile(outputPath, imageResponse.data);
    
    console.log(`Successfully downloaded: ${filename}.jpg`);
    return `/images/content/${filename}.jpg`;
  } catch (error) {
    console.error(`Error downloading image for "${description}":`, error.message);
    return null;
  }
}

async function downloadAllImages() {
  try {
    console.log('Reading articles.json...');
    const articlesData = await fs.readFile('articles.json', 'utf8');
    const articles = JSON.parse(articlesData);
    
    console.log('Extracting image descriptions from articles...');
    const allDescriptions = new Set();
    articles.forEach(article => {
      const descriptions = extractImageDescriptions(article.content);
      descriptions.forEach(desc => allDescriptions.add(desc));
    });
    
    console.log(`Found ${allDescriptions.size} unique image descriptions`);
    console.log('Starting image downloads...');
    
    const results = await Promise.all(
      Array.from(allDescriptions).map(desc => downloadImage(desc))
    );
    
    console.log('\nDownload summary:');
    Array.from(allDescriptions).forEach((desc, index) => {
      if (results[index]) {
        console.log(`✓ ${desc}`);
      } else {
        console.log(`✗ Failed: ${desc}`);
      }
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run the script
downloadAllImages().catch(console.error); 