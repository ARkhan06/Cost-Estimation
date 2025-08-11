import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Hammer, Ruler, Calculator, Clock, Users, Target, Building } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const FramingPage = () => {
  const location = useLocation();
  const services = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Material Cost Analysis",
      description: "Comprehensive analysis of framing materials including lumber, hardware, and structural components."
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Labor & Complexity Assessment", 
      description: "Detailed evaluation of labor requirements based on project size, scope, and complexity factors."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Custom Project Estimation",
      description: "Specialized estimates for new builds, renovations, and custom framing projects of all scales."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precise Cost Forecasting",
      description: "Accurate framing estimates that keep projects on budget and schedule for success."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Turnaround",
      description: "Quick delivery of detailed estimates, usually within a few days of receiving project data."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Resource Optimization",
      description: "Help divide resources properly and prevent costly mistakes in material ordering."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Competitive Bidding",
      description: "Fair and accurate estimates that give contractors competitive advantage in bidding."
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
            backgroundImage: "url('https://images.unsplash.com/photo-1676802011385-39ca3b401ec9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
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
                Framing Estimation
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Framing estimate services are vital to figuring out framing expenses for new builds, renovations, or custom projects. Get precise estimates that help budgeting, resource allocation, and fair bidding among contractors.
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
              Our <span className="text-orange-500">Framing</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive framing estimation services with cutting-edge precision for all construction projects
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

      {/* Framing Cost Factors Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Key <span className="text-orange-500">Cost Factors</span> in Framing
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Several elements influence the cost of framing, and knowing them will allow you to budget for your project properly. Our estimation of framing costs considers the following main expenses and factors.
                </p>
                <p>
                  To suit every task, framing estimates account for many things including the cost of materials, labor, additional fees, and how complex the project is. The right framing estimates matter for keeping projects on budget and schedule.
                </p>
                <p>
                  Good construction projects need framing estimates that show exactly how much framing supplies and costs will be. Right project management needs spot-on forecasting to ensure success.
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
                <Hammer className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost Components Include</h3>
                <ul className="space-y-3">
                  {[
                    "Material costs for lumber and structural components",
                    "Labor rates based on project complexity and location", 
                    "Additional fees for permits and inspections",
                    "Project complexity factors and special requirements"
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

      {/* Why Choose FAZICS Section */}
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
                <span className="text-orange-500">FAZICS</span> - Your Trusted Partner
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  At FAZICS, we are experts at giving you trustworthy and precise framing estimates. These help you make smart choices, avoid surprise costs, and keep your project running on time.
                </p>
                <p>
                  Framing estimate services lessen cost mistakes, help divide resources right, and make bidding fair among contractors. These exact numbers steer project plans and cut down disruption and delay.
                </p>
                <p>
                  We require comprehensive architectural designs, project specifications, and any other pertinent information concerning your framing project to offer the most realistic quotation. The more details you provide, the more exact our framing estimate services will be.
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
              Frame Your <span className="text-orange-500">Success</span> with Accurate Estimates!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Budgeting and planning call for an accurate assessment. Let us help you properly distribute resources, prevent unanticipated expenses, and guarantee your project's financial feasibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to='/contact'>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:scale-105">
                  Contact Us
                </button>
                </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FramingPage;