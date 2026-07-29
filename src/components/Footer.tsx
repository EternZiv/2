import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router";
import logo from "figma:asset/5ce08c1df550714d0fc0aa9b66e97432a1986a84.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Power2Go" className="h-8 mb-4" />
            <p className="text-gray-400 mb-6">
              Leading manufacturer of advanced energy storage solutions for residential, commercial, and industrial applications.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/power2go" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0A66C2] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@power2go" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#FF0000] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/power2go" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1877F2] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/power2go" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#E4405F] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/power2go" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1DA1F2] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold mb-4">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/residential-systems" className="hover:text-blue-400 transition-colors">Residential Systems</Link></li>
              <li><Link to="/commercial-solutions" className="hover:text-blue-400 transition-colors">Commercial Solutions</Link></li>
              <li><Link to="/portable-solutions" className="hover:text-blue-400 transition-colors">Portable Solutions</Link></li>
              <li><Link to="/industrial-solutions" className="hover:text-blue-400 transition-colors">Industrial Solutions</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/documentation" className="hover:text-blue-400 transition-colors">Documentation</Link></li>
              <li><Link to="/installation-guidance" className="hover:text-blue-400 transition-colors">Installation Guidance</Link></li>
              <li><Link to="/faqs" className="hover:text-blue-400 transition-colors">FAQS</Link></li>
              <li><Link to="/warranty" className="hover:text-blue-400 transition-colors">Warranty</Link></li>
              <li><Link to="/support" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                <span>1D-27 Sector 30, Korangi Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span>Karachi: 111-P2G-247</span>
                  <span>Lahore: (042) 3591 1165-69</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>info@power2go.energy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Power2Go. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
