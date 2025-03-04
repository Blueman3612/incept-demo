import { apiClient } from './apiClient';
import { ApiResponse, GenerateParams, GradeParams, TagParams } from '@/types/Api';
import { Question, GeneratedQuestion, GradedQuestion, TaggedQuestion } from '@/types/Question';
import { supabase } from '@/lib/supabase';

export interface SupabaseQuestion {
  id: string;
  stimuli: string;
  prompt: string;
  text: string;
  correct_answer: string;
  answer_choices: any; // JSONB field
  wrong_answer_explanations: any; // JSONB field
  solution: string;
  full_explanation: string;
  grading_criteria: string;
  difficulty: string;
  metadata: any;
  status: string;
  created_at: string;
  updated_at: string;
}

class QuestionService {
  /**
   * Generate a new question based on provided parameters
   */
  async generateQuestion(params: GenerateParams): Promise<ApiResponse<GeneratedQuestion>> {
    return apiClient.post<GeneratedQuestion>('questions/generate', params);
  }
  
  /**
   * Grade a question based on quality criteria
   */
  async gradeQuestion(params: GradeParams): Promise<ApiResponse<GradedQuestion>> {
    return apiClient.post<GradedQuestion>('questions/grade', params);
  }
  
  /**
   * Tag a question with metadata
   */
  async tagQuestion(params: TagParams): Promise<ApiResponse<TaggedQuestion>> {
    return apiClient.post<TaggedQuestion>('questions/tag', params);
  }

  /**
   * Convert a Supabase question to our Question type
   */
  private convertSupabaseQuestion(question: SupabaseQuestion): Question {
    console.log('Raw data:', {
      answer_choices: question.answer_choices,
      wrong_answer_explanations: question.wrong_answer_explanations
    });
    
    // Get answer choices from JSONB
    let answerChoices: string[] = [];
    if (Array.isArray(question.answer_choices)) {
      answerChoices = question.answer_choices;
    } else if (typeof question.answer_choices === 'object') {
      answerChoices = Object.values(question.answer_choices);
    }

    // Get wrong answer explanations (will be used when wrong answer is selected)
    let wrongAnswerExplanations: string[] = [];
    if (Array.isArray(question.wrong_answer_explanations)) {
      wrongAnswerExplanations = question.wrong_answer_explanations;
    } else if (typeof question.wrong_answer_explanations === 'object') {
      wrongAnswerExplanations = Object.values(question.wrong_answer_explanations);
    }

    // Convert letter answer (e.g., "A", "B", "C") to zero-based index
    const correctOptionIndex = question.correct_answer.trim().charCodeAt(0) - 'A'.charCodeAt(0);

    console.log('Correct answer processing:', {
      letter: question.correct_answer,
      index: correctOptionIndex,
      answer_choices: answerChoices
    });

    // Build the complete question text with stimuli and prompt
    const fullText = [
      question.stimuli,
      question.prompt,
      question.text
    ].filter(Boolean).join('\n\n');

    // Extract metadata fields
    const metadata = question.metadata || {};
    
    return {
      id: question.id,
      text: fullText,
      options: answerChoices,
      correctOption: correctOptionIndex,
      explanation: question.solution,
      wrongAnswerExplanations: wrongAnswerExplanations,
      difficulty: question.difficulty,
      subject: metadata.subject,
      topic: metadata.topic,
      tags: metadata.tags || []
    };
  }
  
  /**
   * Get a random question for a specific lesson
   */
  async getRandomQuestion(lessonId: string): Promise<ApiResponse<Question>> {
    try {
      console.log('Fetching random question for lesson:', lessonId);
      
      // Get all questions for this lesson
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('lesson', lessonId)
        .eq('status', 'active');

      if (error) {
        console.error('Supabase error:', error);
        return {
          success: false,
          error: error.message
        };
      }

      if (!data || data.length === 0) {
        console.log('No questions found for lesson:', lessonId);
        return {
          success: false,
          error: 'No questions available for this lesson'
        };
      }

      // Select a random question from the results
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuestion = data[randomIndex] as SupabaseQuestion;

      return {
        success: true,
        data: this.convertSupabaseQuestion(randomQuestion)
      };
    } catch (err: any) {
      console.error('Error in getRandomQuestion:', err);
      return {
        success: false,
        error: err.message || 'An unexpected error occurred'
      };
    }
  }
}

export const questionService = new QuestionService();
export default QuestionService; 