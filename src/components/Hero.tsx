
import { Button } from '@/components/ui/button';
import { Heart, Download, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with multiple layers */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&h=1080&fit=crop"
          alt="Peaceful sunlight filtering through lush green forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-teal-800/40 to-teal-600/50"></div>
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-light/15 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center animate-float glow-teal">
              <Heart className="w-10 h-10 text-primary-light" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Transform Your
            <span className="block text-gradient-light animate-pulse"> Mindset Today</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-100">
            Discover inner peace with our comprehensive wellness app featuring guided meditation, 
            stress-relief audio sessions, and expert motivational content designed for students, 
            entrepreneurs, and wellness seekers everywhere.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-110 glow-teal hover-lift shadow-2xl"
            >
              <Download className="w-6 h-6 mr-3" />
              Download App Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/80 text-white hover:bg-white hover:text-primary px-10 py-6 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-110 backdrop-blur-sm"
            >
              <Play className="w-6 h-6 mr-3" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold text-primary-light">100K+</div>
              <div className="text-sm text-gray-300">Active Users</div>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl font-bold text-primary-light">500+</div>
              <div className="text-sm text-gray-300">Meditation Sessions</div>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: '0.6s'}}>
              <div className="text-3xl font-bold text-primary-light">98%</div>
              <div className="text-sm text-gray-300">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
