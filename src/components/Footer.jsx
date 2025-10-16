// components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "General Contractors",
      links: [
        { name: "Public Bids Estimates", path: "/public-bids" },
        { name: "Commercial Bids Estimates", path: "/commercial-bids" },
        { name: "Residential Bids Estimates", path: "/residential-bids" }
      ]
    },
    {
      title: "Subcontractor Services",
      links: [
        { name: "MEP", path: "/mep" },
        { name: "Earthwork", path: "/earthwork" },
        { name: "Concrete", path: "/concrete" },
        { name: "Framing", path: "/framing" },
        { name: "Drywall", path: "/drywall" },
        { name: "Flooring", path: "/flooring" }
      ]
    },
    
    {
      title: "Specialized Services",
      links: [
        { name: "Industrial Manufacturing", path: "/specialized-services" },
        { name: "Equipment & Machinery", path: "/specialized-services" },
        { name: "Supply Chain Integration", path: "/specialized-services" },
        { name: "Process Optimization", path: "/specialized-services" },
        { name: "Civil Engineering", path: "/specialized-services" },
        { name: "Material Analysis", path: "/specialized-services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <button onClick={() => window.location.href = '/'}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-4 cursor-pointer"
              >
                FAZICS®
              </motion.div>
            </button>
            
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Professional construction estimation services powered by precision and accuracy.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a
                href="tel:+12818990989"
                whileHover={{ x: 5 }}
                className="flex items-center group cursor-pointer"
              >
                <div className="bg-orange-500/20 p-2 rounded-lg mr-3 group-hover:bg-orange-500/30 transition-colors">
                  <Phone className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-sm group-hover:text-orange-300 transition-colors">+1-888-347-1670</span>
              </motion.a>
              
              <motion.a
                href="mailto:info@digitalestimating.com"
                whileHover={{ x: 5 }}
                className="flex items-center group cursor-pointer"
              >
                <div className="bg-orange-500/20 p-2 rounded-lg mr-3 group-hover:bg-orange-500/30 transition-colors">
                  <Mail className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-sm group-hover:text-orange-300 transition-colors">info@fazics.com</span>
              </motion.a>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center group"
              >
                <div className="bg-orange-500/20 p-2 rounded-lg mr-3 group-hover:bg-orange-500/30 transition-colors">
                  <MapPin className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-sm group-hover:text-orange-300 transition-colors">USA Nationwide Service</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants} className="min-w-0">
              <h3 className="text-lg font-semibold mb-6 text-white whitespace-nowrap">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button 
                      onClick={() => window.location.href = link.path}
                      className="text-gray-300 hover:text-orange-400 transition-colors group flex items-center text-sm w-full text-left"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 FAZICS. All rights reserved.
            </div>
           
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;