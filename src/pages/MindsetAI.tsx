
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Bot, User, Brain, Sparkles, MessageCircle, Zap, Shield, Heart, Wifi, Battery, Signal, ArrowLeft, MoreVertical, Phone, Video } from 'lucide-react';
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
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for sharing that with me. Based on what you\'ve told me, I\'d recommend starting with a simple breathing exercise. Would you like me to guide you through a 5-minute mindfulness session?',
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
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description: "Chat naturally about your feelings, stress, and mental health concerns",
      gradient: "from-blue-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Instant Support",
      description: "Get immediate responses and coping strategies whenever you need them",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Private & Secure",
      description: "Your conversations are completely confidential and encrypted",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-navy-50 via-white to-teal-50 dark:from-navy-900 dark:via-black dark:to-teal-900">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-700 rounded-3xl mb-6 animate-float">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-navy-800 dark:text-white mb-6 text-gradient animate-scale-in">
              Mindset AI Assistant
            </h1>
            <p className="text-xl text-navy-600 dark:text-white/80 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Experience the future of mental wellness with our advanced AI companion. 
              Get personalized guidance, instant support, and evidence-based therapeutic techniques 
              available 24/7 in a secure, private environment.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="neomorphic rounded-2xl p-6 text-center hover-lift animate-fade-in transform transition-all duration-500 hover:rotate-1"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-navy-800 dark:text-white mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-navy-600 dark:text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Android App Mockup */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Android Phone Mockup */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-80 h-[640px] bg-black rounded-[3rem] p-6 shadow-2xl animate-scale-in transform hover:scale-105 transition-all duration-500">
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden flex flex-col">
                    
                    {/* Android Status Bar */}
                    <div className="bg-gray-100 dark:bg-gray-800 px-6 py-2 flex justify-between items-center text-xs animate-fade-in">
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

                    {/* App Header */}
                    <div className="bg-teal-600 px-4 py-3 flex items-center justify-between shadow-md animate-slide-down">
                      <div className="flex items-center space-x-3">
                        <ArrowLeft className="w-5 h-5 text-white" />
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center animate-pulse">
                          <Bot className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm">Mindset AI</h3>
                          <p className="text-teal-100 text-xs">Online now</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-white" />
                        <Video className="w-5 h-5 text-white" />
                        <MoreVertical className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                      {messages.map((message, index) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in transform transition-all duration-300`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className={`max-w-[70%] ${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
                            <div
                              className={`rounded-2xl px-4 py-2 shadow-md transform transition-all duration-300 hover:scale-105 ${
                                message.sender === 'user'
                                  ? 'bg-teal-600 text-white rounded-br-sm'
                                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-sm neomorphic-inset'
                              }`}
                            >
                              <p className="text-sm leading-relaxed">{message.text}</p>
                              <span className={`text-xs mt-1 block ${
                                message.sender === 'user' 
                                  ? 'text-teal-100' 
                                  : 'text-gray-500 dark:text-gray-400'
                              }`}>
                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Typing Indicator */}
                      {isTyping && (
                        <div className="flex justify-start animate-fade-in">
                          <div className="max-w-[70%]">
                            <div className="bg-white dark:bg-gray-700 neomorphic-inset rounded-2xl rounded-bl-sm px-4 py-3 shadow-md">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">
                        <input
                          value={inputText}
                          onChange={(e) => setInputText(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Type a message..."
                          className="flex-1 bg-transparent border-none outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                        />
                        <button
                          onClick={handleSendMessage}
                          disabled={!inputText.trim()}
                          className="bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Panel */}
            <div className="space-y-6">
              <div className="neomorphic rounded-2xl p-6 animate-slide-up transform hover:scale-105 transition-all duration-300">
                <h3 className="font-bold text-navy-800 dark:text-white mb-4 flex items-center">
                  <Heart className="w-5 h-5 text-teal-600 mr-2 animate-pulse" />
                  How It Works
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold animate-bounce">1</div>
                    <div>
                      <p className="text-sm font-medium text-navy-800 dark:text-white">Share Your Thoughts</p>
                      <p className="text-xs text-navy-600 dark:text-white/70">Express your feelings, concerns, or questions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold animate-bounce" style={{ animationDelay: '0.1s' }}>2</div>
                    <div>
                      <p className="text-sm font-medium text-navy-800 dark:text-white">AI Analysis</p>
                      <p className="text-xs text-navy-600 dark:text-white/70">Our AI understands and processes your message</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold animate-bounce" style={{ animationDelay: '0.2s' }}>3</div>
                    <div>
                      <p className="text-sm font-medium text-navy-800 dark:text-white">Personalized Response</p>
                      <p className="text-xs text-navy-600 dark:text-white/70">Receive tailored guidance and support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="neomorphic rounded-2xl p-6 animate-slide-up transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-bold text-navy-800 dark:text-white mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 text-teal-600 mr-2 animate-spin" />
                  Key Benefits
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center text-navy-600 dark:text-white/70 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
                    24/7 availability
                  </li>
                  <li className="flex items-center text-navy-600 dark:text-white/70 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                    Evidence-based responses
                  </li>
                  <li className="flex items-center text-navy-600 dark:text-white/70 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    Completely confidential
                  </li>
                  <li className="flex items-center text-navy-600 dark:text-white/70 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    Personalized guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center neomorphic rounded-3xl p-8 animate-fade-in transform hover:scale-105 transition-all duration-500">
            <h2 className="text-3xl font-bold text-navy-800 dark:text-white mb-4 animate-pulse">
              Ready to Transform Your Mental Wellness?
            </h2>
            <p className="text-navy-600 dark:text-white/70 mb-6 max-w-2xl mx-auto animate-slide-up">
              Join thousands of users who have found peace, clarity, and better mental health through our AI-powered platform.
            </p>
            <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-110 glow-teal animate-bounce">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MindsetAI;
