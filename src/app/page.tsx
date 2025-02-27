import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <Layout>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Educational Content Generator API
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Generate high-quality questions and articles for educational content with our powerful API.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/demo">
                  <Button variant="primary" size="lg">
                    Try the Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for educational content
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our API provides a comprehensive set of tools to generate, grade, and tag educational content.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Question Generation</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Generate educational questions in various subjects, difficulty levels, and formats.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Article Generation</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Create comprehensive articles and educational content tailored to specific topics and age groups.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Content Grading</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Evaluate and grade questions and articles for quality, complexity, and educational value.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Automatic Tagging</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Automatically tag content with relevant metadata for better organization and searchability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">API Endpoints</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Simple and powerful integration
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Explore our comprehensive API endpoints for seamless integration into your educational platform.
            </p>
          </div>

          <div className="mt-10">
            <div className="bg-gray-50 rounded-lg shadow overflow-hidden divide-y divide-gray-200">
              {/* Questions endpoints */}
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Questions</h3>
                <div className="mt-4 space-y-2">
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <code className="text-sm font-mono text-blue-600">POST /questions/generate</code>
                    <p className="mt-1 text-sm text-gray-500">Generate educational questions based on parameters</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <code className="text-sm font-mono text-blue-600">POST /questions/grade</code>
                    <p className="mt-1 text-sm text-gray-500">Grade the quality of educational questions</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <code className="text-sm font-mono text-blue-600">POST /questions/tag</code>
                    <p className="mt-1 text-sm text-gray-500">Automatically tag questions with relevant metadata</p>
                  </div>
                </div>
              </div>

              {/* Articles endpoints */}
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Articles</h3>
                <div className="mt-4 space-y-2">
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <code className="text-sm font-mono text-blue-600">POST /articles/generate</code>
                    <p className="mt-1 text-sm text-gray-500">Generate educational articles based on parameters</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <code className="text-sm font-mono text-blue-600">POST /articles/grade</code>
                    <p className="mt-1 text-sm text-gray-500">Grade the quality of educational articles</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <code className="text-sm font-mono text-blue-600">POST /articles/tag</code>
                    <p className="mt-1 text-sm text-gray-500">Automatically tag articles with relevant metadata</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to try it out?
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-200">
              Experience the power of our Educational Content Generator API through our interactive demo.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link href="/demo">
                  <Button variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
                    Try the Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
