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
                <Link href="/course/lesson/reading-fundamentals/fluency">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }>
                    See the Course
                  </Button>
                </Link>
                <a href="http://ec2-3-12-102-103.us-east-2.compute.amazonaws.com/docs#/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  }>
                    View API Docs
                  </Button>
                </a>
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

      {/* Language 4 Content Bank Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Extensive Language 4 Content Bank
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Access our comprehensive collection of pre-generated content designed specifically for Language 4 courses.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">4,500</div>
                    <div className="text-lg text-gray-700">Curated Questions</div>
                    <p className="mt-2 text-gray-600">Diverse question bank covering all Language 4 topics</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                    <div className="text-lg text-gray-700">In-Depth Articles</div>
                    <p className="mt-2 text-gray-600">Comprehensive articles covering key language concepts</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0 md:pl-8">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80" 
                    width={400} 
                    height={300} 
                    alt="Student studying language concepts"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
