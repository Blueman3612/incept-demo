# Educational Content Generator API Demo

## Project Overview
This is a frontend demo application for an educational content generator API. The app provides a user-friendly interface to interact with the API endpoints for generating and managing educational content, including questions and articles.

## API Endpoints
The application interfaces with the following API endpoints:

### Questions
- `questions/generate` - Generates a question
- `questions/grade` - Grades the quality of a question
- `questions/tag` - Tags a question with metadata

### Articles
- `articles/generate` - Generates an article
- `articles/grade` - Grades an article
- `articles/tag` - Tags an article with metadata

## Tech Stack
- **Framework**: Next.js with TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Context API
- **HTTP Client**: Axios

## Application Structure

### Pages
1. **Home Page** (`/`) - Landing page with API description, features, and links to demos
2. **Demo Page** (`/demo`) - Interactive demo with sidebar navigation for different content types

### Components

#### Layout Components
- `Sidebar` - Navigation sidebar for the demo page
- `Header` - Application header with logo and navigation
- `Layout` - Main layout wrapper for consistent styling

#### Feature Components
- `ArticleViewer` - Component to display and interact with articles
- `QuestionCard` - Component to display and interact with questions
- `ContentGenerator` - Form interface for generating new content
- `ContentGrader` - Interface for grading content quality
- `ContentTagger` - Interface for tagging content with metadata

### Services
- `ApiClient` - Core service for making API requests
- `QuestionService` - Service for question-related API operations
- `ArticleService` - Service for article-related API operations

### Context
- `ContentContext` - Global state management for content data
- `UIContext` - Global state management for UI state (loading, errors, etc.)

### Types
- `Question` - Type definition for question objects
- `Article` - Type definition for article objects
- `ApiResponse` - Type definition for API responses
- `ContentType` - Enum for content types (question, article)

## File Structure
```
src/
├── app/
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout
│   ├── demo/
│   │   ├── page.tsx                # Demo page
│   │   └── layout.tsx              # Demo layout
│   └── globals.css                 # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Application header
│   │   ├── Sidebar.tsx             # Navigation sidebar
│   │   └── Layout.tsx              # Main layout wrapper
│   ├── articles/
│   │   ├── ArticleViewer.tsx       # Article display component
│   │   ├── ArticleGenerator.tsx    # Article generation interface
│   │   ├── ArticleGrader.tsx       # Article grading interface
│   │   └── ArticleTagger.tsx       # Article tagging interface
│   ├── questions/
│   │   ├── QuestionCard.tsx        # Question display component
│   │   ├── QuestionGenerator.tsx   # Question generation interface
│   │   ├── QuestionGrader.tsx      # Question grading interface
│   │   └── QuestionTagger.tsx      # Question tagging interface
│   └── ui/
│       ├── Button.tsx              # Reusable button component
│       ├── Card.tsx                # Reusable card component
│       ├── Input.tsx               # Reusable input component
│       └── Loader.tsx              # Loading indicator component
├── context/
│   ├── ContentContext.tsx          # Content state management
│   └── UIContext.tsx               # UI state management
├── services/
│   ├── apiClient.ts                # Core API client
│   ├── questionService.ts          # Question API service
│   └── articleService.ts           # Article API service
└── types/
    ├── Question.ts                 # Question type definitions
    ├── Article.ts                  # Article type definitions
    └── Api.ts                      # API related type definitions
```

## Features
1. **Home Page with API Description**: Provides information about the API capabilities
2. **Interactive Demo Page**: Allows users to:
   - Browse generated questions and articles
   - Generate new questions and articles
   - Grade content quality
   - Add metadata tags to content
3. **Sidebar Navigation**: Easy navigation between different content types and actions
4. **Content Visualization**: Clean and modern UI for displaying educational content
5. **Content Generation**: User-friendly interface for generating custom content

## Development Workflow
1. **Setup**: Clone the repository and run `npm install`
2. **Development**: Run `npm run dev` to start the development server
3. **Testing**: Run `npm test` to run tests (when implemented)
4. **Building**: Run `npm run build` to build the application for production

## Future Enhancements
- User authentication and personalized content
- Content history and saving capability
- Advanced filtering and searching of content
- Export functionality for generated content
- Custom templates for content generation 