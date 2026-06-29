import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { HeroBgContact } from "@/components/sections/HeroBgVariants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with NASENI Golborn Limited to discuss your digital transformation needs.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <HeroBgContact />
        <div className="container-wide relative z-10">
          <span className="label-tag-white">Get in Touch</span>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance max-w-3xl mt-2">
            Let&apos;s Build Something That Lasts
          </h1>
          <p className="text-white/70 text-lg mt-6 max-w-xl leading-relaxed">
            Whether you have a specific project in mind or are just beginning your digital
            transformation journey. We&apos;d love to start a conversation.
          </p>
        </div>
      </section>

      {/* Contact layout */}
      <section className="section-pad bg-white">
        <div className="container-wide grid lg:grid-cols-5 gap-8 lg:gap-14">
          {/* Form */}
          <div className="lg:col-span-3">
            <SectionHeader
              label="Send a Message"
              title="Tell Us About Your Institution"
            />
            <form className="mt-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5" htmlFor="fname">
                    First Name *
                  </label>
                  <input
                    id="fname"
                    type="text"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy placeholder:text-slate-300 focus:border-green focus:ring-2 focus:ring-green/10 transition-colors"
                    placeholder="Chukwuemeka"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5" htmlFor="lname">
                    Last Name *
                  </label>
                  <input
                    id="lname"
                    type="text"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy placeholder:text-slate-300 focus:border-green focus:ring-2 focus:ring-green/10 transition-colors"
                    placeholder="Okonkwo"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy mb-1.5" htmlFor="org">
                  Organization / Institution *
                </label>
                <input
                  id="org"
                  type="text"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy placeholder:text-slate-300 focus:border-green focus:ring-2 focus:ring-green/10 transition-colors"
                  placeholder="Federal Ministry of Finance"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5" htmlFor="email">
                    Work Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy placeholder:text-slate-300 focus:border-green focus:ring-2 focus:ring-green/10 transition-colors"
                    placeholder="you@ministry.gov.ng"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy placeholder:text-slate-300 focus:border-green focus:ring-2 focus:ring-green/10 transition-colors"
                    placeholder="+234 800 000 0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy mb-1.5" htmlFor="interest">
                  Area of Interest
                </label>
                <select
                  id="interest"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy focus:border-green focus:ring-2 focus:ring-green/10 transition-colors appearance-none bg-white"
                >
                  <option value="">Select a solution area...</option>
                  <option>Digital Identity Systems</option>
                  <option>ERP &amp; Enterprise Systems</option>
                  <option>Citizen Service Platforms</option>
                  <option>Analytics &amp; Data</option>
                  <option>Regulatory Technology</option>
                  <option>Workflow Automation</option>
                  <option>Capacity Development</option>
                  <option>Interoperability Platforms</option>
                  <option>Other / General Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy mb-1.5" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  aria-required="true"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy placeholder:text-slate-300 focus:border-green focus:ring-2 focus:ring-green/10 transition-colors resize-none"
                  placeholder="Tell us about your institution and what you are trying to achieve..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center py-4"
              >
                Send Message
              </button>

              <p className="text-xs text-slate text-center">
                We typically respond within one business day.
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 h-fit lg:sticky lg:top-28">
              <h3 className="font-display font-bold text-navy text-xl mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <Mail size={15} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate/60 mb-1 font-semibold uppercase tracking-wider">Email</div>
                    <a href="mailto:info@nasenigolborn.ng" className="text-sm text-navy hover:text-green-600 transition-colors">
                      info@nasenigolborn.ng
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <Phone size={15} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate/60 mb-1 font-semibold uppercase tracking-wider">Phone</div>
                    <a href="tel:+2347038564425" className="text-sm text-navy hover:text-green-600 transition-colors">
                      07038564425
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate/60 mb-1 font-semibold uppercase tracking-wider">Address</div>
                    <address className="not-italic text-sm text-navy leading-relaxed">
                      6th Floor, Bank of Agriculture Building
                      <br />
                      Abuja, Nigeria
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <Clock size={15} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate/60 mb-1 font-semibold uppercase tracking-wider">Hours</div>
                    <div className="text-sm text-navy">
                      Monday – Friday
                      <br />
                      8:00 AM – 5:00 PM WAT
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100">
                <div className="text-xs text-slate/60 mb-3 font-semibold uppercase tracking-wider">Website</div>
                <a href="https://www.nasenigolborn.ng" target="_blank" rel="noopener noreferrer" className="text-sm text-navy hover:text-green-600 transition-colors">
                  www.nasenigolborn.ng
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
