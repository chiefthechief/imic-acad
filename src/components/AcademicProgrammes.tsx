import {
  ArrowRight,
  Atom,
  BookOpen,
  Dumbbell,
  Globe2,
  GraduationCap,
  Languages,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Programme {
  icon: LucideIcon;
  title: string;
  tag: string;
  description: string;
}

const programmes: Programme[] = [
  {
    icon: Languages,
    title: "German Language & Culture",
    tag: "ALL YEARS",
    description:
      "Immersive German instruction from primary through Abitur, enriched with cultural exchange programmes, DSD certification, and partnerships with schools across Germany.",
  },
  {
    icon: GraduationCap,
    title: "German Abitur Pathway",
    tag: "YEARS 10 - 13",
    description:
      "The full German secondary qualification recognised by universities worldwide. Rigorous MINT focus, oral examinations, and direct pathways to German and European higher education.",
  },
  {
    icon: BookOpen,
    title: "Cambridge IGCSE",
    tag: "YEARS 7 - 11",
    description:
      "Internationally benchmarked Cambridge curriculum offering breadth across sciences, humanities, and languages — the gold standard for global university applications.",
  },
  {
    icon: Atom,
    title: "MINT / STEM Excellence",
    tag: "ALL YEARS",
    description:
      "Dedicated science laboratories, robotics programmes, and mathematics enrichment ensure our students excel in Mathematics, Informatics, Natural Sciences, and Technology.",
  },
  {
    icon: Globe2,
    title: "Intercultural Studies",
    tag: "ALL YEARS",
    description:
      "A curriculum designed to foster global citizenship — exploring history, politics, and identity across continents while celebrating the German-Ghanaian partnership at our core.",
  },
  {
    icon: Dumbbell,
    title: "Sport & Wellbeing",
    tag: "ALL YEARS",
    description:
      "Olympic-standard facilities, competitive leagues, and a holistic wellbeing programme that nurtures physical health alongside academic achievement.",
  },
];

export default function AcademicProgrammes() {
  return (
    <section id="academics" className="section-padding bg-off-white">
      <div className="container-wide">
        <h2 className="font-serif text-center text-3xl font-bold text-navy md:text-4xl lg:text-5xl">
          Rigorous. Holistic. Internationally Recognised.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((programme) => (
            <article
              key={programme.title}
              className="relative flex flex-col rounded-sm border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="card-tag">{programme.tag}</span>
              <programme.icon className="mb-5 h-8 w-8 text-crimson" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-bold text-navy">
                {programme.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-dark/70">
                {programme.description}
              </p>
              <a href="#" className="link-arrow mt-6">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
