
import { motion } from "framer-motion";
import { CheckCircle, FileText, Upload, Send, User, Clock } from "lucide-react";

const StepTimeline = () => {
  const steps = [
    {
      icon: <User className="h-6 w-6" />,
      title: "Registration",
      description: "Create your account on UP Scholarship Portal",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Fill Application",
      description: "Complete all required personal and academic details",
      color: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Upload Documents",
      description: "Submit all necessary certificates and proofs",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: <Send className="h-6 w-6" />,
      title: "Submit & Track",
      description: "Submit application and monitor status regularly",
      color: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-200/50 mb-6"
          >
            <Clock className="h-4 w-4 text-indigo-600 mr-2" />
            <span className="text-indigo-700 font-semibold text-sm">Quick & Easy Process</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Simple Steps to
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Success
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Follow our streamlined process to complete your scholarship application effortlessly
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between relative">
              {/* Enhanced progress line */}
              <div className="absolute top-1/2 left-0 right-0 h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full transform -translate-y-1/2 z-0">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full shadow-lg"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </div>

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative z-10 flex flex-col items-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center text-white shadow-2xl mb-8 group-hover:shadow-3xl transition-all duration-500`}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    {step.icon}
                  </motion.div>
                  <motion.div 
                    className={`text-center max-w-xs p-6 rounded-2xl bg-gradient-to-br ${step.bgGradient} border border-white/50 shadow-lg group-hover:shadow-xl transition-all duration-500`}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-xl flex-shrink-0`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {step.icon}
                </motion.div>
                <motion.div 
                  className={`flex-1 p-6 rounded-2xl bg-gradient-to-br ${step.bgGradient} border border-white/50 shadow-lg`}
                  whileHover={{ y: -2 }}
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 font-medium">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepTimeline;
