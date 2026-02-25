import Navbar from "@/components/Navbar";
import HeroSequence from "@/components/HeroSequence";
import StoryOverlay from "@/components/StoryOverlay";
import PartnerSlider from "@/components/PartnerSlider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#f8f9fa] min-h-screen">
      <Navbar />

      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[100vh] bg-[radial-gradient(circle_at_center,rgba(0,80,255,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Main Experience */}
      <HeroSequence>
        <StoryOverlay />
      </HeroSequence>

      <PartnerSlider />

      <Footer />
    </main>
  );
}
