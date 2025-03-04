import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { ApiResponse } from '@/types/Api';
import { ErrorWithMessage } from '@/types/Error';

// Default API URL - in a real app, this would come from environment variables
const API_URL = 'http://ec2-3-12-102-103.us-east-2.compute.amazonaws.com';

class ApiClient {
  private client: AxiosInstance;
  
  constructor(baseURL: string = API_URL) {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.get<ApiResponse<T>>(endpoint, config);
      return response.data;
    } catch (error: unknown) {
      return this.handleError<T>(error);
    }
  }
  
  async post<T, D = unknown>(endpoint: string, data?: D, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.post<ApiResponse<T>>(endpoint, data, config);
      return response.data;
    } catch (error: unknown) {
      return this.handleError<T>(error);
    }
  }
  
  private handleError<T>(error: unknown): ApiResponse<T> {
    const err = error as AxiosError;
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const responseData = err.response.data as ErrorWithMessage;
      return {
        success: false,
        error: responseData.message || 'An error occurred with the response',
      };
    } else if (err.request) {
      // The request was made but no response was received
      return {
        success: false,
        error: 'No response received from server',
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      const typedError = err as Error;
      return {
        success: false,
        error: typedError.message || 'An unexpected error occurred',
      };
    }
  }
}

// Export a singleton instance
export const apiClient = new ApiClient();

// Also export the class for testing or custom instances
export default ApiClient; 