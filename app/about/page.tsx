import { Target, Eye, ShieldCheck, Zap, Award, Users } from "lucide-react";

const values = [
  {
    title: "Innovation",
    desc: "Delivering creative tech and engineering solutions tailored to the modern landscape.",
    icon: <Zap className="text-blue-500" />,
  },
  {
    title: "Reliability",
    desc: "Building systems designed to last, scale, and perform under mission-critical conditions.",
    icon: <ShieldCheck className="text-blue-500" />,
  },
  {
    title: "Client-Centric",
    desc: "Starting with real business challenges to engineer solutions that drive actual results.",
    icon: <Users className="text-blue-500" />,
  },
  {
    title: "Impact",
    desc: "Empowering organizations to improve performance and enable sustainable progress.",
    icon: <Award className="text-blue-500" />,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0c] text-white">
      {/* Hero / Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Our Story</h2>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Engineering the <br /> 
              <span className="text-blue-600">Future of Business.</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              Founded in 2020 and headquartered in Freetown, Sierra Leone, Phazel Solutions began with a singular vision: to bridge the gap between complex engineering and digital transformation.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Led by professional engineers with backgrounds in computer and mechanical engineering, we have evolved from a specialized technical firm into a full-service technology systems integrator. Today, we automate business tasks, secure critical data, and build the infrastructure that powers Sierra Leone’s leading organizations.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-transparent rounded-3xl border border-white/10 flex items-center justify-center p-12">
               <div className="text-center">
                  <span className="text-8xl font-black text-white/10 block uppercase">Freetown</span>
                  <span className="text-2xl font-bold text-blue-500 mt-[-20px] block">Est. 2020</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Flexbox */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="p-12 rounded-3xl bg-slate-50 border border-slate-200">
            <Target className="text-blue-600 mb-6" size={40} />
            <h3 className="text-3xl font-black mb-4">Our Mission</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Phazel Solutions empowers organizations in Sierra Leone and across Africa with innovative engineering, automation, and digital technology solutions that drive efficiency, growth, and sustainable impact.
            </p>
          </div>
          <div className="p-12 rounded-3xl bg-slate-900 text-white">
            <Eye className="text-blue-400 mb-6" size={40} />
            <h3 className="text-3xl font-black mb-4">Our Vision</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              To be the trusted technology and engineering partner for businesses seeking reliable, scalable and future-ready digital transformation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Principles</h2>
          <h3 className="text-4xl md:text-5xl font-black">Our Core Values</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all text-center">
              <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{value.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-blue-600 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to engineer your future?</h2>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all">
            Work With Us
          </button>
        </div>
      </section>
    </div>
  );
}