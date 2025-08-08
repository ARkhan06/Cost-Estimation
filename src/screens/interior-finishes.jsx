import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Brush, Home, Layers, Calculator, Clock, Users, Target, Palette, Shield } from 'lucide-react';

const InteriorFinishesPage = () => {
  const services = [
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Interior Finishes",
      description: "Complete estimation for drywall, ceilings, painting, flooring, tiles, wallpaper, and specialized interior coatings."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Exterior Finishes", 
      description: "Comprehensive estimates for stucco, EFIS, siding, stone finishes, metal panels, and exterior coating systems."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Specialized Coatings",
      description: "Detailed analysis for metallics, patinas, chrome finishes, DTM coatings, and high-performance finish systems."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision & Accuracy",
      description: "Professional evaluation ensuring exact material quantities and minimizing waste in finish applications."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24-48 Hour Delivery",
      description: "Fast turnaround with comprehensive interior and exterior finishes estimates based on project scope."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Advanced Technology",
      description: "Using professional tools like PlanSwift, Blue Beam, and AccuBid with RSMeans pricing databases."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Detailed Breakdowns",
      description: "Complete cost analysis covering materials, labor, application methods, and finish specifications."
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
            backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D')"
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
                Interior Finishes Estimation
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Professional interior and exterior finishes estimation services providing accurate cost analysis for painting, drywall, ceilings, flooring, stucco, and specialized coatings. Our expert estimators deliver comprehensive breakdowns using advanced technology and industry expertise.
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
              Our <span className="text-orange-500">Interior Finishes</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive interior and exterior finishes estimation services with professional precision and accuracy
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

      {/* Finishes Project Importance Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why <span className="text-orange-500">Finishes Estimates</span> Matter
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Interior and exterior finishes estimation services are essential for construction projects as they provide comprehensive understanding of material costs, application methods, and quality requirements. Every finishing project requires precise estimates to establish scope, budget, and aesthetic standards.
                </p>
                <p>
                  Our expert finishes estimators guarantee accurate cost calculations by evaluating surface preparations, material specifications, labor requirements, and application techniques. We analyze project specifications to determine optimal finishing systems and quality levels for successful completion.
                </p>
                <p>
                  Since finishes significantly impact project value and client satisfaction, we provide detailed knowledge needed to make informed decisions about materials, application methods, quality standards, and maintenance requirements for exceptional project outcomes.
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
                <Palette className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Estimation Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Accurate material quantities preventing waste and shortages",
                    "Precise application methods and labor cost calculations", 
                    "Quality control ensuring finish durability and appearance",
                    "Cost optimization balancing aesthetics with budget constraints"
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
                <span className="text-orange-500">Comprehensive</span> Finishes Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our finishes estimates serve all project requirements from residential renovations to large commercial developments. We provide comprehensive estimations covering interior painting, drywall installation, ceiling systems, flooring, and exterior finishes including stucco, siding, and specialized coatings.
                </p>
                <p>
                  Our finishes takeoff covers all elements including surface preparation, primer applications, base coats, finish coats, textures, decorative finishes, protective coatings, and maintenance requirements with precise material and labor calculations using advanced estimation software.
                </p>
                <p>
                  We differentiate ourselves through cutting-edge technologies like PlanSwift and Blue Beam, experienced finishes estimators, and commitment to accuracy using RSMeans pricing databases. Digital Estimating values client service and produces detailed, itemized finishes estimates with industry expertise and quality standards.
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
              Perfect Your <span className="text-orange-500">Finishes</span> with Accurate Estimates!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We provide detailed breakdowns for interior and exterior finishes, eliminating guesswork and ensuring comprehensive understanding of costs associated with your finishing projects. Get precise estimates that minimize material waste and prevent financial burdens.
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

export default InteriorFinishesPage;