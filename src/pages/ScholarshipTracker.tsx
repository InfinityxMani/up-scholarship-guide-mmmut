
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Search, FileText, Eye } from "lucide-react";

const ScholarshipTracker = () => {
  const trackingSteps = [
    {
      step: 1,
      title: "Visit Official Portal",
      description: "Go to the UP Government Scholarship Portal",
      action: "Open Portal",
      link: "https://scholarship.up.gov.in/"
    },
    {
      step: 2,
      title: "Click on Track Application",
      description: "Look for 'Track Application Status' option on homepage",
      action: "Screenshot Guide",
      screenshot: true
    },
    {
      step: 3,
      title: "Enter Application Details",
      description: "Provide your Registration ID and Password",
      action: "View Example",
      screenshot: true
    },
    {
      step: 4,
      title: "Check Status",
      description: "View your application status and payment details",
      action: "Status Guide",
      screenshot: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatedBackground />
      <Navbar />
      
      <PageHeader 
        title="Track Your Application" 
        subtitle="Follow these steps to check your scholarship application status"
      />

      {/* Quick Access */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0 p-8">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                  <Search className="h-10 w-10 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Access to Official Portal</h2>
                  <p className="text-gray-600 mb-6">
                    Track your UP Government Scholarship application status directly from the official portal
                  </p>
                  <Button 
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
                    asChild
                  >
                    <a href="https://scholarship.up.gov.in/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Open Scholarship Portal
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Step-by-Step Guide */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Track Your Application</h2>
              <p className="text-xl text-gray-600">Follow these simple steps</p>
            </motion.div>

            {trackingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="backdrop-blur-sm bg-white/90 shadow-lg border-0">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900">{step.title}</CardTitle>
                        <p className="text-gray-600 mt-1">{step.description}</p>
                      </div>
                      <div>
                        {step.link ? (
                          <Button asChild className="bg-orange-600 hover:bg-orange-700">
                            <a href={step.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              {step.action}
                            </a>
                          </Button>
                        ) : (
                          <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                            <Eye className="h-4 w-4 mr-2" />
                            {step.action}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  {step.screenshot && (
                    <CardContent>
                      <div className="bg-gray-100 rounded-lg p-8 text-center">
                        <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">Screenshot guide will be added here</p>
                        <p className="text-sm text-gray-500 mt-2">Visual guide for this step</p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <Card className="backdrop-blur-sm bg-orange-50/80 shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-center text-orange-800">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-orange-700 mb-4">
                  If you face any issues while tracking your application, contact the scholarship department
                </p>
                <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-100" asChild>
                  <a href="/contact">
                    Contact Support
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScholarshipTracker;
