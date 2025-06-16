import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
import { useAuth } from "@/hooks/useAuth";
import { db } from "@/lib/firebase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, LogOut, Bell } from "lucide-react";

interface Notice {
  id: string;
  title: string;
  content: string;
  type: string;
  date: string;
  author: string;
}

const Dashboard = () => {
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("Notice");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAdmin) {
      navigate("/login");
    }
    fetchNotices();
  }, [isAdmin, navigate]);

  const fetchNotices = async () => {
    const q = query(collection(db, "notices"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    const noticesData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Notice[];
    setNotices(noticesData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const noticeData = {
        title,
        content,
        type,
        date: new Date().toISOString(),
        author: user?.email || "Admin"
      };

      if (editingId) {
        await updateDoc(doc(db, "notices", editingId), noticeData);
        setEditingId(null);
      } else {
        await addDoc(collection(db, "notices"), noticeData);
      }

      setTitle("");
      setContent("");
      setType("Notice");
      fetchNotices();
    } catch (error) {
      console.error("Error saving notice:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (notice: Notice) => {
    setTitle(notice.title);
    setContent(notice.content);
    setType(notice.type);
    setEditingId(notice.id);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this notice?")) {
      await deleteDoc(doc(db, "notices", id));
      fetchNotices();
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatedBackground />
      <Navbar />
      
      {/* Header */}
      <section className="relative py-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Admin Dashboard
            </h1>
            <p className="text-xl text-emerald-100">
              Manage notices and announcements for students
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Add/Edit Notice Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Plus className="h-5 w-5" />
                      <span>{editingId ? "Edit Notice" : "Create New Notice"}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="title">Notice Title</Label>
                        <Input 
                          id="title" 
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="Enter notice title" 
                          className="mt-2" 
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="type">Notice Type</Label>
                        <select 
                          id="type" 
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                          className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg"
                        >
                          <option>Important</option>
                          <option>Notice</option>
                          <option>Update</option>
                          <option>Information</option>
                          <option>Warning</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="content">Notice Content</Label>
                        <Textarea 
                          id="content" 
                          rows={6} 
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          placeholder="Enter the full notice content..."
                          className="mt-2"
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-emerald-600 hover:bg-emerald-700"
                        disabled={loading}
                      >
                        {loading ? "Saving..." : editingId ? "Update Notice" : "Publish Notice"}
                      </Button>
                      {editingId && (
                        <Button 
                          type="button" 
                          variant="outline"
                          className="w-full"
                          onClick={() => {
                            setEditingId(null);
                            setTitle("");
                            setContent("");
                            setType("Notice");
                          }}
                        >
                          Cancel Edit
                        </Button>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Notices</span>
                    <span className="font-semibold">{notices.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Logged in as</span>
                    <span className="font-semibold text-emerald-600">{user?.email}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Existing Notices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Existing Notices</h2>
            <div className="space-y-4">
              {notices.map((notice) => (
                <Card key={notice.id} className="backdrop-blur-sm bg-white/90 shadow-lg border-0">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{notice.title}</CardTitle>
                        <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium ${
                          notice.type === 'Important' ? 'bg-red-100 text-red-700' :
                          notice.type === 'Notice' ? 'bg-blue-100 text-blue-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {notice.type}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(notice)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(notice.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-2">{notice.content}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(notice.date).toLocaleDateString()} by {notice.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
