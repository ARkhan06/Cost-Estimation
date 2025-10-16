import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight, Send, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsPage = () => {
  const form = useRef();
  const recaptchaRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Check if reCAPTCHA script is loaded properly
  useEffect(() => {
    const checkRecaptchaLoaded = () => {
      if (window.grecaptcha && window.grecaptcha.ready) {
        setRecaptchaLoaded(true);
      }
    };

    checkRecaptchaLoaded();
    const intervalId = setInterval(checkRecaptchaLoaded, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRecaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("reCAPTCHA value:", value);
  };

  const handleRecaptchaError = () => {
    console.error("reCAPTCHA failed to load or encountered an error");
    setSubmitStatus({ 
      type: 'error', 
      message: 'There was a problem loading the reCAPTCHA. Please refresh the page and try again.'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Additional validation for reCAPTCHA
    if (!captchaValue) {
      setSubmitStatus({ type: 'error', message: 'Please complete the reCAPTCHA verification' });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Add the captcha value to the form data
      const formElement = form.current;
      const captchaInput = document.createElement('input');
      captchaInput.type = 'hidden';
      captchaInput.name = 'g-recaptcha-response';
      captchaInput.value = captchaValue;
      formElement.appendChild(captchaInput);

      // Replace these with your actual EmailJS credentials
      await emailjs.sendForm(
        'service_v0vgkda',
        'template_gmsyssu',
        formElement,
        'lVBseVkcxWJ9xjipE'
      );

      // Remove the temporary input element
      formElement.removeChild(captchaInput);

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.'
      });
      
      // Reset form and captcha
      setFormData({ name: '', email: '', description: '' });
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setCaptchaValue(null);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Number",
      info: "+1-888-347-1670",
      description: "Available Monday - Friday, 8:00 AM - 6:00 PM CST"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Address",
      info: "info@fazics.com",
      description: "Get response within 24 hours"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Office Location",
      info: "Washington DC, USA",
      description: "Serving contractors nationwide"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Business Days",
      info: "Mon - Sunday",
      description: ""
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
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
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
                Contact
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                FAZICS
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Ready to transform your construction bidding process? Get in touch with our expert team for accurate estimates, 
              fast turnaround times, and professional construction estimating services.
            </p>
            
           
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in <span className="text-orange-500">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss your next construction project and how we can help you win more bids
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <div className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <div className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Project Description *
                  </div>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                {/* reCAPTCHA */}
                <div className="recaptcha-container">
                  {!recaptchaLoaded && (
                    <p className="text-amber-600 text-sm mb-2">
                      Loading reCAPTCHA verification...
                    </p>
                  )}
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeO-6QrAAAAAExsQ7c6KXRl2fY28ZZFHAMcntS7" 
                    onChange={handleRecaptchaChange}
                    onError={handleRecaptchaError}
                    onExpired={() => setCaptchaValue(null)}
                  />
                </div>

                {submitStatus.message && (
                  <div className={`p-4 rounded-xl ${
                    submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting || !captchaValue}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <p className="text-gray-600 mb-8">
                  Ready to get started? Reach out to us through any of the channels below. 
                  Our team is here to help you with all your construction estimating needs.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors"
                    >
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-3 rounded-xl flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-orange-600 font-semibold mb-1">{info.info}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

           
              
            </motion.div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ContactUsPage;