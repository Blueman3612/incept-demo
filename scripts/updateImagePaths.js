const fs = require('fs').promises;
const path = require('path');

async function updateImagePaths() {
  try {
    console.log('Reading articles.json...');
    const articlesData = await fs.readFile('articles.json', 'utf8');
    const articles = JSON.parse(articlesData);
    
    console.log('Updating image paths in articles...');
    const updatedArticles = articles.map(article => {
      let updatedContent = article.content;
      
      // Replace image URLs with local paths
      updatedContent = updatedContent.replace(/!\[(.*?)\]\(.*?\)/g, (match, description) => {
        const filename = description
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
          
        return `![${description}](/images/content/${filename}.jpg)`;
      });
      
      return {
        ...article,
        content: updatedContent
      };
    });
    
    console.log('Writing updated articles back to articles.json...');
    await fs.writeFile('articles.json', JSON.stringify(updatedArticles, null, 2));
    console.log('Done! Image paths have been updated.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run the script
updateImagePaths().catch(console.error); 