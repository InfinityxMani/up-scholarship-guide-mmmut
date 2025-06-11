
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Download, AlertCircle } from "lucide-react";
import { useState } from "react";

const Checklist = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const mandatoryDocuments = [
    {
      id: "photo",
      title: "Passport Size Photograph",
      description: "Recent color photograph (JPG format, max 50KB)",
      requirements: ["Clear face visible", "Light background", "Formal attire"],
      category: "personal"
    },
    {
      id: "signature",
      title: "Digital Signature",
      description: "Your signature on white paper (JPG format, max 30KB)",
      requirements: ["Black/blue ink", "Clear signature", "White background"],
      category: "personal"
    },
    {
      id: "aadhar",
      title: "Aadhaar Card",
      description: "Copy of Aadhaar card (PDF format, max 100KB)",
      requirements: ["Clear text visible", "All corners visible", "Colored scan preferred"],
      category: "identity"
    },
    {
      id: "income",
      title: "Income Certificate",
      description: "Family income certificate (PDF format, max 100KB)",
      requirements: ["Issued by competent authority", "Valid date", "Clear official seal"],
      category: "income"
    },
    {
      id: "domicile",
      title: "Domicile Certificate",
      description: "UP domicile certificate (PDF format, max 100KB)",
      requirements: ["Valid UP domicile", "Clear official seal", "Current validity"],
      category: "residence"
    },
    {
      id: "bank",
      title: "Bank Passbook",
      description: "First page of bank passbook (PDF format, max 100KB)",
      requirements: ["Account holder name visible", "Account number clear", "IFSC code visible"],
      category: "banking"
    },
    {
      id: "marksheet",
      title: "Previous Year Marksheet",
      description: "Last qualifying exam marksheet (PDF format, max 100KB)",
      requirements: ["Clear marks visible", "Institution seal", "Official document"],
      category: "academic"
    },
    {
      id: "admission",
      title: "Admission Receipt",
      description: "College admission fee receipt (PDF format, max 100KB)",
      requirements: ["Current academic year", "MMMUT official receipt", "Clear amount"],
      category: "academic"
    }
  ];

  const conditionalDocuments = [
    {
      id: "caste",
      title: "Caste Certificate",
      description: "For SC/ST/OBC candidates (PDF format, max 100KB)",
      condition: "Required for SC/ST/OBC category students",
      requirements: ["Valid caste certificate", "Issued by competent authority", "Current validity"],
      category: "identity"
    },
    {
      id: "disability",
      title: "Disability Certificate",
      description: "For physically challenged candidates (PDF format, max 100KB)",
      condition: "Required for disabled candidates",
      requirements: ["Medical board certificate", "Disability percentage", "Valid date"],
      category: "special"
    },
    {
      id: "gap",
      title: "Gap Certificate",
      description: "If there's a gap in education (PDF format, max 100KB)",
      condition: "Required if gap year exists",
      requirements: ["Reason for gap", "Official document", "Authority signature"],
      category: "academic"
    }
  ];

  const categories = {
    personal: { name: "Personal Documents", color: "bg-blue-100 text-blue-800" },
    identity: { name: "Identity Proof", color: "bg-green-100 text-green-800" },
    income: { name: "Income Proof", color: "bg-purple-100 text-purple-800" },
    residence: { name: "Residence Proof", color: "bg-orange-100 text-orange-800" },
    banking: { name: "Banking Details", color: "bg-cyan-100 text-cyan-800" },
    academic: { name: "Academic Records", color: "bg-indigo-100 text-indigo-800" },
    special: { name: "Special Category", color: "bg-red-100 text-red-800" }
  };

  const completionRate = Math.round((checkedItems.length / mandatoryDocuments.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Document Checklist
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Ensure you have all required documents before applying
            </p>
            
            {/* Progress Bar */}
            <div className="bg-white/20 rounded-full h-4 max-w-md mx-auto">
              <div 
                className="bg-white rounded-full h-4 transition-all duration-500"
                style={{ width: `${completionRate}%` }}
              ></div>
            </div>
            <p className="text-white mt-2">
              {checkedItems.length} of {mandatoryDocuments.length} mandatory documents ready ({completionRate}%)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mandatory Documents */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mandatory Documents</h2>
            <p className="text-gray-600">These documents are required for all applicants</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {mandatoryDocuments.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 ${
                    checkedItems.includes(doc.id) 
                      ? 'border-green-500 bg-green-50' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => toggleCheck(doc.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            checkedItems.includes(doc.id)
                              ? 'bg-green-500 border-green-500'
                              : 'border-gray-300'
                          }`}>
                            {checkedItems.includes(doc.id) && (
                              <CheckCircle className="h-4 w-4 text-white" />
                            )}
                          </div>
                          <span>{doc.title}</span>
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge className={categories[doc.category as keyof typeof categories].color}>
                            {categories[doc.category as keyof typeof categories].name}
                          </Badge>
                        </div>
                      </div>
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{doc.description}</p>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {doc.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Conditional Documents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Conditional Documents</h2>
            <p className="text-gray-600">These documents may be required based on your category</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditionalDocuments.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-orange-600" />
                      <span>{doc.title}</span>
                    </CardTitle>
                    <Badge className={categories[doc.category as keyof typeof categories].color}>
                      {categories[doc.category as keyof typeof categories].name}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{doc.description}</p>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-4 w-4 text-orange-600" />
                        <span className="text-sm font-medium text-orange-800">Condition:</span>
                      </div>
                      <p className="text-sm text-orange-700 mt-1">{doc.condition}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {doc.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* File Format Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">File Format Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-900 mb-3">Document Files:</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Format: PDF only</li>
                      <li>• Maximum size: 100KB per file</li>
                      <li>• Resolution: 200 DPI minimum</li>
                      <li>• Color: Colored scans preferred</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900 mb-3">Photo & Signature:</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Format: JPG only</li>
                      <li>• Photo: Max 50KB</li>
                      <li>• Signature: Max 30KB</li>
                      <li>• Background: Light/white preferred</li>
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

export default Checklist;
