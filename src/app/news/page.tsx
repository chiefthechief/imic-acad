import PageShell from "@/components/PageShell";

const articles = [
  {
    title: "Student leadership forum strengthens school spirit",
    text: "Our latest initiative brought together student representatives from across the school to shape upcoming community projects.",
  },
  {
    title: "Science week inspires curiosity and inquiry",
    text: "Students explored hands-on experiments, engineering challenges, and future-focused conversations with visiting experts.",
  },
  {
    title: "Open day welcomed families from across Accra",
    text: "Parents and guardians experienced the school community first-hand and met teachers from our academic and pastoral teams.",
  },
];

export default function NewsPage() {
  return (
    <PageShell
      title="News & Events"
      intro="Stay connected with the latest moments, achievements, and upcoming events shaping life at IMIC."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <div key={article.title} className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-navy">{article.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-dark/75">{article.text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
