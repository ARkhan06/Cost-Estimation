import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import Fazics from '../assets/Fazics_Cost_Sol_Logo-removebg-preview.png';
// Navbar Component
const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Subcontractors');
  const [activeMobileCategory, setActiveMobileCategory] = useState(null);
  const location = useLocation();

  const serviceCategories = {
    'Subcontractors': [
      { name: 'MEP', path: '/mep' },
      { name: 'Earthwork', path: '/earthwork' },
      { name: 'Concrete', path: '/concrete' },
      { name: 'Framing', path: '/framing' },
      { name: 'Drywall', path: '/drywall' },
      { name: 'Flooring', path: '/flooring' },
      { name: 'Roofing', path: '/roofing' },
      { name: 'Painting', path: '/painting' },
      { name: 'Masonry', path: '/masonry' },
      { name: 'Structure Steel', path: '/structure-steel' },
      { name: 'Landscaping', path: '/landscaping' },
      { name: 'Demolition', path: '/demolition' },
      { name: 'Interior Finishes Estimation', path: '/interior-finishes' },
      { name: 'Insulation', path: '/insulation' },
      { name: 'Finishes', path: '/finishes' },
      { name: 'Furnishing', path: '/furnishing' }
    ],
    'General Contractors': [
      { name: 'Public Bids Estimates', path: '/public-bids' },
      { name: 'Commercial Bids Estimates', path: '/commercial-bids' },
      { name: 'Residential Bids Estimates', path: '/residential-bids' }
    ],
    'Manufacturers': [
      {name: 'Manufacturers', path:'/manufacturers'}
    ]
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <motion.img 
                src={Fazics}
                alt="FAZICS Logo"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="h-30 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          
          <div className="hidden lg:flex items-center space-x-10 mr-20">
               <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Services 
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="flex h-[400px]">
                      {/* Left Panel - Categories (Static) */}
                      <div className="w-1/3 bg-gradient-to-br from-blue-900 to-blue-800 p-6 flex-shrink-0">
                        <h3 className="text-xl font-bold text-white mb-6">Service Categories</h3>
                        <div className="space-y-2">
                          {Object.keys(serviceCategories).map((category, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => setActiveCategory(category)}
                              className={`group cursor-pointer p-4 rounded-lg transition-all ${
                                activeCategory === category 
                                  ? 'bg-orange-500 text-white' 
                                  : 'hover:bg-white/10 text-gray-200'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold">{category}</h4>
                                <ArrowRight className={`h-4 w-4 transition-transform ${
                                  activeCategory === category ? 'rotate-0' : 'group-hover:translate-x-1'
                                }`} />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Right Panel - Services for Active Category (Scrollable) */}
                      <div className="w-2/3 flex flex-col">
                        {/* Fixed Header */}
                        <div className="p-8 pb-4 border-b border-gray-100 flex-shrink-0">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeCategory}</h3>
                          <p className="text-gray-600">Professional estimation services for {activeCategory.toLowerCase()}</p>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-8 pt-6">
                          {/* Services Grid or Message */}
                          {serviceCategories[activeCategory].length > 0 ? (
                            <div className="grid grid-cols-3 gap-4">
                              {serviceCategories[activeCategory].map((service, index) => (
                                <Link
                                  key={service.name}
                                  to={service.path}
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group p-4 rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all cursor-pointer bg-gradient-to-br from-white to-gray-50"
                                  >
                                    <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors text-sm text-center">
                                      {service.name}
                                    </h4>
                                  </motion.div>
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <div className="p-8 text-center bg-gray-50 rounded-lg">
                              <h4 className="text-lg font-semibold text-gray-700 mb-2">Coming Soon</h4>
                              <p className="text-gray-600">We're working on expanding our {activeCategory.toLowerCase()} services.</p>
                              <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                                Get Custom Quote
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                location.pathname === '/' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                location.pathname === '/about' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
         

           
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                location.pathname === '/contact' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              Contact
            </Link>
            
            
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 bg-gray-50"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    location.pathname === '/' 
                      ? 'text-orange-500 bg-orange-50' 
                      : 'text-gray-700 hover:text-orange-500 hover:bg-white'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    location.pathname === '/about' 
                      ? 'text-orange-500 bg-orange-50' 
                      : 'text-gray-700 hover:text-orange-500 hover:bg-white'
                  }`}
                >
                  About
                </Link>
                
                {/* Mobile Services Dropdown */}
                <div className="space-y-2">
                  <h4 className="px-4 py-2 font-semibold text-gray-900">Services</h4>
                  {Object.keys(serviceCategories).map((category, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                      <button
                        onClick={() => setActiveMobileCategory(activeMobileCategory === category ? null : category)}
                        className="w-full px-4 py-3 text-left font-medium text-gray-800 hover:bg-orange-50 flex items-center justify-between transition-colors"
                      >
                        {category}
                        <motion.div
                          animate={{ rotate: activeMobileCategory === category ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {activeMobileCategory === category && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="border-t border-gray-200 bg-gray-50"
                          >
                            {serviceCategories[category].length > 0 ? (
                              <div className="grid grid-cols-2 gap-2 p-4 max-h-60 overflow-y-auto">
                                {serviceCategories[category].map((service, serviceIndex) => (
                                  <Link
                                    key={serviceIndex}
                                    to={service.path}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveMobileCategory(null);
                                    }}
                                  >
                                    <motion.div
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: serviceIndex * 0.05 }}
                                      className="p-2 bg-white rounded text-xs text-gray-700 text-center border border-gray-100 hover:border-orange-300 hover:text-orange-600 transition-all"
                                    >
                                      {service.name}
                                    </motion.div>
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <div className="p-4 text-center">
                                <p className="text-sm text-gray-600 mb-2">Services coming soon</p>
                                <button className="text-xs bg-orange-500 text-white px-3 py-1 rounded">
                                  Get Custom Quote
                                </button>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
                
                
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    location.pathname === '/contact' 
                      ? 'text-orange-500 bg-orange-50' 
                      : 'text-gray-700 hover:text-orange-500 hover:bg-white'
                  }`}
                >
                  Contact
                </Link>
                
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;