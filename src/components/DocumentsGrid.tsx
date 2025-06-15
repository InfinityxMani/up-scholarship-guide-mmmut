
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DocumentsGrid = () => {
  const documents = [
    { name: "Aadhaar Card", type: "Identity", required: true, downloadable: false },
    { name: "Income Certificate", type: "Financial", required: true, downloadable: true },
    { name: "Caste Certificate", type: "Category", required: false, downloadable: false },
    { name: "Bank Passbook", type: "Banking", required: true, downloadable: false },
    { name: "Marksheet", type: "Academic", required: true, downloadable: false },
    { name: "Domicile Certificate", type: "Residence", required: true, downloadable: true },
    { name: "Affidavit Format", type: "Declaration", required: true, downloadable: true },
    { name: "Passport Photo", type: "Personal", required: true, downloadable: false }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Document Checklist
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Prepare these documents before starting your application
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-slate-600" />
                    </div>
                    {doc.required && (
                      <span className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
                        Required
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-base">{doc.name}</CardTitle>
                  <p className="text-sm text-slate-500">{doc.type}</p>
                </CardHeader>
                <CardContent>
                  {doc.downloadable && (
                    <Button variant="outline" size="sm" className="w-full text-slate-700 border-slate-300">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsGrid;
