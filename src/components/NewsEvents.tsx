import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface NewsItem {
  image: string;
  category: string;
  date: string;
  headline: string;
  excerpt: string;
}

const newsItems: NewsItem[] = [
  {
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
    category: "Academic Achievement",
    date: "12 Jun 2025",
    headline: "IMIC Students Awarded Top DSD II Results",
    excerpt:
      "Twelve Year 12 students achieved the highest grade in the Deutsches Sprachdiplom Stufe II examination, opening direct pathways to German universities.",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    category: "Admissions",
    date: "1 Jun 2025",
    headline: "2025/26 Admissions Open",
    excerpt:
      "Applications for the 2025/26 academic year are now being accepted. Early application deadline: 31 August 2025. Book your campus tour today.",
  },
  {
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    category: "International",
    date: "20 May 2025",
    headline: "Bavarian Partner School Delegation Visits",
    excerpt:
      "A delegation from Gymnasium München spent a week at IMIC, strengthening our exchange partnership and celebrating 20 years of collaboration.",
  },
];

export default function NewsEvents() {
  return (
    <section id="news" className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
            Latest from the Academy
          </h2>
          <a href="#" className="link-arrow shrink-0">
            All news
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.headline} className="group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <Image
                  src={item.image}
                  alt={item.headline}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="rounded-sm bg-crimson/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-crimson uppercase">
                  {item.category}
                </span>
                <span className="text-xs text-slate-dark/50">{item.date}</span>
              </div>
              <h3 className="mt-3 font-serif text-lg font-bold text-navy">
                {item.headline}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-dark/70">
                {item.excerpt}
              </p>
              <a href="#" className="link-arrow mt-4">
                Read more
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
