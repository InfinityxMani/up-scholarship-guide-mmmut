
import { motion } from "framer-motion";
import { User, FileText, Upload, Send } from "lucide-react";

const StepTimeline = () => {
  const steps = [
    {
      icon: <User className="h-5 w-5" />,
      title: "Register",
      description: "Create your account"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Fill Form",
      description: "Complete application"
    },
    {
      icon: <Upload className="h-5 w-5" />,
      title: "Upload",
      description: "Submit documents"
    },
    {
      icon: <Send className="h-5 w-5" />,
      title: "Submit",
      description: "Track progress"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple Process
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Complete your scholarship application in four easy steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between relative">
              {/* Connection line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 transform -translate-y-1/2 z-0">
                <motion.div
                  className="h-full bg-slate-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </div>

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative z-10 flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-6 shadow-sm">
                    {step.icon}
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-xs">
                    <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {step.icon}
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
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
