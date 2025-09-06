'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaChevronDown, FaPhone, FaEnvelope, FaQuestionCircle } from 'react-icons/fa'

export const metadata = {
  title: 'Frequently Asked Questions - Jacksonville Services LLC',
  description: 'Get answers to common questions about Jacksonville Services LLC. Learn about our commercial cleaning, junk removal, power washing, and vending machine services in Jacksonville, Florida.',
  keywords: 'Jacksonville Services FAQ, commercial cleaning questions, junk removal FAQ, power washing questions, vending machine FAQ, Jacksonville Florida services',
  openGraph: {
    title: 'Frequently Asked Questions - Jacksonville Services LLC',
    description: 'Get answers to common questions about Jacksonville Services LLC.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqCategories = [
    {
      title: 'General Questions',
      questions: [
        {
          question: 'What services does Jacksonville Services LLC offer?',
          answer: 'We offer four main service divisions: Commercial Cleaning, Junk Removal, Power Washing, and Vending Machine services. As an umbrella company, we manage multiple specialized brands to provide comprehensive solutions for businesses and residents throughout Jacksonville.'
        },
        {
          question: 'Do you serve all of Jacksonville?',
          answer: 'Yes, we proudly serve Jacksonville and surrounding areas including Downtown, Riverside, San Marco, Mandarin, Beaches, Orange Park, Atlantic Beach, Neptune Beach, Ponte Vedra Beach, and St. Johns County.'
        },
        {
          question: 'Are you licensed and insured?',
          answer: 'Absolutely. Jacksonville Services LLC is fully licensed and insured. We carry comprehensive general liability insurance and workers compensation coverage to protect our clients and employees.'
        },
        {
          question: 'How do I get a quote?',
          answer: 'Getting a quote is easy! You can call us at (904) 456-3851, email us at support@jacksonvilleservices.com, or fill out our contact form. We provide free, no-obligation quotes for all our services.'
        }
      ]
    },
    {
      title: 'Commercial Cleaning',
      questions: [
        {
          question: 'What types of commercial cleaning do you provide?',
          answer: 'We provide comprehensive commercial cleaning services including office buildings, healthcare facilities, retail spaces, manufacturing plants, educational institutions, and government buildings. Our services include daily janitorial, deep cleaning, and specialized facility maintenance.'
        },
        {
          question: 'Do you work around our business hours?',
          answer: 'Yes, we offer flexible scheduling to minimize disruption to your business operations. We can work during off-hours, weekends, or any time that works best for your facility.'
        },
        {
          question: 'What cleaning products do you use?',
          answer: 'We use eco-friendly, professional-grade cleaning products that are safe for your employees, customers, and the environment. All our products are effective against germs and bacteria while being gentle on surfaces.'
        },
        {
          question: 'Do you provide your own cleaning supplies?',
          answer: 'Yes, we bring all necessary cleaning supplies and equipment. You don\'t need to provide anything - we come fully equipped to handle your cleaning needs.'
        }
      ]
    },
    {
      title: 'Junk Removal',
      questions: [
        {
          question: 'What types of items can you remove?',
          answer: 'We can remove almost anything including furniture, appliances, electronics, construction debris, yard waste, and general household items. We handle everything from single items to entire property cleanouts.'
        },
        {
          question: 'Do you recycle or donate items?',
          answer: 'Yes, we are committed to responsible disposal. We donate usable items to local charities and recycle materials whenever possible. We only dispose of items in landfills as a last resort.'
        },
        {
          question: 'How quickly can you remove items?',
          answer: 'We typically can schedule junk removal within 24-48 hours, and often same-day service is available. Contact us for immediate scheduling based on your needs.'
        },
        {
          question: 'Do you provide estimates?',
          answer: 'Yes, we provide free estimates for all junk removal projects. We can give you an estimate over the phone for most items, or we can visit your location for a more accurate assessment.'
        }
      ]
    },
    {
      title: 'Power Washing',
      questions: [
        {
          question: 'What surfaces can you clean?',
          answer: 'We clean a wide variety of surfaces including buildings, parking lots, sidewalks, driveways, roofs, gutters, and industrial equipment. We use appropriate pressure levels for each surface type.'
        },
        {
          question: 'Is power washing safe for my property?',
          answer: 'Yes, our experienced technicians use the correct pressure and techniques for each surface. We also use eco-friendly cleaning solutions that are safe for your property and the environment.'
        },
        {
          question: 'How often should I have power washing done?',
          answer: 'The frequency depends on your location and needs. Commercial properties typically benefit from quarterly cleaning, while residential properties may need annual or bi-annual service. We can recommend a schedule based on your specific situation.'
        },
        {
          question: 'Do you clean gutters and windows?',
          answer: 'Yes, we provide comprehensive exterior cleaning services including gutters, windows, awnings, and other exterior features as part of our power washing services.'
        }
      ]
    },
    {
      title: 'Vending Machines',
      questions: [
        {
          question: 'What types of vending machines do you offer?',
          answer: 'We offer smart vending machines, micro-markets, snack machines, beverage machines, and combination units. Our machines feature modern technology including cashless payment options and real-time monitoring.'
        },
        {
          question: 'Do you provide maintenance and restocking?',
          answer: 'Yes, we handle all maintenance, restocking, and machine servicing. Our team ensures your machines are always fully stocked and functioning properly with regular maintenance visits.'
        },
        {
          question: 'What products do you stock?',
          answer: 'We stock a wide variety of snacks, beverages, and fresh food options. We can customize the product selection based on your preferences and your customers\' needs.'
        },
        {
          question: 'Is there a cost for machine placement?',
          answer: 'We offer free machine placement for qualified businesses. There are no upfront costs - we make money through sales, and you benefit from the convenience and additional revenue.'
        }
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jacksonville hero skyline.png"
            alt="Jacksonville FAQ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Find answers to common questions about our services. Can't find what you're 
            looking for? Contact us directly for personalized assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-primary-700 hover:bg-gray-50 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Contact Us
            </Link>
            <a
              href="tel:+19044563851"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Call Now: (904) 456-3851
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Common Questions & Answers
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Browse our frequently asked questions organized by service category. 
              Click on any question to see the answer.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6 flex items-center">
                  <FaQuestionCircle className="w-6 h-6 text-primary-600 mr-3" />
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex
                    const isOpen = openItems.includes(globalIndex)
                    
                    return (
                      <div
                        key={faqIndex}
                        className="bg-white rounded-lg shadow-md border border-neutral-200 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                        >
                          <span className="font-semibold text-neutral-800 pr-4">
                            {faq.question}
                          </span>
                          <FaChevronDown
                            className={`w-5 h-5 text-primary-600 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="border-t border-neutral-200 pt-4">
                              <p className="text-neutral-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Our friendly team is here to help! Contact us for personalized answers 
            and to discuss your specific service needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <FaPhone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Call Us</h3>
              <p className="text-neutral-600 mb-4">Speak directly with our team</p>
              <a
                href="tel:+19044563851"
                className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
              >
                (904) 456-3851
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <FaEnvelope className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Email Us</h3>
              <p className="text-neutral-600 mb-4">Send us your questions</p>
              <a
                href="mailto:support@jacksonvilleservices.com"
                className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
              >
                support@jacksonvilleservices.com
              </a>
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
            Don't wait to experience the Jacksonville Services difference. 
            Contact us today for your free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Get Free Quote
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}