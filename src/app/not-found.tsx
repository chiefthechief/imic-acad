import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-24">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-crimson">404</p>
        <h1 className="mt-4 font-serif text-3xl font-bold text-navy">Page not found</h1>
        <p className="mt-3 text-base leading-relaxed text-slate-dark/75">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-crimson"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
