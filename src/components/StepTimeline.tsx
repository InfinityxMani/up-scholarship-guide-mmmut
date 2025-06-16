
import { motion } from "framer-motion";
import { CheckCircle, FileText, Upload, Send, User, Clock } from "lucide-react";

const StepTimeline = () => {
  const steps = [
    {
      icon: <User className="h-6 w-6" />,
      title: "Registration",
      description: "Create your account on UP Scholarship Portal",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Fill Application",
      description: "Complete all required personal and academic details",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Upload Documents",
      description: "Submit all necessary certificates and proofs",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Send className="h-6 w-6" />,
      title: "Submit & Track",
      description: "Submit application and monitor status regularly",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple Steps to Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our guided process to complete your scholarship application without any hassle
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between relative">
              {/* Progress line */}
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full transform -translate-y-1/2 z-0">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </div>

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative z-10 flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white shadow-lg mb-6`}
                    whileHover={{ scale: 1.1 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="text-center max-w-xs">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                  whileHover={{ scale: 1.1 }}
                >
                  {step.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepTimeline;
