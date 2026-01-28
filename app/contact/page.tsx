<div className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
  {/* Update the action URL after you create your account below */}
  <form action="https://formspree.io/f/xwvbejyo" method="POST" className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase text-slate-400">Full Name</label>
        <input name="name" required type="text" className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase text-slate-400">Email Address</label>
        <input name="email" required type="email" className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@company.com" />
      </div>
    </div>
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase text-slate-400">Service Required</label>
      <select name="service" className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none">
        <option>Cybersecurity & EScan</option>
        <option>Data Center Setup</option>
        <option>Web & App Development</option>
        <option>AI & Cloud Deployment</option>
      </select>
    </div>
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase text-slate-400">Message</label>
      <textarea name="message" required className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none h-32" placeholder="Tell us about your project..."></textarea>
    </div>
    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl hover:bg-blue-700 transition-all uppercase tracking-widest text-sm">
      Send Message
    </button>
  </form>
</div>