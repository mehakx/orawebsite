import React from 'react';
import { Link } from 'react-router-dom';

const PodcastPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">Ora Podcast</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conversations about holistic wellness, proactive health, and the future of personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-purple-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">Latest Episode</span>
                  <span className="ml-3 text-gray-400 text-sm">Episode 42 • May 22, 2025</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white">The Future of Proactive Wellness with Dr. Maya Johnson</h2>
                <p className="text-gray-300 mb-6">
                  In this episode, we speak with renowned neuroscientist Dr. Maya Johnson about the revolutionary potential of AI-powered wellness companions and how they're transforming our approach to health and well-being.
                </p>
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">MJ</span>
                  </div>
                  <span className="ml-3 text-white">Dr. Maya Johnson, Neuroscientist</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link to="/podcast/future-proactive-wellness" className="button-primary inline-block">
                    Listen Now
                  </Link>
                  <button className="glass-effect px-6 py-3 rounded-lg text-white hover:bg-white/10 transition flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episode List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Recent Episodes</h2>
          
          <div className="space-y-8">
            {/* Episode 1 */}
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center md:col-span-1">
                  <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="flex items-center mb-2">
                    <span className="text-gray-400 text-sm">Episode 41 • May 15, 2025</span>
                    <span className="ml-3 px-3 py-1 bg-cyan-500 text-white text-xs rounded-full">Physical Health</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">The Science of Sleep: Optimizing Your Rest for Better Health</h3>
                  <p className="text-gray-300 mb-4">
                    Sleep expert Dr. James Chen discusses the latest research on sleep optimization and how AI can help identify your ideal sleep patterns for maximum recovery and energy.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/podcast/science-of-sleep" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                      Listen Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <span className="text-gray-400">45 minutes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Episode 2 */}
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center md:col-span-1">
                  <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="flex items-center mb-2">
                    <span className="text-gray-400 text-sm">Episode 40 • May 8, 2025</span>
                    <span className="ml-3 px-3 py-1 bg-pink-600 text-white text-xs rounded-full">Emotional Balance</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Emotional Intelligence in the Digital Age</h3>
                  <p className="text-gray-300 mb-4">
                    Psychologist Dr. Sarah Williams explores how technology can enhance our emotional intelligence and help us navigate complex feelings in our increasingly digital world.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/podcast/emotional-intelligence" className="text-pink-400 hover:text-pink-300 inline-flex items-center">
                      Listen Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <span className="text-gray-400">52 minutes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Episode 3 */}
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center md:col-span-1">
                  <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="flex items-center mb-2">
                    <span className="text-gray-400 text-sm">Episode 39 • May 1, 2025</span>
                    <span className="ml-3 px-3 py-1 bg-purple-600 text-white text-xs rounded-full">Mental Wellness</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Mindfulness in Moments: The Power of Micro-Practices</h3>
                  <p className="text-gray-300 mb-4">
                    Mindfulness expert Michael Torres shares practical techniques for incorporating brief mindfulness practices throughout your day for improved focus, reduced stress, and greater well-being.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/podcast/mindfulness-moments" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                      Listen Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <span className="text-gray-400">38 minutes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Episode 4 */}
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center md:col-span-1">
                  <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="flex items-center mb-2">
                    <span className="text-gray-400 text-sm">Episode 38 • April 24, 2025</span>
                    <span className="ml-3 px-3 py-1 bg-green-500 text-white text-xs rounded-full">Nutrition</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Personalized Nutrition: Beyond One-Size-Fits-All Diets</h3>
                  <p className="text-gray-300 mb-4">
                    Nutritionist Elena Rodriguez discusses how AI-powered nutrition recommendations are revolutionizing our understanding of personalized eating plans and sustainable dietary changes.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/podcast/personalized-nutrition" className="text-green-400 hover:text-green-300 inline-flex items-center">
                      Listen Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <span className="text-gray-400">47 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="glass-effect px-8 py-4 rounded-lg text-white hover:bg-white/10 transition">
              Load More Episodes
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Subscribe to <span className="gradient-text">The Ora Podcast</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Never miss an episode of our conversations with leading experts in wellness, health technology, and personal development. Available on all major podcast platforms.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <a href="#" className="glass-effect p-4 rounded-xl flex items-center justify-center hover:bg-white/5 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3.5 11.5l-6-4v8l6-4zm0-7l-6-4v8l6-4z"/>
                  </svg>
                </a>
                <a href="#" className="glass-effect p-4 rounded-xl flex items-center justify-center hover:bg-white/5 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm.5 12.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                  </svg>
                </a>
                <a href="#" className="glass-effect p-4 rounded-xl flex items-center justify-center hover:bg-white/5 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"/>
                  </svg>
                </a>
                <a href="#" className="glass-effect p-4 rounded-xl flex items-center justify-center hover:bg-white/5 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm.5 12.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                  </svg>
                </a>
                <a href="#" className="glass-effect p-4 rounded-xl flex items-center justify-center hover:bg-white/5 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm.5 12.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                  </svg>
                </a>
                <a href="#" className="glass-effect p-4 rounded-xl flex items-center justify-center hover:bg-white/5 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm.5 12.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-white">Suggest a Topic or Guest</h3>
              <p className="text-gray-300 mb-6">
                Have a topic you'd like us to cover or an expert you think we should interview? Let us know!
              </p>
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="suggestion" className="block text-sm font-medium text-gray-300 mb-1">Your Suggestion</label>
                    <textarea 
                      id="suggestion"
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    ></textarea>
                  </div>
                  <button type="submit" className="button-primary w-full py-2 rounded-lg">
                    Submit Suggestion
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastPage;
