
import { Users, Calendar, Star, Award, Globe, TrendingUp } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      number: "2M+",
      label: "Active Users Worldwide",
      description: "Join millions finding peace"
    },
    {
      icon: Calendar,
      number: "50M+",
      label: "Meditation Sessions Completed",
      description: "Collective mindfulness hours"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Average App Rating",
      description: "Trusted by our community"
    },
    {
      icon: Award,
      number: "95%",
      label: "User Satisfaction Rate",
      description: "Positive wellness outcomes"
    },
    {
      icon: Globe,
      number: "150+",
      label: "Countries Reached",
      description: "Global wellness impact"
    },
    {
      icon: TrendingUp,
      number: "89%",
      label: "Report Better Sleep",
      description: "Within first 30 days"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-teal-600 via-teal-500 to-navy-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Trusted by Millions
            <span className="block text-white/90">Worldwide</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our impact speaks for itself. See how Mindset is transforming lives and building a global community of wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-scale-in hover-lift"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 neomorphic hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-white/70 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
