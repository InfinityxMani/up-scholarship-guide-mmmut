
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, User, Download } from "lucide-react";

const Notices = () => {
  const notices = [
    {
      id: 1,
      title: "Last Date Extended for UP Scholarship Applications 2024-25",
      content: "The last date for submitting UP Government Scholarship applications has been extended till 30th June 2024. Students are advised to complete their applications before the deadline.",
      type: "Important",
      date: "2024-06-10",
      author: "Scholarship Department",
      attachment: null
    },
    {
      id: 2,
      title: "Document Verification Schedule Released",
      content: "The document verification schedule for scholarship applicants has been released. Check your email for individual verification dates and times.",
      type: "Notice",
      date: "2024-06-08",
      author: "MMMUT Admin",
      attachment: "verification_schedule.pdf"
    },
    {
      id: 3,
      title: "New Income Certificate Format Notification",
      content: "A new format for income certificates has been introduced. Please ensure your income certificate follows the latest format as per government guidelines.",
      type: "Update",
      date: "2024-06-05",
      author: "Government Portal",
      attachment: "income_format.pdf"
    },
    {
      id: 4,
      title: "Scholarship Payment Status Update",
      content: "The scholarship payments for 2023-24 academic year have been processed. Students can check their bank accounts for credit confirmation.",
      type: "Information",
      date: "2024-06-01",
      author: "Finance Department",
      attachment: null
    },
    {
      id: 5,
      title: "Common Mistakes in Application Forms",
      content: "We have observed several common mistakes in scholarship applications. Please review the guidelines carefully to avoid rejection of your application.",
      type: "Warning",
      date: "2024-05-28",
      author: "Scholarship Department",
      attachment: "common_mistakes.pdf"
    },
    {
      id: 6,
      title: "Technical Maintenance Notice",
      content: "The scholarship portal will undergo technical maintenance on 25th May 2024 from 11:00 PM to 6:00 AM. Please plan your submissions accordingly.",
      type: "Maintenance",
      date: "2024-05-24",
      author: "Technical Team",
      attachment: null
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Important":
        return "bg-red-100 text-red-800";
      case "Notice":
        return "bg-blue-100 text-blue-800";
      case "Update":
        return "bg-green-100 text-green-800";
      case "Information":
        return "bg-purple-100 text-purple-800";
      case "Warning":
        return "bg-orange-100 text-orange-800";
      case "Maintenance":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Notice Board
            </h1>
            <p className="text-xl text-orange-100">
              Stay updated with latest announcements and important notices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notices */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {notices.map((notice, index) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Bell className="h-5 w-5 text-orange-600" />
                          <Badge className={getTypeColor(notice.type)}>
                            {notice.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl leading-tight">
                          {notice.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {notice.content}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(notice.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{notice.author}</span>
                        </div>
                      </div>
                      
                      {notice.attachment && (
                        <div className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 cursor-pointer">
                          <Download className="h-4 w-4" />
                          <span className="text-sm font-medium">{notice.attachment}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No more notices message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center py-12"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">You're all caught up!</h3>
              <p className="text-gray-600">Check back later for new notices and announcements.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Notices;
