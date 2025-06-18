
import { motion } from "framer-motion";
import { Search, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const StatusTracker = () => {
  const [regNumber, setRegNumber] = useState("");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Track Application
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Enter your registration number to check application status
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-slate-700" />
                <span>Status Tracker</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="regNumber" className="text-slate-700">Registration Number</Label>
                  <Input
                    id="regNumber"
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    placeholder="Enter registration number"
                    className="mt-1 border-slate-300"
                  />
                </div>
                <div>
                  <Label htmlFor="dob" className="text-slate-700">Date of Birth</Label>
                  <Input
                    id="dob"
                    type="date"
                    className="mt-1 border-slate-300"
                  />
                </div>
              </div>
              
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                <Search className="h-4 w-4 mr-2" />
                Track Status
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sample Status Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-slate-900">Application Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Application Submitted", status: "completed" },
                  { title: "Document Verification", status: "current" },
                  { title: "Institute Verification", status: "pending" },
                  { title: "Payment Processing", status: "pending" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.status === 'completed' ? 'bg-green-100' :
                      step.status === 'current' ? 'bg-blue-100' : 'bg-slate-100'
                    }`}>
                      {step.status === 'completed' ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : step.status === 'current' ? (
                        <Clock className="h-4 w-4 text-blue-600" />
                      ) : (
                        <div className="w-2 h-2 bg-slate-400 rounded-full" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-medium ${
                        step.status === 'completed' ? 'text-green-800' :
                        step.status === 'current' ? 'text-blue-800' : 'text-slate-600'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default StatusTracker;
