
import { Users, Calendar, Star, Award, Globe, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('statistics-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      number: "5M+",
      label: "Active Users Worldwide",
      description: "Join millions finding peace",
      color: "from-teal-500 to-teal-700"
    },
    {
      icon: Calendar,
      number: "100M+",
      label: "Meditation Sessions Completed",
      description: "Collective mindfulness hours",
      color: "from-navy-500 to-navy-700"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Average App Rating",
      description: "Trusted by our community",
      color: "from-brown-500 to-brown-700"
    },
    {
      icon: Award,
      number: "98%",
      label: "User Satisfaction Rate",
      description: "Positive wellness outcomes",
      color: "from-teal-600 to-navy-600"
    },
    {
      icon: Globe,
      number: "180+",
      label: "Countries Reached",
      description: "Global wellness impact",
      color: "from-navy-600 to-black"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Report Better Sleep",
      description: "Within first 30 days",
      color: "from-brown-600 to-navy-700"
    }
  ];

  const CountingNumber = ({ target, isVisible }: { target: string, isVisible: boolean }) => {
    const [count, setCount] = useState(0);
    const numericTarget = parseInt(target.replace(/[^\d]/g, ''));
    const suffix = target.replace(/[\d]/g, '');

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = numericTarget / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
          setCount(numericTarget);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, numericTarget]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section 
      id="statistics-section"
      className="py-32 bg-gradient-to-br from-teal-50 via-white to-navy-50 dark:from-navy-900 dark:via-black dark:to-teal-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-teal-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-navy-500 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-brown-500 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-navy-800 dark:text-white">
            Transforming Lives
            <span className="block bg-gradient-to-r from-teal-600 to-navy-600 bg-clip-text text-transparent">
              Across the Globe
            </span>
          </h2>
          <p className="text-xl text-navy-600 dark:text-white/80 max-w-4xl mx-auto leading-relaxed">
            Our impact speaks for itself. See how Mindset is building a global community of wellness 
            and helping millions achieve mental clarity, peace, and happiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group text-center transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/80 dark:bg-navy-800/80 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-white/20 dark:border-navy-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500">
                {/* Animated icon */}
                <div className={`w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Counting number animation */}
                <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-navy-800 to-teal-600 dark:from-white dark:to-teal-400 bg-clip-text text-transparent">
                  <CountingNumber target={stat.number} isVisible={isVisible} />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-semibold text-navy-800 dark:text-white mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-navy-600 dark:text-white/70 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-navy-800 dark:text-white mb-2">Featured in</div>
              <div className="text-navy-600 dark:text-white/70">TechCrunch</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy-800 dark:text-white mb-2">Winner</div>
              <div className="text-navy-600 dark:text-white/70">App Store Awards</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy-800 dark:text-white mb-2">Certified by</div>
              <div className="text-navy-600 dark:text-white/70">Mental Health America</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy-800 dark:text-white mb-2">Recommended by</div>
              <div className="text-navy-600 dark:text-white/70">Healthcare Professionals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
