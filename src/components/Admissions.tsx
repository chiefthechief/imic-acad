import { ArrowRight } from "lucide-react";

const steps = [
  "Submit an online enquiry",
  "Attend an Open Day",
  "Complete application form",
  "Sit entrance assessment",
  "Receive conditional offer letter",
];

const keyDates = [
  { date: "31 Aug 2025", event: "Early Application" },
  { date: "28 Sep 2025", event: "Entrance Assessments" },
  { date: "15 Oct 2025", event: "Offer Letters" },
  { date: "10 Jan 2026", event: "Spring Term" },
  { date: "7 Sep 2026", event: "New Academic Year" },
];

export default function Admissions() {
  return (
    <section id="admissions" className="section-padding bg-navy text-white">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div>
            <h2 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
              Begin the Journey to IMIC
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              Joining IMIC International Academy is the first step toward a
              world-class education. Our admissions team guides every family
              through a transparent, supportive process designed to find the
              right fit for your child.
            </p>

            <ol className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-crimson text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm text-white/90">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary px-8 py-4 text-sm tracking-widest uppercase">
                Apply Online
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-outline px-8 py-4 text-sm tracking-widest uppercase">
                Book an Open Day
              </a>
            </div>
          </div>

          {/* Right column — Key Dates */}
          <div className="flex items-center">
            <div className="w-full rounded-sm border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
              <h3 className="font-serif text-2xl font-bold text-mustard">
                Key Dates 2025/26
              </h3>
              <ul className="mt-8 space-y-5">
                {keyDates.map((item) => (
                  <li
                    key={item.date}
                    className="flex items-baseline gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                  >
                    <span className="w-28 shrink-0 text-sm font-bold text-mustard">
                      {item.date}
                    </span>
                    <span className="text-sm text-white/85">{item.event}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
