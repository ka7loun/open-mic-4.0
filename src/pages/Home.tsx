import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Award, Mic, ArrowRight, CheckCircle, Globe } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';

const Home = () => {
  const stats = [
    { number: '4', label: 'Edition', icon: Award },
    { number: '200+', label: 'Students Guided', icon: Users },
    { number: '30+', label: 'Speakers & Advisors', icon: Mic },
    { number: '30+', label: 'National & International Universities', icon: Globe },
  ];

  const highlights = [
    'Expanded tracks: Medicine, Law, Engineering & more',
    'Soft skills development workshops',
    'Real alumni insights and experiences',
    'Hands-on mentorship sessions',
    'Interactive Q&A with industry experts',
    'Networking opportunities with peers',
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-purple via-primary-pink to-primary-blue">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-bounce-gentle"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-blue/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-pink/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Event Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-alexandria font-medium text-sm mb-6 border border-white/30">
              <Mic className="w-4 h-4 mr-2" />
              IEEE ESSTHS SIGHT Group × WIE Affinity Group
            </div>

            {/* Main Title */}
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight">
              Open Mic Orientation
              <span className="block text-primary-blue">4.0</span>
            </h1>

            {/* Subtitle */}
            <p className="font-brittany text-2xl sm:text-3xl lg:text-4xl text-white/90 mb-8">
              Shape Your Academic Future
            </p>

            {/* Event Details */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
              <div className="flex items-center text-white/90 font-alexandria">
                <Calendar className="w-5 h-5 mr-2 text-primary-blue" />
                July 25, 2025
              </div>
              <div className="flex items-center text-white/90 font-alexandria">
                <MapPin className="w-5 h-5 mr-2 text-primary-blue" />
                Sahloul, Sousse
              </div>
            </div>

            {/* Description */}
            <p className="font-alexandria text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join us for the most comprehensive academic guidance event designed to help students make informed decisions about their educational journey and career paths.
            </p>

            {/* CTA Button */}
            <Link
              to="/registration"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-purple font-poppins font-semibold text-lg rounded-full hover:bg-secondary-50 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-pulse-glow"
            >
              <Mic className="w-5 h-5 mr-3" />
              Register now to start designing your future!
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>

            {/* Countdown Timer */}
            <div className="mt-16 max-w-md mx-auto">
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-pink to-primary-purple rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-2">
                  {stat.number}
                </div>
                <div className="font-alexandria text-secondary-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-6">
                Why Open Mic Orientation 4.0?
              </h2>
              <p className="font-alexandria text-lg text-secondary-700 mb-8 leading-relaxed">
                Our flagship academic guidance event brings together students, alumni, and industry experts to provide comprehensive support for your educational journey. From Bac graduates to License holders and Prépa alumni, we're here to guide you.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                    <span className="font-alexandria text-secondary-700">{highlight}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about-event"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-pink to-primary-purple text-white font-poppins font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Learn More About the Event
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-purple to-primary-pink rounded-3xl p-8 text-white">
                <h3 className="font-poppins font-bold text-2xl mb-6">Event Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                    <span className="font-alexandria">08:30 - 09:30: Check-in & Networking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                    <span className="font-alexandria">10:30 - 12:00: Workshops Round 1</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                    <span className="font-alexandria">13:30 - 15:00: Workshops Round 2</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                    <span className="font-alexandria">15:30 - 16:00: Closing Ceremony</span>
                  </div>
                </div>
                <Link
                  to="/program"
                  className="inline-flex items-center mt-6 text-primary-blue hover:text-white transition-colors duration-200"
                >
                  View Full Program
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-purple to-primary-pink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-6">
            Ready to Shape Your Future?
          </h2>
          <p className="font-alexandria text-xl text-white/90 mb-8">
            Join hundreds of students who have already transformed their academic journey with Open Mic Orientation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/registration"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-purple font-poppins font-semibold rounded-full hover:bg-secondary-50 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Mic className="w-5 h-5 mr-3" />
              Register Now
            </Link>
            <Link
              to="/program"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-poppins font-semibold rounded-full hover:bg-white hover:text-primary-purple transition-all duration-300"
            >
              View Program
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;