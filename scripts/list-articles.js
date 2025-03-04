const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
const fs = require('fs');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function listArticles() {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*');

    if (error) {
      console.error('Error fetching articles:', error);
      return;
    }

    fs.writeFileSync('articles.json', JSON.stringify(data, null, 2));
    console.log('Articles written to articles.json');
  } catch (err) {
    console.error('Error:', err);
  }
}

listArticles(); 