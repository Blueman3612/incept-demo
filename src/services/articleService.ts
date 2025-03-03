import { apiClient } from './apiClient';
import { ApiResponse, GenerateParams, GradeParams, TagParams } from '@/types/Api';
import { Article, GeneratedArticle, GradedArticle, TaggedArticle } from '@/types/Article';
import { supabase } from '@/lib/supabase'

class ArticleService {
  /**
   * Generate a new article based on provided parameters
   */
  async generateArticle(params: GenerateParams): Promise<ApiResponse<GeneratedArticle>> {
    return apiClient.post<GeneratedArticle>('articles/generate', params);
  }
  
  /**
   * Grade an article based on quality criteria
   */
  async gradeArticle(params: GradeParams): Promise<ApiResponse<GradedArticle>> {
    return apiClient.post<GradedArticle>('articles/grade', params);
  }
  
  /**
   * Tag an article with metadata
   */
  async tagArticle(params: TagParams): Promise<ApiResponse<TaggedArticle>> {
    return apiClient.post<TaggedArticle>('articles/tag', params);
  }
  
  /**
   * Get a random article (mock implementation for demo)
   */
  async getRandomArticle(): Promise<ApiResponse<Article>> {
    // For demo purposes, we'll simulate an API call that returns a mock article
    // In a real implementation, this would call the API
    const mockArticle: Article = {
      id: `a-${Math.floor(Math.random() * 1000)}`,
      title: 'The Solar System: Our Cosmic Neighborhood',
      content: `The Solar System is our local neighborhood in space. It consists of the Sun, eight planets, numerous moons, asteroids, comets, and other celestial bodies.

The eight planets in order from the Sun are: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Earth is the third planet from the Sun and the only known planet to support life.

Mercury is the smallest and closest planet to the Sun. It has no atmosphere to speak of and its surface is covered with craters, much like our Moon.

Venus is often called Earth's sister planet because of its similar size, but it's actually quite different. It has a thick atmosphere that traps heat, making it the hottest planet in our Solar System.

Mars, often called the "Red Planet," is known for its reddish appearance due to iron oxide (rust) on its surface. Scientists have found evidence suggesting that liquid water once flowed on Mars.

Jupiter is the largest planet in our Solar System. It's a gas giant with a turbulent atmosphere and a distinctive Great Red Spot, which is a massive storm that has been raging for hundreds of years.

Saturn is famous for its spectacular ring system, which consists of countless small particles of ice and rock. While other gas giants also have rings, Saturn's are the most prominent.

Uranus and Neptune are ice giants, composed largely of substances like water, ammonia, and methane. Uranus is unique because it rotates on its side, likely due to a massive collision in its early history.

Beyond Neptune lies the Kuiper Belt, a region of icy bodies including the dwarf planet Pluto. Even further out is the Oort Cloud, a theoretical cloud of predominantly icy objects that surrounds the Solar System.

Our Solar System is just one tiny part of the vast Milky Way galaxy, which contains billions of stars and potentially countless other planetary systems.`,
      difficulty: 'medium',
      subject: 'Astronomy',
      topic: 'Solar System',
      ageGroup: 'middle',
      tags: ['astronomy', 'solar system', 'planets', 'space'],
      summary: 'An overview of the Solar System, including the Sun, planets, and other celestial bodies.'
    };
    
    return {
      success: true,
      data: mockArticle
    };
  }
}

export const articleService = new ArticleService();
export default ArticleService;

export interface SupabaseArticle {
  id: string
  title: string
  content: string
  lesson: string
  standard: string | null
  subject: string
  grade: number
  status: string
  quality_score: number | null
  feedback: string | null
  created_at: string
  updated_at: string
}

export async function listAllArticles(): Promise<SupabaseArticle[] | null> {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*');

    if (error) {
      console.error('Error fetching articles:', error);
      return null;
    }

    console.log('All articles:', data);
    return data;
  } catch (err) {
    console.error('Error in listAllArticles:', err);
    return null;
  }
}

export async function getArticleByLessonId(lessonId: string): Promise<SupabaseArticle | null> {
  try {
    console.log('Fetching article for lesson:', lessonId);
    
    // First, let's list all articles to see what we have
    await listAllArticles();
    
    const { data, error } = await supabase
      .from('articles')
      .select(`
        id,
        title,
        content,
        lesson,
        standard,
        subject,
        grade,
        status,
        quality_score,
        feedback,
        created_at,
        updated_at
      `)
      .eq('lesson', lessonId)
      .single();

    if (error) {
      // Handle the "no rows found" case gracefully
      if (error.code === 'PGRST116') {
        console.log(`No article found for lesson: ${lessonId}`);
        return null;
      }
      
      // Log other errors as they might be actual issues
      console.error('Supabase error details:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      });
      throw error;
    }

    console.log('Article data received:', data);
    return data;
  } catch (err) {
    console.error('Error in getArticleByLessonId:', err);
    return null;
  }
} 