import { MapPin, Phone, Mail, Clock, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { MaterialInquiryForm } from "./MaterialInquiryForm";

const hqOffice = {
  city: "Ulaanbaatar",
  country: "Mongolia (HQ)",
  address: "BaynZurkh District, 410 Apartment, Ulaanbaatar 13311, Mongolia",
  phone: "+976 9500-7249",
  email: "urielbridgetradingllc@gmail.com",
  hours: "Mon–Fri: 09:00–18:00 (ULAT, UTC+8)",
};

export function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <div>
      {/* Hero */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #1E4D7B 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ backgroundColor: "rgba(201,149,42,0.2)", color: "#C9952A" }}>
            {c.badge}
          </div>
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15 }}>
            {c.heroTitle}
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
            {c.heroSub}
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20" style={{ backgroundColor: "#F4F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-[#0B1F3A] mb-2" style={{ fontSize: "1.375rem", fontWeight: 700 }}>
                  {c.heroTitle}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">{c.heroSub}</p>
              </div>

              <div className="space-y-4">
                <a href="tel:+97695007249"
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#E8EDF2" }}>
                    <Phone size={17} style={{ color: "#1E4D7B" }} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{c.phoneLabel}</div>
                    <div className="text-sm font-semibold text-[#0B1F3A]">+976 9500-7249</div>
                  </div>
                </a>

                <a href="mailto:urielbridgetradingllc@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#E8EDF2" }}>
                    <Mail size={17} style={{ color: "#1E4D7B" }} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{c.emailLabel}</div>
                    <div className="text-sm font-semibold text-[#0B1F3A]">urielbridgetradingllc@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#E8EDF2" }}>
                    <Clock size={17} style={{ color: "#1E4D7B" }} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{c.hoursLabel}</div>
                    <div className="text-sm font-semibold text-[#0B1F3A]">{c.hours}</div>
                    <div className="text-xs text-slate-400">{c.hoursDetail}</div>
                  </div>
                </div>
              </div>

              {/* HQ Office */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100">
                <h4 className="font-semibold text-[#0B1F3A] mb-4">
                  {hqOffice.city} — {hqOffice.country}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="shrink-0 mt-0.5" style={{ color: "#C9952A" }} />
                    <span className="text-xs text-slate-600 leading-relaxed">{hqOffice.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={15} className="shrink-0" style={{ color: "#C9952A" }} />
                    <a href={`tel:${hqOffice.phone}`} className="text-xs text-slate-600 hover:text-[#0B1F3A] transition-colors">
                      {hqOffice.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={15} className="shrink-0" style={{ color: "#C9952A" }} />
                    <a href={`mailto:${hqOffice.email}`} className="text-xs text-slate-600 hover:text-[#0B1F3A] transition-colors">
                      {hqOffice.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={15} className="shrink-0" style={{ color: "#C9952A" }} />
                    <span className="text-xs text-slate-600">{hqOffice.hours}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a href="#" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-100 text-sm text-slate-600 hover:shadow-md transition-shadow">
                  <Linkedin size={16} style={{ color: "#1E4D7B" }} />LinkedIn
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-100 text-sm text-slate-600 hover:shadow-md transition-shadow">
                  <Twitter size={16} style={{ color: "#1E4D7B" }} />Twitter/X
                </a>
              </div>
            </div>

            {/* Right: Material Inquiry Form */}
            <div className="lg:col-span-3">
              <MaterialInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
