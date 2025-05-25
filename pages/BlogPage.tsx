import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ora <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, research, and stories about holistic wellness and proactive health management.
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <button className="px-6 py-2 rounded-full bg-gray-800 text-white font-medium hover:bg-purple-600 transition">
              All
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-800 text-white font-medium hover:bg-purple-600 transition">
              Mental Wellness
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-800 text-white font-medium hover:bg-purple-600 transition">
              Physical Health
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-800 text-white font-medium hover:bg-purple-600 transition">
              Emotional Balance
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-800 text-white font-medium hover:bg-purple-600 transition">
              Research
            </button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video bg-gray-800"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">Featured</span>
                  <span className="ml-3 text-gray-400 text-sm">May 20, 2025</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white">The Science Behind Proactive Wellness Interventions</h2>
                <p className="text-gray-300 mb-6">
                  New research shows that proactive wellness interventions can significantly improve mental and physical health outcomes compared to reactive approaches. This comprehensive study examines how AI-powered wellness companions like Ora are transforming personal healthcare.
                </p>
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">DR</span>
                  </div>
                  <span className="ml-3 text-white">Dr. Rebecca Chen, Chief Research Officer</span>
                </div>
                <Link to="/blog/science-proactive-wellness" className="button-primary inline-block">
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="aspect-video bg-gray-800"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">Physical Health</span>
                  <span className="ml-3 text-gray-400 text-sm">May 15, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">How Sleep Patterns Affect Your Daily Energy Levels</h3>
                <p className="text-gray-300 mb-6">
                  Understanding the relationship between sleep quality and energy can help you optimize your daily routine for better performance and well-being.
                </p>
                <Link to="/blog/sleep-energy-levels" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Post 2 */}
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="aspect-video bg-gray-800"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-pink-600 text-white text-sm rounded-full">Emotional Balance</span>
                  <span className="ml-3 text-gray-400 text-sm">May 12, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">The Power of Micro-Interventions for Emotional Regulation</h3>
                <p className="text-gray-300 mb-6">
                  Small, timely interventions can have a profound impact on emotional well-being. Learn how these micro-moments of support can transform your day.
                </p>
                <Link to="/blog/micro-interventions" className="text-pink-400 hover:text-pink-300 inline-flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Post 3 */}
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="aspect-video bg-gray-800"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">Mental Wellness</span>
                  <span className="ml-3 text-gray-400 text-sm">May 8, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Recognizing and Managing Workplace Stress Triggers</h3>
                <p className="text-gray-300 mb-6">
                  Identifying your unique stress triggers at work is the first step toward creating effective coping strategies and maintaining mental wellness.
                </p>
                <Link to="/blog/workplace-stress-triggers" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Post 4 */}
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="aspect-video bg-gray-800"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-amber-500 text-white text-sm rounded-full">Research</span>
                  <span className="ml-3 text-gray-400 text-sm">May 5, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">New Study: The Impact of Continuous Monitoring on Health Outcomes</h3>
                <p className="text-gray-300 mb-6">
                  A groundbreaking study reveals how continuous health monitoring leads to earlier interventions and significantly improved long-term wellness outcomes.
                </p>
                <Link to="/blog/continuous-monitoring-study" className="text-amber-400 hover:text-amber-300 inline-flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Post 5 */}
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="aspect-video bg-gray-800"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">Physical Health</span>
                  <span className="ml-3 text-gray-400 text-sm">May 1, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Adaptive Exercise: Why One-Size-Fits-All Fitness Doesn't Work</h3>
                <p className="text-gray-300 mb-6">
                  Personalized, adaptive exercise programs that respond to your changing needs and energy levels are more effective than rigid fitness plans.
                </p>
                <Link to="/blog/adaptive-exercise" className="text-green-400 hover:text-green-300 inline-flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Post 6 */}
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="aspect-video bg-gray-800"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">Community</span>
                  <span className="ml-3 text-gray-400 text-sm">April 28, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">The Role of Community in Sustainable Wellness Practices</h3>
                <p className="text-gray-300 mb-6">
                  Exploring how social connection and community support can enhance individual wellness efforts and create lasting positive change.
                </p>
                <Link to="/blog/community-wellness" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white">1</button>
              <button className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700">2</button>
              <button className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700">3</button>
              <button className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stay Updated with <span className="gradient-text">Ora Insights</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest research, wellness tips, and Ora updates delivered directly to your inbox.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button type="submit" className="button-primary px-6 py-3 rounded-lg">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
