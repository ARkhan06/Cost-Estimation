import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, Star, ArrowRight, Building, FileText, Users, Calculator, Clock, Target, Award, TrendingUp, Shield } from 'lucide-react';

const PublicBidsPage = () => {
  

  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Government Projects",
      description: "Infrastructure, municipal buildings, and community development projects with precise cost estimation."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Bid Documentation", 
      description: "Complete bid package preparation including detailed cost breakdowns and project specifications."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Competitive Analysis",
      description: "Strategic bidding support to help you win more public sector contracts profitably."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Digital Precision",
      description: "Advanced software and methodologies provide unparalleled accuracy in public sector estimates."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance Assurance",
      description: "Ensure full compliance with government bidding requirements and regulations."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Construction and technology experts specialized in public sector projects."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Turnaround",
      description: "Meet tight public bid deadlines with our efficient estimation process."
    }
  ];

  const publicProjectTypes = [
    "Infrastructure Development",
    "Municipal Buildings", 
    "Schools & Educational Facilities",
    "Hospitals & Healthcare Centers",
    "Parks & Recreation Facilities",
    "Transportation Projects",
    "Water & Sewer Systems",
    "Public Safety Buildings"
  ];

  const testimonials = [
    {
      text: "Digital Estimating helped us win our largest government contract. Their detailed estimates and compliance expertise made all the difference.",
      rating: 5,
      author: "Municipal Contractor"
    },
    {
      text: "Outstanding service for public bids. Their digital approach and accuracy have significantly improved our win rate on government projects.",
      rating: 5,
      author: "Infrastructure Specialist"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black-900 via-black-800 to-black-900 text-white py-20 px-4 overflow-hiddenn">
        <div className="absolute inset-0 bg-black/100"></div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
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
                Public Bids
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Estimates
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Our public bids estimates are not just numbers but blueprints for your public project success. We bring a digital edge to government sector cost estimation with unparalleled accuracy and transparency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all flex items-center gap-2"
              >
                Get Free Sample Estimate
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="tel:+12818990989"
                className="flex items-center gap-3 text-white hover:text-orange-300 transition-colors font-medium"
              >
                <div className="bg-white/10 p-2 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                Have Questions? +1 (281) 899-0989
              </motion.a>
            </div>
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
              Our <span className="text-orange-500">Public Sector</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized estimation services designed for government contracts and public sector projects
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

      {/* Public Bidding Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Navigate <span className="text-orange-500">Government</span> Bidding with Confidence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Welcome to Digital Estimating, your premier partner in revolutionizing construction estimation services for the public sector. With a name synonymous with innovation, we bring a digital edge to the art of estimating costs in government projects.
                </p>
                <p>
                  Our team comprises experts at the intersection of construction and technology. Our advanced software and methodologies provide unparalleled accuracy, offering a level of transparency that empowers contractors and subcontractors to bid confidently on public projects.
                </p>
                <p>
                  For public project bids, agencies are generally required to issue an open invitation to qualifying contractors who are registered to work on government construction jobs. We help you navigate this complex process with expertise and precision.
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
                <Building className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Public Project Types</h3>
                <div className="grid grid-cols-2 gap-3">
                  {publicProjectTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                  <FileText className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Digital Estimating?</h3>
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
                <span className="text-orange-500">Digital</span> Advantage in Public Bidding
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Public projects require a strategic approach that combines accurate cost estimation, regulatory compliance, and competitive pricing. Our digital methodologies ensure you submit winning bids while maintaining profitability.
                </p>
                <p>
                  From infrastructure development to community initiatives, we've helped contractors successfully navigate the complex world of government contracting. Our commitment to accuracy and efficiency transforms visions into cost-effective realities.
                </p>
                <p>
                  We offer material takeoffs in both PDF and Excel formats, encompassing comprehensive lists of project materials and tasks, organized division by division with cross-references to corresponding drawings.
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
              Ready to win your next government contract?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Start Your Public Bid
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

export default PublicBidsPage;