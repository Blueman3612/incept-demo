const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1600&h=900&fit=crop',
    filename: 'main-idea.jpg',
    description: 'Student highlighting main ideas in text'
  },
  {
    url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1600&h=900&fit=crop',
    filename: 'textual-details.jpg',
    description: 'Close up of text with annotations'
  },
  {
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&h=900&fit=crop',
    filename: 'text-structure.jpg',
    description: 'Organized books showing structure'
  },
  {
    url: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1600&h=900&fit=crop',
    filename: 'knowledge-integration.jpg',
    description: 'Students working together integrating knowledge'
  },
  {
    url: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=1600&h=900&fit=crop',
    filename: 'point-of-view.jpg',
    description: 'Different perspectives through lenses'
  },
  {
    url: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1600&h=900&fit=crop',
    filename: 'character-analysis.jpg',
    description: 'Open book with character descriptions'
  },
  {
    url: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?q=80&w=1600&h=900&fit=crop',
    filename: 'theme-summary.jpg',
    description: 'Student writing summary notes'
  },
  {
    url: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1600&h=900&fit=crop',
    filename: 'figurative-language.jpg',
    description: 'Creative writing and expression'
  },
  {
    url: 'https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1600&h=900&fit=crop',
    filename: 'grammar.jpg',
    description: 'Grammar rules and writing'
  },
  {
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&h=900&fit=crop',
    filename: 'capitalization.jpg',
    description: 'Text with proper capitalization'
  },
  {
    url: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=1600&h=900&fit=crop',
    filename: 'conventions.jpg',
    description: 'Language conventions and rules'
  }
];

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, 'public', 'images', filename);
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
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`Error downloading ${image.filename}:`, error);
    }
  }
}

downloadAllImages(); 