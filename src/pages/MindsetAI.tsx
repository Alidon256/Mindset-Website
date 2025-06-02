
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Bot, User, Brain, Sparkles, MessageCircle, Zap, Shield, Heart } from 'lucide-react';
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
            <h1 className="text-5xl md:text-6xl font-bold text-navy-800 dark:text-white mb-6 text-gradient">
              Mindset AI Assistant
            </h1>
            <p className="text-xl text-navy-600 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
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
                className="neomorphic rounded-2xl p-6 text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-navy-800 dark:text-white mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-navy-600 dark:text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Main Chat Interface */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Chat Demo */}
            <div className="lg:col-span-2">
              <div className="neomorphic rounded-3xl p-6 h-[600px] flex flex-col animate-scale-in">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-800 dark:text-white">Mindset AI</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-600 dark:text-green-400">Online</span>
                      </div>
                    </div>
                  </div>
                  <Sparkles className="w-6 h-6 text-teal-600 animate-pulse" />
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                    >
                      <div className={`flex items-start space-x-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.sender === 'user' 
                            ? 'bg-teal-600' 
                            : 'bg-white dark:bg-navy-700 border border-navy-200 dark:border-navy-600'
                        }`}>
                          {message.sender === 'user' ? (
                            <User className="w-5 h-5 text-white" />
                          ) : (
                            <Bot className="w-5 h-5 text-navy-600 dark:text-white" />
                          )}
                        </div>
                        <div
                          className={`rounded-2xl px-4 py-3 ${
                            message.sender === 'user'
                              ? 'bg-teal-600 text-white'
                              : 'bg-white dark:bg-navy-800 text-black dark:text-white neomorphic-inset'
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.text}</p>
                          <span className={`text-xs mt-1 block ${
                            message.sender === 'user' 
                              ? 'text-teal-100' 
                              : 'text-navy-500 dark:text-navy-400'
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
                      <div className="flex items-start space-x-3 max-w-[80%]">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-navy-700 border border-navy-200 dark:border-navy-600">
                          <Bot className="w-5 h-5 text-navy-600 dark:text-white" />
                        </div>
                        <div className="bg-white dark:bg-navy-800 neomorphic-inset rounded-2xl px-4 py-3">
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
                <div className="neomorphic-inset rounded-2xl p-4 flex items-center space-x-3">
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Share what's on your mind..."
                    className="flex-1 resize-none bg-transparent border-none outline-none text-navy-800 dark:text-white placeholder-navy-500 dark:placeholder-navy-400"
                    rows={1}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim()}
                    className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Information Panel */}
            <div className="space-y-6">
              <div className="neomorphic rounded-2xl p-6 animate-slide-up">
                <h3 className="font-bold text-navy-800 dark:text-white mb-4 flex items-center">
                  <Heart className="w-5 h-5 text-teal-600 mr-2" />
                  How It Works
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <div>
                      <p className="text-sm font-medium text-navy-800 dark:text-white">Share Your Thoughts</p>
                      <p className="text-xs text-navy-600 dark:text-white/70">Express your feelings, concerns, or questions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <div>
                      <p className="text-sm font-medium text-navy-800 dark:text-white">AI Analysis</p>
                      <p className="text-xs text-navy-600 dark:text-white/70">Our AI understands and processes your message</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <div>
                      <p className="text-sm font-medium text-navy-800 dark:text-white">Personalized Response</p>
                      <p className="text-xs text-navy-600 dark:text-white/70">Receive tailored guidance and support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="neomorphic rounded-2xl p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-bold text-navy-800 dark:text-white mb-4">Key Benefits</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center text-navy-600 dark:text-white/70">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    24/7 availability
                  </li>
                  <li className="flex items-center text-navy-600 dark:text-white/70">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    Evidence-based responses
                  </li>
                  <li className="flex items-center text-navy-600 dark:text-white/70">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    Completely confidential
                  </li>
                  <li className="flex items-center text-navy-600 dark:text-white/70">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    Personalized guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center neomorphic rounded-3xl p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-navy-800 dark:text-white mb-4">
              Ready to Transform Your Mental Wellness?
            </h2>
            <p className="text-navy-600 dark:text-white/70 mb-6 max-w-2xl mx-auto">
              Join thousands of users who have found peace, clarity, and better mental health through our AI-powered platform.
            </p>
            <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 glow-teal">
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
