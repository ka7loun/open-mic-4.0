import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary-purple to-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo-white.png" 
                alt="Open Mic Orientation 4.0" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-poppins font-bold text-lg">Open Mic 4.0</h3>
                <p className="text-sm text-secondary-300">Shape Your Academic Future</p>
              </div>
            </div>
            <p className="text-secondary-300 font-alexandria text-sm leading-relaxed mb-6">
              A flagship academic guidance event organized by IEEE ESSTHS SIGHT Group in collaboration with the WIE Affinity Group.
            </p>
            {/* Organizer Logos */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xs text-secondary-200 mr-2">Organized by:</span>
              <img src="/ieee essths sb logo.png" alt="IEEE SB Logo" className="h-8 w-auto bg-white rounded shadow p-1" />
              <img src="/sightlogo.png" alt="SIGHT Logo" className="h-8 w-auto bg-white rounded shadow p-1" />
              <img src="/wie logo.png" alt="WIE Logo" className="h-8 w-auto bg-white rounded shadow p-1" />
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/essthsieee/" 
                className="p-2 bg-white/10 rounded-full hover:bg-primary-pink transition-colors duration-300"
                aria-label="Facebook"
                target="_blank" rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/ieee.essths.student.branch/" 
                className="p-2 bg-white/10 rounded-full hover:bg-primary-pink transition-colors duration-300"
                aria-label="Instagram"
                target="_blank" rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/ieee-essths-student-branch/" 
                className="p-2 bg-white/10 rounded-full hover:bg-primary-pink transition-colors duration-300"
                aria-label="LinkedIn"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/about-us' },
                { name: 'About the Event', href: '/about-event' },
                { name: 'Program', href: '/program' },
                { name: 'Speakers & Sessions', href: '/speakers' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-secondary-300 hover:text-primary-blue transition-colors duration-200 font-alexandria"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Event Details</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-alexandria font-medium">July 20, 2025</p>
                  <p className="text-secondary-300 text-sm">08:30 - 16:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-alexandria font-medium">Sahloul, Sousse</p>
                  <p className="text-secondary-300 text-sm">Tunisia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-blue flex-shrink-0" />
                <a 
                  href="mailto:ieee.sight.essths@gmail.com"
                  className="text-secondary-300 hover:text-primary-blue transition-colors duration-200 font-alexandria text-sm"
                >
                  ieee.sight.essths@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-blue flex-shrink-0" />
                <a 
                  href="tel:+21625968200"
                  className="text-secondary-300 hover:text-primary-blue transition-colors duration-200 font-alexandria text-sm"
                >
                  +216 25 968 200
                </a>
              </div>
            </div>

            {/* Registration Deadline */}
            <div className="mt-6 p-4 bg-primary-pink/20 rounded-lg border border-primary-pink/30">
              <p className="font-poppins font-semibold text-sm mb-1">Registration Deadline</p>
              <p className="text-secondary-200 text-sm">July 15, 2025</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-secondary-400 text-sm font-alexandria">
                © {currentYear} Open Mic. All rights reserved.
              </p>
              <p className="text-secondary-400 text-xs mt-2 font-alexandria">
                Website developed by <a href="https://www.linkedin.com/in/ahmed-kahloun/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-blue">Ahmed Kahloun</a>
              </p>
            </div>
            <div className="flex space-x-6">
              <Link 
                to="/faq" 
                className="text-secondary-400 hover:text-primary-blue transition-colors duration-200 text-sm font-alexandria"
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className="text-secondary-400 hover:text-primary-blue transition-colors duration-200 text-sm font-alexandria"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;