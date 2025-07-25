
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import StepTimeline from "@/components/StepTimeline";
import DocumentsGrid from "@/components/DocumentsGrid";
import PFMSSection from "@/components/PFMSSection";
import NoticeBoard from "@/components/NoticeBoard";
import VideoHelp from "@/components/VideoHelp";
import ContactForm from "@/components/ContactForm";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <StepTimeline />
        <DocumentsGrid />
        <PFMSSection />
        <NoticeBoard />
        <VideoHelp />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
