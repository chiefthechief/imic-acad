"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
              We Would Love to Hear From You
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-dark/75">
              Whether you are exploring IMIC for the first time or ready to
              begin your application, our admissions team is here to help. Reach
              out and we will respond within two working days.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-off-white">
                  <MapPin className="h-5 w-5 text-crimson" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider text-slate-dark/50 uppercase">
                    Address
                  </div>
                  <div className="mt-1 text-sm text-navy">KOTОВАВІ, АCCRA,</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-off-white">
                  <Phone className="h-5 w-5 text-crimson" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider text-slate-dark/50 uppercase">
                    Telephone
                  </div>
                  <a
                    href="tel:+233591320653"
                    className="mt-1 block text-sm text-navy hover:text-crimson"
                  >
                    +233 59 132 0653
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-off-white">
                  <Mail className="h-5 w-5 text-crimson" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider text-slate-dark/50 uppercase">
                    Email
                  </div>
                  <a
                    href="mailto:imicinternationalacademy@gmail.com"
                    className="mt-1 block text-sm text-navy hover:text-crimson"
                  >
                    imicinternationalacademy@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Right column — Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="fullName"
                className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-dark/60 uppercase"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Your full name"
                className="w-full rounded-sm bg-off-white px-4 py-3 text-sm text-navy outline-none ring-navy/20 transition-shadow placeholder:text-slate-dark/40 focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-dark/60 uppercase"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-sm bg-off-white px-4 py-3 text-sm text-navy outline-none ring-navy/20 transition-shadow placeholder:text-slate-dark/40 focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="enquiryType"
                className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-dark/60 uppercase"
              >
                Enquiry Type
              </label>
              <select
                id="enquiryType"
                className="w-full rounded-sm bg-off-white px-4 py-3 text-sm text-navy outline-none ring-navy/20 transition-shadow focus:ring-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Select an enquiry type
                </option>
                <option value="admissions">Admissions</option>
                <option value="academics">Academics</option>
                <option value="campus-tour">Campus Tour</option>
                <option value="general">General Enquiry</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-dark/60 uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help you?"
                className="w-full resize-none rounded-sm bg-off-white px-4 py-3 text-sm text-navy outline-none ring-navy/20 transition-shadow placeholder:text-slate-dark/40 focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-navy px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-colors hover:bg-navy/90"
            >
              Send Enquiry
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
