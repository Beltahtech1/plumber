import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-emergency-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Beltah<span className="text-emergency-500">Plumbing</span>
              </span>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed max-w-xs">
              Professional plumbing services you can count on. Fast, reliable, and always upfront—no surprises.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-navy-400 hover:text-emergency-400 transition-colors text-sm">Our Services</a></li>
              <li><a href="#why-us" className="text-navy-400 hover:text-emergency-400 transition-colors text-sm">Why Choose Us</a></li>
              <li><a href="#contact" className="text-navy-400 hover:text-emergency-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-navy-400">
                <Phone className="w-4 h-4 text-emergency-500" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-navy-400">
                <Mail className="w-4 h-4 text-emergency-500" />
                <a href="mailto:info@beltahplumbing.com" className="hover:text-white transition-colors">info@beltahplumbing.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-navy-400">
                <MapPin className="w-4 h-4 text-emergency-500" />
                123 Main Street, Metro City, ST
              </li>
              <li className="flex items-center gap-3 text-sm text-navy-400">
                <Clock className="w-4 h-4 text-emergency-500" />
                Mon–Sat 8am–8pm | 24/7 Emergency
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-navy-500 text-sm">
            © {new Date().getFullYear()} Beltah Plumbing. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-navy-400 hover:text-emergency-400 transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
