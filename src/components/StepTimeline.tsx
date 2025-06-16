
import { motion } from "framer-motion";
import { CheckCircle, FileText, Upload, Send, User, Clock } from "lucide-react";

const StepTimeline = () => {
  const steps = [
    {
      icon: <User className="h-6 w-6" />,
      title: "Registration",
      description: "Create your account on UP Scholarship Portal"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Fill Application",
      description: "Complete all required personal and academic details"
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Upload Documents",
      description: "Submit all necessary certificates and proofs"
    },
    {
      icon: <Send className="h-6 w-6" />,
      title: "Submit & Track",
      description: "Submit application and monitor status regularly"
    }
  ];

  return (
    <section className="py-24 bg-white">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-6"
          >
            <Clock className="h-4 w-4 text-gray-600 mr-2" />
            <span className="text-gray-700 font-medium text-sm">Quick & Easy Process</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Simple Steps to
            <span className="block text-gray-700">
              Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
            Follow our streamlined process to complete your scholarship application effortlessly
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between relative">
              {/* Simple progress line */}
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full transform -translate-y-1/2 z-0">
                <motion.div
                  className="h-full bg-gray-400 rounded-full"
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
                    className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-white shadow-lg mb-8 group-hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    {step.icon}
                  </motion.div>
                  <motion.div 
                    className="text-center max-w-xs p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-300"
                    whileHover={{ y: -3 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm font-normal leading-relaxed">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
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
                  className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.icon}
                </motion.div>
                <motion.div 
                  className="flex-1 p-6 rounded-xl bg-gray-50 border border-gray-200 shadow-sm"
                  whileHover={{ y: -2 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 font-normal">{step.description}</p>
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
