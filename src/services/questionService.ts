import { apiClient } from './apiClient';
import { ApiResponse, GenerateParams, GradeParams, TagParams } from '@/types/Api';
import { Question, GeneratedQuestion, GradedQuestion, TaggedQuestion } from '@/types/Question';

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
   * Get a random question (mock implementation for demo)
   */
  async getRandomQuestion(): Promise<ApiResponse<Question>> {
    // For demo purposes, we'll simulate an API call that returns a mock question
    // In a real implementation, this would call the API
    const mockQuestion: Question = {
      id: `q-${Math.floor(Math.random() * 1000)}`,
      text: 'What is the capital city of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctOption: 2,
      explanation: 'Paris is the capital and most populous city of France.',
      difficulty: 'easy',
      subject: 'Geography',
      topic: 'European Capitals',
      ageGroup: 'middle',
      tags: ['geography', 'europe', 'capitals']
    };
    
    return {
      success: true,
      data: mockQuestion
    };
  }
}

export const questionService = new QuestionService();
export default QuestionService; 