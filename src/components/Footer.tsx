
import { useState } from 'react';
import { Heart, Mail, Instagram, Twitter, Facebook, Youtube, MapPin, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate newsletter signup
    setIsSubscribed(true);
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our wellness newsletter.",
    });
    
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const handleSocialClick = (platform: string) => {
    toast({
      title: `Opening ${platform}`,
      description: `Redirecting to our ${platform} page...`,
    });
    
    // In a real app, these would be actual social media links
    const socialLinks = {
      instagram: 'https://instagram.com/mindset',
      twitter: 'https://twitter.com/mindset',
      facebook: 'https://facebook.com/mindset',
      youtube: 'https://youtube.com/mindset',
      email: 'mailto:hello@mindset.com'
    };
    
    // Simulate opening social media
    console.log(`Opening ${platform}: ${socialLinks[platform as keyof typeof socialLinks]}`);
  };

  const handleLinkClick = (linkName: string) => {
    toast({
      title: `${linkName}`,
      description: `Opening ${linkName} page...`,
    });
    console.log(`Navigating to ${linkName}`);
  };
  
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Features', action: () => handleLinkClick('Features') },
        { name: 'Download App', action: () => handleLinkClick('Download App') },
        { name: 'Pricing', action: () => handleLinkClick('Pricing') },
        { name: 'Updates', action: () => handleLinkClick('Updates') }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', action: () => handleLinkClick('Help Center') },
        { name: 'Contact Us', action: () => handleLinkClick('Contact Us') },
        { name: 'Community', action: () => handleLinkClick('Community') },
        { name: 'Feedback', action: () => handleLinkClick('Feedback') }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', action: () => window.location.href = '/#about' },
        { name: 'Careers', action: () => handleLinkClick('Careers') },
        { name: 'Press', action: () => handleLinkClick('Press') },
        { name: 'Partners', action: () => handleLinkClick('Partners') }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', action: () => handleLinkClick('Privacy Policy') },
        { name: 'Terms of Service', action: () => handleLinkClick('Terms of Service') },
        { name: 'Cookie Policy', action: () => handleLinkClick('Cookie Policy') },
        { name: 'Accessibility', action: () => handleLinkClick('Accessibility') }
      ]
    }
  ];

  const contactInfo = [
    { icon: MapPin, text: "123 Wellness Street, Mindful City, MC 12345" },
    { icon: Phone, text: "+1 (555) 123-MIND" },
    { icon: Clock, text: "24/7 Support Available" }
  ];

  return (
    <footer className="bg-gradient-to-br from-navy-900 via-gray-900 to-navy-800 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-500 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg animate-pulse">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-gradient-light">Mindset</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 animate-slide-up">
              Your personalized mental wellness companion, offering expert-guided meditation, stress relief, 
              and motivational content designed for your unique journey to inner peace.
            </p>
            
            {/* Contact Information */}
            <div className="mb-6 space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <info.icon className="w-4 h-4 text-teal-400" />
                  <span className="text-sm">{info.text}</span>
                </div>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-semibold mb-4 text-white flex items-center">
                <Mail className="w-5 h-5 mr-2 text-teal-400" />
                Get wellness tips in your inbox
              </h3>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-navy-800 border-navy-700 text-gray-200 focus:border-teal-500 flex-1" 
                  disabled={isSubscribed}
                />
                <Button 
                  type="submit"
                  className={`flex-shrink-0 transition-all duration-300 ${
                    isSubscribed 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-teal-600 hover:bg-teal-700'
                  }`}
                  disabled={!email || isSubscribed}
                >
                  {isSubscribed ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </form>
              {isSubscribed && (
                <p className="text-green-400 text-sm mt-2 animate-fade-in">Thank you for subscribing!</p>
              )}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="animate-fade-in" style={{ animationDelay: `${(sectionIndex + 1) * 0.1}s` }}>
              <h3 className="font-semibold mb-6 text-white text-lg border-b border-teal-600 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button 
                      onClick={link.action}
                      className="text-gray-300 hover:text-teal-400 transition-all duration-200 text-left hover:translate-x-1 flex items-center group"
                    >
                      <span className="group-hover:mr-2 transition-all duration-200">{link.name}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-navy-800 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-6 md:mb-0 animate-fade-in">
              © {currentYear} Mindset. All rights reserved. Made with ❤️ for mental wellness.
            </p>
            <div className="flex space-x-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {[
                { icon: Instagram, name: 'instagram' },
                { icon: Twitter, name: 'twitter' },
                { icon: Facebook, name: 'facebook' },
                { icon: Youtube, name: 'youtube' },
                { icon: Mail, name: 'email' }
              ].map((social, index) => (
                <button
                  key={social.name}
                  onClick={() => handleSocialClick(social.name)}
                  className="text-gray-400 hover:text-teal-400 transition-all duration-200 hover:scale-125 transform"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Wave Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-teal-500 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;
