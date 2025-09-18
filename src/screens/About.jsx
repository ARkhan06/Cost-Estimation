import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Building2, Clock, Headphones, DollarSign, Shield, Users, Target, TrendingUp, Award, Zap, Eye, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const AboutCompanyPage = () => {
  const location = useLocation();
  const leadership = [
    {
      icon: <Users className="w-8 h-8" />,
      name: "Jace Carter",
      title: "Founder | CEO & Chairman",
      message: "We founded FAZICS with a clear mission: to streamline and revolutionize the construction estimation process through cutting-edge technology and expert knowledge. For too long, the industry has relied on outdated methods that are time-consuming, error-prone, and often lead to costly overruns.",
      vision: "Join us as we redefine the future of construction estimation."
    }
  ];

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Registered & Experienced",
      description: "We are registered in USA operating from last 7 years with proven track record."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Turnaround", 
      description: "Our quick turnaround allows you ample time before the bid date to review and prepare."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Technical Support",
      description: "Our team is well-prepared to address and resolve any inquiries you may have."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Accurate Pricing",
      description: "We take into account the current market volatility and price fluctuations for precision."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/80"></div>
         <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
                Welcome to
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                FAZICS®
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Where excellence and accuracy meet when providing construction estimating services. Our unrivalled knowledge guarantees you win your projects and offers industry-leading estimates to enable you to get success in public, residential, and commercial bids.
            </p>
            
           
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Mission & Vision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionizing construction estimation through innovation and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl w-fit mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to revolutionize the construction industry by simplifying the bidding process for general contractors and subcontractors across the USA. We understand the demanding nature of the construction business and recognize the challenges faced by both newcomers and seasoned professionals. Our commitment is to provide a seamless and efficient solution, freeing contractors from the time-consuming tasks of quantity takeoffs and estimating.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-xl w-fit mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                We envision a construction industry where every contractor, regardless of experience, can navigate the complexities of bidding effortlessly. Our vision is to be the go-to partner for general contractors and subcontractors, providing them with accurate and timely cost estimates that elevate their competitiveness and success. We strive to be the catalyst that transforms the traditional approach to estimating.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-orange-500">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation in construction estimation
            </p>
          </motion.div>

          <div className="space-y-16">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-3 rounded-xl w-fit mb-4">
                        {leader.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                      <p className="text-orange-600 font-semibold mb-4">{leader.title}</p>
                      <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
                        <MessageCircle className="w-6 h-6 text-orange-600 mb-2" />
                        <p className="text-sm text-gray-700 italic">"{leader.vision}"</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h4 className="text-3xl font-bold text-gray-900 mb-6">Message from {leader.name.split(' ')[0]}</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {leader.message}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-orange-500">FAZICS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are trusted construction estimating services providers helping contractors and sub-contractors bid more
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl w-fit mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Trust Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-orange-500">Trusted</span> by the Best
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  FAZICS offers construction estimating services for a wide range of projects, including private, government, and military clients. We have earned the trust of the US Government through our consistent delivery of accurate and reliable estimates.
                </p>
                <p>
                  With our dedication, dependability and quality, we help you succeed on every bid. Our unrivalled knowledge guarantees you win your projects and offers industry-leading estimates to enable you to get success in public, residential, and commercial bids.
                </p>
                <p>
                  By offering on-demand estimating services, we empower businesses to optimize their resources, particularly aiding new entrants who may not bid frequently. Our goal is to alleviate the burden of fixed monthly expenses by providing flexible and cost-effective estimating solutions.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Shield className="w-16 h-16 text-orange-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Government Trusted</h3>
                <p className="text-gray-600 mb-6">
                  Serving private, government, and military clients with the highest standards of accuracy and reliability.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">7+</div>
                    <div className="text-sm text-gray-600">Years</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">100%</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
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
              Ready to Transform Your Construction Estimating?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of contractors who trust FAZICS for accurate, fast, and reliable construction estimates.
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

export default AboutCompanyPage;