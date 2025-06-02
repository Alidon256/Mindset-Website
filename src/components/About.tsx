
import { Heart, Shield, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Every feature is designed with deep empathy for mental health struggles and the journey to wellness."
    },
    {
      icon: Shield,
      title: "Science-Backed",
      description: "Our content is developed in partnership with licensed therapists, neuroscientists, and meditation experts."
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "We believe mental wellness should be accessible to everyone, regardless of background or experience level."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Our methods are validated through clinical studies and thousands of user success stories."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-white via-teal-50/30 to-navy-50/20 dark:from-black dark:via-navy-900 dark:to-teal-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-navy-800 dark:text-white">
              Our Mission is
              <span className="block bg-gradient-to-r from-teal-600 to-navy-600 bg-clip-text text-transparent">
                Your Wellness
              </span>
            </h2>
            <p className="text-xl text-navy-600 dark:text-white/80 max-w-4xl mx-auto leading-relaxed">
              We believe that mental wellness should be as accessible as physical fitness. 
              That's why we've created a comprehensive platform that makes mindfulness, 
              meditation, and mental health resources available to everyone, everywhere.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-navy-800 dark:text-white mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-navy-600 dark:text-white/80 leading-relaxed">
                <p>
                  Founded in 2020 by a team of mental health advocates, technologists, and wellness experts, 
                  Mindset was born from a simple observation: while millions of people struggle with stress, 
                  anxiety, and mental health challenges, quality resources remained fragmented and inaccessible.
                </p>
                <p>
                  We set out to change that by creating a unified platform that combines the best of 
                  ancient wisdom with modern technology. Our team includes licensed therapists, 
                  meditation teachers with decades of experience, and developers who understand 
                  the nuances of creating meaningful digital experiences.
                </p>
                <p>
                  Today, we're proud to serve millions of users worldwide, helping them build resilience, 
                  find peace, and create lasting positive change in their lives.
                </p>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Team collaboration and wellness focus"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-center text-navy-800 dark:text-white mb-16">
              What Drives Us
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="text-center group animate-fade-in hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-500 to-navy-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-navy-800 dark:text-white mb-4">
                    {value.title}
                  </h4>
                  <p className="text-navy-600 dark:text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Stats */}
          <div className="bg-gradient-to-r from-teal-600 to-navy-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-8">Meet Our Expert Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-teal-100">Licensed Therapists</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-teal-100">Meditation Masters</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-teal-100">Wellness Experts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
