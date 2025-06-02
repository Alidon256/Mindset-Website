
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is Mindset and how does it work?",
      answer: "Mindset is a comprehensive wellness app that combines guided meditation, stress-relief audio, and expert content to support your mental health journey. Our scientifically-backed approach helps you build resilience, reduce anxiety, and achieve inner peace through personalized daily practices."
    },
    {
      question: "Is there a free version available?",
      answer: "Yes! We offer a free tier that includes basic meditation sessions, limited audio content, and access to our community features. For full access to our premium content library, personalized recommendations, and advanced tracking features, we offer affordable subscription plans."
    },
    {
      question: "How long are the meditation sessions?",
      answer: "Our meditation sessions range from quick 3-minute breathing exercises to comprehensive 60-minute deep meditation practices. Most users find our 10-15 minute sessions perfect for daily practice, while beginners can start with our 5-minute guided sessions."
    },
    {
      question: "Can I use Mindset offline?",
      answer: "Absolutely! Premium subscribers can download sessions for offline use. This means you can access your favorite meditations, sleep stories, and relaxation audio even without an internet connection - perfect for travel or areas with poor connectivity."
    },
    {
      question: "Is my data and privacy protected?",
      answer: "Your privacy is our top priority. We use industry-standard encryption to protect your personal information and never share your data with third parties without your explicit consent. All meditation progress and personal insights remain completely private and secure."
    },
    {
      question: "What devices are supported?",
      answer: "Mindset is available on iOS, Android, and as a web application. Your progress syncs seamlessly across all devices, so you can start a session on your phone and continue on your tablet or computer whenever convenient."
    },
    {
      question: "Do you offer content for specific needs?",
      answer: "Yes! We have specialized programs for anxiety management, better sleep, focus enhancement, stress relief, and personal growth. Our content is designed for students, entrepreneurs, parents, and anyone looking to improve their mental wellness."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. You can cancel your subscription at any time through your account settings. There are no cancellation fees, and you'll continue to have access to premium features until the end of your current billing period."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-teal-50/30 to-navy-50/20 dark:from-navy-900 dark:via-navy-800 dark:to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-teal-500/20 backdrop-blur-sm flex items-center justify-center animate-float glow-teal">
              <HelpCircle className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800 dark:text-white">
            Frequently Asked
            <span className="text-gradient block">Questions</span>
          </h2>
          <p className="text-xl text-navy-600 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about Mindset and how our wellness platform can support your mental health journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 neomorphic overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-teal-50/50 dark:hover:bg-teal-900/20 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-navy-800 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-6 h-6 text-teal-600 dark:text-teal-400 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-teal-600 dark:text-teal-400 transition-transform duration-200" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 text-navy-600 dark:text-white/70 leading-relaxed border-t border-teal-100/50 dark:border-teal-800/30 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-navy-600 dark:text-white/70 mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Contact Support
            </button>
            <button className="px-8 py-3 border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Browse Help Center
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
