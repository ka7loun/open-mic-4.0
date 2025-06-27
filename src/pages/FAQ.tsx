import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Who is Open Mic for?",
      answer: "Any student who is at a turning point in their academic journey,  whether they've just finished Bac, Prépa, or a license degree."
    },
    {
      question: "Is the event only for IEEE members?",
      answer: "No! Everyone is welcome, and you'll learn how to get involved in IEEE if you're interested."
    },
    {
      question: "Is it free?",
      answer: "Yes, participation is free of charge,  but spots are limited, so registration is required."
    },
    {
      question: "Will there be one-on-one interaction with speakers?",
      answer: "Yes! Each session includes time for questions and discussion with the speakers."
    },
    {
      question: "What if I don't know what I want to study yet?",
      answer: "That's exactly why Open Mic exists,  to help you explore, ask questions, and leave with more clarity."
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-purple via-primary-pink to-primary-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-alexandria text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about Open Mic Orientation 4.0. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl border border-secondary-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-secondary-50 transition-colors duration-200"
                >
                  <h3 className="font-poppins font-semibold text-lg text-primary-purple pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-6 h-6 text-primary-pink" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-primary-pink" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-8 pb-6 animate-slide-up">
                    <p className="font-alexandria text-secondary-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary-purple to-primary-pink rounded-3xl p-8 lg:p-12 text-white">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-primary-blue" />
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl mb-6">
              Still Have Questions?
            </h2>
            <p className="font-alexandria text-lg text-white/90 mb-8">
              Our team is here to help! Don't hesitate to reach out if you need more information 
              about Open Mic Orientation 4.0 or have specific questions about your academic journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ieee.sight.essths@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-purple font-poppins font-semibold rounded-full hover:bg-secondary-50 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Email Us
              </a>
              <a
                href="tel:+21625968200"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-poppins font-semibold rounded-full hover:bg-white hover:text-primary-purple transition-all duration-300"
              >
                Call Us
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="font-alexandria text-white/80">
                <strong>Quick Contact:</strong><br />
                📧 ieee.sight.essths@gmail.com<br />
                📞 +216 25 968 200
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-primary-purple mb-6">
              Quick Tips for Participants
            </h2>
            <p className="font-alexandria text-lg text-secondary-700 max-w-3xl mx-auto">
              Make the most of your Open Mic Orientation 4.0 experience with these helpful tips.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Come Prepared",
                description: "Bring specific questions about your academic interests and career goals to make the most of Q&A sessions."
              },
              {
                title: "Network Actively",
                description: "Take advantage of breaks and networking opportunities to connect with speakers and fellow participants."
              },
              {
                title: "Take Notes",
                description: "Bring a notebook to jot down key insights, contact information, and action items from the sessions."
              },
              {
                title: "Be Open-Minded",
                description: "Explore tracks outside your comfort zone - you might discover new interests and opportunities."
              },
              {
                title: "Follow Up",
                description: "Connect with speakers and mentors after the event to continue the conversation and build relationships."
              },
              {
                title: "Share Your Experience",
                description: "Help us improve future events by providing feedback and sharing your experience with others."
              }
            ].map((tip, index) => (
              <div key={index} className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-6 border border-secondary-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-poppins font-bold text-xl text-primary-purple mb-3">
                  {tip.title}
                </h3>
                <p className="font-alexandria text-secondary-700 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;