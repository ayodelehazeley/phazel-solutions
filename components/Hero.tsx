import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-5xl space-y-8">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight">
          Creating the future of <br />
          <span className="text-blue-600">Digital Infrastructure</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Engineering secure, scalable, and intelligent systems for modern 
          organizations across Sierra Leone and beyond.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link href="/services" className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition-all w-full sm:w-auto">
            Our Expertise
          </Link>
          <Link href="/contact" className="border border-gray-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all w-full sm:w-auto">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}