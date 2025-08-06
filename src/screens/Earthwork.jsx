import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Layers, Truck, Mountain, Ruler, CheckCircle } from 'lucide-react';

const EarthworkPage = () => {
  const services = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Site Preparation",
      description: "Detailed cost estimation for land clearing, grading, and site development."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Hauling & Disposal",
      description: "Precise hauling estimates including debris removal and waste management."
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Cut & Fill Analysis",
      description: "Accurate quantity takeoffs for excavation and backfill requirements."
    }
  ];

  const benefits = [
    "Accurate volume takeoffs",
    "Reduced bidding errors",
    "Faster turnaround times",
    "Customized estimates per project",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Earthwork Estimation Services
          </motion.h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            We provide precise and professional earthwork estimating services including cut & fill, trenching, and site prep – helping contractors bid competitively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
            >
              Request Sample Estimate <ArrowRight className="w-5 h-5" />
            </motion.button>
            <a
              href="tel:+12818990989"
              className="flex items-center gap-3 text-white hover:text-green-200 transition"
            >
              <Phone className="w-5 h-5" /> +1 (281) 899-0989
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Earthwork Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow border"
              >
                <div className="bg-green-600 text-white p-4 rounded-full mb-4 w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Us for Earthwork Estimation?
          </h2>
          <ul className="space-y-4 text-left max-w-xl mx-auto text-gray-700">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Let’s help you win more bids with accurate earthwork estimates
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold">
              Start a Project
            </button>
            <a
              href="tel:+12818990989"
              className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition"
            >
              <Phone className="w-5 h-5" />
              +1 (281) 899-0989
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarthworkPage;
