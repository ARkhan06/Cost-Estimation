import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, Star, ArrowRight, Wrench, Zap, Droplets, Calculator, Clock, Users, Target, Award } from 'lucide-react';

const MEPPage = () => {
 
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Mechanical Systems",
      description: "HVAC, ventilation, and mechanical equipment estimation with precision and expertise."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electrical Systems", 
      description: "Complete electrical estimation including wiring, panels, fixtures, and power systems."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Plumbing Systems",
      description: "Comprehensive plumbing estimation for residential and commercial projects."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Unparalleled Precision",
      description: "Our cutting-edge digital technologies ensure accuracy in every estimate."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time & Cost Savings",
      description: "Save time and lighten stress by outsourcing to our expert services."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Competitive Advantage",
      description: "Stay competitive with accurate and timely project estimates."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Flexible Scaling",
      description: "Scale your estimating needs up or down without hiring additional staff."
    }
  ];

 

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black-900 via-black-800 to-black-900 text-white py-20 px-4 overflow-hiddenn">
        <div className="absolute inset-0 bg-black/80"></div>
         <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
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
                MEP Estimating
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Redefined
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              We redefine MEP (Mechanical, Electrical, and Plumbing) estimating services through the integration of cutting-edge digital technologies. Our dedicated team provides unparalleled precision and efficiency in every estimate.
            </p>
            
          
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">MEP</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specializing in mechanical, electrical, and plumbing services with cutting-edge precision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl w-fit mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plumbing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional <span className="text-orange-500">Plumbing</span> Estimation
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Getting plumbing estimation services is vital to ensure you stay affordable enough whether you are redesigning your home or need plumbing work done. We offer accurate plumbing estimation services for all positions, regardless of how huge or small.
                </p>
                <p>
                  Our estimator can assist you with sorting out how much your work will cost, including work, plumbing supplies, and other expenses that surface. As a feature of our plumbing estimation services, we cautiously measure the plumbing material you will require for your work.
                </p>
                <p>
                  When you utilize our plumbing estimation services, you can rest assured that you will get the most ideal cost for your work. We take time to completely comprehend what you want and provide a full breakdown of expenses.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Droplets className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Plumbing Expertise</h3>
                <ul className="space-y-3">
                  {[
                    "Accurate cost calculations for all project sizes",
                    "Detailed material quantity assessments", 
                    "Complete breakdown of labor and supply costs",
                    "Competitive pricing analysis"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mechanical Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Wrench className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Outsource to Us?</h3>
                  <div className="grid gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-orange-500">Mechanical</span> Estimating Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Mechanical estimating services in the United States are critical in ensuring the success of any construction project that involves mechanical systems. Mechanical estimating involves the calculation of costs and quantities related to mechanical systems, such as HVAC, plumbing, and electrical systems.
                </p>
                <p>
                  To save time and lighten the stress on your own team, outsource mechanical estimation to our expert services. We can help you stay competitive in the market by providing you with accurate and timely project estimates, allowing you to bid more effectively and win more projects.
                </p>
                <p>
                  Outsourcing mechanical estimating to us can provide you with the flexibility to scale up or down your estimating needs as required, without the need to hire additional in-house staff.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Final CTA */}
      <section className="py-16 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Let's discuss how we can help you in estimating your upcoming bids and projects
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Start Your Project
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="tel:+12818990989"
                className="flex items-center gap-3 text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                <Phone className="w-5 h-5" />
                +1 (281) 899-0989
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MEPPage;