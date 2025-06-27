import React from 'react';
import { Users, Target, Eye, Award, Globe, Zap } from 'lucide-react';

const AboutUs = () => {
  const organizations = [
    {
      name: 'IEEE ESSTHS SB',
      description: 'Founded in 2020, our Student Branch has grown to over 250+ members, making it the largest IEEE Student Branch in Sousse. We are dedicated to advancing technology for humanity and providing students with opportunities for professional development.',
      stats: ['250+ Members', 'Founded in 2020', 'Largest SB in Sousse'],
      color: 'from-primary-blue to-primary-purple'
    },
    {
      name: 'SIGHT Group',
      description: 'Special Interest Group on Humanitarian Technology focuses on leveraging technology to address humanitarian challenges. We work on projects that make a real difference in communities while developing technical skills.',
      stats: ['Humanitarian Focus', 'Tech for Good', 'Community Impact'],
      color: 'from-primary-pink to-primary-blue'
    },
    {
      name: 'WIE Affinity Group',
      description: 'Women in Engineering group is committed to supporting and empowering women in STEM fields. We provide mentorship, networking opportunities, and advocate for gender equality in engineering.',
      stats: ['Women Empowerment', 'STEM Advocacy', 'Mentorship Programs'],
      color: 'from-primary-purple to-primary-pink'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower students to make informed academic and career choices through comprehensive guidance, mentorship, and real-world insights from industry professionals and alumni.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To drive clarity and confidence in academic decision-making through innovative mentorship programs and real-world experiences that shape successful futures.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from organizing world-class events to providing top-tier guidance and support to our participants.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Creating lasting positive impact on students\' lives by connecting them with opportunities, knowledge, and networks that accelerate their success.'
    }
  ];

  const teamRoles = [
    'Event Coordinator',
    'Technical Lead',
    'Marketing Manager',
    'Logistics Coordinator',
    'Content Manager',
    'Partnerships Lead'
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-purple via-primary-pink to-primary-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-white mb-6">
            About Us
          </h1>
          <p className="font-alexandria text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover the passionate organizations and dedicated team behind Open Mic Orientation 4.0, 
            committed to shaping the future of academic guidance.
          </p>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-6">
              Our Organizations
            </h2>
            <p className="font-alexandria text-lg text-secondary-700 max-w-3xl mx-auto">
              A collaborative effort between leading student organizations dedicated to academic excellence and professional development.
            </p>
          </div>

          <div className="space-y-12">
            {organizations.map((org, index) => (
              <div key={index} className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${org.color} p-8 lg:p-12 text-white`}>
                <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <h3 className="font-poppins font-bold text-2xl lg:text-3xl mb-4">
                      {org.name}
                    </h3>
                    <p className="font-alexandria text-lg leading-relaxed mb-6">
                      {org.description}
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
                      <h4 className="font-poppins font-semibold text-lg mb-4">Key Highlights</h4>
                      <div className="space-y-2">
                        {org.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="font-alexandria">{stat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-6">
              Our Values
            </h2>
            <p className="font-alexandria text-lg text-secondary-700 max-w-3xl mx-auto">
              The core principles that guide our mission to empower students and shape academic futures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-pink to-primary-purple rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-primary-purple mb-4">
                  {value.title}
                </h3>
                <p className="font-alexandria text-secondary-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-6">
              Our Team
            </h2>
            <p className="font-alexandria text-lg text-secondary-700 max-w-3xl mx-auto">
              Meet the dedicated individuals working tirelessly to make Open Mic Orientation 4.0 an unforgettable experience.
            </p>
          </div>

          {/* Team Photos Placeholder */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-pink to-primary-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-primary-purple mb-2">
                  Team Member {index}
                </h3>
                <p className="font-alexandria text-secondary-600">
                  {teamRoles[(index - 1) % teamRoles.length]}
                </p>
              </div>
            ))}
          </div>

          {/* Team Roles */}
          <div className="bg-gradient-to-r from-primary-purple to-primary-pink rounded-3xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="font-poppins font-bold text-2xl lg:text-3xl mb-4">
                Team Roles & Responsibilities
              </h3>
              <p className="font-alexandria text-lg text-white/90">
                Our diverse team brings together expertise from various domains to ensure event success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamRoles.map((role, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-center">
                  <Zap className="w-8 h-8 mx-auto mb-3 text-primary-blue" />
                  <h4 className="font-poppins font-semibold text-lg">
                    {role}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-6">
            Join Our Mission
          </h2>
          <p className="font-alexandria text-lg text-secondary-700 mb-8">
            Be part of our journey to empower students and shape the future of academic guidance. 
            Together, we can make a lasting impact on the educational landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ieee.sight.essths@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-pink to-primary-purple text-white font-poppins font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Involved
            </a>
            <a
              href="tel:+21625968200"
              className="inline-flex items-center px-8 py-4 border-2 border-primary-purple text-primary-purple font-poppins font-semibold rounded-full hover:bg-primary-purple hover:text-white transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;