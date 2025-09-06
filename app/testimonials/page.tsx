import Link from 'next/link'
import { FaStar, FaQuoteLeft, FaCog, FaBroom, FaTrash, FaWater, FaBuilding, FaIndustry, FaHospital, FaGraduationCap } from 'react-icons/fa'

export const metadata = {
  title: 'Client Testimonials - Jacksonville Services LLC',
  description: 'Read what our satisfied commercial clients have to say about our vending machines, commercial cleaning, junk removal, and power washing services in Jacksonville.',
}

export default function Testimonials() {
  const testimonials = [
    {
      service: 'Vending Machines',
      icon: FaCog,
      reviews: [
        {
          name: 'Jennifer Martinez',
          company: 'Downtown Law Office',
          position: 'Office Manager',
          rating: 5,
          text: 'Jacksonville Services has transformed our office break room with their smart vending machines. The inventory management is incredible, and our team loves the fresh snack options. Their commercial contracts are flexible and their service is consistently reliable.',
          industry: 'Legal Services'
        },
        {
          name: 'Robert Chen',
          company: 'Jacksonville Community College',
          position: 'Facilities Director',
          rating: 5,
          text: 'We\'ve been using Jacksonville Services for our campus vending needs for over 3 years. Their machines are always well-stocked, clean, and the cashless payment options are perfect for our students. They understand the unique needs of educational institutions.',
          industry: 'Education'
        }
      ]
    },
    {
      service: 'Commercial Cleaning',
      icon: FaBroom,
      reviews: [
        {
          name: 'Sarah Williams',
          company: 'Riverside Medical Center',
          position: 'Operations Manager',
          rating: 5,
          text: 'Jacksonville Services provides exceptional commercial cleaning for our medical facility. Their attention to detail is amazing, and they maintain the highest standards of cleanliness required in healthcare. The team is professional and trustworthy.',
          industry: 'Healthcare'
        },
        {
          name: 'Michael Thompson',
          company: 'San Marco Retail Plaza',
          position: 'Property Manager',
          rating: 5,
          text: 'As property managers, we rely on Jacksonville Services for our daily cleaning needs. They\'re flexible with scheduling, use eco-friendly products, and maintain our retail spaces to the highest standards. Their commercial contracts are comprehensive.',
          industry: 'Retail'
        }
      ]
    },
    {
      service: 'Commercial Junk Removal',
      icon: FaTrash,
      reviews: [
        {
          name: 'David Rodriguez',
          company: 'Jacksonville Manufacturing Co.',
          position: 'Operations Director',
          rating: 5,
          text: 'When we needed to clear out our old manufacturing equipment, Jacksonville Services came through big time. They were fast, professional, and handled everything from start to finish. Great service for industrial clients!',
          industry: 'Manufacturing'
        },
        {
          name: 'Amanda Foster',
          company: 'Downtown Construction LLC',
          position: 'Project Manager',
          rating: 5,
          text: 'We had a major renovation project and needed construction debris removed. Jacksonville Services was there same-day and cleaned up everything perfectly. Their team is efficient and professional for commercial projects.',
          industry: 'Construction'
        }
      ]
    },
    {
      service: 'Commercial Power Washing',
      icon: FaWater,
      reviews: [
        {
          name: 'Thomas Anderson',
          company: 'Beachfront Hotel Group',
          position: 'Maintenance Supervisor',
          rating: 5,
          text: 'Operating near the beach means our commercial properties get dirty quickly. Jacksonville Services power washing service is incredible - they restored our hotels\' curb appeal in just a few hours. Outstanding results for hospitality!',
          industry: 'Hospitality'
        },
        {
          name: 'Patricia Johnson',
          company: 'Jacksonville Commercial Properties',
          position: 'Property Manager',
          rating: 5,
          text: 'We manage several commercial properties in Jacksonville and trust Jacksonville Services for all our power washing needs. They\'re reliable, professional, and always deliver exceptional results for commercial clients.',
          industry: 'Property Management'
        }
      ]
    }
  ]

  const overallStats = [
    { number: '200+', label: 'Corporate Clients' },
    { number: '4.9', label: 'Client Rating' },
    { number: '5+', label: 'Years of Excellence' },
    { number: '100%', label: 'Client Satisfaction' }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-amber-500' : 'text-neutral-300'
        }`}
      />
    ))
  }

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'Healthcare': return FaHospital
      case 'Education': return FaGraduationCap
      case 'Manufacturing': return FaIndustry
      case 'Construction': return FaIndustry
      case 'Hospitality': return FaBuilding
      case 'Property Management': return FaBuilding
      case 'Legal Services': return FaBuilding
      case 'Retail': return FaBuilding
      default: return FaBuilding
    }
  }

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
            Client Success Stories
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Don't just take our word for it. Read what our satisfied commercial clients have to say 
            about their experience with Jacksonville Services.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">200+</div>
                                   <div className="text-neutral-200 drop-shadow-md">Corporate Clients</div>
                   </div>
                   <div className="text-center">
                     <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">4.9</div>
                     <div className="text-neutral-200 drop-shadow-md">Client Rating</div>
                   </div>
                   <div className="text-center">
                     <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">5+</div>
                     <div className="text-neutral-200 drop-shadow-md">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {overallStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials by Service */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          {testimonials.map((serviceGroup, groupIndex) => (
            <div
              key={serviceGroup.service}
              className="mb-20 last:mb-0"
            >
              {/* Service Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center">
                    <serviceGroup.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
                    {serviceGroup.service}
                  </h2>
                </div>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                  See what our commercial clients are saying about our {serviceGroup.service.toLowerCase()} service.
                </p>
              </div>

              {/* Reviews Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {serviceGroup.reviews.map((review, reviewIndex) => {
                  const IndustryIcon = getIndustryIcon(review.industry)
                  return (
                    <div
                      key={review.name}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-neutral-100"
                    >
                      {/* Quote Icon and Rating */}
                      <div className="flex justify-between items-start mb-6">
                        <FaQuoteLeft className="w-8 h-8 text-neutral-300" />
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-neutral-700 mb-8 text-lg leading-relaxed">
                        "{review.text}"
                      </p>

                      {/* Customer Info */}
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                          <IndustryIcon className="w-8 h-8 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-neutral-800 text-lg">
                            {review.name}
                          </div>
                          <div className="text-primary-600 font-medium">
                            {review.position}
                          </div>
                          <div className="text-sm text-neutral-600">
                            {review.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-primary-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <FaQuoteLeft className="w-12 h-12 text-white/30 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed max-w-4xl mx-auto">
              "Jacksonville Services has been our go-to company for all our commercial service needs. 
              From vending machines to power washing, they consistently deliver exceptional 
              quality and outstanding customer service. Their commercial contracts are comprehensive 
              and they truly understand what it means to serve business clients in our community."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <FaBuilding className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg">Carlos Rodriguez</div>
                <div className="text-neutral-200">Jacksonville Chamber of Commerce</div>
                <div className="text-sm text-neutral-300">Executive Director</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
            Ready to Experience Our Commercial Excellence?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Join the hundreds of satisfied corporate clients who trust Jacksonville Services for their 
            commercial service needs. Experience the difference that local expertise and professional 
            service can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary text-lg px-8 py-4">
              View Our Services
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4">
              Request Commercial Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
