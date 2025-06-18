
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Plus, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo authentication
    if (loginData.email === "admin@mmmut.ac.in" && loginData.password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials. Use admin@mmmut.ac.in / admin123 for demo");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <section className="py-16">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl">Admin Login</CardTitle>
                  <p className="text-gray-600">Access the admin panel to manage notices</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                        required
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Login to Admin Panel
                    </Button>
                  </form>
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Demo Credentials:</p>
                    <p className="text-sm font-mono">admin@mmmut.ac.in / admin123</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Admin Panel
            </h1>
            <p className="text-xl text-indigo-100">
              Manage notices and announcements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admin Dashboard */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Add Notice Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Plus className="h-5 w-5" />
                      <span>Create New Notice</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="title">Notice Title</Label>
                        <Input id="title" placeholder="Enter notice title" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="type">Notice Type</Label>
                        <select id="type" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
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
                          placeholder="Enter the full notice content..."
                          className="mt-1"
                        />
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Publish Notice
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Notices</span>
                    <span className="font-semibold">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">This Month</span>
                    <span className="font-semibold">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Important</span>
                    <span className="font-semibold text-red-600">3</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Existing Notice
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Notice
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setIsAuthenticated(false)}
                  >
                    Logout
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminPanel;
