import React from 'react';
import { Clock, Coffee, Users, Award, Download, Calendar } from 'lucide-react';

const Program = () => {
  const schedule = [
    {
      time: '08:30 - 09:30',
      title: 'Check-in & Networking',
      description: 'Registration, welcome coffee, and networking with fellow participants',
      icon: Users,
      color: 'from-primary-blue to-primary-purple'
    },
    {
      time: '09:30 - 10:00',
      title: 'Opening Ceremony',
      description: 'Welcome address, event overview, and keynote presentation',
      icon: Award,
      color: 'from-primary-pink to-primary-blue'
    },
    {
      time: '10:00 - 10:30',
      title: 'Coffee Break 1',
      description: 'Refreshments and informal networking',
      icon: Coffee,
      color: 'from-primary-purple to-primary-pink'
    },
    {
      time: '10:30 - 12:00',
      title: 'Workshops – Round 1',
      description: 'Parallel sessions covering different academic tracks and career paths',
      icon: Users,
      color: 'from-primary-blue to-primary-purple'
    },
    {
      time: '12:00 - 13:30',
      title: 'Lunch Break',
      description: 'Networking lunch with speakers and participants',
      icon: Coffee,
      color: 'from-primary-pink to-primary-blue'
    },
    {
      time: '13:30 - 15:00',
      title: 'Workshops – Round 2',
      description: 'Second round of specialized workshops and mentorship sessions',
      icon: Users,
      color: 'from-primary-purple to-primary-pink'
    },
    {
      time: '15:00 - 15:30',
      title: 'Coffee Break 2',
      description: 'Final networking opportunity and refreshments',
      icon: Coffee,
      color: 'from-primary-blue to-primary-purple'
    },
    {
      time: '15:30 - 16:00',
      title: 'Closing Ceremony',
      description: 'Wrap-up, key takeaways, and next steps',
      icon: Award,
      color: 'from-primary-pink to-primary-blue'
    }
  ];

  const workshopTracks = [
    {
      title: 'Medicine & Health Sciences',
      topics: ['Medical School Admission', 'Specialization Paths', 'Research Opportunities', 'Healthcare Careers'],
      color: 'bg-red-50 border-red-200'
    },
    {
      title: 'Engineering & Technology',
      topics: ['Engineering Disciplines', 'Tech Industry Trends', 'Innovation & Startups', 'Professional Development'],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Law & Legal Studies',
      topics: ['Legal Career Paths', 'Bar Exam Preparation', 'International Law', 'Legal Practice Areas'],
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Business & Management',
      topics: ['MBA Programs', 'Entrepreneurship', 'Corporate Careers', 'Leadership Skills'],
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Arts & Humanities',
      topics: ['Creative Careers', 'Academic Research', 'Cultural Studies', 'Media & Communications'],
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      title: 'Science & Research',
      topics: ['Graduate Studies', 'Research Methodology', 'Academic Careers', 'Industry Applications'],
      color: 'bg-indigo-50 border-indigo-200'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-purple via-primary-pink to-primary-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-white mb-6">
            Event Program
          </h1>
          <p className="font-alexandria text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            A comprehensive day of learning, networking, and guidance designed to shape your academic future.
          </p>
          
          {/* Event Details */}
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-alexandria font-medium border border-white/30">
            <Calendar className="w-5 h-5 mr-2" />
            July 25, 2025 | 08:30 - 16:00 | Sahloul, Sousse
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-6">
              Daily Schedule
            </h2>
            <p className="font-alexandria text-lg text-secondary-700 max-w-3xl mx-auto">
              A carefully crafted timeline ensuring maximum learning and networking opportunities throughout the day.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-pink to-primary-blue hidden lg:block"></div>
            
            <div className="space-y-8">
              {schedule.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-pink to-primary-purple rounded-full flex-shrink-0 relative z-10">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 lg:flex-none lg:w-full">
                    <div className={`bg-gradient-to-r ${item.color} rounded-2xl p-6 lg:p-8 text-white lg:ml-8`}>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-4 lg:hidden">
                            <item.icon className="w-6 h-6" />
                            <span className="font-poppins font-semibold text-lg">{item.time}</span>
                          </div>
                          <div className="hidden lg:block">
                            <span className="font-poppins font-semibold text-lg mb-2 block">{item.time}</span>
                          </div>
                          <h3 className="font-poppins font-bold text-xl lg:text-2xl mb-3">
                            {item.title}
                          </h3>
                          <p className="font-alexandria text-white/90 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:ml-8">
                          <Clock className="w-8 h-8 text-white/70" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;