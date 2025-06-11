
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, User, FileText, Upload, Send, AlertTriangle } from "lucide-react";

const Guide = () => {
  const steps = [
    {
      id: "registration",
      icon: <User className="h-8 w-8 text-blue-600" />,
      title: "Registration",
      content: {
        description: "Create your account on the UP Scholarship Portal",
        steps: [
          "Visit the official UP Scholarship Portal at scholarship.up.gov.in",
          "Click on 'Fresh Registration' for new applicants",
          "Fill in basic details: Name, Mobile Number, Email ID",
          "Verify your mobile number with OTP",
          "Create a strong password",
          "Save your Registration ID and Password safely"
        ],
        tips: [
          "Use a valid mobile number that you regularly use",
          "Keep your email ID active for important notifications",
          "Write down your credentials in a safe place"
        ]
      }
    },
    {
      id: "form-fill",
      icon: <FileText className="h-8 w-8 text-green-600" />,
      title: "Form Filling",
      content: {
        description: "Complete your scholarship application form",
        steps: [
          "Login with your Registration ID and Password",
          "Select your course and institution (MMMUT)",
          "Fill personal details carefully",
          "Enter family income details",
          "Provide bank account information",
          "Fill address details (permanent and correspondence)",
          "Select your category and scholarship type"
        ],
        tips: [
          "Double-check all information before submitting",
          "Ensure bank account is in your name only",
          "Family income should match your income certificate"
        ]
      }
    },
    {
      id: "document-upload",
      icon: <Upload className="h-8 w-8 text-purple-600" />,
      title: "Document Upload",
      content: {
        description: "Upload all required documents in specified format",
        steps: [
          "Prepare all documents in PDF format (max 100KB each)",
          "Upload photograph (JPG, max 50KB)",
          "Upload signature (JPG, max 30KB)",
          "Upload income certificate",
          "Upload caste certificate (if applicable)",
          "Upload domicile certificate",
          "Upload mark sheets and certificates",
          "Upload bank passbook copy"
        ],
        tips: [
          "Scan documents clearly and in good quality",
          "Compress files if they exceed size limits",
          "Rename files properly for easy identification"
        ]
      }
    },
    {
      id: "submission",
      icon: <Send className="h-8 w-8 text-orange-600" />,
      title: "Final Submission",
      content: {
        description: "Review and submit your application",
        steps: [
          "Review all filled information carefully",
          "Verify all uploaded documents",
          "Generate preview of your application",
          "Submit the application",
          "Print the application form",
          "Note down your Application Reference Number",
          "Submit physical documents at college if required"
        ],
        tips: [
          "Take multiple printouts of your application",
          "Keep digital copies of all documents",
          "Submit before the deadline"
        ]
      }
    }
  ];

  const commonMistakes = [
    "Entering incorrect bank account details",
    "Uploading documents in wrong format or size",
    "Family income mismatch with certificate",
    "Submitting application without final review",
    "Missing mandatory documents",
    "Not keeping backup of application form"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Step-by-Step Application Guide
            </h1>
            <p className="text-xl text-blue-100">
              Complete walkthrough for UP Government Scholarship application
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem value={step.id}>
                  <Card>
                    <AccordionTrigger className="hover:no-underline">
                      <CardHeader className="flex-row items-center space-y-0 space-x-4 pb-2">
                        <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl">
                          {step.icon}
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-xl">
                            Step {index + 1}: {step.title}
                          </CardTitle>
                          <p className="text-gray-600 mt-1">{step.content.description}</p>
                        </div>
                      </CardHeader>
                    </AccordionTrigger>
                    <AccordionContent>
                      <CardContent className="pt-0">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Steps to Follow:</h4>
                            <ol className="space-y-3">
                              {step.content.steps.map((stepItem, stepIndex) => (
                                <li key={stepIndex} className="flex items-start space-x-3">
                                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                                    {stepIndex + 1}
                                  </span>
                                  <span className="text-gray-700">{stepItem}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Important Tips:</h4>
                            <ul className="space-y-3">
                              {step.content.tips.map((tip, tipIndex) => (
                                <li key={tipIndex} className="flex items-start space-x-3">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* Common Mistakes Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-800">
                  <AlertTriangle className="h-6 w-6" />
                  <span>Common Mistakes to Avoid</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {commonMistakes.map((mistake, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-red-700">{mistake}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guide;
