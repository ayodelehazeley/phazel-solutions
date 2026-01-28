import { Code, Database, ShieldAlert, Cloud, Radio, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

// Specific Metadata for the Services Page to boost SEO rankings
export const metadata: Metadata = {
  title: "Our Expertise & EScan Partnership",
  description: "Explore our 5 core engineering pillars: Cybersecurity, Data Centers, AI & Cloud, Web Development, and AV Solutions in Sierra Leone.",
};

const refinedServices = [
  {
    id: "web-dev",
    title: "Web & Application Development",
    desc: "We develop responsive websites, enterprise web platforms, and mobile applications tailored to business and institutional needs.",
    icon: <Code />,
    subServices: [
      "Corporate & enterprise websites",
      "Custom web applications (dashboards, portals, SaaS tools)",
      "Mobile app development (Android, iOS, cross-platform)",
      "API development & system integrations",
      "UI/UX design & performance optimization"
    ],
    positioning: "Engineering business systems, not just websites."
  },
  {
    id: "data-center",
    title: "Data Center Setup & Management",
    desc: "We design, deploy, and manage reliable on-premise and hybrid data center environments in Sierra Leone.",
    icon: <Database />,
    subServices: [
      "Data center design & architecture",
      "Server, storage, and network deployment",
      "Power, cooling & redundancy planning",
      "Virtualization & private cloud setup",
      "Disaster recovery & backup systems"
    ],
    positioning: "Mission-critical infrastructure and high availability systems."
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & GRC",
    desc: "Phazel Solutions is the local delivery and support partner for EScan cybersecurity solutions in Sierra Leone.",
    icon: <ShieldAlert className="text-red-500" />,
    isPartner: true,
    subServices: [
      "Cybersecurity risk assessments",
      "Security architecture & controls implementation",
      "Endpoint, email & network security (via EScan)",
      "GRC frameworks (ISO 27001, NIST, PCI-DSS support)",
      "Local deployment, support & training"
    ],
    positioning: "Official local point of contact for EScan solutions."
  },
  {
    id: "ai-cloud",
    title: "AI & Cloud Deployment",
    desc: "We help organizations adopt AI and cloud technologies to improve efficiency, scalability, and decision-making.",
    icon: <Cloud />,
    subServices: [
      "Cloud architecture & migration (AWS, Azure, hybrid)",
      "Cloud infrastructure deployment & management",
      "AI-powered automation & intelligent systems",
      "Data analytics & decision-support solutions",
      "DevOps & cloud security integration"
    ],
    positioning: "Focusing on practical AI, automation, and intelligent support."
  },
  {
    id: "av-streaming",
    title: "Audio-Visual & Streaming Solutions",
    desc: "We design and deploy professional audio-visual and streaming systems for communication, events, and engagement.",
    icon: <Radio />,
    subServices: [
      "Conference room & boardroom AV systems",
      "Live streaming & hybrid event solutions",
      "Video conferencing infrastructure",
      "Public address & multimedia systems",
      "Recording studios & broadcast setups"
    ],
    positioning: "Communication infrastructure, not just equipment sales."
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0a0a0c] text-white">
      {/* Header Section */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Expertise</h2>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            Core Service <span className="text-blue-600">Pillars</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Engineer-led solutions focused on security, reliability, and long-term scalability. 
            Designed for enterprise, government, and NGO operations in West Africa.
          </p>
        </div>
      </section>

      {/* Grid Overview with Tergos Card Styles */}
      <section className="pb-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {refinedServices.map((service) => (
            <div key={service.id} className="tergos-card p-10 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-8">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                  {service.isPartner && (
                    <span className="block mt-2 text-[10px] w-fit bg-red-500/10 text-red-500 px-2 py-1 rounded border border-red-500/20 uppercase font-black tracking-widest">
                      EScan Partner
                    </span>
                  )}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{service.desc}</p>
              </div>
              <Link href={`#${service.id}`} className="text-blue-500 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors flex items-center">
                View Capabilities <CheckCircle2 className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Technical Breakdowns */}
      <section className="bg-white text-slate-900 py-32 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Deep Dive</h2>
             <h3 className="text-4xl md:text-5xl font-black tracking-tighter">Technical Breakdown</h3>
          </div>
          
          <div className="space-y-40">
            {refinedServices.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-32">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  <div>
                    <span className="text-blue-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-full">System Architecture</span>
                    <h3 className="text-4xl font-black mt-6 mb-6 tracking-tight">{service.title}</h3>
                    <p className="text-xl text-slate-500 mb-8 leading-relaxed italic border-l-4 border-blue-600 pl-6">
                      &quot;{service.positioning}&quot;
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">{service.desc}</p>
                  </div>

                  <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-slate-400">Core Deliverables</h4>
                    <ul className="grid gap-5">
                      {service.subServices.map((sub, index) => (
                        <li key={index} className="flex items-start text-slate-700 font-medium">
                          <CheckCircle2 className="text-blue-600 mr-4 w-6 h-6 flex-shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}