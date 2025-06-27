import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mic } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'About the Event', href: '/about-event' },
    { name: 'Program', href: '/program' },
    { name: 'Registration', href: '/registration' },
    { name: 'Speakers & Sessions', href: '/speakers' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 space-x-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo-color.png" 
              alt="Open Mic Orientation 4.0" 
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-alexandria font-medium transition-all duration-200 hover:bg-primary-pink/10 ${
                  isActive(item.href)
                    ? 'text-primary-pink bg-primary-pink/10'
                    : isScrolled
                    ? 'text-secondary-700 hover:text-primary-pink'
                    : 'text-primary-purple hover:text-primary-pink'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/registration"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-pink to-primary-purple text-white font-poppins font-medium text-base rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              <Mic className="w-4 h-4 mr-2" />
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled
                ? 'text-secondary-700 hover:bg-secondary-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-secondary-200 animate-slide-up">
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-alexandria font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-pink bg-primary-pink/10'
                      : 'text-secondary-700 hover:text-primary-pink hover:bg-secondary-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/registration"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-primary-pink to-primary-purple text-white font-poppins font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  <Mic className="w-4 h-4 mr-2" />
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;