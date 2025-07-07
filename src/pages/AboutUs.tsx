import React, { useState } from 'react';
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

  const sightExcomImages = [
    '/sight excom/WhatsApp Image 2025-06-24 à 01.59.18_c651cd39.jpg',
    '/sight excom/WhatsApp Image 2025-06-24 à 01.59.18_c4029d68.jpg',
    '/sight excom/WhatsApp Image 2025-06-24 à 01.59.09_40c2e205.jpg',
    '/sight excom/WhatsApp Image 2025-06-24 à 01.59.10_92b1f21e.jpg',
    '/sight excom/WhatsApp Image 2025-06-24 à 01.59.18_1619c454.jpg',
  ];
  const wieExcomImages = [
    '/wie excom/1741806488553.jpeg',
    '/wie excom/1741806488553 - Copy.jpeg',
    '/wie excom/1741806488553 - Copy (3).jpeg',
    '/wie excom/1741806488553 - Copy (4).jpeg',
    '/wie excom/1741806488553 - Copy (5).jpeg',
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const openModal = (img) => { setModalImg(img); setModalOpen(true); };
  const closeModal = () => setModalOpen(false);

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
                    {/* Organization Logo */}
                    {org.name === 'IEEE ESSTHS SB' && (
                      <img src="/ieee essths sb logo.png" alt="IEEE ESSTHS SB Logo" className="h-16 w-auto mb-4 bg-white rounded-xl shadow-md p-2 inline-block" />
                    )}
                    {org.name === 'SIGHT Group' && (
                      <img src="/sightlogo.png" alt="SIGHT Group Logo" className="h-16 w-auto mb-4 bg-white rounded-xl shadow-md p-2 inline-block" />
                    )}
                    {org.name === 'WIE Affinity Group' && (
                      <img src="/wie logo.png" alt="WIE Affinity Group Logo" className="h-16 w-auto mb-4 bg-white rounded-xl shadow-md p-2 inline-block" />
                    )}
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
            {/* SIGHT Group */}
            <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-pink to-primary-blue p-8 lg:p-12 text-white`}>
              {/* SIGHT ExCom Gallery */}
              <div className="mt-8">
                <h4 className="font-poppins font-semibold text-lg mb-4 text-white">SIGHT ExCom</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {sightExcomImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`SIGHT ExCom ${i+1}`}
                      className="rounded-2xl object-cover w-full h-48 shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl border-4 border-white"
                      onClick={() => openModal(img)}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* WIE Affinity Group */}
            <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-purple to-primary-pink p-8 lg:p-12 text-white`}>
              {/* WIE ExCom Gallery */}
              <div className="mt-8">
                <h4 className="font-poppins font-semibold text-lg mb-4 text-white">WIE ExCom</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {wieExcomImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`WIE ExCom ${i+1}`}
                      className="rounded-2xl object-cover w-full h-48 shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl border-4 border-white"
                      onClick={() => openModal(img)}
                    />
                  ))}
                </div>
              </div>
            </div>
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

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={closeModal}>
          <img src={modalImg} alt="ExCom Large" className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white" />
        </div>
      )}
    </div>
  );
};

export default AboutUs;