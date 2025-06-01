
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Headphones, User, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: 'Meditation Videos',
      description: 'Guided meditation sessions for anxiety relief, focus, and sleep. Organized by duration and difficulty level.',
      color: 'from-teal-400 to-teal-600'
    },
    {
      icon: Headphones,
      title: 'Stress-Relief Audio',
      description: 'Calming audio sessions including nature sounds, guided relaxation, and ASMR content for instant relief.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: User,
      title: 'Motivational Content',
      description: 'Inspiring videos from life coaches, therapists, and psychiatrists tailored to your unique journey.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with others on similar wellness journeys. Share experiences and find encouragement.',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Everything You Need for
            <span className="text-gradient block">Mental Wellness</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform offers diverse resources designed to support your mental health journey, whether you're a student, entrepreneur, or community member.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-all duration-300 hover:shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
