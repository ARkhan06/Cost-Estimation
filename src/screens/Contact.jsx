import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight, Send, User, MessageSquare } from 'lucide-react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Number",
      info: "+1 (281) 899-0989",
      description: "Available Monday - Friday, 8:00 AM - 6:00 PM CST"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Address",
      info: "info@digitalestimating.com",
      description: "Get response within 24 hours"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Office Location",
      info: "Houston, Texas, USA",
      description: "Serving contractors nationwide"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Business Hours",
      info: "Mon - Fri: 8:00 AM - 6:00 PM",
      description: "Saturday: 9:00 AM - 2:00 PM CST"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Contact
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                FAZICS
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Ready to transform your construction bidding process? Get in touch with our expert team for accurate estimates, 
              fast turnaround times, and professional construction estimating services.
            </p>
            
           
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in <span className="text-orange-500">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss your next construction project and how we can help you win more bids
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <div className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <div className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Project Description *
                  </div>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                {/* reCAPTCHA Placeholder */}
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex items-center justify-center">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-gray-400 rounded bg-white"></div>
                    <span className="text-gray-600">I'm not a robot</span>
                    <div className="ml-auto">
                      <div className="text-xs text-gray-500">reCAPTCHA</div>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <p className="text-gray-600 mb-8">
                  Ready to get started? Reach out to us through any of the channels below. 
                  Our team is here to help you with all your construction estimating needs.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors"
                    >
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-3 rounded-xl flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-orange-600 font-semibold mb-1">{info.info}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      
    </div>
  );
};

export default ContactUsPage;