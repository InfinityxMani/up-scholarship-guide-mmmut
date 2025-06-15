
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import StepTimeline from "@/components/StepTimeline";
import DocumentsGrid from "@/components/DocumentsGrid";
import StatusTracker from "@/components/StatusTracker";
import NoticeBoard from "@/components/NoticeBoard";
import VideoHelp from "@/components/VideoHelp";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StepTimeline />
      <DocumentsGrid />
      <StatusTracker />
      <NoticeBoard />
      <VideoHelp />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
