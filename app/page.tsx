import Hero from "@/components/Hero";
import Link from "next/link";
import { Shield, Cloud, Server, Code, Monitor } from "lucide-react";

const expertise = [
  { title: "Cybersecurity & GRC", icon: <Shield />, id: "cybersecurity" },
  { title: "Cloud & AI Deployment", icon: <Cloud />, id: "ai-cloud" },
  { title: "Data Center Infrastructure", icon: <Server />, id: "data-center" },
  { title: "Web & App Development", icon: <Code />, id: "web-dev" },
  { title: "AV & Streaming", icon: <Monitor />, id: "av-streaming" },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Expertise Section */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Our 5 areas of <br/>
            <span className="text-blue-500 italic">expertise</span>
          </h2>
          <p className="text-slate-400 max-w-md mt-4 md:mt-0 text-lg">
            Specialist knowledge in IT Infrastructure and Cyber Security to speed up your digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {expertise.map((item, i) => (
            <div key={i} className="tergos-card p-8 rounded-2xl flex flex-col justify-between min-h-[320px] group">
              <div className="text-blue-500 w-12 h-12 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6 text-white leading-snug">
                  {item.title}
                </h3>
                {/* Updated Link to target specific Service IDs */}
                <Link 
                  href={`/services#${item.id}`} 
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 hover:text-white transition-colors inline-flex items-center"
                >
                  More about {item.title.split(' ')[0]} <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20">
          <div className="flex-1">
            <h3 className="text-blue-500 font-bold text-sm tracking-widest mb-6 uppercase">Our Mission</h3>
            <p className="text-3xl md:text-4xl font-black leading-tight text-white">
              Phazel Solutions empowers organizations with innovative engineering and automation that drive sustainable impact.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-blue-500 font-bold text-sm tracking-widest mb-6 uppercase">Our Vision</h3>
            <p className="text-3xl md:text-4xl font-black leading-tight text-slate-400">
              To be the trusted technology partner for businesses seeking reliable, scalable, and future-ready digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar / Tagline */}
      <section className="py-20 text-center border-b border-white/5">
        <h4 className="text-slate-500 font-medium text-xl italic">
          &quot;Engineering the Future of Digital Business.&quot;
        </h4>
      </section>
    </main>
  );
}