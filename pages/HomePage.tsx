import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Ora</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                understands you
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                your personal healthcare companion
              </p>
              <p className="text-gray-300 mb-8">
                Ora is an AI-powered holistic wellness agent that continuously monitors and supports every dimension of your mental and physical health—without waiting for a direct request. Experience proactive care that helps you become closer to your ideal self.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/try-ora" className="button-primary text-lg px-8 py-4">
                  Try Ora Free
                </Link>
                <Link to="/how-it-works" className="glass-effect px-8 py-4 rounded-lg text-white hover:bg-white/10 transition">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="swirling-logo"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-white">Ora</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proactive <span className="gradient-text">Wellness Support</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ora continuously monitors your well-being and provides personalized support exactly when you need it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-xl">
              <div className="h-16 w-16 rounded-full bg-purple-600 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Continuous Monitoring</h3>
              <p className="text-gray-300">
                Ora proactively gathers and analyzes data streams including mood, sleep, nutrition, activity, and stress indicators to build a comprehensive picture of your well-being without requiring constant input.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-xl">
              <div className="h-16 w-16 rounded-full bg-cyan-500 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Holistic Analysis</h3>
              <p className="text-gray-300">
                Automatically breaks down your overall well-being into mental, emotional, and physical components, evaluating each against personalized baselines and goals rather than generic benchmarks.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-xl">
              <div className="h-16 w-16 rounded-full bg-pink-600 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Timely Interventions</h3>
              <p className="text-gray-300">
                Generates context-aware recommendations and micro-nudges exactly when you need them, such as breathing exercises during peak stress times or hydration reminders after periods of activity.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-xl">
              <div className="h-16 w-16 rounded-full bg-amber-500 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Community Support</h3>
              <p className="text-gray-300">
                Offers an anonymized peer-support feed and community check-ins when deeper social support is needed, connecting you with others who share similar experiences while maintaining privacy.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-xl">
              <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Personalized Experience</h3>
              <p className="text-gray-300">
                Continuously learns from your feedback and adjusts its guidance to improve efficacy over time, creating an increasingly personalized wellness experience tailored to your unique needs.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-xl">
              <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Privacy-Focused</h3>
              <p className="text-gray-300">
                Built with privacy at its core, Ora gives you complete control over your data and how it's used, with robust security measures to protect your sensitive health information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-purple-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How <span className="gradient-text">Ora</span> Works
              </h2>
              <p className="text-gray-300 mb-6">
                Ora takes a fundamentally different approach to wellness by continuously monitoring multiple dimensions of your health without requiring constant input. Unlike traditional wellness apps that wait for you to log information, Ora proactively gathers data and provides support exactly when you need it.
              </p>
              <p className="text-gray-300 mb-6">
                By combining the roles of therapist, fitness coach, and personal coach into one intelligent system, Ora helps you become one step closer to your ideal self through personalized guidance and timely interventions.
              </p>
              <Link to="/how-it-works" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Learn more about how Ora works
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Use Cases</span> from our collection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Ora supports real people in their wellness journeys.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="use-case-card overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Workplace Stress Management</h3>
                <p className="text-gray-300 mb-4">
                  Ora detects rising stress levels during work hours and provides timely interventions to prevent burnout and maintain productivity.
                </p>
                <Link to="/use-cases/workplace-stress" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                  View case study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="use-case-card overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-cyan-500 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Personalized Exercise Adaptation</h3>
                <p className="text-gray-300 mb-4">
                  Ora creates and continuously adapts exercise recommendations based on your changing physical condition, energy levels, and available time.
                </p>
                <Link to="/use-cases/exercise-adaptation" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                  View case study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="use-case-card overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-pink-600 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Mood-Triggered Music Therapy</h3>
                <p className="text-gray-300 mb-4">
                  Ora detects subtle changes in mood and offers personalized music selections designed to either complement or shift your emotional state.
                </p>
                <Link to="/use-cases/music-therapy" className="text-pink-400 hover:text-pink-300 inline-flex items-center">
                  View case study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/use-cases" className="glass-effect px-8 py-4 rounded-lg text-white hover:bg-white/10 transition">
              View All Use Cases
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our <span className="gradient-text">Users</span> Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from people who have transformed their wellness journey with Ora.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold">JM</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Jamie M.</h4>
                  <p className="text-gray-400 text-sm">Marketing Executive</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Ora's workplace stress management has been a game-changer for me. It notices when I'm getting overwhelmed before I do and suggests quick interventions that actually work. I'm more productive and much less anxious."
              </p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold">TK</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Taylor K.</h4>
                  <p className="text-gray-400 text-sm">Fitness Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-300">
                "I used to push myself too hard with exercise and end up injured or burnt out. Ora has helped me find the perfect balance, adjusting my workouts based on my recovery status and energy levels. I'm making better progress with less pain."
              </p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-pink-600 flex items-center justify-center">
                  <span className="text-white font-bold">RL</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Riley L.</h4>
                  <p className="text-gray-400 text-sm">Graduate Student</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The music therapy feature has been incredible for my emotional regulation. Ora somehow knows exactly what music will help when I'm feeling anxious or down. It's like having a friend who always knows what you need to hear."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience <span className="gradient-text">Ora</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Begin your journey to better wellness with a personal healthcare companion that truly understands you.
          </p>
          <Link to="/try-ora" className="button-primary text-lg px-8 py-4 inline-block">
            Try Ora Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
