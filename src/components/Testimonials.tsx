import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  initial: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Choosing IMIC was the best decision we made for our daughter. The Abitur programme gave her direct access to universities in Munich and Berlin, while the Ghanaian community kept her grounded. She graduated with confidence and a global perspective.",
    name: "Mr. & Mrs. Asante-Hoffmann",
    title: "Parents of Class of 2023",
    initial: "A",
    color: "bg-crimson",
  },
  {
    quote:
      "As a partner school in Bavaria, we have witnessed firsthand the calibre of IMIC graduates. Their German language proficiency and academic discipline are exceptional — a true bridge between our two nations.",
    name: "Dr. Markus Steinberg",
    title: "Exchange Partner",
    initial: "M",
    color: "bg-navy",
  },
  {
    quote:
      "With two children at IMIC — one in Year 9 and one preparing for Abitur — we see daily how the school balances German academic standards with a nurturing, inclusive environment. Our children thrive here.",
    name: "Familie Becker-Mensah",
    title: "Parents of Years 9 & 12",
    initial: "B",
    color: "bg-mustard text-navy",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-wide">
        <h2 className="font-serif text-center text-3xl font-bold text-navy md:text-4xl">
          What Our Families Say
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-sm border border-gray-100 bg-white p-8 shadow-sm"
            >
              <Quote className="h-10 w-10 text-crimson/20" fill="currentColor" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-dark/80">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-6">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-sm text-sm font-bold text-white ${item.color}`}
                >
                  {item.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy">{item.name}</div>
                  <div className="text-xs text-slate-dark/60">{item.title}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
