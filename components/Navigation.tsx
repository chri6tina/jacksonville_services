'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const services = [
    { name: 'Commercial Cleaning', href: '/services/commercial-cleaning', description: 'Professional commercial cleaning services' },
    { name: 'Junk Removal', href: '/services/junk-removal', description: 'Fast and reliable junk removal' },
    { name: 'Power Washing', href: '/services/power-washing', description: 'Exterior cleaning and pressure washing' },
    { name: 'Vending Machines', href: '/services/vending', description: 'Smart vending solutions for your business' },
  ]

  const toggleDropdown = (service: string) => {
    setActiveDropdown(activeDropdown === service ? null : service)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/newlogo.png"
              alt="ServeJax"
              className="h-12 w-auto"
            />
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-neutral-700 hover:text-primary-600 transition-colors font-medium">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-neutral-700 hover:text-primary-600 transition-colors font-medium">
                <span>Services</span>
                <FaChevronDown className="w-3 h-3" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-neutral-200">
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                      >
                        <div>
                          <h3 className="font-semibold text-neutral-800 mb-1">{service.name}</h3>
                          <p className="text-sm text-neutral-600">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-neutral-700 hover:text-primary-600 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/testimonials" className="text-neutral-700 hover:text-primary-600 transition-colors font-medium">
              Testimonials
            </Link>
            <Link href="/contact" className="text-neutral-700 hover:text-primary-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Right Side - Get Free Quote Button */}
          <div className="hidden lg:block mr-4">
            <Link href="/contact" className="btn-primary text-sm mac-sm:text-base mac-md:text-lg px-4 mac-sm:px-6 mac-md:px-8">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 transition-colors"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-neutral-200">
            <div className="py-4 space-y-4">
              <Link href="/" className="block px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 transition-colors">
                Home
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div className="px-4">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="flex items-center justify-between w-full py-2 text-neutral-700 hover:text-primary-600 transition-colors"
                >
                  <span>Services</span>
                  <FaChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block py-2 text-neutral-600 hover:text-primary-600 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link href="/about" className="block px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 transition-colors">
                About Us
              </Link>
              <Link href="/testimonials" className="block px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 transition-colors">
                Testimonials
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 transition-colors">
                Contact
              </Link>
              
              {/* Mobile Get Free Quote Button */}
              <div className="px-4 pt-4">
                <Link href="/contact" className="btn-primary block text-center">
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
