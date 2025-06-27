import React from 'react';
import { Users, Calendar, Clock, Star } from 'lucide-react';

const Speakers = () => {
  const placeholderSpeakers = [
    {
      category: 'Medicine & Health Sciences',
      description: 'Leading medical professionals and healthcare experts',
      color: 'from-red-500 to-pink-500'
    },
    {
      category: 'Engineering & Technology',
      description: 'Industry leaders and tech innovators',
      color: 'from-blue-500 to-purple-500'
    },
    {
      category: 'Law & Legal Studies',
      description: 'Experienced lawyers and legal scholars',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      category: 'Business & Management',
      description: 'Successful entrepreneurs and business leaders',
      color: 'from-green-500 to-teal-500'
    },
    {
      category: 'Arts & Humanities',
      description: 'Creative professionals and cultural experts',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      category: 'Science & Research',
      description: 'Renowned researchers and academics',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const sessionTypes = [
    {
      title: 'Keynote Presentations',
      description: 'Inspiring talks from industry leaders sharing their journey and insights',
      icon: Star,
      duration: '30-45 minutes'
    },
    {
      title: 'Panel Discussions',
      description: 'Interactive discussions with multiple experts on specific topics',
      icon: Users,
      duration: '45-60 minutes'
    },
    {
      title: 'Workshop Sessions',
      description: 'Hands-on learning experiences with practical guidance',
      icon: Clock,
      duration: '60-90 minutes'
    },
    {
      title: 'Q&A Sessions',
      description: 'Direct interaction with speakers for personalized advice',
      icon: Calendar,
      duration: '20-30 minutes'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-purple via-primary-pink to-primary-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-white mb-6">
            Speakers & Sessions
          </h1>
          <p className="font-alexandria text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Meet the inspiring speakers and discover the engaging sessions that will guide your academic journey.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-secondary-50 to-white rounded-3xl p-12 shadow-xl border border-secondary-200">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-pink to-primary-purple rounded-full mx-auto mb-8 flex items-center justify-center">
              <Star className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-6">
              Speaker Lineup Coming Soon!
            </h2>
            
            <p className="font-alexandria text-lg text-secondary-700 mb-8 leading-relaxed">
              We're finalizing an incredible lineup of industry experts, successful alumni, and academic leaders 
              who will share their insights and guide you through your academic journey. Stay tuned for announcements!
            </p>
            
            <div className="inline-flex items-center px-6 py-3 bg-primary-pink/10 rounded-full text-primary-pink font-alexandria font-medium">
              <Calendar className="w-5 h-5 mr-2" />
              Speaker announcements coming soon
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;