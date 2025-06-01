
import { Button } from '@/components/ui/button';
import { Download, Bell, Calendar, Heart, Smartphone, Tablet, Play, Users, Headphones } from 'lucide-react';

const AppShowcase = () => {
  return (
    <section id="download" className="py-24 bg-background relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary-light/10 rounded-full blur-2xl floating-element"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-primary/8 rounded-full blur-2xl floating-element"></div>
      
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
                <div className="w-12 h-12 rounded-full neomorphic flex items-center justify-center group-hover:glow-teal transition-all duration-300">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg text-foreground">Personalized wellness recommendations powered by AI</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full neomorphic flex items-center justify-center group-hover:glow-teal transition-all duration-300">
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg text-foreground">Smart reminders that respect your schedule and preferences</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full neomorphic flex items-center justify-center group-hover:glow-teal transition-all duration-300">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg text-foreground">Detailed progress tracking with beautiful insights and streaks</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-105 glow-teal hover-lift neomorphic"
              >
                <Smartphone className="w-5 h-5 mr-3" />
                Download for iOS
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-105 neomorphic"
              >
                <Tablet className="w-5 h-5 mr-3" />
                Get Android App
              </Button>
            </div>
          </div>

          {/* Enhanced Multiple Phone Mockups */}
          <div className="relative animate-scale-in">
            <div className="relative mx-auto perspective-1000">
              
              {/* Main Phone */}
              <div className="relative mx-auto w-80 h-[600px] phone-mockup">
                <div className="w-full h-full bg-white dark:bg-gray-100 rounded-[2.5rem] overflow-hidden relative">
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
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <Heart className="w-5 h-5 text-white" />
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
                  <div className="absolute bottom-6 left-6 right-6 neomorphic-inset p-4">
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
                      <div className="bg-gradient-teal h-2 rounded-full w-1/3"></div>
                    </div>
                    <p className="text-xs text-gray-500 text-center">2 of 6 sessions completed</p>
                  </div>
                </div>
              </div>

              {/* Second Phone - Audio Player */}
              <div className="absolute -left-20 top-24 w-64 h-[480px] phone-mockup transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="w-full h-full bg-white dark:bg-gray-100 rounded-[2rem] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=480&fit=crop"
                    alt="Mindset audio player interface"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-primary/30"></div>
                  
                  {/* Audio Player UI */}
                  <div className="absolute bottom-8 left-4 right-4 neomorphic-inset p-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Headphones className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900 text-sm">Ocean Waves</h5>
                        <p className="text-xs text-gray-600">Nature Sounds</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <Button size="sm" variant="ghost" className="w-8 h-8 rounded-full">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Phone - Community */}
              <div className="absolute -right-24 top-32 w-72 h-[520px] phone-mockup transform -rotate-8 hover:-rotate-3 transition-transform duration-500">
                <div className="w-full h-full bg-white dark:bg-gray-100 rounded-[2rem] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&h=520&fit=crop"
                    alt="Mindset community interface"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Community UI */}
                  <div className="absolute top-8 left-4 right-4 neomorphic-inset p-3">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-gray-900">Mindful Community</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-4 right-4 neomorphic-inset p-4">
                    <div className="text-center">
                      <h5 className="font-semibold text-gray-900 text-sm mb-2">Weekly Challenge</h5>
                      <p className="text-xs text-gray-600 mb-3">7-Day Gratitude Practice</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-teal h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fourth Phone - Progress Tracking */}
              <div className="absolute -left-32 bottom-16 w-56 h-[400px] phone-mockup transform rotate-[20deg] hover:rotate-[15deg] transition-transform duration-500">
                <div className="w-full h-full bg-white dark:bg-gray-100 rounded-[1.8rem] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=250&h=400&fit=crop"
                    alt="Mindset progress tracking interface"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent"></div>
                  
                  {/* Progress UI */}
                  <div className="absolute bottom-6 left-3 right-3 neomorphic-inset p-3">
                    <div className="text-center">
                      <h5 className="font-semibold text-gray-900 text-xs mb-2">Your Progress</h5>
                      <div className="flex justify-center space-x-2 mb-2">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">15</div>
                          <div className="text-xs text-gray-600">Days</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">42</div>
                          <div className="text-xs text-gray-600">Sessions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notifications and elements */}
              <div className="absolute -right-12 top-16 neomorphic p-3 animate-float pulse-glow">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Heart className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">Streak: 7 days!</p>
                    <p className="text-xs text-muted-foreground">Amazing!</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-16 bottom-32 neomorphic p-3 animate-float pulse-glow" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Bell className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">Time to breathe</p>
                    <p className="text-xs text-muted-foreground">2 min session</p>
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
