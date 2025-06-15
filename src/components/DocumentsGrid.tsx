
import { motion } from "framer-motion";
import { FileText, Download, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DocumentsGrid = () => {
  const documents = [
    {
      name: "Aadhaar Card",
      type: "Identity Proof",
      required: true,
      downloadable: false,
      description: "Valid Aadhaar card copy"
    },
    {
      name: "Income Certificate",
      type: "Financial Proof",
      required: true,
      downloadable: true,
      description: "Family income certificate from competent authority"
    },
    {
      name: "Caste Certificate",
      type: "Category Proof",
      required: false,
      downloadable: false,
      description: "For SC/ST/OBC candidates only"
    },
    {
      name: "Bank Passbook",
      type: "Banking Details",
      required: true,
      downloadable: false,
      description: "First page with account details"
    },
    {
      name: "Marksheet",
      type: "Academic Records",
      required: true,
      downloadable: false,
      description: "Previous qualifying examination"
    },
    {
      name: "Domicile Certificate",
      type: "Residence Proof",
      required: true,
      downloadable: true,
      description: "UP domicile certificate"
    },
    {
      name: "Affidavit Format",
      type: "Declaration",
      required: true,
      downloadable: true,
      description: "Self-declaration affidavit"
    },
    {
      name: "Passport Photo",
      type: "Personal",
      required: true,
      downloadable: false,
      description: "Recent colored photograph"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Document Checklist
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensure you have all required documents ready before starting your application
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        doc.required ? 'bg-red-100' : 'bg-blue-100'
                      }`}>
                        <FileText className={`h-5 w-5 ${
                          doc.required ? 'text-red-600' : 'text-blue-600'
                        }`} />
                      </div>
                      {doc.required && (
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                          Required
                        </span>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{doc.name}</CardTitle>
                  <p className="text-sm text-gray-500">{doc.type}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                  {doc.downloadable && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Format
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pro Tips</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>• Scan documents in high quality PDF format</div>
              <div>• Keep file sizes under 100KB for faster upload</div>
              <div>• Ensure all text is clearly readable</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentsGrid;
