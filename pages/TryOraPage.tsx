import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TryOraPage: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [message, setMessage] = useState('');

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real implementation, this would send the message to the backend
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Try Ora</span> Now
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Experience how Ora understands you and provides personalized support for your wellness journey.
              </p>
              <p className="text-gray-300 mb-8">
                This interactive demo gives you a glimpse of how Ora works as your personal healthcare companion. Speak or type to start a conversation and see how Ora responds to your unique needs.
              </p>
              <div className="glass-effect p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">How to use this demo:</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">1</span>
                    </span>
                    <span>Click the microphone button or type in the text field to communicate with Ora</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">2</span>
                    </span>
                    <span>Share how you're feeling or ask about a wellness topic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">3</span>
                    </span>
                    <span>Experience Ora's personalized responses and recommendations</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-400 text-sm">
                Note: This is a limited demo. The full version of Ora includes continuous monitoring, data analysis, and personalized interventions across all wellness dimensions.
              </p>
            </div>
            
            <div className="chat-container p-6 rounded-2xl h-[600px] flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">O</span>
                  </div>
                  <span className="ml-3 text-white font-medium">Ora</span>
                </div>
                <div className="flex space-x-2">
                  <button className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                  <button className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-4 mb-6">
                <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none max-w-xs">
                  <p className="text-white">Hello! I'm Ora, your personal healthcare companion. How are you feeling today?</p>
                </div>
                
                <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none max-w-sm">
                  <p className="text-white">I notice it's morning in your time zone. Would you like some suggestions for starting your day with positive energy?</p>
                </div>
                
                <div className="bg-purple-600 p-3 rounded-lg rounded-tr-none max-w-xs ml-auto">
                  <p className="text-white">I'm feeling a bit tired and stressed about my upcoming presentation.</p>
                </div>
                
                <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none max-w-sm">
                  <p className="text-white">I understand presentations can be stressful. Based on your patterns, a short breathing exercise followed by your favorite energizing playlist has helped you in similar situations before. Would you like me to guide you through that now?</p>
                </div>
              </div>
              
              <form onSubmit={handleSendMessage} className="relative mt-auto">
                <div className="flex items-center">
                  <button 
                    type="button"
                    onClick={toggleRecording}
                    className={`h-10 w-10 rounded-full flex items-center justify-center mr-2 ${isRecording ? 'bg-red-600' : 'bg-gray-800'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                  <input 
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-gray-800 text-white rounded-full py-3 px-4 pr-12" 
                    placeholder="Type your message..." 
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Full <span className="gradient-text">Ora Experience</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The complete Ora platform offers comprehensive wellness support beyond this demo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Continuous Monitoring</h3>
              <p className="text-gray-300">
                Ora seamlessly collects data from various sources to build a comprehensive picture of your well-being without requiring constant manual input or interaction.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-cyan-500 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Proactive Interventions</h3>
              <p className="text-gray-300">
                Instead of waiting for you to ask for help, Ora identifies potential issues and provides timely, contextually relevant support exactly when you need it most.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-pink-600 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Community Support</h3>
              <p className="text-gray-300">
                Access an anonymized peer-support network that connects you with others facing similar challenges, providing human connection while maintaining privacy.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Personalized Baselines</h3>
              <p className="text-gray-300">
                Ora establishes your unique wellness baselines and tracks progress against personalized goals rather than generic benchmarks or one-size-fits-all recommendations.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Comprehensive Analytics</h3>
              <p className="text-gray-300">
                Gain insights into your wellness patterns with detailed analytics that reveal connections between different aspects of your life and help you make informed decisions.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Customizable Experience</h3>
              <p className="text-gray-300">
                Tailor Ora to your preferences with adjustable privacy settings, notification preferences, and intervention styles that match your unique needs and communication style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Simple <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-2 text-white">Basic</h3>
              <p className="text-gray-400 mb-6">Essential wellness support</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$9.99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Daily wellness check-ins</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Basic mood tracking</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Guided breathing exercises</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Weekly wellness summary</span>
                </li>
              </ul>
              <button className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition">
                Start Free Trial
              </button>
            </div>

            <div className="glass-effect p-8 rounded-xl border-2 border-purple-600 transform scale-105 z-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 px-4 py-1 rounded-full">
                <span className="text-white text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">Premium</h3>
              <p className="text-gray-400 mb-6">Comprehensive wellness companion</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$19.99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Proactive monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Personalized interventions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Community support access</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Detailed wellness analytics</span>
                </li>
              </ul>
              <button className="w-full py-3 px-4 button-primary rounded-lg transition">
                Start Free Trial
              </button>
            </div>

            <div className="glass-effect p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-2 text-white">Enterprise</h3>
              <p className="text-gray-400 mb-6">For teams and organizations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Everything in Premium</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Team wellness insights</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Custom integration options</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Dedicated support team</span>
                </li>
              </ul>
              <button className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-white">How does Ora protect my privacy?</h3>
              <p className="text-gray-300">
                Ora takes privacy seriously. All your data is encrypted, and you have complete control over what information is collected and how it's used. You can adjust privacy settings at any time, and we never share your personal data with third parties without your explicit consent.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-white">What devices is Ora compatible with?</h3>
              <p className="text-gray-300">
                Ora works on iOS and Android smartphones, as well as web browsers. It can also integrate with popular wearable devices and health apps to provide a more comprehensive wellness monitoring experience without requiring additional manual input.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-white">How long does it take for Ora to become personalized?</h3>
              <p className="text-gray-300">
                Ora begins learning from your first interaction, but you'll notice increasingly personalized recommendations after about two weeks of regular use. The more you interact with Ora, the more accurately it can support your unique wellness needs.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2 text-white">Can I use Ora alongside my existing wellness apps?</h3>
              <p className="text-gray-300">
                Absolutely! Ora is designed to complement your existing wellness tools. It can integrate with many popular fitness, nutrition, and meditation apps to create a unified wellness experience without requiring you to abandon tools you already enjoy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TryOraPage;
