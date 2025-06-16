
import { motion } from "framer-motion";
import { ExternalLink, CreditCard, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PFMSSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Check Your Payment Status
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your scholarship payment status directly through PFMS (Public Financial Management System)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white shadow-xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-8 w-8" />
                  <CardTitle className="text-2xl">PFMS Payment Tracking</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Visit PFMS Portal</h4>
                      <p className="text-gray-600 text-sm">Click on the button below to access the official PFMS website</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Enter Your Details</h4>
                      <p className="text-gray-600 text-sm">Provide your bank account number or Aadhaar number</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Check Status</h4>
                      <p className="text-gray-600 text-sm">View your scholarship payment status and transaction details</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href="https://pfms.nic.in/static/NewLayoutCommonContent.aspx?RequestPageName=BeneficiaryPaymentEnquiry&IsAppBarRequired=N" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3">
                    <Search className="h-5 w-5" />
                    <span>Check on PFMS</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full mr-3"></div>
                Real-time Updates
              </h3>
              <p className="text-gray-600">Get instant updates on your scholarship payment status with official government data.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full mr-3"></div>
                Secure Platform
              </h3>
              <p className="text-gray-600">PFMS is the official government platform ensuring your data security and privacy.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <div className="w-6 h-6 bg-purple-500 rounded-full mr-3"></div>
                Detailed Information
              </h3>
              <p className="text-gray-600">View comprehensive details including payment dates, amounts, and transaction IDs.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PFMSSection;
