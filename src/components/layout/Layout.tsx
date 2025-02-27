import React, { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              Educational Content Generator &copy; {new Date().getFullYear()}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
