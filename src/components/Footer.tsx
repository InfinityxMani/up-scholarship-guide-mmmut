
import { BookOpen, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* University Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-slate-900" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">MMMUT</h3>
                <p className="text-sm text-slate-300">Scholarship Portal</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Simplifying scholarship applications for students at MMMUT, Gorakhpur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/guide" className="block text-slate-300 hover:text-white transition-colors">
                Application Guide
              </Link>
              <Link to="/tracker" className="block text-slate-300 hover:text-white transition-colors">
                Track Application
              </Link>
              <Link to="/notices" className="block text-slate-300 hover:text-white transition-colors">
                Latest Notices
              </Link>
              <a 
                href="https://scholarship.up.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-slate-300 hover:text-white transition-colors"
              >
                Official Portal <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">MMMUT, Gorakhpur, UP 273010</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91-551-2273051</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">scholarship@mmmut.ac.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 MMMUT Scholarship Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
