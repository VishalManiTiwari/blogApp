import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Partners", "News"]
    },
    {
      title: "Products",
      links: ["Features", "Pricing", "Integrations", "API"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Tutorials", "Blog", "Community"]
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "GDPR"]
    }
  ]

  return (
    <footer className="bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-2">
            <Link to='/'>
            <Logo width="150px" className="mb-6" />
            </Link>
            <p className="text-sm text-purple-200 mb-4">
              Innovating the future of development, one line of code at a time.
            </p>
            <p className="text-xs text-purple-300">
              &copy; {currentYear} DevUI. All rights reserved.
            </p>
          </div>
          {footerLinks.map((column, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-yellow-300">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to="/"
                      className="text-sm text-purple-200 hover:text-yellow-300 transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-purple-600 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {['Facebook', 'Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <a key={social} href="/" className="text-purple-300 hover:text-yellow-300 transition-colors duration-300">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer




