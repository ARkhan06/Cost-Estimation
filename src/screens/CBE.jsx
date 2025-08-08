import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Building2, FileBarChart, TrendingUp, Calculator, Clock, Users, Target, Award, ShoppingCart, Briefcase } from 'lucide-react';

const CommercialBidsPage = () => {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Commercial Buildings",
      description: "Office buildings, retail centers, hospitals, hotels, and mixed-use developments with comprehensive cost analysis."
    },
    {
      icon: <FileBarChart className="w-8 h-8" />,
      title: "Cost Estimation", 
      description: "Detailed material takeoffs, labor calculations, and equipment pricing based on project specifications."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Value Engineering",
      description: "Strategic cost optimization and design alternatives to maximize project value and profitability."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision & Accuracy",
      description: "Advanced digital tools and methodologies ensure unparalleled accuracy in commercial estimates."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Turnaround",
      description: "Meet tight commercial bid deadlines with our efficient 24-hour estimation process."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Seasoned professionals with extensive commercial construction experience."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Cost Control",
      description: "Detailed cost breakdowns help you maintain budget control throughout the project."
    }
  ];

  const commercialProjectTypes = [
    "Office Buildings & Corporate Centers",
    "Retail Stores & Shopping Centers", 
    "Restaurants & Entertainment Venues",
    "Hotels & Hospitality Facilities",
    "Healthcare & Medical Centers",
    "Educational Institutions",
    "Warehouses & Industrial Facilities",
    "Mixed-Use Developments"
  ];

  const estimatingServices = [
    {
      title: "Pre-Construction Estimates",
      description: "Early-stage cost assessments for project planning and feasibility analysis."
    },
    {
      title: "Bid Preparation Services",
      description: "Complete bid package preparation with detailed cost breakdowns and specifications."
    },
    {
      title: "Material Takeoffs",
      description: "Comprehensive quantity surveys organized by CSI divisions in Excel format."
    },
    {
      title: "Budget Planning",
      description: "Strategic budget development for owners, developers, and general contractors."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black-900 via-black-800 to-black-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/100"></div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
                Commercial Bidding
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Estimates
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              We bring forth a wealth of experience in estimating commercial projects that sets us apart in the industry. Our seasoned team ensures precision, efficiency, and cost-effectiveness in every commercial estimate we deliver.
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
              Our <span className="text-orange-500">Commercial</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive estimation services for commercial construction projects of all sizes and complexities
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

      {/* Commercial Expertise Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transform Your <span className="text-orange-500">Commercial</span> Visions Into Reality
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Digital Estimating is your trusted partner in transforming commercial construction visions into reality. With an extensive legacy of excellence, our seasoned team of experts understands the intricate dynamics of commercial construction.
                </p>
                <p>
                  We provide reliable estimates to support your project planning and resource allocation. Our precision and detail-oriented approach gives you a comprehensive understanding of your project's cost implications, empowering you to make informed decisions.
                </p>
                <p>
                  From conceptual estimates to detailed takeoffs, our meticulous approach guarantees reliable and precise calculations. Time is a valuable resource in the competitive construction landscape, and our streamlined processes ensure you never miss a bid date again.
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
                <ShoppingCart className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Project Types</h3>
                <div className="space-y-3">
                  {commercialProjectTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Estimation Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-orange-500">Estimation</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial planning to final bid submission, we provide complete estimation support for commercial projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {estimatingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-xl flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
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
                  <Calculator className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Commercial Services?</h3>
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
                <span className="text-orange-500">Digital</span> Precision in Commercial Estimation
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our expert construction cost estimators provide professional commercial estimating services to general contractors and subcontractors. We leverage cutting-edge technology and construction estimating software to deliver meticulous material takeoffs and reliable cost estimates.
                </p>
                <p>
                  The pricing for material, labor, and equipment is done through our developed construction cost databases. We ensure the accuracy of the estimate according to the location of the project by employing zip code based pricing.
                </p>
                <p>
                  Our company provides you with a complete list of materials with detailed descriptions, model and vendor details, along with zip-code based pricing and labor man-hours. These takeoffs are delivered in Excel spreadsheets organized by CSI MasterFormat.
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
              Choose Confidence, Choose Competence – Choose Digital Estimating
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to transform your commercial construction vision into reality with precise, efficient, and cost-effective estimates?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Start Your Commercial Project
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

export default CommercialBidsPage;