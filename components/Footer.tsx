import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0c] border-t border-white/10 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <Link href="/" className="font-black text-xl tracking-tighter uppercase">
            PHAZEL<span className="text-blue-600">SOLUTIONS</span>
          </Link>
          <p className="text-slate-500 text-sm mt-2">
            Engineering secure digital futures in Sierra Leone.
          </p>
        </div>

        <div className="flex gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
          <Link href="/services" className="hover:text-blue-500 transition-colors">Services</Link>
          <Link href="/about" className="hover:text-blue-500 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
        </div>

        <div className="text-slate-600 text-xs italic">
          © {new Date().getFullYear()} Phazel Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}