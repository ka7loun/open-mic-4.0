import React from 'react';
import { Users, BookOpen, Award, TrendingUp, CheckCircle, Star } from 'lucide-react';

const AboutEvent = () => {
  const targetAudience = [
    {
      title: 'Bac Graduates',
      description: 'Recent high school graduates looking to choose the right university path',
      icon: '🎓'
    },
    {
      title: 'License Holders',
      description: 'Students with bachelor\'s degrees exploring master\'s programs and career options',
      icon: '📚'
    },
    {
      title: 'Prépa Alumni',
      description: 'Preparatory school graduates seeking guidance for engineering schools',
      icon: '🔬'
    }
  ];

  const tracks = [
    'Medicine & Health Sciences',
    'Engineering & Technology',
    'Law & Legal Studies',
    'Business & Management',
    'Arts & Humanities',
    'Science & Research'
  ];

  const pastEditions = [
    {
      edition: '1st Edition',
      year: '2021',
      participants: '50+',
      highlight: 'Foundation & First Steps'
    },
    {
      edition: '2nd Edition',
      year: '2022',
      participants: '100+',
      highlight: 'Expanding Horizons'
    },
    {
      edition: '3rd Edition',
      year: '2023',
      participants: '150+',
      highlight: 'Digital Innovation'
    }
  ];

  const specialFeatures = [
    {
      icon: BookOpen,
      title: 'Expanded Academic Tracks',
      description: 'Comprehensive coverage of Medicine, Law, Engineering, and more fields with specialized guidance for each domain.'
    },
    {
      icon: TrendingUp,
      title: 'Soft Skills Development',
      description: 'Interactive workshops focusing on communication, leadership, and professional development skills.'
    },
    {
      icon: Users,
      title: 'Real Alumni Insights',
      description: 'Direct interaction with successful alumni sharing their academic journey and career experiences.'
    },
    {
      icon: Award,
      title: 'Hands-on Mentorship',
      description: 'One-on-one mentoring sessions with industry professionals and academic advisors.'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-purple via-primary-pink to-primary-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-white mb-6">
            About the Event
          </h1>
          <p className="font-alexandria text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover what makes Open Mic Orientation 4.0 the premier academic guidance event, 
            designed to transform your educational journey.
          </p>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-6">
              Who Should Attend?
            </h2>
            <p className="font-alexandria text-lg text-secondary-700 max-w-3xl mx-auto">
              Open Mic Orientation 4.0 is designed for students at crucial decision points in their academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => (
              <div key={index} className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 group">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {audience.icon}
                </div>
                <h3 className="font-poppins font-bold text-xl text-primary-purple mb-4">
                  {audience.title}
                </h3>
                <p className="font-alexandria text-secondary-700 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Editions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-6">
              Past Editions Highlights
            </h2>
            <p className="font-alexandria text-lg text-secondary-700 max-w-3xl mx-auto">
              A journey of growth, innovation, and impact across three successful editions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pastEditions.map((edition, index) => (
              <div key={index} className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-purple rounded-full mb-6 text-white font-poppins font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="font-poppins font-bold text-xl text-primary-purple mb-2">
                  {edition.edition}
                </h3>
                <p className="font-alexandria text-secondary-600 mb-4">
                  {edition.year}
                </p>
                <div className="bg-primary-pink/10 rounded-lg p-4 mb-4">
                  <p className="font-poppins font-semibold text-2xl text-primary-pink">
                    {edition.participants}
                  </p>
                  <p className="font-alexandria text-sm text-secondary-600">
                    Participants
                  </p>
                </div>
                <p className="font-alexandria text-secondary-700 font-medium">
                  {edition.highlight}
                </p>
              </div>
            ))}
          </div>
          {/* Past Editions Photo Gallery */}
          <div className="mb-16">
            <h3 className="font-poppins font-semibold text-2xl text-primary-purple mb-6 text-center">Past Editions Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <img src="/past ed/image_2025-07-06_185106969.png" alt="Past Edition 1" className="rounded-xl object-cover w-full h-48" />
              <img src="/past ed/image_2025-07-06_185014678.png" alt="Past Edition 2" className="rounded-xl object-cover w-full h-48" />
              <img src="/past ed/image_2025-07-06_185002031.png" alt="Past Edition 3" className="rounded-xl object-cover w-full h-48" />
              <img src="/past ed/image_2025-07-06_185130981.png" alt="Past Edition 4" className="rounded-xl object-cover w-full h-48" />
            </div>
          </div>
        </div>
      </section>

      {/* Overall Impact */}
      <section className="py-20 bg-gradient-to-br from-primary-blue to-primary-purple rounded-3xl p-8 lg:p-12 text-white text-center">
        <h3 className="font-poppins font-bold text-2xl lg:text-3xl mb-6">
          Overall Impact
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-poppins font-bold text-4xl lg:text-5xl mb-2">200+</div>
            <div className="font-alexandria text-lg text-white/90">Students Guided</div>
          </div>
          <div>
            <div className="font-poppins font-bold text-4xl lg:text-5xl mb-2">3</div>
            <div className="font-alexandria text-lg text-white/90">Successful Editions</div>
          </div>
          <div>
            <div className="font-poppins font-bold text-4xl lg:text-5xl mb-2">100%</div>
            <div className="font-alexandria text-lg text-white/90">Hands-on Mentorship</div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-6">
              What You'll Gain
            </h2>
            <p className="font-alexandria text-lg text-secondary-700 max-w-3xl mx-auto">
              Comprehensive benefits that will transform your academic and professional journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Clear academic pathway guidance',
              'Industry insights and trends',
              'Networking with peers and professionals',
              'Soft skills development',
              'Career planning strategies',
              'Alumni success stories',
              'Interactive Q&A sessions',
              'Personalized mentorship',
              'Resource recommendations'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-blue mt-1 flex-shrink-0" />
                <span className="font-alexandria text-secondary-700 leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-purple to-primary-pink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="font-alexandria text-xl text-white/90 mb-8">
            Join Open Mic Orientation 4.0 and take the first step towards a successful academic and professional journey.
          </p>
          <a
            href="/registration"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-purple font-poppins font-semibold rounded-full hover:bg-secondary-50 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Register for Open Mic 4.0
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutEvent;