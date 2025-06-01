
import { Button } from '@/components/ui/button';
import { Download, Bell, Calendar, Heart } from 'lucide-react';

const AppShowcase = () => {
  return (
    <section id="download" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Take Mindset
              <span className="text-gradient block">Everywhere You Go</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Access thousands of meditation videos, stress-relief audio sessions, and motivational content right from your phone. Your wellness journey continues wherever life takes you.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">Personalized wellness recommendations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bell className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">Daily mindfulness reminders</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">Progress tracking and insights</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </Button>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative animate-scale-in">
            <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-white dark:bg-gray-100 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=600&fit=crop"
                  alt="Mindset app interface showing meditation content"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Good Morning!</h4>
                      <p className="text-sm text-gray-600">Ready for your daily meditation?</p>
                    </div>
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
