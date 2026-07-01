import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

type PageShellProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export default function PageShell({ title, intro, children }: PageShellProps) {
  return (
    <>
      <Header />
      <main className="bg-off-white">
        <section className="bg-navy py-20 text-white md:py-24">
          <div className="container-wide">
            <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-mustard uppercase">
              IMIC International Academy
            </p>
            <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              {intro}
            </p>
          </div>
        </section>
        <div className="container-wide py-16 md:py-20">
          <RevealOnScroll>{children}</RevealOnScroll>
        </div>
      </main>
      <Footer />
    </>
  );
}
