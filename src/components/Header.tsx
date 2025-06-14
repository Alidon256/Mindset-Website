
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, Heart, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Mindset AI', href: '/mindset-ai' },
    { label: 'Download', href: '#download' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className={`${
            isScrolled ? 'w-8 h-8' : 'w-10 h-10'
          } rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center transition-all duration-300`}>
            <Heart className={`${
              isScrolled ? 'w-4 h-4' : 'w-5 h-5'
            } text-white transition-all duration-300`} />
          </div>
          <span className={`${
            isScrolled ? 'text-xl' : 'text-2xl'
          } font-bold text-gradient transition-all duration-300`}>Mindset</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-navy-800 dark:text-white hover:text-teal-600 transition-colors duration-300 font-medium relative group text-sm xl:text-base"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <ThemeToggle />
          <Button className="bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 hover:scale-105 font-semibold">
            <Download className="w-4 h-4 mr-2" />
            Get App
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-navy-800 dark:text-white hover:text-teal-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden glass-effect border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-6 space-y-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-navy-800 dark:text-white hover:text-teal-600 transition-colors duration-200 font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-4 py-6 font-semibold">
              <Download className="w-5 h-5 mr-2" />
              Download App
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
