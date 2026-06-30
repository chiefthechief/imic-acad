import PageShell from "@/components/PageShell";

const activities = [
  {
    title: "Sports and wellness",
    text: "Students enjoy athletic opportunities, wellness programmes, and activities that promote confidence and discipline.",
  },
  {
    title: "Arts and culture",
    text: "Creative expression is celebrated through music, drama, visual arts, and cultural events throughout the year.",
  },
  {
    title: "Service and leadership",
    text: "Our students learn to lead by example through community projects, school initiatives, and peer mentorship.",
  },
];

export default function CampusLifePage() {
  return (
    <PageShell
      title="Campus Life"
      intro="At IMIC, learning extends far beyond the classroom. Our campus is a place where students grow through experiences, relationships, and shared purpose."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {activities.map((activity) => (
          <div key={activity.title} className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-navy">{activity.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-dark/75">{activity.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
        <h3 className="font-serif text-2xl font-semibold text-navy">A welcoming community</h3>
        <p className="mt-3 text-lg leading-relaxed text-slate-dark/80">
          Our campus is designed to be safe, inspiring, and inclusive. Students build friendships, discover talents, and develop the confidence to contribute meaningfully to the world around them.
        </p>
      </div>
    </PageShell>
  );
}
