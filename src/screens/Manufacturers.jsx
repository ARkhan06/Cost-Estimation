import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Building2, Clock, Headphones, DollarSign, Shield, Users, Target, TrendingUp, FileText } from 'lucide-react';

const ManufacturersPage = () => {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Registered & Experienced",
      description: "We are registered in USA operating from last 7 years with extensive industry knowledge."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Turnaround", 
      description: "Our quick turnaround allows you ample time before the bid date to review and prepare."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Technical Support",
      description: "Our team is well-prepared to address and resolve any inquiries you may have."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Accurate Pricing",
      description: "We take into account the current market volatility and price fluctuations for precision."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Government Trusted",
      description: "Trusted by US Government for federal and state projects domestically and internationally."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Diverse Clientele",
      description: "Serving private, government, and military clients with specialized expertise."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Proven Experience",
      description: "Extensive experience with complex federal and state government projects."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Strategic Partnership",
      description: "Positioned as a trusted partner for large-scale construction projects."
    }
  ];

  const vbmFeatures = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Proposal Creation",
      description: "Complete bid documentation and proposal development services."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Bid Analysis",
      description: "Comprehensive analysis to improve your bidding strategy and success rate."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Subcontractor ID",
      description: "Identify and connect with potential qualified subcontractors for your projects."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "SWOT Analysis",
      description: "Strategic analysis of strengths, weaknesses, opportunities, and threats in bidding."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
         <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
                Estimating Services
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                For Manufacturers
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Feel free to request a previous project estimate for a comprehensive review of our detailed coverage. We provide specialized estimating services tailored for manufacturing industry needs.
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
              Why Choose <span className="text-orange-500">Digital Estimating</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive takeoff services designed specifically for manufacturers with precision and reliability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl w-fit mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Trust Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-orange-500">Trusted</span> by the Best
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Digital Estimating offers construction estimating services for a wide range of projects, including private, government, and military clients. We have earned the trust of the US Government through our consistent delivery of accurate and reliable estimates.
                </p>
                <p>
                  Our extensive experience with federal and state government projects, both domestically and internationally, positions us as a trusted partner in the construction industry. We understand the unique requirements and stringent standards required for government projects.
                </p>
                <p>
                  With over 1,300 verified 5-star reviews, we continue to demonstrate our commitment to excellence and precision in every project we undertake, regardless of size or complexity.
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
                <Shield className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h3>
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Virtual Bid Manager Section */}
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
                  <Users className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">VBM Service Features</h3>
                  <div className="grid gap-4">
                    {vbmFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white text-center">
                    <div className="text-2xl font-bold mb-1">2.5x</div>
                    <div className="text-sm">Growth in Overall Bidding</div>
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
                Introducing <span className="text-orange-500">Virtual Bid Manager</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We understand the value of your time that's why we remotely assist your company with bid management, including proposal creation, bid analysis, identifying potential subcontractors and SWOT analysis of the bidding process.
                </p>
                <p>
                  Save 60% of your overheads cost by availing our Virtual Bid Management Service. You can delegate your daily tasks to Virtual Bid Manager (VBM) and save your time, effort, and money while increasing your chances of winning more bids.
                </p>
                <p>
                  Our VBM service is specifically designed to help contractors and manufacturers expand their business through strategic bid management and improved win rates.
                </p>
              </div>
              
              <motion.div 
                className="mt-8 p-6 bg-orange-100 rounded-lg border-l-4 border-orange-500"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-bold text-gray-900 mb-2">Save 60% Overhead Costs</h4>
                <p className="text-gray-700 text-sm">
                  Contractors save significant overhead costs just by hiring Virtual Bid Manager and achieve 2.5x growth in overall bidding success.
                </p>
              </motion.div>
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
              Ready to Transform Your Bidding Process?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our estimating services and Virtual Bid Manager can help you win more projects and grow your manufacturing business.
            </p>
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

export default ManufacturersPage;