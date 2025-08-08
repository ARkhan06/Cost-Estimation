import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, SquareStack, Ruler, Building2, Calculator, Clock, Users, Target } from 'lucide-react';

const ConcretePage = () => {
  const services = [
    {
      icon: <SquareStack className="w-8 h-8" />,
      title: "Concrete Takeoffs",
      description: "Precise quantity takeoffs for slabs, walls, footings, and structural elements with detailed analysis."
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Formwork & Rebar Estimation", 
      description: "Detailed cost projections for formwork, reinforcements, and accessories based on project specs."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Labor & Material Cost Analysis",
      description: "Accurate labor rates and material pricing based on location and project scope requirements."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precise Material Takeoffs",
      description: "Accurate concrete, rebar, and formwork calculations to prevent costly overruns."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast & Reliable Turnaround",
      description: "Quick delivery of detailed estimates to meet your project deadlines."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Location-Based Pricing",
      description: "Regional labor and material costs for accurate local market pricing."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Cut Bidding Errors",
      description: "Professional estimates that increase your chances of winning bids."
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
            backgroundImage: "url('https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
                Concrete Estimating
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Get accurate and professional concrete takeoffs and estimates for residential, commercial, and industrial projects. Our comprehensive services ensure precise cost estimation and effective resource management.
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
              Our <span className="text-orange-500">Concrete</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specializing in concrete estimation with cutting-edge precision for all project sizes
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

      {/* Concrete Takeoff Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-orange-500">Concrete Takeoff</span> Services
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Concrete takeoff is essential to Digital Estimating's concrete estimating services. This process involves carefully reviewing project plans and specifications to determine unique needs and material requirements.
                </p>
                <p>
                  Our concrete takeoff services offer a firm foundation for your project, enabling accurate cost estimation and resource management. We quantify all materials needed for your concrete project with precision and attention to detail.
                </p>
                <p>
                  As a basis for reliable cost estimation, concrete takeoff services prevent costly overruns and ensure effective project management from start to finish.
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
                <SquareStack className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Takeoff Services Include</h3>
                <ul className="space-y-3">
                  {[
                    "Detailed quantity measurements for all concrete elements",
                    "Material specifications and reinforcement calculations", 
                    "Waste minimization through accurate planning",
                    "Integrated costing for complete project budgeting"
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

      {/* Why Choose Us Section */}
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
                  <Building2 className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Cost Factors</h3>
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
                Why Choose <span className="text-orange-500">Digital Estimating?</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Concrete estimating services calculate construction project concrete costs, including materials, labor, and other expenditures. Our estimates are accurate thanks to innovative technology, industry best practices, and skilled estimators.
                </p>
                <p>
                  Materials, staffing, project size and complexity, site conditions, and timeline are important factors we consider. An accurate estimate helps with budgeting, resource allocation, and preventing costly overruns.
                </p>
                <p>
                  Whether it's foundations, walls, or slabs, our experienced estimators help contractors reduce cost overruns, avoid surprises, and win more work with confidence.
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
              Build <span className="text-orange-500">Stronger Bids</span> with Accurate Estimates!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We deliver comprehensive concrete estimates including quantities, labor, material costs, and location-based pricing. Let us help you reduce cost overruns and win more projects.
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

export default ConcretePage;