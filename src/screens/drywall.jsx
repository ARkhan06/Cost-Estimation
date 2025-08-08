import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Square, Layers, Calculator, Clock, Users, Target, Building } from 'lucide-react';

const DrywallPage = () => {
  const services = [
    {
      icon: <Square className="w-8 h-8" />,
      title: "Wall & Partition Estimation",
      description: "Precise measurements and cost analysis for interior walls, partitions, and drywall installations."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Ceiling Installation Costs", 
      description: "Complete estimation for drywall ceiling installations including materials and labor calculations."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Finishing & Taping Services",
      description: "Detailed cost analysis for drywall finishing, taping, and preparation work using modern techniques."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precise Square Footage",
      description: "Advanced takeoff software ensures accurate square footage measurements for all projects."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Turnaround",
      description: "Fast and reliable estimates delivered within a few working days of receiving project details."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Analysis",
      description: "Professional estimators analyze labor, materials, and project complexity for accurate results."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Comprehensive Reports",
      description: "Detailed breakdown showing where every dollar will be used in your drywall installation."
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
            backgroundImage: "url('https://t3.ftcdn.net/jpg/14/12/13/18/360_F_1412131841_1gNPMK6yqahEw6I3YuaqwV9KH4PVFvY8.jpg')"
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
                Drywall Estimation
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Accurate determination of expenses related to drywall installation projects depends on professional drywall estimating services. We provide thorough analysis of labor, materials, and other elements for complete cost estimates.
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
              Our <span className="text-orange-500">Drywall</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional drywall estimation services for residential and commercial projects with cutting-edge precision
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

      {/* Drywall Estimation Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-orange-500">Estimation</span> Process
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our drywall estimators first analyze drawing plans and systematic bid paperwork to identify the scope of projects. We then measure walls, partitions, and ceilings using point-and-click techniques utilizing the latest takeoff software, Planswift.
                </p>
                <p>
                  Digital software reduces the possibility of mistakes and guarantees correct square footage measurement. Our comprehensive estimates help you grasp the financial elements of your drywall installation, facilitating improved project planning and budgeting.
                </p>
                <p>
                  Using expert drywall estimating services guarantees a more precise budget for your project, saves time, and helps to lower mistakes while ensuring successful project execution.
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
                <Square className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Includes</h3>
                <ul className="space-y-3">
                  {[
                    "Analysis of drawing plans and project specifications",
                    "Point-and-click measurements using Planswift software", 
                    "Accurate square footage calculations for all surfaces",
                    "Comprehensive material and labor cost breakdowns"
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
                  <Building className="w-12 h-12 text-orange-500 mb-4" />
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
                <span className="text-orange-500">Comprehensive</span> Cost Analysis
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our drywall estimating services at Digital Estimating are designed to provide exact cost analyses for both residential and commercial projects. Our staff estimates expenses for drywall installation using cutting-edge software and great industry knowledge.
                </p>
                <p>
                  Our thorough estimate report shows all expenses of your drywall installation project, helping you see where every dollar will be used. We will go over the estimate with you, breaking out each element and responding to any inquiries you may have.
                </p>
                <p>
                  Selecting Digital Estimating for your drywall estimating services guarantees precise, comprehensive, and consistent cost estimates that help you plan and execute your projects successfully within budget and timeline.
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
              Build <span className="text-orange-500">Perfect Walls</span> with Accurate Estimates!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our delight comes from providing accurate and dependable drywall estimating services to enable you to plan and carry out your projects properly. Get customized estimates that fit your particular demands and budget.
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

export default DrywallPage;