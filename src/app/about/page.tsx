import Image from "next/image";
import PageShell from "@/components/PageShell";
import founderImage from "@/images/pflpc.jpeg";

const highlights = [
  {
    title: "German and Ghanaian roots",
    text: "We combine the academic rigour of Germany with the warmth and community of Ghanaian culture.",
  },
  {
    title: "Future-ready learning",
    text: "Students build strong foundations in languages, sciences, and critical thinking that prepare them for global universities.",
  },
  {
    title: "Whole-child development",
    text: "From leadership and service to creativity and wellness, our students are shaped into confident young adults.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      title="About IMIC"
      intro="IMIC International Academy is a vibrant school community where academic excellence, cultural identity, and personal growth come together in Accra."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-serif text-3xl font-semibold text-navy">A school built for bold futures</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-dark/80">
            Since opening its doors, IMIC has grown into a trusted destination for families seeking a rigorous and international education in Ghana. Our teaching model blends German academic standards with the richness of local context, creating a learning environment that feels both ambitious and grounded.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-dark/80">
            We believe education should unlock potential without losing identity. That is why our students are encouraged to think deeply, lead responsibly, and engage with the world with curiosity and purpose.
          </p>
        </div>
        <div className="space-y-4">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-dark/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-3xl border border-navy/10 bg-white p-8 shadow-sm lg:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[280px_1fr]">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <Image
              src={founderImage}
              alt="Sylvaina Gerlich"
              width={500}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-crimson uppercase">Founder</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-navy">Sylvaina Gerlich</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-dark/80">
              My name is Sylvaina Gerlich, the Founder of IMIC e.V (Intercultural Migrant Integration Center). IMIC e.V. is a non-profit organizations which has provided invaluable services to immigrants, youth from diverse backgrounds. As a vital supplement to state resources, we assist in intricate processes such as language support. IMIC e.V is actively involved in Hamburg’s school reforms and the team at IMIC also assists the children of these families with their homework. Through that, the Africa Library was established at the IMIC center in 2019. This shows how passionate IMIC e.V is about education. Education is a way opener and learning a language gives a better chance for job opportunities. Education and language learning are intrinsically linked. In an increasingly interconnected world, multilingualism has become a valuable asset, fostering intercultural understanding and promoting global citizenship. The ability to learn new languages, gives people access to more educational resources, and therefore improves the overall quality of education that a person can recieve.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
