
import { Button } from '@/components/ui/button';
import { Download, Bell, Calendar, Heart, Smartphone, Tablet } from 'lucide-react';

const AppShowcase = () => {
  return (
    <section id="download" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary-light/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Take Your Wellness
              <span className="text-gradient block">Journey Anywhere</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Access thousands of meditation videos, stress-relief audio sessions, and expert guidance 
              right from your phone. Your mental wellness companion, available 24/7 wherever life takes you.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg text-foreground">Personalized wellness recommendations powered by AI</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg text-foreground">Smart reminders that respect your schedule and preferences</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg text-foreground">Detailed progress tracking with beautiful insights and streaks</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-105 glow-teal hover-lift"
              >
                <Smartphone className="w-5 h-5 mr-3" />
                Download for iOS
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-105"
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
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[3rem] p-3 shadow-2xl hover-lift">
                <div className="w-full h-full bg-white dark:bg-gray-100 rounded-[2.5rem] overflow-hidden relative">
                  {/* Screen Content */}
                  <img
                    src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=600&fit=crop"
                    alt="Mindset app interface showing meditation content and user dashboard"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* App UI Overlay */}
                  <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-primary to-transparent opacity-90"></div>
                  
                  {/* Header UI */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <Heart className="w-5 h-5 text-primary" />
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
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900 text-sm">Today's Meditation</h5>
                        <p className="text-xs text-gray-600">5 min • Focus & Clarity</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div className="bg-primary h-2 rounded-full w-1/3"></div>
                    </div>
                    <p className="text-xs text-gray-500 text-center">2 of 6 sessions completed</p>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -right-8 top-32 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl animate-float glow-teal">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Streak: 7 days!</p>
                    <p className="text-xs text-muted-foreground">Keep it up!</p>
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
