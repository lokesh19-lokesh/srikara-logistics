import Navbar from "@/components/Navbar";
import HeroSequence from "@/components/HeroSequence";
import StoryOverlay from "@/components/StoryOverlay";
import PartnerSlider from "@/components/PartnerSlider";

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen">
      <Navbar />

      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[100vh] bg-[radial-gradient(circle_at_center,rgba(0,80,255,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Main Experience */}
      <HeroSequence>
        <StoryOverlay />
      </HeroSequence>

      <PartnerSlider />

      {/* Footer / Final Section */}
      <footer className="relative z-40 bg-black border-t border-white/5 py-12 px-10 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="mb-4 relative h-12 w-48">
            <img
              src="/logo.jpg"
              alt="Srikara Logistics"
              className="h-full w-full object-contain filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
          <div className="text-white/40 text-[10px] font-bold tracking-widest uppercase">
            Srikara Logistics © 2026. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6 text-white/20 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
