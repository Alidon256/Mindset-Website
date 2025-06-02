
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Bot, User } from 'lucide-react';
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

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for sharing that with me. Based on what you\'ve told me, I\'d recommend starting with a simple breathing exercise. Would you like me to guide you through a 5-minute mindfulness session?',
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-navy-50 via-white to-teal-50 dark:from-navy-900 dark:via-black dark:to-teal-900">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-800 dark:text-white mb-4">
              Mindset AI Assistant
            </h1>
            <p className="text-lg text-navy-600 dark:text-white/80">
              Your personal AI companion for mental wellness and mindfulness
            </p>
          </div>

          {/* Chat Container */}
          <div className="neomorphic rounded-3xl p-6 h-[600px] flex flex-col">
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
            </div>

            {/* Input Area */}
            <div className="neomorphic-inset rounded-2xl p-4 flex items-center space-x-3">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="flex-1 resize-none bg-transparent border-none outline-none text-navy-800 dark:text-white placeholder-navy-500 dark:placeholder-navy-400"
                rows={1}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-xl"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 neomorphic rounded-xl">
              <h3 className="font-semibold text-navy-800 dark:text-white mb-2">Personalized Guidance</h3>
              <p className="text-sm text-navy-600 dark:text-white/70">Get tailored meditation and mindfulness recommendations</p>
            </div>
            <div className="text-center p-6 neomorphic rounded-xl">
              <h3 className="font-semibold text-navy-800 dark:text-white mb-2">24/7 Support</h3>
              <p className="text-sm text-navy-600 dark:text-white/70">Available whenever you need mental wellness support</p>
            </div>
            <div className="text-center p-6 neomorphic rounded-xl">
              <h3 className="font-semibold text-navy-800 dark:text-white mb-2">Evidence-Based</h3>
              <p className="text-sm text-navy-600 dark:text-white/70">Responses based on proven therapeutic techniques</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MindsetAI;
