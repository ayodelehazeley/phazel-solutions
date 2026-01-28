import { Mail, MapPin, MessageSquare } from "lucide-react";

// The 'export default' below is what fixes the Vercel build error
export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0c] text-white">
      {/* Header */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Get in Touch</h2>
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          Let&apos;s Engineer Your <br/> 
          <span className="text-blue-600 italic">Digital Future.</span>
        </h1>
      </section>

      {/* Info & Form Grid */}
      <section className="py-24 bg-white text-slate-900 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          
          {/* Left Side: Contact Info */}
          <div>
            <h3 className="text-3xl font-black mb-8">Contact Information</h3>
            <p className="text-slate-600 text-lg mb-12">
              Based in Freetown, we serve enterprise clients and governments across Sierra Leone.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl uppercase tracking-tight">Headquarters</h4>
                  <p className="text-slate-500 font-medium">Freetown, Sierra Leone</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl uppercase tracking-tight">Email Us</h4>
                  <p className="text-slate-500 font-medium">info@phazelsolutions.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm">
            <form action="https://formspree.io/f/xwvbejyo" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">Full Name</label>
                  <input name="name" required type="text" className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">Email Address</label>
                  <input name="email" required type="email" className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400">Service Required</label>
                <select name="service" className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer">
                  <option>Cybersecurity & EScan</option>
                  <option>Data Center Setup</option>
                  <option>Web & App Development</option>
                  <option>AI & Cloud Deployment</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400">Message</label>
                <textarea name="message" required className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none h-32 transition-all" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all uppercase tracking-widest text-sm">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}