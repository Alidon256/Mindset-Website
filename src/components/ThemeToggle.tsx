
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 neomorphic p-1 transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary hover:glow-teal"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 bg-gradient-teal rounded-full shadow-lg transition-all duration-500 ease-in-out flex items-center justify-center transform ${
          theme === 'dark' ? 'translate-x-8 rotate-180' : 'translate-x-0 rotate-0'
        }`}
      >
        {theme === 'light' ? (
          <Sun className="w-4 h-4 text-white" />
        ) : (
          <Moon className="w-4 h-4 text-white" />
        )}
      </div>
    </button>
  );
};
