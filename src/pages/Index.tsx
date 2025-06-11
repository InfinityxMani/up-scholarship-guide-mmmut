
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: "Complete Guide",
      description: "Step-by-step instructions for scholarship application",
      link: "/guide"
    },
    {
      icon: <Bell className="h-8 w-8 text-blue-600" />,
      title: "Latest Notices",
      description: "Stay updated with important announcements",
      link: "/notices"
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "Application Tracker",
      description: "Track your scholarship application status",
      link: "/tracker"
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-purple-600" />,
      title: "Help & Support",
      description: "Get assistance with your queries",
      link: "/contact"
    }
  ];

  const recentNotices = [
    {
      title: "Last Date Extended - UP Scholarship 2024",
      date: "2024-06-10",
      type: "Important"
    },
    {
      title: "Document Verification Schedule Released",
      date: "2024-06-08",
      type: "Notice"
    },
    {
      title: "New Income Certificate Format",
      date: "2024-06-05",
      type: "Update"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Your Scholarship
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and resources to make your UP Government Scholarship application process smooth and successful
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={feature.link}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Notices Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Recent Notices</h2>
            <Link 
              to="/notices" 
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentNotices.map((notice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        notice.type === 'Important' 
                          ? 'bg-red-100 text-red-800'
                          : notice.type === 'Notice'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {notice.type}
                      </span>
                      <span className="text-gray-500 text-sm">{notice.date}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 leading-tight">
                      {notice.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Apply for Your Scholarship?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't miss the deadline! Start your application process today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://scholarship.up.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Apply Now on Official Portal
              </a>
              <Link
                to="/guide"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Read Complete Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
