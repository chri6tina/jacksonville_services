'use client'

import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 5000)
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      value: '(904) 456-3851',
      href: 'tel:+19044563851'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'info@jacksonvilleservices.com',
      href: 'mailto:info@jacksonvilleservices.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      value: 'Jacksonville, Florida',
      href: 'https://maps.google.com/?q=Jacksonville,FL'
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      value: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
      href: null
    }
  ]

  const services = [
    'Professional Commercial Cleaning',
    'Junk Removal',
    'Power Washing',
    'Vending Machines',
    'General Inquiry'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Jacksonville skyline"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Contact Us
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Ready to get started? Contact our team today for a free consultation 
            and quote on any of our services.
          </p>

          {/* Contact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">24h</div>
              <div className="text-neutral-200 drop-shadow-md">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Free</div>
              <div className="text-neutral-200 drop-shadow-md">Consultations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">100%</div>
              <div className="text-neutral-200 drop-shadow-md">Satisfaction</div>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 mx-auto" style={{ maxWidth: 'fit-content' }}>
            <a
              href="tel:+19044563851"
              className="bg-white text-primary-700 hover:bg-blue-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Call Now: (904) 456-3851
            </a>
            <a
              href="mailto:info@jacksonvilleservices.com"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div
              
              
              
              
            >
              <h2 className="text-3xl font-bold text-neutral-800 mb-8">
                Get in Touch
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                We\'re here to help with all your service needs. Reach out to us through 
                any of the methods below, or fill out the form and we\'ll get back to you promptly.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    
                    
                    
                    
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 mb-1">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-neutral-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                  Why Choose Jacksonville Services?
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="w-5 h-5 text-coastal-600 flex-shrink-0" />
                    <span>Free consultations and quotes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="w-5 h-5 text-coastal-600 flex-shrink-0" />
                    <span>Local expertise and community focus</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="w-5 h-5 text-coastal-600 flex-shrink-0" />
                    <span>Flexible scheduling options</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="w-5 h-5 text-coastal-600 flex-shrink-0" />
                    <span>Satisfaction guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div
              
              
              
              
              className="bg-white rounded-xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <div
                  
                  
                  className="text-center py-12"
                >
                  <FaCheckCircle className="w-16 h-16 text-coastal-600 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-neutral-800 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-neutral-600">
                    Your message has been sent successfully. We\'ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your service needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>

                  <p className="text-sm text-neutral-500 text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Our Service Area
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We proudly serve Jacksonville and surrounding areas with reliable, professional services.
            </p>
          </div>

          <div
            
            
            
            
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            {/* Google Maps Embed */}
            <div className="w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221446.7166250444!2d-81.703358!3d30.332184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b716f1ceafeb%3A0xc4cd7d50e8beb7a8!2sJacksonville%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1640995200000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jacksonville Services LLC Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-neutral-200 max-w-2xl mx-auto">
            Don\'t wait to experience the Jacksonville Services difference. 
            Contact us today for your free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+19044563851"
              className="bg-white text-primary-700 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
            >
              Call Now: (904) 456-3851
            </a>
            <a 
              href="mailto:info@jacksonvilleservices.com"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
