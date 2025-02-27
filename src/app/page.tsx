import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 h-[500px] z-0"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 z-10">
          <div className="md:flex items-center justify-between gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                Educational Content Generator
              </h1>
              <p className="mt-4 text-xl text-gray-600 leading-relaxed">
                Create high-quality educational materials instantly with our powerful API. Generate questions, articles, and assessments tailored to your curriculum.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }>
                    Try the Demo
                  </Button>
                </Link>
                <Link href="#api-section">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  }>
                    View API Docs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" 
                  width={600} 
                  height={400} 
                  alt="Students learning with digital content"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Powerful Tools for Educators
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our API provides everything you need to create engaging educational content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Questions</h3>
              <p className="text-gray-600">
                Generate educational questions across multiple subjects and difficulty levels
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Articles</h3>
              <p className="text-gray-600">
                Create comprehensive educational articles on any topic or subject
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Grading</h3>
              <p className="text-gray-600">
                Evaluate and grade content for quality, complexity, and educational value
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tagging</h3>
              <p className="text-gray-600">
                Automatically tag content with relevant metadata for better organization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works with Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image 
                src="https://images.unsplash.com/photo-1555431189-0fabf2667795?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                width={600} 
                height={400} 
                alt="Teacher using digital content" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How It Works
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Define your parameters</h3>
                    <p className="mt-2 text-gray-600">Specify subject, grade level, difficulty, and content type</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Make an API request</h3>
                    <p className="mt-2 text-gray-600">Send your request to our API endpoints</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Receive generated content</h3>
                    <p className="mt-2 text-gray-600">Get high-quality educational content in seconds</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/demo">
                  <Button variant="primary" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }>
                    Try it Yourself
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section id="api-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Simple API Integration
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our RESTful API makes it easy to integrate educational content generation into your platform
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Questions Endpoints */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Questions API</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">POST</span>
                      <code className="text-sm font-mono text-blue-600">/api/questions/generate</code>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Generate educational questions</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">POST</span>
                      <code className="text-sm font-mono text-blue-600">/api/questions/grade</code>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Grade question quality</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">POST</span>
                      <code className="text-sm font-mono text-blue-600">/api/questions/tag</code>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Tag questions with metadata</p>
                  </div>
                </div>
              </div>
              
              {/* Articles Endpoints */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Articles API</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">POST</span>
                      <code className="text-sm font-mono text-blue-600">/api/articles/generate</code>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Generate educational articles</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">POST</span>
                      <code className="text-sm font-mono text-blue-600">/api/articles/grade</code>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Grade article quality</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">POST</span>
                      <code className="text-sm font-mono text-blue-600">/api/articles/tag</code>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">Tag articles with metadata</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
