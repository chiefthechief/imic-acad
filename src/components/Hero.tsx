import { ArrowRight, ChevronDown } from "lucide-react";

function FlagDE() {
  return (
    <span className="inline-flex h-4 w-6 overflow-hidden bg-white sm:h-5 sm:w-7">
      <span className="h-full w-1/3 bg-black" />
      <span className="h-full w-1/3 bg-red-600" />
      <span className="h-full w-1/3 bg-yellow-400" />
    </span>
  );
}

function FlagGH() {
  return (
    <span className="relative inline-flex h-4 w-6 overflow-hidden bg-white sm:h-5 sm:w-7">
      <span className="absolute inset-0 flex flex-col">
        <span className="h-1/3 bg-red-600" />
        <span className="h-1/3 bg-yellow-400" />
        <span className="h-1/3 bg-green-600" />
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="h-3 w-3 text-black sm:h-3.5 sm:w-3.5" fill="currentColor" aria-hidden="true">
          <path d="M12 2 14.3 7.1 20 7.5 15.5 11.2 17.1 16.7 12 13.7 6.9 16.7 8.5 11.2 4 7.5 9.7 7.1 12 2Z" />
        </svg>
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center bg-navy px-6 pb-16 pt-12 text-center text-white">
      {/* Tagline */}
      <div className="mb-8 flex items-center justify-center gap-2 text-xs font-medium tracking-[0.15em] text-white/70 uppercase">
        <FlagDE />
        <FlagGH />
        <span>GERMAN-GHANAIAN EXCELLENCE • ACCRA</span>
      </div>

      {/* Headline */}
      <h1 className="font-serif text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        A German Education in the{" "}
        <span className="text-mustard">Heart</span> of Ghana
      </h1>

      {/* Subheadline */}
      <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
        IMIC International Academy delivers the German Abitur and Cambridge IGCSE
        in Accra, offering students a passport to the world&apos;s finest
        universities — rooted in Ghanaian identity, shaped by German rigour.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <a href="#admissions" className="btn-primary px-8 py-4 text-sm tracking-widest uppercase">
          Begin Application
          <ArrowRight className="h-4 w-4" />
        </a>
        <a href="#about" className="btn-outline px-8 py-4 text-sm tracking-widest uppercase">
          Discover IMIC
        </a>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-white/50 uppercase"
      >
        <span>Scroll</span>
        <div className="scroll-indicator flex flex-col items-center">
          <div className="h-10 w-px bg-white/30" />
          <ChevronDown className="h-4 w-4" />
        </div>
      </a>
    </section>
  );
}
