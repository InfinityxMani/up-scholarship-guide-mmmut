
import { motion } from "framer-motion";
import { Bell, Calendar, User, Badge as BadgeIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: "Scholarship Application Deadline Extended",
      content: "The last date for scholarship applications has been extended to December 31st, 2024. Students are advised to complete their applications before the deadline.",
      date: "2024-06-15",
      author: "Scholarship Department",
      type: "Important",
      isNew: true
    },
    {
      id: 2,
      title: "Document Verification Schedule",
      content: "Document verification for scholarship applicants will begin from June 20th, 2024. Check your email for specific dates and timings.",
      date: "2024-06-14",
      author: "Admin Office",
      type: "Notice",
      isNew: true
    },
    {
      id: 3,
      title: "New Income Certificate Format",
      content: "A new format for income certificates has been introduced. Please ensure your certificates follow the updated format.",
      date: "2024-06-10",
      author: "Government Portal",
      type: "Update",
      isNew: false
    },
    {
      id: 4,
      title: "Scholarship Payment Status",
      content: "Scholarship payments for the academic year 2023-24 have been processed. Students can check their bank accounts.",
      date: "2024-06-05",
      author: "Finance Department",
      type: "Information",
      isNew: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Important": return "bg-red-100 text-red-800";
      case "Notice": return "bg-blue-100 text-blue-800";
      case "Update": return "bg-green-100 text-green-800";
      case "Information": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notice Board
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest announcements and important notifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {notices.map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md relative overflow-hidden">
                {notice.isNew && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-500 text-white">New</Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <Bell className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className={getTypeColor(notice.type)}>
                          {notice.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight">{notice.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">{notice.content}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(notice.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{notice.author}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
