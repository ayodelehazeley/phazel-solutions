import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Implementation */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.png" 
            alt="Phazel Solutions Logo" 
            width={180}   // Adjust width based on your logo's aspect ratio
            height={50}   // Adjust height based on your logo's aspect ratio
            className="h-10 w-auto object-contain" 
            priority      // Ensures the logo loads immediately
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link href="/services" className="hover:text-white transition-colors">Expertise</Link>
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-all tracking-widest">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}