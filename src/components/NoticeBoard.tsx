
import { motion } from "framer-motion";
import { Bell, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: "Application Deadline Extended",
      content: "The deadline for scholarship applications has been extended to December 31st, 2024.",
      date: "2024-06-15",
      type: "Important"
    },
    {
      id: 2,
      title: "Document Verification Schedule",
      content: "Document verification will begin from June 20th, 2024. Check your email for specific dates.",
      date: "2024-06-14",
      type: "Notice"
    },
    {
      id: 3,
      title: "New Income Certificate Format",
      content: "A new format for income certificates has been introduced. Please follow the updated format.",
      date: "2024-06-10",
      type: "Update"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Latest Notices
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Stay updated with important announcements
          </p>
        </motion.div>

        <div className="space-y-6">
          {notices.map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-slate-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                        <Bell className="h-5 w-5 text-slate-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900">{notice.title}</CardTitle>
                        <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium ${
                          notice.type === 'Important' ? 'bg-red-100 text-red-700' :
                          notice.type === 'Notice' ? 'bg-blue-100 text-blue-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {notice.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">{notice.content}</p>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(notice.date).toLocaleDateString()}</span>
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
