
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, FileText, Search, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Get Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                UP Scholarship
              </span>{" "}
              Easily
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A complete guide for MMMUT students to apply for UP Government Scholarships. 
              Step-by-step assistance, document checklists, and application tracking.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                <a href="https://scholarship.up.gov.in/" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-4">
                <Link to="/guide">View Guide</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-4">
                <Link to="/tracker">Track Status</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5000+</div>
                <div className="text-sm text-gray-600">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Step-by-Step Guide</h3>
              <p className="text-gray-600 text-sm">Complete walkthrough of the application process</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Track Application</h3>
              <p className="text-gray-600 text-sm">Monitor your scholarship application status</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Document Checklist</h3>
              <p className="text-gray-600 text-sm">Ensure you have all required documents</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">Get help from our dedicated support team</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
