import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Settings, Package, Wrench, Building2, Zap, Shield, Cog, ChevronRight, CheckCircle, Target, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
const SpecializedServicesPage = () => {
  const mainServices = [
    {
      icon: <Factory className="w-12 h-12" />,
      title: "Industrial Manufacturing",
      description: "Comprehensive estimates for manufacturing facilities, production lines, and industrial equipment installations with precision costing.",
      features: [
        "Factory Layout Design",
        "Production Equipment Costs",
        "Safety System Integration", 
        "Quality Control Implementation",
        "Material Flow Analysis",
        "Utility Infrastructure"
      ],
      specialties: ["Automotive Plants", "Food Processing", "Pharmaceutical", "Electronics Manufacturing"]
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Equipment & Machinery",
      description: "Detailed cost analysis for manufacturing equipment procurement, installation, and commissioning services.",
      features: [
        "Machinery Cost Analysis",
        "Installation Labor Estimates",
        "Testing & Commissioning",
        "Maintenance Planning",
        "Equipment Specifications",
        "Vendor Coordination"
      ],
      specialties: ["Heavy Machinery", "Precision Tools", "Automated Systems", "Custom Equipment"]
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Supply Chain Integration",
      description: "Cost estimation for supply chain infrastructure, warehousing, logistics systems, and distribution networks.",
      features: [
        "Warehouse Design & Costing",
        "Material Handling Systems",
        "Inventory Management Solutions",
        "Distribution Center Setup",
        "Logistics Infrastructure",
        "Storage Optimization"
      ],
      specialties: ["Cold Storage", "Automated Warehouses", "Cross-Dock Facilities", "Multi-Modal Hubs"]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Process Optimization",
      description: "Estimating services for manufacturing process improvements, efficiency upgrades, and lean manufacturing implementations.",
      features: [
        "Process Re-engineering",
        "Automation Integration",
        "Lean Manufacturing Setup",
        "Workflow Optimization",
        "Energy Efficiency Upgrades",
        "Digital Transformation"
      ],
      specialties: ["Six Sigma Projects", "Kaizen Implementation", "IoT Integration", "Smart Factory Setup"]
    }
  ];

  const additionalServices = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Civil Engineering",
      description: "Structural analysis, site preparation, and civil works for industrial projects.",
      highlights: ["Foundation Design", "Site Development", "Infrastructure Planning"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electrical Systems",
      description: "Power distribution, control systems, and electrical infrastructure estimates.",
      highlights: ["Power Systems", "Control Panels", "Lighting Design"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety & Compliance",
      description: "Safety system design, regulatory compliance, and risk assessment services.",
      highlights: ["OSHA Compliance", "Safety Equipment", "Risk Mitigation"]
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Material Analysis",
      description: "Detailed material specifications, cost analysis, and procurement strategies.",
      highlights: ["Material Selection", "Cost Optimization", "Supplier Analysis"]
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Industry Expertise",
      description: "Deep understanding of manufacturing processes and industry-specific requirements."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "Strategic cost analysis to maximize efficiency and minimize project expenses."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Specialized professionals with extensive manufacturing and industrial experience."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring accurate and reliable estimates."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-4 overflow-hidden ">
        <div className="absolute inset-0 bg-black/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight mt-12">
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Specialized Services
              </span>
            </h1>
            
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
              Industrial manufacturing estimates, equipment analysis, and process optimization projects with detailed material and labor breakdowns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-500">Core Specializations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive specialized services designed for complex industrial and manufacturing projects
            </p>
          </motion.div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-50 p-8 rounded-3xl">
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-orange-500 mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Industry Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.specialties.map((specialty, specialtyIndex) => (
                            <span key={specialtyIndex} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <ChevronRight className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional <span className="text-orange-500">Specialized Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementary services to support your complete project requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-white p-4 rounded-xl shadow-sm mb-6 w-fit">
                  <div className="text-orange-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-orange-500">Specialized Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven expertise and dedicated focus on delivering exceptional results for specialized projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-orange-100 p-4 rounded-xl w-fit mx-auto mb-4">
                  <div className="text-orange-500">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Specialized Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get expert consultation and detailed estimates for your specialized manufacturing and industrial projects.
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

export default SpecializedServicesPage;