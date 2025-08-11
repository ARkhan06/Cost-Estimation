import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Layers, Truck, Mountain, Calculator, Clock, Users, Target } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const EarthworkPage = () => {
  const location = useLocation();
  const services = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Site Preparation",
      description: "Detailed cost estimation for land clearing, grading, and site development with precision."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Hauling & Disposal", 
      description: "Precise hauling estimates including debris removal and waste management services."
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Cut & Fill Analysis",
      description: "Accurate quantity takeoffs for excavation and backfill requirements with detailed breakdowns."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Accurate Volume Takeoffs",
      description: "Precise calculations to eliminate costly miscalculations on dirt hauling and excavation."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Faster Turnaround Times",
      description: "Quick delivery so you can focus on moving mountains instead of crunching numbers."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Reduced Bidding Errors",
      description: "Professional estimates that lead to competitive bids and secured projects."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Customized Estimates",
      description: "Tailored estimates for each project from residential builds to infrastructure projects."
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
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
                Earthwork Estimating
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              We provide precise and professional earthwork estimating services including cut & fill, trenching, and site prep – helping contractors bid competitively. Stop leaving money on the table and start securing those projects!
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
              Our <span className="text-orange-500">Earthwork</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specializing in earthwork estimation with cutting-edge precision for all project sizes
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

      {/* What's Included Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What's <span className="text-orange-500">Included</span> in Our Earthwork Estimate
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Earthwork estimates are a tricky business. One miscalculation on dirt hauling or excavation costs, and your project goes from profitable to a sinkhole for your wallet. That's where we come in.
                </p>
                <p>
                  We're a trusted construction estimating company specializing in earthwork takeoffs and pricing. We take the guesswork out of your estimates so you can focus on what you do best: moving mountains of dirt.
                </p>
                <p>
                  Our expert estimators use the latest tools and standards to help you reduce risk and maximize your return with detailed material and quantity takeoffs for every project.
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
                <Mountain className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Estimate Includes</h3>
                <ul className="space-y-3">
                  {[
                    "Cost summary and detailed quantity takeoffs",
                    "Line item wise pricing breakdown", 
                    "Equipment & labor cost calculations",
                    "Comparison with other quotes and alternates",
                    "Allowances and price breakdown by zip code"
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
                  <Layers className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Partner With Us?</h3>
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
                <span className="text-orange-500">Professional</span> Earthwork Estimation
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Forget salaries, benefits, and office space for your estimators. We're a pay-as-you-go service, so you only pay when you need an estimate. This flexible approach helps you manage costs effectively.
                </p>
                <p>
                  Accurate estimates lead to competitive bids. By outsourcing to our experienced earthwork estimators, you can scale your operations without hiring full-time staff, save costs, and win more bids with confidence.
                </p>
                <p>
                  Whether you're prepping land for a residential build or managing large-scale infrastructure projects, we provide accurate calculations for excavation, grading, trenching, hauling, and backfill.
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
              Dig into <span className="text-orange-500">Profits</span> with Accurate Earthwork Estimates!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Feeling buried under the weight of inaccurate estimates and tight deadlines? Let us help you with reliable takeoffs, cost breakdowns, and fast delivery – so you can focus on moving dirt, not crunching numbers.
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

export default EarthworkPage;