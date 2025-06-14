
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Headphones, User, Users, Brain, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: 'Guided Meditation',
      description: 'Expert-led meditation sessions for anxiety relief, better focus, and restful sleep. Choose from 5-minute quick sessions to hour-long deep practices.',
      color: 'from-teal-400 to-teal-600',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      icon: Headphones,
      title: 'Stress-Relief Audio',
      description: 'Immersive soundscapes including nature sounds, guided relaxation, and ASMR content designed to melt away stress and tension.',
      color: 'from-navy-400 to-navy-600',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop'
    },
    {
      icon: User,
      title: 'Expert Content',
      description: 'Motivational videos and guidance from certified life coaches, therapists, and psychiatrists tailored to your personal growth journey.',
      color: 'from-brown-400 to-brown-600',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with a supportive community of wellness seekers. Share experiences, get encouragement, and grow together.',
      color: 'from-teal-500 to-teal-700',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
    },
    {
      icon: Brain,
      title: 'Personalized Journey',
      description: 'AI-powered recommendations based on your goals, preferences, and progress. Your wellness path, uniquely yours.',
      color: 'from-navy-500 to-navy-700',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop'
    },
    {
      icon: Star,
      title: 'Progress Tracking',
      description: 'Monitor your wellness journey with detailed insights, streak counters, and milestone celebrations to keep you motivated.',
      color: 'from-brown-500 to-brown-700',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-teal-50 via-white to-navy-50 dark:from-navy-900 dark:via-navy-800 dark:to-teal-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800 dark:text-white">
            Everything You Need for
            <span className="text-gradient block">Mental Wellness</span>
          </h2>
          <p className="text-xl text-navy-600 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform offers scientifically-backed resources designed to support your mental health journey, 
            whether you're a student managing stress, an entrepreneur building resilience, or anyone seeking inner peace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover-lift transition-all duration-500 bg-white dark:bg-navy-800 border-0 shadow-xl hover:shadow-2xl overflow-hidden neomorphic"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={`${feature.title} illustration`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-teal`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-navy-800 dark:text-white group-hover:text-teal-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-navy-600 dark:text-white/70 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
