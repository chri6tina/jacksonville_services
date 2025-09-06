import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Vending Machines', href: '/services#vending' },
    { name: 'House Cleaning', href: '/services#cleaning' },
    { name: 'Junk Removal', href: '/services#junk-removal' },
    { name: 'Power Washing', href: '/services#power-washing' },
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
    { name: 'Get Quote', href: '/contact' },
  ]

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FaFacebook },
    { name: 'Twitter', href: '#', icon: FaTwitter },
    { name: 'Instagram', href: '#', icon: FaInstagram },
    { name: 'LinkedIn', href: '#', icon: FaLinkedin },
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-coastal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">JS</span>
              </div>
              <span className="text-xl font-bold">Jacksonville Services</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Your trusted local partner for comprehensive service solutions in Jacksonville, Florida.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-neutral-300">
                <FaPhone className="text-primary-400" />
                <span>(904) 456-3851</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300">
                <FaEnvelope className="text-primary-400" />
                <span>info@jacksonvilleservices.com</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300">
                <FaMapMarkerAlt className="text-primary-400" />
                <span>Jacksonville, FL 32202</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <Link href="/contact" className="btn-primary block text-center">
              Get Free Quote
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} Jacksonville Services LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-neutral-400">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
