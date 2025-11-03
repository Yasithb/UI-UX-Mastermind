import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-10-5z"/>
            </svg>
          </div>
          <span className="text-xl font-bold">FutureForge</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          <button className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
            Start a Project
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Design. Develop. Deliver.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transforming ideas into interactive digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
              Start a Project
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a complete suite of services to bring your digital vision to life, from initial concept to final launch and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Software Development */}
          <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors group">
            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Software Development</h3>
            <p className="text-gray-300">
              Building robust, scalable, and high-performance applications tailored to your specific needs.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors group">
            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 5l2 2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
            <p className="text-gray-300">
              Crafting intuitive, beautiful, and user-centered interfaces that delight and engage your audience.
            </p>
          </div>

          {/* Digital Branding */}
          <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors group">
            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Digital Branding</h3>
            <p className="text-gray-300">
              Creating a strong, memorable brand identity that resonates with your target market.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore some of our recent projects that showcase our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Project Alpha Showcase */}
          <div className="group relative overflow-hidden rounded-xl aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative h-full flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Project Alpha Showcase</h3>
              <p className="text-cyan-400 font-medium">UI/UX Design</p>
            </div>
            <div className="absolute inset-0 bg-cyan-400 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
          </div>

          {/* Project Beta Redesign */}
          <div className="group relative overflow-hidden rounded-xl aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-700"></div>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative h-full flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Project Beta Redesign</h3>
              <p className="text-cyan-400 font-medium">Web Development</p>
            </div>
            <div className="absolute inset-0 bg-cyan-400 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
          </div>

          {/* Project Gamma Branding */}
          <div className="group relative overflow-hidden rounded-xl aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-700"></div>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative h-full flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Project Gamma Branding</h3>
              <p className="text-cyan-400 font-medium">Digital Branding</p>
            </div>
            <div className="absolute inset-0 bg-cyan-400 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-cyan-400 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-10-5z"/>
              </svg>
            </div>
            <span className="text-gray-400">© 2024 FutureForge. All rights reserved.</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
