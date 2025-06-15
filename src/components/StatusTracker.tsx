
import { motion } from "framer-motion";
import { Search, Clock, CheckCircle, AlertCircle, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const StatusTracker = () => {
  const [regNumber, setRegNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  const handleTrack = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowStatus(true);
    }, 2000);
  };

  const statusSteps = [
    { title: "Application Submitted", status: "completed", icon: CheckCircle },
    { title: "Document Verification", status: "completed", icon: CheckCircle },
    { title: "Institute Verification", status: "current", icon: Clock },
    { title: "District Level Processing", status: "pending", icon: AlertCircle },
    { title: "Fund Disbursement", status: "pending", icon: AlertCircle }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Track Your Application
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter your registration number to check the current status of your scholarship application
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="mb-8 shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-6 w-6 text-purple-600" />
                <span>Status Tracker</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="regNumber">Registration Number</Label>
                  <Input
                    id="regNumber"
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    placeholder="Enter your registration number"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input
                    id="dob"
                    type="date"
                    className="mt-1"
                  />
                </div>
              </div>
              
              <Button 
                onClick={handleTrack}
                disabled={isLoading || !regNumber}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Tracking...</span>
                  </div>
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Track Status
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {showStatus && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Application Status: {regNumber}</CardTitle>
                <p className="text-gray-600">Current Status: Under Institute Verification</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {statusSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className={`p-2 rounded-full ${
                          step.status === 'completed' ? 'bg-green-100' :
                          step.status === 'current' ? 'bg-blue-100' : 'bg-gray-100'
                        }`}>
                          <Icon className={`h-5 w-5 ${
                            step.status === 'completed' ? 'text-green-600' :
                            step.status === 'current' ? 'text-blue-600' : 'text-gray-400'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-medium ${
                            step.status === 'completed' ? 'text-green-800' :
                            step.status === 'current' ? 'text-blue-800' : 'text-gray-600'
                          }`}>
                            {step.title}
                          </h3>
                          {step.status === 'current' && (
                            <p className="text-sm text-blue-600">In Progress</p>
                          )}
                        </div>
                        {step.status === 'completed' && (
                          <span className="text-sm text-green-600 font-medium">Completed</span>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default StatusTracker;
