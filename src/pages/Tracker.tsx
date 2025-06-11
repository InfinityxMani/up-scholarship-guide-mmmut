
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, ExternalLink, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";

const Tracker = () => {
  const [regNo, setRegNo] = useState("");
  const [dob, setDob] = useState("");

  const trackingSteps = [
    { id: 1, title: "Application Submitted", status: "completed", description: "Your application has been successfully submitted" },
    { id: 2, title: "Under Verification", status: "current", description: "Documents are being verified by authorities" },
    { id: 3, title: "Institute Verification", status: "pending", description: "Verification at institute level" },
    { id: 4, title: "District Level", status: "pending", description: "Processing at district scholarship office" },
    { id: 5, title: "Payment Processing", status: "pending", description: "Final approval and payment processing" },
    { id: 6, title: "Payment Released", status: "pending", description: "Scholarship amount credited to account" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-green-600" />;
      case "current":
        return <Clock className="h-6 w-6 text-blue-600" />;
      default:
        return <AlertCircle className="h-6 w-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "current":
        return "bg-blue-500";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Track Your Application
            </h1>
            <p className="text-xl text-purple-100">
              Monitor your scholarship application status in real-time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="h-6 w-6 text-blue-600" />
                  <span>Enter Your Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="regNo">Registration Number</Label>
                    <Input
                      id="regNo"
                      value={regNo}
                      onChange={(e) => setRegNo(e.target.value)}
                      placeholder="Enter your registration number"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700">
                    <Search className="h-4 w-4" />
                    <span>Track Status</span>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://scholarship.up.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>Track on Official Portal</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sample Tracking Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Application Progress</CardTitle>
                <p className="text-gray-600">Sample tracking progress for demonstration</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingSteps.map((step, index) => (
                    <div key={step.id} className="flex items-start space-x-4">
                      <div className="flex flex-col items-center">
                        {getStatusIcon(step.status)}
                        {index < trackingSteps.length - 1 && (
                          <div className={`w-1 h-12 mt-2 ${getStatusColor(step.status)}`}></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-semibold ${
                          step.status === 'completed' ? 'text-green-800' :
                          step.status === 'current' ? 'text-blue-800' : 'text-gray-600'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                        {step.status === 'current' && (
                          <div className="mt-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              In Progress
                            </span>
                          </div>
                        )}
                      </div>
                      {step.status === 'completed' && (
                        <div className="text-sm text-gray-500">
                          {new Date().toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Status Codes Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-800">Common Status Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-900 mb-3">Processing Status:</h4>
                    <ul className="space-y-2 text-yellow-700 text-sm">
                      <li>• <strong>Submitted:</strong> Application received successfully</li>
                      <li>• <strong>Under Verification:</strong> Documents being checked</li>
                      <li>• <strong>Institute Approved:</strong> College has verified</li>
                      <li>• <strong>Forwarded:</strong> Sent to next level</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-900 mb-3">Final Status:</h4>
                    <ul className="space-y-2 text-yellow-700 text-sm">
                      <li>• <strong>Approved:</strong> Scholarship sanctioned</li>
                      <li>• <strong>Payment Released:</strong> Amount credited</li>
                      <li>• <strong>Rejected:</strong> Application not approved</li>
                      <li>• <strong>On Hold:</strong> Additional documents needed</li>
                    </ul>
                  </div>
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

export default Tracker;
