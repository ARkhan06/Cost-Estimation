import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Sofa, Home, Building, Calculator, Clock, Users, Target, Package, Shield } from 'lucide-react';

const FurnishingPage = () => {
  const services = [
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Furniture & Fixtures",
      description: "Complete estimation for chairs, tables, desks, cabinets, lighting fixtures, and custom furniture for all project types."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Equipment & Technology", 
      description: "Comprehensive estimates for computers, audiovisual equipment, phones, TVs, and specialized equipment systems."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "FF&E Procurement",
      description: "Detailed analysis for furniture, fixtures, and equipment procurement, delivery, and installation coordination."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored estimates based on specific needs, space requirements, and budget considerations for each project."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Estimates",
      description: "Fast delivery of detailed furnishing estimates with comprehensive breakdowns and project timelines."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Knowledgeable furnishing estimators with experience in residential, commercial, and hospitality projects."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Budget Planning",
      description: "Accurate cost analysis helping clients make informed decisions and stay within project budgets."
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
            backgroundImage: "url('https://images.unsplash.com/photo-1489171078254-c3365d6e359f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D')"
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
                Furnishing Estimation
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Professional furnishing estimation services for furniture, fixtures, and equipment (FF&E) projects. Our expert estimators provide accurate cost analysis for residential and commercial furnishing needs, helping clients make informed decisions while staying within budget for all project types.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all flex items-center gap-2"
              >
                Request Sample Estimate
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
              Our <span className="text-orange-500">Furnishing</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive furnishing estimation services for all FF&E projects with professional expertise and precision
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

      {/* Furnishing Project Importance Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why <span className="text-orange-500">Furnishing Estimates</span> Matter
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Furnishing estimation services are essential for construction and renovation projects as they provide comprehensive understanding of FF&E costs, delivery timelines, and installation requirements. Every furnishing project requires precise estimates to establish budget, timeline, and quality standards.
                </p>
                <p>
                  Our expert furnishing estimators guarantee accurate cost calculations by evaluating space requirements, furniture specifications, equipment needs, and installation complexity. We analyze project requirements to determine optimal FF&E solutions that balance functionality, aesthetics, and budget constraints.
                </p>
                <p>
                  Since furnishing represents a significant portion of project costs and directly impacts user experience, we provide detailed knowledge needed to make informed decisions about furniture selection, equipment procurement, and installation coordination for successful project completion.
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
                <Sofa className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Estimation Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Accurate budget planning for furniture and equipment needs",
                    "Comprehensive cost analysis preventing unexpected expenses", 
                    "Quality selection ensuring durability and functionality",
                    "Timeline coordination with construction and move-in schedules"
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

      {/* Why Choose Digital Estimating Section */}
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
                  <Shield className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
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
                <span className="text-orange-500">Residential</span> & Commercial Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our furnishing estimates serve all project requirements from residential homes to commercial offices, hotels, healthcare facilities, and educational institutions. We provide comprehensive estimations covering furniture selection, fixture specifications, equipment procurement, and installation coordination.
                </p>
                <p>
                  Our FF&E takeoff covers all elements including furniture layouts, fixture installations, equipment specifications, delivery schedules, installation requirements, and warranty considerations with precise cost calculations using industry-standard pricing and vendor relationships.
                </p>
                <p>
                  We differentiate ourselves through extensive vendor networks, experienced furnishing specialists, and commitment to quality and budget adherence. Digital Estimating values client service and produces detailed, itemized furnishing estimates with design expertise and project management experience.
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
              Transform Your <span className="text-orange-500">Space</span> with Accurate Furnishing Estimates!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team accurately estimates furnishing costs based on your specific needs and preferences. We consider project size, furniture type and quality, and customizations to create personalized estimates that help you plan your budget wisely and set priorities for your furnishing needs.
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

export default FurnishingPage;