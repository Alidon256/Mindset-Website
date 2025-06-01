
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
    <section className="py-24 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Loved by
            <span className="text-gradient block">Wellness Seekers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands who have transformed their mental wellness journey with Mindset
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover-lift bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/60 mb-4" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} profile photo`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
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
