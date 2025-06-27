import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ieee.sight.essths@gmail.com',
      href: 'mailto:ieee.sight.essths@gmail.com',
      description: 'Send us an email for detailed inquiries'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+216 25 968 200',
      href: 'tel:+21625968200',
      description: 'Call us for immediate assistance'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Sahloul, Sousse, Tunisia',
      href: '#',
      description: 'Event venue location'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '24-48 hours',
      href: '#',
      description: 'Average email response time'
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      href: '#',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: '#',
      color: 'hover:text-pink-600'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-700'
    }
  ];

  const teamContacts = [
    {
      role: 'Event Coordinator',
      description: 'Overall event planning and coordination',
      email: 'coordinator@ieee-essths.org'
    },
    {
      role: 'Registration Support',
      description: 'Help with registration and participant queries',
      email: 'registration@ieee-essths.org'
    },
    {
      role: 'Technical Support',
      description: 'Website and technical assistance',
      email: 'tech@ieee-essths.org'
    },
    {
      role: 'Media & Communications',
      description: 'Press inquiries and media relations',
      email: 'media@ieee-essths.org'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-purple via-primary-pink to-primary-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-white mb-6">
            Contact Us
          </h1>
          <p className="font-alexandria text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for any questions about Open Mic Orientation 4.0. 
            We're here to help you on your academic journey.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-6">
              Get in Touch
            </h2>
            <p className="font-alexandria text-lg text-secondary-700 max-w-3xl mx-auto">
              Choose the best way to reach us. We're committed to responding promptly to all inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 group border border-secondary-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-pink to-primary-purple rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-primary-purple mb-2">
                  {method.title}
                </h3>
                {method.href !== '#' ? (
                  <a
                    href={method.href}
                    className="font-alexandria text-lg text-primary-blue hover:text-primary-pink transition-colors duration-200 block mb-3"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="font-alexandria text-lg text-secondary-700 mb-3">
                    {method.value}
                  </p>
                )}
                <p className="font-alexandria text-sm text-secondary-600">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-purple to-primary-pink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-6">
            Stay Connected
          </h2>
          <p className="font-alexandria text-lg text-white/90 mb-8">
            Follow us on social media for the latest updates about Open Mic Orientation 4.0 and future events.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-4 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="w-8 h-8 text-white" />
              </a>
            ))}
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30">
            <h3 className="font-poppins font-bold text-2xl text-white mb-4">
              Ready to Join Us?
            </h3>
            <p className="font-alexandria text-white/90 mb-6">
              Don't miss out on this transformative academic guidance experience.
            </p>
            <a
              href="/registration"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-purple font-poppins font-semibold rounded-full hover:bg-secondary-50 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Register for Open Mic 4.0
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;