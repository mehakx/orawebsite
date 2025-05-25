import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How <span className="gradient-text">Ora</span> Works
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Ora continuously monitors and supports your mental and physical health through advanced AI and personalized insights.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                The <span className="gradient-text">Holistic Approach</span>
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                Ora takes a fundamentally different approach to wellness by continuously monitoring multiple dimensions of your health without requiring constant input. Unlike traditional wellness apps that wait for you to log information, Ora proactively gathers data and provides support exactly when you need it.
              </p>
              <p className="text-gray-300 text-lg mb-4">
                By combining the roles of therapist, fitness coach, and personal coach into one intelligent system, Ora helps you become one step closer to your ideal self through personalized guidance and timely interventions.
              </p>
              <p className="text-gray-300 text-lg">
                The system continuously learns from your feedback and adapts its guidance to improve efficacy over time, creating an increasingly personalized wellness experience.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-xl">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-white text-lg">Watch the Ora overview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="gradient-text">Core Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ora leverages advanced AI and machine learning to create a truly personalized wellness experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-white">Data Collection & Analysis</h3>
              <p className="text-gray-300 mb-4">
                Ora proactively gathers and analyzes multiple data streams including mood indicators, sleep patterns, nutrition intake, physical activity, and stress markers. This comprehensive data collection happens seamlessly in the background, requiring minimal input from you.
              </p>
              <p className="text-gray-300">
                The system uses a combination of device sensors, integration with health apps, and occasional brief check-ins to build a complete picture of your well-being without becoming intrusive or burdensome.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-white">Wellness Component Analysis</h3>
              <p className="text-gray-300 mb-4">
                Once data is collected, Ora automatically breaks down your overall well-being into mental, emotional, and physical components. This granular approach allows for more targeted and effective interventions than treating wellness as a single metric.
              </p>
              <p className="text-gray-300">
                Each component is evaluated against your personalized baselines and goals, taking into account your unique patterns and preferences rather than generic benchmarks.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-white">Contextual Recommendations</h3>
              <p className="text-gray-300 mb-4">
                Ora generates timely, context-aware recommendations and micro-nudges based on your current state and environment. These interventions are designed to be minimally disruptive while providing maximum benefit.
              </p>
              <p className="text-gray-300">
                Examples include breathing exercises during detected periods of stress, hydration reminders after physical activity, or sleep preparation guidance when evening routines are disrupted.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-white">Continuous Learning</h3>
              <p className="text-gray-300 mb-4">
                Ora employs sophisticated machine learning algorithms that continuously adapt based on your feedback and observed patterns. This means the system becomes increasingly accurate and helpful over time.
              </p>
              <p className="text-gray-300">
                The AI learns which interventions are most effective for you in specific contexts, creating a virtuous cycle of improvement that makes Ora more valuable the longer you use it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Your <span className="gradient-text">Wellness Journey</span> with Ora
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From onboarding to daily support, here's how Ora accompanies you on your path to better well-being.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600/30"></div>

            {/* Timeline items */}
            <div className="relative z-10">
              {/* Item 1 */}
              <div className="mb-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Personalized Onboarding</h3>
                  <p className="text-gray-300">
                    Your journey begins with a brief but comprehensive onboarding process that helps Ora understand your wellness goals, current state, and preferences. This initial data provides the foundation for your personalized experience.
                  </p>
                </div>
                <div className="md:w-12 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center border-4 border-black">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>

              {/* Item 2 */}
              <div className="mb-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="md:w-12 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center border-4 border-black">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Passive Monitoring</h3>
                  <p className="text-gray-300">
                    Ora begins quietly monitoring various aspects of your well-being through connected devices and occasional check-ins. This happens in the background without requiring constant attention or manual logging.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="mb-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Pattern Recognition</h3>
                  <p className="text-gray-300">
                    As data accumulates, Ora identifies patterns in your wellness metrics, lifestyle habits, and emotional responses. These patterns reveal connections between different aspects of your life that might not be obvious otherwise.
                  </p>
                </div>
                <div className="md:w-12 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center border-4 border-black">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>

              {/* Item 4 */}
              <div className="mb-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="md:w-12 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center border-4 border-black">
                    <span className="text-white font-bold">4</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Proactive Interventions</h3>
                  <p className="text-gray-300">
                    Based on identified patterns and real-time data, Ora provides timely interventions exactly when you need them. These range from gentle reminders to structured guidance for specific wellness challenges.
                  </p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Continuous Improvement</h3>
                  <p className="text-gray-300">
                    As you interact with Ora, the system learns from your feedback and observed outcomes, continuously refining its understanding of your needs and preferences to provide increasingly effective support.
                  </p>
                </div>
                <div className="md:w-12 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center border-4 border-black">
                    <span className="text-white font-bold">5</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-effect p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-purple-600 mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <p className="text-white text-sm">
                    "The breathing exercise Ora suggested during my work presentation anxiety was exactly what I needed."
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-cyan-500 mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">B</span>
                  </div>
                  <p className="text-white text-sm">
                    "I've been struggling with sleep for years. Ora's personalized evening routine has made a huge difference."
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-pink-600 mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">C</span>
                  </div>
                  <p className="text-white text-sm">
                    "The community support feature helped me realize I'm not alone in my wellness journey."
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-amber-500 mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">D</span>
                  </div>
                  <p className="text-white text-sm">
                    "Ora noticed my stress patterns before I did and suggested helpful coping strategies."
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="gradient-text">Community</span> Support
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                When deeper social support is needed, Ora offers an anonymized peer-support feed and community check-ins. This feature connects you with others who have faced similar challenges while maintaining your privacy.
              </p>
              <p className="text-gray-300 text-lg mb-4">
                The community aspect of Ora provides validation, shared experiences, and collective wisdom that complements the AI-driven support. This combination of technological and human connection creates a comprehensive support system.
              </p>
              <p className="text-gray-300 text-lg">
                All community interactions are carefully moderated and anonymized to ensure a safe, supportive environment where you can both receive and provide help.
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

export default HowItWorksPage;
