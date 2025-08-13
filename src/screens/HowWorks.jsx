import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calculator, DollarSign, FileSpreadsheet, Truck, CheckCircle, ArrowRight, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
const HowWeWorkPage = () => {
  const processSteps = [
    {
      number: "01",
      title: "Plan Review",
      description: "We review drawings, specifications, and scope.",
      details: "Our expert team carefully analyzes your project documents, including architectural drawings, engineering specifications, and project scope to ensure complete understanding of requirements.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02", 
      title: "Quantity Takeoffs",
      description: "We measure and break down items by CSI divisions.",
      details: "Using advanced measuring tools and industry-standard CSI MasterFormat divisions, we perform accurate quantity takeoffs for all materials, labor, and equipment needed for your project.",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      number: "03",
      title: "Costing & Pricing", 
      description: "Apply updated market rates for accurate pricing.",
      details: "We leverage current market data, vendor relationships, and regional pricing to ensure your estimates reflect real-world costs and competitive market rates.",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "04",
      title: "Estimate Compilation",
      description: "Organize in Excel by CSI divisions with subtotals and total.",
      details: "All data is compiled into comprehensive Excel spreadsheets, organized by CSI divisions with clear breakdowns, subtotals, and final project totals for easy review and analysis.",
      icon: <FileSpreadsheet className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      number: "05",
      title: "Delivery & Support",
      description: "Provide PDF and editable formats, plus clarifications if needed.",
      details: "You receive professional estimates in both PDF and editable Excel formats, along with ongoing support for any questions or clarifications throughout your bidding process.",
      icon: <Truck className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Turnaround",
      description: "24-48 hour delivery on most projects"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Certified estimators with 10+ years experience"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Accuracy",
      description: "98% accuracy rate on all estimates"
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
            backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
                How We
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Work
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Our proven 5-step process ensures accurate, detailed construction estimates that help you win more bids and maximize project profitability.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="text-orange-400">
                    {benefit.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{benefit.title}</div>
                    <div className="text-sm text-gray-300">{benefit.description}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial plan review to final delivery, we follow a systematic approach to ensure accuracy and efficiency in every estimate.
            </p>
          </motion.div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`bg-gradient-to-r ${step.color} text-white p-4 rounded-2xl`}>
                      {step.icon}
                    </div>
                    <div className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-lg text-gray-600 font-medium">{step.description}</p>
                  <p className="text-gray-700 leading-relaxed">{step.details}</p>
                  
                  
                </div>

                {/* Visual Element */}
                <div className="lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className={`bg-gradient-to-br ${step.color} rounded-3xl p-8 shadow-2xl`}>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-white">
                        <div className="flex items-center justify-between mb-6">
                          <div className="text-4xl font-bold">Step {step.number}</div>
                          <CheckCircle className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                        <div className="space-y-3">
                          <div className="h-2 bg-white/30 rounded-full">
                            <div className="h-2 bg-white rounded-full w-full"></div>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Connecting Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                        <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-blue-500 rounded-full"></div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Our <span className="text-orange-500">Process Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach has been refined through thousands of successful projects, ensuring consistency and accuracy every time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl w-fit mb-6">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thorough Documentation</h3>
              <p className="text-gray-700">
                Every step is documented with detailed breakdowns, ensuring transparency and easy review of all estimate components.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200"
            >
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-xl w-fit mb-6">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Standards</h3>
              <p className="text-gray-700">
                We follow CSI MasterFormat divisions and industry best practices to ensure estimates meet professional standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl w-fit mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-700">
                Multiple review checkpoints and quality control measures ensure accuracy and completeness in every estimate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience Our Process?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us handle your next construction estimate with our proven 5-step process.
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

export default HowWeWorkPage;