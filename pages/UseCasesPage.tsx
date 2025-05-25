import React from 'react';
import { Link } from 'react-router-dom';

const UseCasesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Use Cases</span> from our official collection
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn how Ora handles real-world wellness challenges through personalized, proactive support.
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <button className="px-6 py-2 rounded-full bg-gray-800 text-white font-medium hover:bg-purple-600 transition">
              Featured
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
              Sleep
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-800 text-white font-medium hover:bg-purple-600 transition">
              Nutrition
            </button>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <div id="mental" className="use-case-card overflow-hidden">
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
                <p className="text-gray-300 mb-6">
                  By analyzing patterns in heart rate, communication frequency, and self-reported mood, Ora identifies when stress is building and offers personalized coping strategies before it impacts performance.
                </p>
                <div className="aspect-video bg-gray-800 rounded-lg mb-4"></div>
                <Link to="/use-cases/workplace-stress" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                  View detailed case study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Use Case 2 */}
            <div id="physical" className="use-case-card overflow-hidden">
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
                <p className="text-gray-300 mb-6">
                  Instead of rigid workout plans, Ora suggests activities that match your current state, adjusting intensity and duration to maximize benefits while preventing injury or burnout.
                </p>
                <div className="aspect-video bg-gray-800 rounded-lg mb-4"></div>
                <Link to="/use-cases/exercise-adaptation" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                  View detailed case study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Use Case 3 */}
            <div id="emotional" className="use-case-card overflow-hidden">
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
                <p className="text-gray-300 mb-6">
                  By analyzing patterns between music preferences and emotional responses, Ora creates a powerful tool for emotional regulation that becomes increasingly effective over time.
                </p>
                <div className="aspect-video bg-gray-800 rounded-lg mb-4"></div>
                <Link to="/use-cases/music-therapy" className="text-pink-400 hover:text-pink-300 inline-flex items-center">
                  View detailed case study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Use Case 4 */}
            <div className="use-case-card overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Sleep Quality Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Ora analyzes your sleep patterns and environmental factors to create personalized recommendations for improving sleep quality and consistency.
                </p>
                <p className="text-gray-300 mb-6">
                  By identifying connections between daily activities, evening routines, and sleep outcomes, Ora helps you develop habits that lead to more restorative rest.
                </p>
                <div className="aspect-video bg-gray-800 rounded-lg mb-4"></div>
                <Link to="/use-cases/sleep-optimization" className="text-amber-400 hover:text-amber-300 inline-flex items-center">
                  View detailed case study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Use Case 5 */}
            <div className="use-case-card overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Nutrition Habit Formation</h3>
                <p className="text-gray-300 mb-4">
                  Ora helps you develop sustainable nutrition habits by providing contextually relevant suggestions and gentle reminders based on your personal goals and preferences.
                </p>
                <p className="text-gray-300 mb-6">
                  Rather than rigid meal plans, Ora focuses on gradual habit formation, helping you make better choices at decision points throughout your day.
                </p>
                <div className="aspect-video bg-gray-800 rounded-lg mb-4"></div>
                <Link to="/use-cases/nutrition-habits" className="text-green-400 hover:text-green-300 inline-flex items-center">
                  View detailed case study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Use Case 6 */}
            <div className="use-case-card overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Social Connection Support</h3>
                <p className="text-gray-300 mb-4">
                  Ora identifies when you might benefit from deeper social connection and facilitates meaningful interactions through its community features and personalized suggestions.
                </p>
                <p className="text-gray-300 mb-6">
                  By recognizing patterns of isolation or social withdrawal, Ora provides gentle nudges toward connection while respecting your social preferences and energy levels.
                </p>
                <div className="aspect-video bg-gray-800 rounded-lg mb-4"></div>
                <Link to="/use-cases/social-connection" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                  View detailed case study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Real <span className="gradient-text">Results</span> from Real People
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from users who have transformed their wellness journey with Ora.
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
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience <span className="gradient-text">Ora</span> for Yourself?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of users who are discovering a new approach to holistic wellness with Ora as their personal healthcare companion.
          </p>
          <Link to="/try-ora" className="button-primary text-lg px-8 py-4 inline-block">
            Try Ora Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UseCasesPage;
