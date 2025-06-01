
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Graduate Student',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b60e2920?w=150&h=150&fit=crop&crop=face',
      content: 'Mindset has been a game-changer for managing my thesis stress. The guided meditations are perfect for my busy schedule.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Entrepreneur',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'The motivational content from industry experts has helped me build resilience during challenging times in my startup journey.',
      rating: 5
    },
    {
      name: 'Elena Rodriguez',
      role: 'Community Leader',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'I love how inclusive and supportive the community is. It\'s a safe space where everyone can share their wellness journey.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Senior Executive',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'The stress-relief audio sessions have become an essential part of my daily routine. They help me maintain work-life balance.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-teal-50 to-navy-50 dark:from-navy-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800 dark:text-white">
            Loved by
            <span className="text-gradient block">Wellness Seekers</span>
          </h2>
          <p className="text-xl text-navy-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands who have transformed their mental wellness journey with Mindset
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover-lift bg-white dark:bg-navy-800 border-0 shadow-lg overflow-hidden neomorphic"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-teal-500 mb-4" />
                </div>
                
                <p className="text-navy-600 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} profile photo`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-navy-800 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-brown-600 dark:text-brown-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-teal-500 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
