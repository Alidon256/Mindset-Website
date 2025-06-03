
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Bot, User, Brain, Sparkles, MessageCircle, Zap, Shield, Heart, Wifi, Battery, Signal, ArrowLeft, MoreVertical, Phone, Video, Star, CheckCircle, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const MindsetAI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Mindset AI assistant. I\'m here to help you with meditation guidance, stress management, and mindfulness practices. How can I support your wellness journey today?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response with typing indicator
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        'Thank you for sharing that with me. Based on what you\'ve told me, I\'d recommend starting with a simple breathing exercise. Would you like me to guide you through a 5-minute mindfulness session?',
        'I understand how you\'re feeling. Let\'s try a quick grounding technique. Can you name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste?',
        'That sounds challenging. Remember, it\'s okay to feel this way. Would you like me to suggest some coping strategies that might help you feel more balanced?',
        'I appreciate you opening up about this. Self-awareness is the first step toward positive change. Let\'s work together on building your emotional resilience.'
      ];
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms provide personalized mental wellness recommendations",
      gradient: "from-purple-500 to-pink-500",
      stats: "95% accuracy"
    },
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description: "Chat naturally about your feelings, stress, and mental health concerns",
      gradient: "from-blue-500 to-teal-500",
      stats: "24/7 support"
    },
    {
      icon: Zap,
      title: "Instant Support",
      description: "Get immediate responses and coping strategies whenever you need them",
      gradient: "from-yellow-500 to-orange-500",
      stats: "<2s response"
    },
    {
      icon: Shield,
      title: "Private & Secure",
      description: "Your conversations are completely confidential and encrypted",
      gradient: "from-green-500 to-emerald-500",
      stats: "256-bit encryption"
    }
  ];

  const benefits = [
    "Evidence-based therapeutic techniques",
    "Personalized meditation recommendations",
    "24/7 emotional support availability",
    "Progress tracking and insights",
    "Crisis intervention protocols",
    "Integration with wellness apps"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-navy-50 via-white to-teal-50 dark:from-navy-900 dark:via-black dark:to-teal-900">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Hero Section */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 left-1/4 w-72 h-72 bg-teal-200 dark:bg-teal-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
              <div className="absolute top-40 right-1/4 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
            
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-700 rounded-3xl mb-8 animate-float shadow-2xl">
              <Brain className="w-12 h-12 text-white animate-pulse" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-navy-800 dark:text-white mb-8 text-gradient animate-scale-in">
              Mindset AI Assistant
            </h1>
            <p className="text-xl md:text-2xl text-navy-600 dark:text-white/80 max-w-4xl mx-auto leading-relaxed animate-slide-up mb-8">
              Experience the future of mental wellness with our advanced AI companion. 
              Get personalized guidance, instant support, and evidence-based therapeutic techniques 
              available 24/7 in a secure, private environment.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">50K+</div>
                <div className="text-sm text-navy-600 dark:text-white/70">Active Users</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">98%</div>
                <div className="text-sm text-navy-600 dark:text-white/70">Satisfaction Rate</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">24/7</div>
                <div className="text-sm text-navy-600 dark:text-white/70">Support Available</div>
              </div>
            </div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="neomorphic rounded-3xl p-8 text-center hover-lift animate-fade-in group overflow-hidden relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${feature.gradient.replace('from-', '').replace('to-', ', ')})` }}></div>
                
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-navy-800 dark:text-white mb-3 text-xl">{feature.title}</h3>
                <p className="text-navy-600 dark:text-white/70 leading-relaxed mb-4">{feature.description}</p>
                <div className="inline-flex items-center bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>

          {/* Android App Mockup Section */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Enhanced Phone Mockup */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-teal-200 dark:bg-teal-700 rounded-full opacity-50 animate-float"></div>
                <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-purple-200 dark:bg-purple-700 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
                
                {/* Phone Frame with Enhanced Shadow */}
                <div className="w-80 h-[640px] bg-black rounded-[3rem] p-6 shadow-2xl animate-scale-in transform hover:scale-105 transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20 rounded-[3rem] animate-pulse"></div>
                  
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden flex flex-col relative z-10">
                    
                    {/* Android Status Bar */}
                    <div className="bg-gray-100 dark:bg-gray-800 px-6 py-2 flex justify-between items-center text-xs">
                      <div className="flex items-center space-x-1">
                        <span className="font-medium text-gray-800 dark:text-white">
                          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Signal className="w-3 h-3 text-gray-600 dark:text-gray-300" />
                        <Wifi className="w-3 h-3 text-gray-600 dark:text-gray-300" />
                        <Battery className="w-4 h-3 text-gray-600 dark:text-gray-300" />
                        <span className="text-gray-600 dark:text-gray-300 text-xs">85%</span>
                      </div>
                    </div>

                    {/* Enhanced App Header */}
                    <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-4 py-4 flex items-center justify-between shadow-lg">
                      <div className="flex items-center space-x-3">
                        <ArrowLeft className="w-5 h-5 text-white" />
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <Bot className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">Mindset AI</h3>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <p className="text-teal-100 text-xs">Online now</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Phone className="w-5 h-5 text-white hover:scale-110 transition-transform" />
                        <Video className="w-5 h-5 text-white hover:scale-110 transition-transform" />
                        <MoreVertical className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Enhanced Messages Area */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                      {messages.map((message, index) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className={`max-w-[75%] ${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
                            <div
                              className={`rounded-2xl px-4 py-3 shadow-lg transform transition-all duration-300 hover:scale-105 ${
                                message.sender === 'user'
                                  ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-br-md shadow-teal-200 dark:shadow-teal-800'
                                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-md neomorphic-inset'
                              }`}
                            >
                              <p className="text-sm leading-relaxed">{message.text}</p>
                              <div className="flex items-center justify-between mt-2">
                                <span className={`text-xs ${
                                  message.sender === 'user' 
                                    ? 'text-teal-100' 
                                    : 'text-gray-500 dark:text-gray-400'
                                }`}>
                                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                                {message.sender === 'user' && (
                                  <div className="flex space-x-1">
                                    <CheckCircle className="w-3 h-3 text-teal-200" />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Enhanced Typing Indicator */}
                      {isTyping && (
                        <div className="flex justify-start animate-fade-in">
                          <div className="max-w-[70%]">
                            <div className="bg-white dark:bg-gray-700 neomorphic-inset rounded-2xl rounded-bl-md px-4 py-3 shadow-lg">
                              <div className="flex items-center space-x-2">
                                <Bot className="w-4 h-4 text-teal-600" />
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"></div>
                                  <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                  <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Enhanced Input Area */}
                    <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-3 shadow-inner">
                        <input
                          value={inputText}
                          onChange={(e) => setInputText(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Type your message..."
                          className="flex-1 bg-transparent border-none outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                        />
                        <button
                          onClick={handleSendMessage}
                          disabled={!inputText.trim()}
                          className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:hover:scale-100 shadow-lg"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Information Panel */}
            <div className="space-y-8">
              <div className="neomorphic rounded-3xl p-8 animate-slide-up transform hover:scale-105 transition-all duration-300">
                <h3 className="font-bold text-navy-800 dark:text-white mb-6 flex items-center text-xl">
                  <Heart className="w-6 h-6 text-teal-600 mr-3 animate-pulse" />
                  How It Works
                </h3>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Share Your Thoughts", desc: "Express your feelings, concerns, or questions naturally" },
                    { step: 2, title: "AI Analysis", desc: "Our advanced AI understands and processes your emotional state" },
                    { step: 3, title: "Personalized Response", desc: "Receive tailored guidance and evidence-based support" }
                  ].map((item, index) => (
                    <div key={item.step} className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-navy-800 dark:text-white mb-1">{item.title}</p>
                        <p className="text-sm text-navy-600 dark:text-white/70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="neomorphic rounded-3xl p-8 animate-slide-up transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-bold text-navy-800 dark:text-white mb-6 flex items-center text-xl">
                  <Sparkles className="w-6 h-6 text-teal-600 mr-3 animate-spin" />
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-navy-600 dark:text-white/70 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mr-3 animate-pulse" style={{ animationDelay: `${index * 0.1}s` }}></div>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="neomorphic rounded-3xl p-8 animate-slide-up transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-bold text-navy-800 dark:text-white mb-4 flex items-center text-xl">
                  <Star className="w-6 h-6 text-yellow-500 mr-3 animate-pulse" />
                  User Rating
                </h3>
                <div className="flex items-center space-x-2 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${star * 0.1}s` }} />
                  ))}
                  <span className="text-navy-800 dark:text-white font-semibold">4.9/5</span>
                </div>
                <p className="text-sm text-navy-600 dark:text-white/70 italic">
                  "Life-changing app! The AI really understands my emotions and provides helpful guidance."
                </p>
                <p className="text-xs text-navy-500 dark:text-white/50 mt-2">- Sarah M., Verified User</p>
              </div>
            </div>
          </div>

          {/* Enhanced Bottom CTA */}
          <div className="text-center neomorphic rounded-3xl p-12 animate-fade-in transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-purple-600/10 animate-pulse"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-800 dark:text-white mb-6 animate-pulse">
                Ready to Transform Your Mental Wellness?
              </h2>
              <p className="text-lg text-navy-600 dark:text-white/70 mb-8 max-w-3xl mx-auto animate-slide-up">
                Join thousands of users who have found peace, clarity, and better mental health through our AI-powered platform. Start your journey to emotional wellness today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-110 glow-teal animate-bounce shadow-xl">
                  <Globe className="w-5 h-5 mr-2" />
                  Start Your Journey Today
                </Button>
                <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-110">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MindsetAI;
