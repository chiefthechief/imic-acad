import Link from "next/link";
import PageShell from "@/components/PageShell";

const steps = [
  "Book a school visit or attend an open day",
  "Complete the online application form",
  "Meet with our admissions team and share relevant documents",
  "Receive your decision and begin your onboarding journey",
];

export default function AdmissionsPage() {
  return (
    <PageShell
      title="Admissions"
      intro="Joining IMIC is the first step towards a transformative education. We welcome families who are seeking academic excellence with heart."
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-serif text-3xl font-semibold text-navy">How to apply</h2>
          <ul className="mt-6 space-y-4">
            {steps.map((step) => (
              <li key={step} className="flex gap-3 text-base text-slate-dark/80">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-crimson" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-navy/10 bg-navy p-8 text-white">
          <h3 className="font-serif text-2xl font-semibold">Ready to begin?</h3>
          <p className="mt-3 text-base leading-relaxed text-white/80">
            Our admissions team is happy to answer questions about entry requirements, scholarship opportunities, and the application timeline.
          </p>
          <Link href="/contact" className="btn-primary mt-6">
            Contact Admissions
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
