
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedBackground from "./AnimatedBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-50">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 mb-8 shadow-sm"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-slate-700 text-sm font-medium">Scholarship Portal</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="block">Scholarship</span>
            <span className="block text-slate-600">Made Simple</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Apply for UP Government Scholarships with ease. Track your application status and get expert guidance.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-base rounded-xl shadow-sm"
              asChild
            >
              <Link to="/guide" className="flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-base rounded-xl"
              asChild
            >
              <Link to="/tracker" className="flex items-center space-x-2">
                <Search className="h-4 w-4" />
                <span>Track Status</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Simple stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {[
            { number: "10,000+", label: "Applications" },
            { number: "95%", label: "Success Rate" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
            >
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.number}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
