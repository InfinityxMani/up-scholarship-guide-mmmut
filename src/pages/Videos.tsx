
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, ExternalLink } from "lucide-react";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "How to Fill UP Scholarship Application Form",
      description: "Step-by-step guide to filling the scholarship application form correctly",
      thumbnail: "/placeholder.svg",
      duration: "12:45",
      category: "Tutorial"
    },
    {
      id: 2,
      title: "Common Mistakes to Avoid",
      description: "Learn about the most common mistakes students make during application",
      thumbnail: "/placeholder.svg",
      duration: "8:30",
      category: "Tips"
    },
    {
      id: 3,
      title: "Document Upload Process",
      description: "How to properly scan and upload your documents for verification",
      thumbnail: "/placeholder.svg",
      duration: "10:15",
      category: "Tutorial"
    },
    {
      id: 4,
      title: "Track Your Application Status",
      description: "Learn how to check your scholarship application status online",
      thumbnail: "/placeholder.svg",
      duration: "6:20",
      category: "Guide"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Help Videos
            </h1>
            <p className="text-xl text-red-100">
              Watch helpful tutorials and guides for your scholarship application
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover bg-gray-200"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute top-2 left-2">
                      <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {video.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Duration: {video.duration}</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center py-12"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <Play className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">More Videos Coming Soon!</h3>
              <p className="text-gray-600">We're working on creating more helpful tutorial videos for you.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Videos;
