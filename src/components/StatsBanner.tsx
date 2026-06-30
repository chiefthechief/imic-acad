interface Stat {
  value: string;
  label: string;
  subtext: string;
}

const stats: Stat[] = [
  {
    value: "97%",
    label: "University Placement Rate",
    subtext: "Class of 2024",
  },
  {
    value: "38",
    label: "Nationalities Represented",
    subtext: "Across all year groups",
  },
  {
    value: "1:9",
    label: "Teacher-Student Ratio",
    subtext: "Personalised attention",
  },
  {
    value: "2003",
    label: "Year of Establishment",
    subtext: "Over two decades of excellence",
  },
];

export default function StatsBanner() {
  return (
    <section className="bg-navy py-16 text-white md:py-20">
      <div className="container-wide">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-5xl font-bold text-mustard md:text-6xl lg:text-7xl">
                {stat.value}
              </div>
              <div className="mt-3 text-sm font-semibold tracking-wide uppercase">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-white/60">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
