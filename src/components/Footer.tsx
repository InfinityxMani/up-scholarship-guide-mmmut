
import { GraduationCap, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* University Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-lg font-bold">MMMUT</h3>
                <p className="text-sm text-gray-400">Gorakhpur</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Madan Mohan Malaviya University of Technology, Gorakhpur - Your gateway to UP Government Scholarships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/guide" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Application Guide
              </Link>
              <Link to="/checklist" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Document Checklist
              </Link>
              <Link to="/tracker" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Track Application
              </Link>
              <a 
                href="https://scholarship.up.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                Official Portal <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">MMMUT, Gorakhpur, UP 273010</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+91-551-2273051</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">scholarship@mmmut.ac.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 MMMUT Scholarship Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
