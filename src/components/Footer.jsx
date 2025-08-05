// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, Star } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "MEP Estimates", path: "/mep" },
        { name: "Public Bids Estimates", path: "/public-bids" },
        { name: "Commercial Estimates", path: "/commercial-bids" }, 
        { name: "Residential Estimates", path: "/residential-bids" },
        { name: "Material Takeoffs", path: "/material-takeoffs" },
        { name: "Virtual Bid Manager", path: "/virtual-bid-manager" }
      ]
    },
    {
      title: "Subcontractor Services",
      links: [
        { name: "Concrete Estimation", path: "/concrete" },
        { name: "Framing Estimation", path: "/framing" },
        { name: "Drywall Estimation", path: "/drywall" },
        { name: "Flooring Estimation", path: "/flooring" },
        { name: "Roofing Estimation", path: "/roofing" },
        { name: "Painting Estimation", path: "/painting" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Government Projects", path: "/industries/government" },
        { name: "Commercial Buildings", path: "/industries/commercial" },
        { name: "Residential Construction", path: "/industries/residential" },
        { name: "Industrial Facilities", path: "/industries/industrial" },
        { name: "Infrastructure", path: "/industries/infrastructure" },
        { name: "Civil Works", path: "/industries/civil" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Projects", path: "/projects" },
        { name: "Contact Us", path: "/contact" },
        { name: "Sample Estimates", path: "/samples" },
        { name: "Client Reviews", path: "/reviews" },
        { name: "Get Quote", path: "/quote" }
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
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link to="/">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-4 cursor-pointer"
              >
                Digital Estimating®
              </motion.div>
            </Link>
           
            
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
                <span className="group-hover:text-orange-300 transition-colors">+1 (281) 899-0989</span>
              </motion.a>
              
              <motion.a
                href="mailto:info@digitalestimating.com"
                whileHover={{ x: 5 }}
                className="flex items-center group cursor-pointer"
              >
                <div className="bg-orange-500/20 p-2 rounded-lg mr-3 group-hover:bg-orange-500/30 transition-colors">
                  <Mail className="h-4 w-4 text-orange-400" />
                </div>
                <span className="group-hover:text-orange-300 transition-colors">info@digitalestimating.com</span>
              </motion.a>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center group"
              >
                <div className="bg-orange-500/20 p-2 rounded-lg mr-3 group-hover:bg-orange-500/30 transition-colors">
                  <MapPin className="h-4 w-4 text-orange-400" />
                </div>
                <span className="group-hover:text-orange-300 transition-colors">USA Nationwide Service</span>
              </motion.div>
            </div>

           
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path}
                      className="text-gray-300 hover:text-orange-400 transition-colors group flex items-center"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
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
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-2 md:mb-0">
              © 2024 Digital Estimating®. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-orange-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-300 hover:text-orange-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;