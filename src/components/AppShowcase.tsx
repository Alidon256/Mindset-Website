
import { Button } from '@/components/ui/button';
import { Download, Bell, Calendar, Heart, Smartphone, Tablet } from 'lucide-react';

const AppShowcase = () => {
  return (
    <section id="download" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-navy-500/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-navy-800 dark:text-white">
              Take Your Wellness
              <span className="text-gradient block">Journey Anywhere</span>
            </h2>
            
            <p className="text-xl text-navy-600 dark:text-gray-300 mb-10 leading-relaxed">
              Access thousands of meditation videos, stress-relief audio sessions, and expert guidance 
              right from your phone. Your mental wellness companion, available 24/7 wherever life takes you.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/30 transition-colors duration-300 neomorphic">
                  <Heart className="w-6 h-6 text-teal-600" />
                </div>
                <span className="text-lg text-navy-700 dark:text-gray-300">Personalized wellness recommendations powered by AI</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/30 transition-colors duration-300 neomorphic">
                  <Bell className="w-6 h-6 text-teal-600" />
                </div>
                <span className="text-lg text-navy-700 dark:text-gray-300">Smart reminders that respect your schedule and preferences</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/30 transition-colors duration-300 neomorphic">
                  <Calendar className="w-6 h-6 text-teal-600" />
                </div>
                <span className="text-lg text-navy-700 dark:text-gray-300">Detailed progress tracking with beautiful insights and streaks</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-105 glow-teal hover-lift"
              >
                <Smartphone className="w-5 h-5 mr-3" />
                Download for iOS
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-105"
              >
                <Tablet className="w-5 h-5 mr-3" />
                Get Android App
              </Button>
            </div>
          </div>

          {/* Enhanced App Mockup */}
          <div className="relative animate-scale-in">
            <div className="relative mx-auto w-80 h-[600px] perspective-1000">
              {/* Phone Frame */}
              <div className="relative w-full h-full bg-gradient-to-br from-navy-800 via-navy-900 to-black rounded-[3rem] p-3 shadow-2xl hover-lift neomorphic">
                <div className="w-full h-full bg-white dark:bg-gray-100 rounded-[2.5rem] overflow-hidden relative">
                  {/* Screen Content */}
                  <img
                    src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=600&fit=crop"
                    alt="Mindset app interface showing meditation content and user dashboard"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* App UI Overlay */}
                  <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-teal-600 to-transparent opacity-90"></div>
                  
                  {/* Header UI */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <Heart className="w-5 h-5 text-teal-600" />
                      </div>
                      <div className="text-white">
                        <h4 className="font-semibold text-sm">Good Morning!</h4>
                        <p className="text-xs opacity-90">Ready for wellness?</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Bell className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Bottom UI */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl neomorphic-inset">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-navy-800 text-sm">Today's Meditation</h5>
                        <p className="text-xs text-brown-600">5 min • Focus & Clarity</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div className="bg-teal-500 h-2 rounded-full w-1/3"></div>
                    </div>
                    <p className="text-xs text-navy-600 text-center">2 of 6 sessions completed</p>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -right-8 top-32 bg-white dark:bg-navy-800 rounded-2xl p-4 shadow-xl animate-float glow-teal neomorphic">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-800 dark:text-white">Streak: 7 days!</p>
                    <p className="text-xs text-brown-600 dark:text-brown-400">Keep it up!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
