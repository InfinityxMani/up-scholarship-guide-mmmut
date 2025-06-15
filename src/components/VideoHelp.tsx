
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VideoHelp = () => {
  const videos = [
    {
      id: 1,
      title: "Application Guide",
      description: "Complete walkthrough of the application process",
      duration: "15:30"
    },
    {
      id: 2,
      title: "Document Upload",
      description: "How to properly upload your documents",
      duration: "8:45"
    },
    {
      id: 3,
      title: "Common Mistakes",
      description: "Avoid these frequent application errors",
      duration: "12:20"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Video Tutorials
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Watch helpful guides to master the application process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="border-slate-200 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="relative bg-slate-100 h-48 rounded-t-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <Play className="h-8 w-8 text-slate-700 ml-1" />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">{video.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-slate-600">{video.description}</p>
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
