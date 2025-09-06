'use client'

import { FaChevronDown, FaChevronUp, FaCog, FaBroom, FaTrash, FaWater } from 'react-icons/fa'
import { useState } from 'react'



export default function FAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const faqCategories = [
    {
      title: 'General Questions',
      icon: null,
      questions: [
        {
          id: 'general-1',
          question: 'What areas do you serve?',
          answer: 'We proudly serve Jacksonville and surrounding areas including Riverside/Avondale, San Marco, Beaches, Mandarin, Orange Park, Atlantic Beach, and Neptune Beach. Contact us to confirm service availability in your specific location.'
        },
        {
          id: 'general-2',
          question: 'How do I get a quote for your services?',
          answer: 'Getting a quote is easy! You can call us at (904) 555-0123, email us at info@jacksonvilleservices.com, or fill out our contact form on this website. We\'ll respond within 24 hours with a detailed quote.'
        },
        {
          id: 'general-3',
          question: 'Are you licensed and insured?',
          answer: 'Yes, Jacksonville Services LLC is fully licensed and insured. We carry comprehensive liability insurance and workers\' compensation coverage to protect our customers and employees.'
        },
        {
          id: 'general-4',
          question: 'What are your business hours?',
          answer: 'Our office is open Monday through Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 4:00 PM. We also offer emergency services outside of regular hours for urgent situations.'
        }
      ]
    },
    {
      title: 'Vending Machines',
      icon: FaCog,
      questions: [
        {
          id: 'vending-1',
          question: 'What types of vending machines do you offer?',
          answer: 'We offer a variety of vending machines including snack machines, beverage machines, combination machines, and specialty machines for healthy options, coffee, and more. We can customize the selection based on your specific needs.'
        },
        {
          id: 'vending-2',
          question: 'How often do you restock the machines?',
          answer: 'We typically restock our vending machines 2-3 times per week, depending on usage. We also monitor inventory remotely and can adjust restocking frequency based on demand. Emergency restocking is available when needed.'
        },
        {
          id: 'vending-3',
          question: 'Do you offer cashless payment options?',
          answer: 'Yes! Our modern vending machines accept credit cards, debit cards, mobile payments (Apple Pay, Google Pay), and traditional cash. We can also set up custom payment systems for corporate clients.'
        },
        {
          id: 'vending-4',
          question: 'Can you customize the product selection?',
          answer: 'Absolutely! We work with you to select products that best suit your location and customer preferences. We can offer healthy options, organic products, local favorites, and accommodate dietary restrictions.'
        }
      ]
    },
    {
      title: 'House Cleaning',
      icon: FaBroom,
      questions: [
        {
          id: 'cleaning-1',
          question: 'What cleaning services do you offer?',
          answer: 'We offer comprehensive house cleaning services including regular maintenance cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, and special event preparation. We can customize our services to meet your specific needs.'
        },
        {
          id: 'cleaning-2',
          question: 'Do you use eco-friendly cleaning products?',
          answer: 'Yes, we prioritize eco-friendly cleaning products that are safe for your family, pets, and the environment. We use products that are effective while being gentle on surfaces and reducing environmental impact.'
        },
        {
          id: 'cleaning-3',
          question: 'How long does a typical cleaning take?',
          answer: 'Cleaning time depends on the size of your home, the level of cleaning required, and the current condition. A typical 3-bedroom home takes 2-4 hours for regular cleaning. We\'ll provide a time estimate during your consultation.'
        },
        {
          id: 'cleaning-4',
          question: 'Are your cleaners bonded and insured?',
          answer: 'Yes, all our cleaning staff are thoroughly vetted, bonded, and insured. We conduct background checks and provide ongoing training to ensure the highest quality service and your peace of mind.'
        }
      ]
    },
    {
      title: 'Junk Removal',
      icon: FaTrash,
      questions: [
        {
          id: 'junk-1',
          question: 'What types of items can you remove?',
          answer: 'We can remove almost anything including furniture, appliances, electronics, construction debris, yard waste, and general household junk. We also handle commercial junk removal and construction site cleanup.'
        },
        {
          id: 'junk-2',
          question: 'Do you offer same-day service?',
          answer: 'Yes, we offer same-day service for most junk removal jobs, depending on our schedule and the size of the job. Contact us early in the day for the best availability.'
        },
        {
          id: 'junk-3',
          question: 'What happens to the items you remove?',
          answer: 'We\'re committed to responsible disposal and recycling. We donate usable items to local charities, recycle materials when possible, and ensure proper disposal of items that can\'t be recycled. We minimize landfill waste.'
        },
        {
          id: 'junk-4',
          question: 'Do you provide cleanup after removal?',
          answer: 'Yes, we provide full cleanup after junk removal. We\'ll sweep the area, remove any debris, and leave your space clean and ready for use. This is included in our standard service.'
        }
      ]
    },
    {
      title: 'Power Washing',
      icon: FaWater,
      questions: [
        {
          id: 'power-1',
          question: 'What surfaces can you power wash?',
          answer: 'We can safely power wash driveways, sidewalks, decks, patios, house exteriors (siding, brick, stucco), commercial buildings, parking lots, and more. We adjust pressure and techniques based on surface type.'
        },
        {
          id: 'power-2',
          question: 'How often should I power wash my property?',
          answer: 'Frequency depends on your location and conditions. Homes near the beach or in humid areas typically need power washing 1-2 times per year. We can assess your specific situation and recommend a maintenance schedule.'
        },
        {
          id: 'power-3',
          question: 'Is power washing safe for all surfaces?',
          answer: 'Yes, when done correctly. We use appropriate pressure levels and techniques for each surface type. We\'re experienced with delicate surfaces like wood, stucco, and older materials, and can adjust our approach accordingly.'
        },
        {
          id: 'power-4',
          question: 'How long does power washing take?',
          answer: 'Most residential power washing jobs take 2-6 hours depending on the size of the area and the level of dirt/grime. We\'ll provide a time estimate during your consultation.'
        }
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <h1 
            
            
            
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Frequently Asked Questions
          </h1>
          <p 
            
            
            
            className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto"
          >
            Find answers to common questions about our services, pricing, scheduling, 
            and what to expect when working with Jacksonville Services.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding">
        <div className="container-custom">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              
              
              
              
              className="mb-16 last:mb-0"
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                {category.icon && (
                  <div className="w-16 h-16 bg-primary-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                )}
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
                  {category.title}
                </h2>
                                 <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
              </div>

              {/* Questions */}
              <div className="max-w-4xl mx-auto space-y-4">
                {category.questions.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                    >
                      <span className="text-lg font-semibold text-neutral-800">
                        {item.question}
                      </span>
                      {openItems[item.id] ? (
                        <FaChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      ) : (
                        <FaChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openItems[item.id] && (
                      <div className="overflow-hidden">
                        <div className="px-6 pb-4">
                          <p className="text-neutral-600 leading-relaxed">
                              {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6"
          >
            Still Have Questions?
          </h2>
          <p
            className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto"
          >
            Can\'t find the answer you\'re looking for? Our team is here to help. 
            Contact us directly and we\'ll get back to you with the information you need.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="tel:+19045550123"
              className="btn-primary text-lg px-8 py-4"
            >
              Call Us: (904) 555-0123
            </a>
            <a 
              href="mailto:info@jacksonvilleservices.com"
              className="btn-outline text-lg px-8 py-4"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
