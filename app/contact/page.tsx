import Navbar from "@/components/Navbar";
import HeroSmall from "@/components/HeroSmall";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <main className="bg-[#050505] min-h-screen">
            <Navbar />
            <HeroSmall title="Let's Connect" subtitle="Elevate your corporate mobility standards. Our team is ready to design your ideal logistics ecosystem." />

            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-12 italic">
                            Corporate <span className="text-corporate">Headquarters.</span>
                        </h2>

                        <div className="space-y-10">
                            <div className="flex items-start gap-6 group">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-corporate/50 transition-all">
                                    <MapPin className="text-corporate" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2 drop-shadow-sm">Location</h3>
                                    <p className="text-white/80 leading-relaxed drop-shadow-sm">
                                        Srikara Logistics, Madhapur, <br />
                                        Hyderabad, Telangana 500081
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-corporate/50 transition-all">
                                    <Phone className="text-corporate" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2 drop-shadow-sm">Connect</h3>
                                    <p className="text-white/80 drop-shadow-sm">+91 40 1234 5678</p>
                                    <p className="text-white/80 drop-shadow-sm">+91 99887 76655</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-corporate/50 transition-all">
                                    <Mail className="text-corporate" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2 drop-shadow-sm">Inquiries</h3>
                                    <p className="text-white/80 drop-shadow-sm">solutions@srikaralogistics.com</p>
                                    <p className="text-white/80 drop-shadow-sm">partners@srikaralogistics.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-10 rounded-3xl bg-white/5 border border-white/10 h-fit">
                        <h3 className="text-2xl font-bold text-white mb-8 italic">Request a Proposal</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Full Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-corporate transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Work Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-corporate transition-all" placeholder="john@company.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Corporate Service</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-corporate transition-all appearance-none cursor-pointer">
                                    <option className="bg-[#0A0A0C]">Employee Transport</option>
                                    <option className="bg-[#0A0A0C]">Fleet Management</option>
                                    <option className="bg-[#0A0A0C]">Executive Travel</option>
                                    <option className="bg-[#0A0A0C]">Other Inquiries</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Message</label>
                                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-corporate transition-all resize-none" placeholder="Tell us about your logistics needs..."></textarea>
                            </div>
                            <button className="w-full bg-corporate text-white py-4 rounded-xl font-bold text-sm tracking-tight hover:bg-corporate/80 transition-all flex items-center justify-center gap-2 group">
                                Send Proposal Request
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
