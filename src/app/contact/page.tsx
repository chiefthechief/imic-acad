import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      intro="We are always happy to connect with families, prospective students, and community partners."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-serif text-3xl font-semibold text-navy">Get in touch</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-dark/80">
            Reach out to our team for admissions guidance, school visits, or general enquiries about life at IMIC.
          </p>
          <div className="mt-6 space-y-3 text-base text-slate-dark/80">
            <p><strong>Email:</strong> admissions@imicacademy.edu.gh</p>
            <p><strong>Phone:</strong> +233 30 123 4567</p>
            <p><strong>Location:</strong> Accra, Ghana</p>
          </div>
        </div>
        <div className="rounded-3xl border border-navy/10 bg-navy p-8 text-white">
          <h3 className="font-serif text-2xl font-semibold">Plan a visit</h3>
          <p className="mt-3 text-base leading-relaxed text-white/80">
            We would love to welcome you to campus and show you what makes IMIC such a special place to learn and grow.
          </p>
          <Link href="/admissions" className="btn-primary mt-6">
            Learn About Admissions
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
