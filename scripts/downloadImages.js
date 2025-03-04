const https = require('https');
const fs = require('fs');
const path = require('path');

// Add any static images that need to be downloaded
const images = [
  {
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    filename: 'hero-image.jpg',
    description: 'Students learning with digital content'
  },
  {
    url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80',
    filename: 'language-study.jpg',
    description: 'Student studying language concepts'
  }
];

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(process.cwd(), 'public', 'images', filename);
    const dir = path.dirname(filepath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    https.get(url, response => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(filepath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
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

async function downloadAllImages() {
  console.log('Starting image downloads...');
  
  try {
    for (const image of images) {
      await downloadImage(image.url, image.filename);
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
    process.exit(1);
  }
}

downloadAllImages(); 