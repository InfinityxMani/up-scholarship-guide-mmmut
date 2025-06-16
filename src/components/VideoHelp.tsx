
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VideoHelp = () => {
  const videos = [
    {
      id: 1,
      title: "Complete Scholarship Application Guide",
      description: "Step-by-step walkthrough of the entire application process",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=225&fit=crop",
      duration: "15:30",
      views: "25K"
    },
    {
      id: 2,
      title: "Document Upload Tutorial",
      description: "Learn how to properly scan and upload your documents",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225&fit=crop",
      duration: "8:45",
      views: "18K"
    },
    {
      id: 3,
      title: "Common Application Mistakes",
      description: "Avoid these frequent errors that cause application rejection",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=225&fit=crop",
      duration: "12:20",
      views: "32K"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Video Tutorials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our comprehensive video guides to master the scholarship application process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative group cursor-pointer">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white bg-opacity-90 rounded-full p-4"
                    >
                      <Play className="h-8 w-8 text-gray-900" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{video.views} views</span>
                    <ExternalLink className="h-4 w-4" />
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

export default VideoHelp;
