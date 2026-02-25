import Navbar from "@/components/Navbar";
import HeroSmall from "@/components/HeroSmall";
import Footer from "@/components/Footer";

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

            <Footer />
        </main>
    );
}
