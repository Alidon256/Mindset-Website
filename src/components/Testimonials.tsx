
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Graduate Student',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b60e2920?w=150&h=150&fit=crop&crop=face',
      content: 'Mindset completely transformed my approach to stress management during my PhD. The guided meditations helped me maintain focus during my most challenging research periods, and the sleep stories became my nightly ritual.',
      rating: 5,
      highlight: 'PhD Student Success'
    },
    {
      name: 'Marcus Johnson',
      role: 'Tech Entrepreneur',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'As a startup founder, I was burning out fast. Mindset\'s expert content and daily practices helped me build the resilience I needed. Now I start every day with a 10-minute session and I\'ve never felt more centered.',
      rating: 5,
      highlight: 'Startup Founder'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Working Mother',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Balancing work and family was overwhelming until I found Mindset. The community support and quick 5-minute breathing exercises fit perfectly into my busy schedule. My family has noticed how much calmer and present I am.',
      rating: 5,
      highlight: 'Work-Life Balance'
    },
    {
      name: 'David Kim',
      role: 'Senior Executive',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'The stress-relief audio sessions are incredible. I use them between meetings and before important presentations. Mindset has become an essential tool for maintaining my mental clarity in high-pressure situations.',
      rating: 5,
      highlight: 'Executive Leadership'
    },
    {
      name: 'Amara Patel',
      role: 'College Student',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      content: 'Anxiety used to control my life, especially during exam periods. Mindset\'s anxiety-specific programs and the supportive community helped me develop coping strategies that actually work. I feel like myself again.',
      rating: 5,
      highlight: 'Anxiety Management'
    },
    {
      name: 'James Wright',
      role: 'Healthcare Worker',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      content: 'Working in healthcare during challenging times took a toll on my mental health. Mindset\'s trauma-informed content and expert guidance helped me process difficult emotions and find peace after long shifts.',
      rating: 5,
      highlight: 'Healthcare Hero'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const visibleTestimonials = testimonials.slice(currentSlide * 3, currentSlide * 3 + 3);

  return (
    <section 
      id="testimonials-section"
      className="py-32 bg-gradient-to-br from-navy-50 via-white to-teal-50 dark:from-navy-900 dark:via-black dark:to-teal-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-navy-800 dark:text-white">
            Real Stories,
            <span className="block bg-gradient-to-r from-teal-600 to-navy-600 bg-clip-text text-transparent">
              Real Transformations
            </span>
          </h2>
          <p className="text-xl text-navy-600 dark:text-white/80 max-w-4xl mx-auto leading-relaxed">
            Discover how Mindset has helped thousands of people from all walks of life achieve 
            mental clarity, overcome challenges, and build lasting wellness habits.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((testimonial, index) => (
            <Card 
              key={`${currentSlide}-${index}`}
              className={`group bg-white dark:bg-navy-800 border-0 shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-700 transform ${
                isVisible ? 'animate-fade-in hover:scale-105' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-10 h-10 text-teal-500" />
                  <span className="text-sm font-semibold text-teal-600 bg-teal-50 dark:bg-teal-900/30 px-3 py-1 rounded-full">
                    {testimonial.highlight}
                  </span>
                </div>
                
                {/* Testimonial Content */}
                <p className="text-navy-600 dark:text-white/80 mb-8 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                
                {/* User Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} profile photo`}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-teal-100 dark:ring-teal-800"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-navy-800 dark:text-white">{testimonial.name}</h4>
                    <p className="text-brown-600 dark:text-brown-400">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-teal-500 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mb-12">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-teal-600 scale-125' 
                  : 'bg-navy-300 dark:bg-navy-600 hover:bg-teal-400'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-navy-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their mental wellness with Mindset. 
            Your story of transformation starts today.
          </p>
          <button className="bg-white text-teal-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-all duration-300 hover:scale-105 shadow-lg">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
