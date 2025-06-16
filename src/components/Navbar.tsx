
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/guide", label: "Steps" },
    { path: "/tracker", label: "Status" },
    { path: "/notices", label: "Notices" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-lg shadow-slate-900/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-2xl shadow-lg"
            >
              <GraduationCap className="h-8 w-8 text-white" />
            </motion.div>
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                MMMUT
              </span>
              <span className="text-sm text-slate-600 block leading-none font-semibold">Scholarship Portal</span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.div key={item.path} className="relative">
                <Link
                  to={item.path}
                  className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
                    isActive(item.path)
                      ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg"
                      : "text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {!isActive(item.path) && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild 
                className="ml-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 font-semibold"
              >
                <a href="https://scholarship.up.gov.in/" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-indigo-600 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-6 space-y-3">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg"
                      : "text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              className="pt-4"
            >
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl py-4 font-semibold"
              >
                <a href="https://scholarship.up.gov.in/" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
