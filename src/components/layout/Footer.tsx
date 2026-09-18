import { MapPin, Mail } from 'lucide-react'
import type { Propstype } from '@/types/global'
import { Link } from 'react-router-dom' // ✅ تم تعديل الاستيراد
import Facebook from '@/assets/Facebook.svg'
import Instagram from '@/assets/Insta.svg'
import LinkedIn from '@/assets/LinkedIn.svg'
import { footerSections } from '@/constants/LinksFooter'

export const Footer = ({ Logo }: Propstype) => {
  return (
    <footer className="w-full  bg-hovered text-[#2C3E50] font-sans pt-12 ">
      {/* Main Footer Content */}
      <main className="container max-w-[85%] mx-auto  px-6 sm:px-10 lg:px-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Contact Section */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <img src={Logo} alt="GroceryPlus Logo" className="h-8 w-auto" />
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="p-1.5 border-2 border-[#112D4E] rounded-md text-[#112D4E] hover:bg-[#112D4E] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <img src={Facebook} alt="Facebook" className="w-4 h-4" />
              </Link>
              <Link
                to="/"
                className="p-1.5 border-2 border-[#112D4E] rounded-md text-[#112D4E] hover:bg-[#112D4E] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <img src={Instagram} alt="Instagram" className="w-4 h-4" />
              </Link>
              <Link
                to="/"
                className="p-1.5 border-2 border-[#112D4E] rounded-md text-[#112D4E] hover:bg-[#112D4E] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <img src={LinkedIn} alt="LinkedIn" className="w-4 h-4" />
              </Link>
            </div>

            {/* Description */}
            <p className="text-xs leading-relaxed text-gray-600 max-w-sm">
              Grocery platform offering fresh produce, daily essentials, personalized
              recommendations, and seamless ordering with secure payments and real-time tracking.
            </p>

            {/* Address & Email */}
            <div className="space-y-3 pt-2 text-sm font-medium text-[#112D4E]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-[#112D4E]" />
                <span className="leading-snug">
                  5th Settlement, New Cairo, Cairo,
                  <br />
                  Egypt
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-[#112D4E]" />
                <a href="mailto:help@groceryplus.com" className="hover:underline">
                  help@groceryplus.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-base font-bold text-[#112D4E] mb-4">{section.title}</h3>
                <ul className="space-y-3 text-xs font-medium text-gray-700">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.path} className="hover:text-[#112D4E] transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      {/* Bottom Bar */}
      <div className="bg-[#0E3A60] py-3 text-center">
        <p className="text-xs text-white/90 font-light tracking-wide">
          © {new Date().getFullYear()} GroceryPlus - Smart Grocery, Delivered Fast. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
