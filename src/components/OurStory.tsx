import { ArrowRight, CheckCircle2 } from "lucide-react";

const stats = [
  "ZfA Recognised Partner School",
  "1,100+ Students Enrolled",
  "38 Nationalities on Campus",
  "DSD I, DSD II & Abitur Certified",
];

export default function OurStory() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image with floating stats */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
              <img
                src="https://images.pexels.com/photos/8199151/pexels-photo-8199151.jpeg"
                alt="Students learning in a modern classroom at IMIC International Academy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating stats box */}
            <div className="absolute -right-4 -bottom-6 left-4 md:-right-8 md:left-auto md:w-[420px]">
              <div className="bg-navy p-6 text-white shadow-2xl md:p-8">
                <div className="mb-5 font-serif text-2xl font-bold md:text-3xl">
                  20+ Years of Excellence
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {stats.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mustard" />
                      <span className="text-xs leading-snug text-white/85">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="link-arrow mt-5 text-white hover:text-mustard"
                >
                  View our full prospectus
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="pt-16 lg:pt-0">
            <div className="eyebrow">OUR STORY</div>
            <h2 className="font-serif text-3xl leading-tight font-bold text-navy md:text-4xl lg:text-5xl">
              German Precision. Ghanaian Spirit. Global Vision.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-dark/80">
              <p>
                Founded in 2003, IMIC International Academy stands as West
                Africa&apos;s premier German-Ghanaian institution of learning.
                Nestled on a sprawling 22-acre campus in East Legon, Accra, we
                welcome over 1,100 students from 38 nationalities each year.
              </p>
              <p>
                Our bilingual education — delivered in English and German —
                combines the analytical rigour of the German school system with
                the warmth and community spirit that defines Ghanaian culture.
                From our youngest learners to our Abitur graduates, every
                student is prepared for a future without borders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
