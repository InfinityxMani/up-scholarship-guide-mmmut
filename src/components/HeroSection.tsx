
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedBackground from "./AnimatedBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50 mb-8"
          >
            <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium text-sm">Your Gateway to Educational Excellence</span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl font-black text-slate-900 mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block">MMMUT</span>
            <span className="block text-5xl md:text-7xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-extrabold">
              Scholarship Portal
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Streamlined platform for UP Government Scholarships with
            <span className="text-indigo-600 font-semibold"> real-time tracking</span> and 
            <span className="text-blue-600 font-semibold"> expert guidance</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
                asChild
              >
                <Link to="/guide" className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6" />
                  <span>Start Application</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-indigo-200 bg-white/80 backdrop-blur-sm text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300 px-10 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/tracker" className="flex items-center space-x-3">
                  <Search className="h-6 w-6" />
                  <span>Track Status</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Feature Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[
            { 
              title: "Smart Guide", 
              description: "AI-powered step-by-step assistance", 
              icon: "🎯",
              gradient: "from-blue-500/20 to-cyan-500/20",
              border: "border-blue-200/50"
            },
            { 
              title: "Live Tracking", 
              description: "Real-time application monitoring", 
              icon: "📊",
              gradient: "from-indigo-500/20 to-purple-500/20",
              border: "border-indigo-200/50"
            },
            { 
              title: "Expert Support", 
              description: "24/7 dedicated assistance", 
              icon: "💡",
              gradient: "from-purple-500/20 to-pink-500/20",
              border: "border-purple-200/50"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-sm p-8 rounded-3xl border ${feature.border} hover:shadow-2xl transition-all duration-500 group`}
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
            >
              <motion.div 
                className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
