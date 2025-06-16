
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Bell, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Notice {
  id: string;
  title: string;
  content: string;
  type: string;
  date: string;
  author: string;
}

const NoticeBoard = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const q = query(collection(db, "notices"), orderBy("date", "desc"), limit(3));
        const querySnapshot = await getDocs(q);
        const noticesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Notice[];
        setNotices(noticesData);
      } catch (error) {
        console.error("Error fetching notices:", error);
        // Fallback to default notices if Firebase fails
        setNotices([
          {
            id: "1",
            title: "Application Deadline Extended",
            content: "The deadline for scholarship applications has been extended to December 31st, 2024.",
            date: new Date().toISOString(),
            type: "Important",
            author: "Admin"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest Notices
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with important announcements and scholarship news
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading notices...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {notices.map((notice, index) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center">
                          <Bell className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-gray-900 mb-2">{notice.title}</CardTitle>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
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
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4 leading-relaxed">{notice.content}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(notice.date).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center pt-8"
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-2xl"
                asChild
              >
                <Link to="/notices" className="flex items-center space-x-2">
                  <span>View All Notices</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NoticeBoard;
