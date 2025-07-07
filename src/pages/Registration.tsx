import React from 'react';
import { Calendar, Clock, MapPin, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';

const Registration = () => {
  const registrationSteps = [
    'Fill out the registration form completely',
    'Provide accurate contact information',
    'Select your preferred workshop tracks',
    'Submit the form before the deadline',
    'Wait for confirmation email',
    'Attend the event on July 20, 2025'
  ];

  const requirements = [
    'Valid student ID or academic credentials',
    'Contact information (email and phone)',
    'Academic background details',
    'Workshop track preferences',
    'Emergency contact information'
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-purple via-primary-pink to-primary-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-white mb-6">
            Registration
          </h1>
          <p className="font-alexandria text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Secure your spot at Open Mic Orientation 4.0 and take the first step towards shaping your academic future.
          </p>
        </div>
      </section>

      {/* Registration Deadline Alert */}
      <section className="py-8 bg-primary-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 text-white">
            <AlertCircle className="w-6 h-6" />
            <span className="font-poppins font-semibold text-lg">
              Registration Deadline: July 15, 2025
            </span>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-6">
              Register Now
            </h2>
            <p className="font-alexandria text-lg text-secondary-700">
              Complete the form below to secure your participation in Open Mic Orientation 4.0.
            </p>
          </div>

          {/* Embedded Google Form */}
          <div className="bg-gradient-to-br from-secondary-50 to-white rounded-3xl p-8 shadow-xl">
            <div className="w-full">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdNYZZ7y6URosv3Xstjro8_mxl_ulYztc0flQ7a-7H7RRsIPA/viewform?embedded=true"
                width="100%"
                style={{ minHeight: '500px', height: '60vh', maxHeight: '900px' }}
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-2xl"
                title="Open Mic Orientation 4.0 Registration Form"
              >
                Loading…
              </iframe>
            </div>
            
            {/* Alternative Link */}
            <div className="text-center mt-6">
              <p className="font-alexandria text-secondary-600 mb-4">
                Having trouble with the embedded form?
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdNYZZ7y6URosv3Xstjro8_mxl_ulYztc0flQ7a-7H7RRsIPA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-pink to-primary-purple text-white font-poppins font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Open Form in New Tab
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-6">
              Event Details
            </h2>
            <p className="font-alexandria text-lg text-secondary-700">
              Everything you need to know about the event logistics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-blue to-primary-purple rounded-2xl p-8 text-white text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-poppins font-bold text-xl mb-2">Date</h3>
              <p className="font-alexandria text-lg">July 20, 2025</p>
              <p className="font-alexandria text-sm text-white/80 mt-2">Sunday</p>
            </div>

            <div className="bg-gradient-to-br from-primary-pink to-primary-blue rounded-2xl p-8 text-white text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-poppins font-bold text-xl mb-2">Time</h3>
              <p className="font-alexandria text-lg">08:30 - 16:00</p>
              <p className="font-alexandria text-sm text-white/80 mt-2">Full Day Event</p>
            </div>

            <div className="bg-gradient-to-br from-primary-purple to-primary-pink rounded-2xl p-8 text-white text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-poppins font-bold text-xl mb-2">Location</h3>
              <p className="font-alexandria text-lg">Sahloul, Sousse</p>
              <p className="font-alexandria text-sm text-white/80 mt-2">Tunisia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-6">
            Need Help?
          </h2>
          <p className="font-alexandria text-lg text-secondary-700 mb-12">
            If you have any questions about registration or the event, don't hesitate to contact us.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary-pink" />
              <h3 className="font-poppins font-bold text-xl text-primary-purple mb-4">
                Email Us
              </h3>
              <a
                href="mailto:openmicorientation@gmail.com"
                className="font-alexandria text-lg text-primary-blue hover:text-primary-pink transition-colors duration-200"
              >
                openmicorientation@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary-blue" />
              <h3 className="font-poppins font-bold text-xl text-primary-purple mb-4">
                Call Us
              </h3>
              <a
                href="tel:58353847"
                className="font-alexandria text-lg text-primary-blue hover:text-primary-pink transition-colors duration-200"
              >
                58 353 847 / 99213430
              </a>
            </div>
          </div>

          <div className="mt-12 p-6 bg-primary-pink/10 rounded-2xl border border-primary-pink/20">
            <p className="font-alexandria text-secondary-700">
              <strong>Registration Deadline:</strong> July 15, 2025<br />
              <strong>Event is FREE</strong> for all participants<br />
              <strong>Open to all students</strong> regardless of IEEE membership
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;