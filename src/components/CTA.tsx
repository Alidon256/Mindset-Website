
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-teal-600 via-teal-500 to-navy-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Start Your Wellness
            <span className="block">Journey Today</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join over 100,000 users who have transformed their mental health with Mindset. 
            Download now and get your first week of premium content free.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-teal-700 hover:bg-gray-100 px-10 py-6 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-110 shadow-2xl"
            >
              <Download className="w-6 h-6 mr-3" />
              Download App Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-110"
            >
              Learn More
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-sm text-white/80">Guided Meditation Programs</div>
            </div>
            <div className="w-px h-16 bg-white/30 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-sm text-white/80">Expert Coaches</div>
            </div>
            <div className="w-px h-16 bg-white/30 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">4.9</div>
              <div className="text-sm text-white/80">App Store Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
