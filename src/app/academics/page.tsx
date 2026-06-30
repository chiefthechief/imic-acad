import PageShell from "@/components/PageShell";

const programmes = [
  {
    title: "German Abitur",
    text: "A rigorous university-preparatory pathway that prepares students for higher education in Germany and beyond.",
  },
  {
    title: "Cambridge IGCSE",
    text: "A globally recognised curriculum that builds strong academic foundations and broad subject breadth.",
  },
  {
    title: "STEM and Innovation",
    text: "Our science, technology, engineering, and mathematics programme supports practical enquiry and problem-solving.",
  },
];

export default function AcademicsPage() {
  return (
    <PageShell
      title="Academics"
      intro="IMIC offers internationally respected qualifications in a nurturing environment where students are challenged to think independently and excel consistently."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {programmes.map((programme) => (
          <div key={programme.title} className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-navy">{programme.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-dark/75">{programme.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-3xl border border-navy/10 bg-navy p-8 text-white">
        <h3 className="font-serif text-2xl font-semibold">A balanced academic experience</h3>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/80">
          Our curriculum blends academic depth with personal development. Students are supported by experienced educators, modern facilities, and a culture of high expectations and collaborative learning.
        </p>
      </div>
    </PageShell>
  );
}
