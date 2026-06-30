import PageShell from "@/components/PageShell";

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
    </PageShell>
  );
}
