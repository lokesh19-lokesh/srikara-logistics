import Navbar from "@/components/Navbar";
import HeroSmall from "@/components/HeroSmall";

export default function Gallery() {
    return (
        <main className="bg-[#050505] min-h-screen">
            <Navbar />
            <HeroSmall title="Visual Showcase" subtitle="A glimpse into the engineering and scale of Srikara Logistics operations." />

            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative group cursor-pointer">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white/30 font-bold italic text-sm group-hover:text-corporate transition-colors drop-shadow-md">Operational Asset {i}</span>
                            </div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <div className="text-white text-xs font-bold tracking-widest uppercase drop-shadow-lg">Hero Component 0{i}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-white/40 text-sm font-medium drop-shadow-sm">
                    Displaying recent fleet highlights and command center operations.
                </div>
            </section>

            <footer className="relative z-30 bg-black border-t border-white/5 py-12 px-10 text-center">
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
                </div>
            </footer>
        </main>
    );
}
