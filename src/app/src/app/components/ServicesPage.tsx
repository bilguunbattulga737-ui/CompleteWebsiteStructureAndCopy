import { useState } from "react";
import { Link } from "react-router";
import { Package, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

const serviceImages = [
  "https://images.unsplash.com/photo-1547895749-888a559fc2a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhbHVtaW51bSUyMG1ldGFsJTIwaW5kdXN0cmlhbCUyMGZhY3Rvcnl8ZW58MXx8fHwxNzg1NTY0Mzc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
];

const serviceIcons = [Package];

type FaqType = { q: string; a: string };

function FaqItem({ faq }: { faq: FaqType }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="font-medium text-[#0B1F3A] pr-4 text-sm">{faq.q}</span>
        {open ? <ChevronUp size={18} className="shrink-0 text-slate-400" /> : <ChevronDown size={18} className="shrink-0 text-slate-400" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <p className="pb-5 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ServicesPage() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #1E4D7B 100%)" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562504208-03d85cc8c23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3b3JsZCUyMG1hcCUyMGdsb2JhbCUyMGNvbm5lY3Rpb25zJTIwbmV0d29yayUyMGNvdW50cmllc3xlbnwxfHx8fDE3ODU1ODIyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Global world map"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(11,31,58,0.85) 0%, rgba(30,77,123,0.75) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ backgroundColor: "rgba(201,149,42,0.2)", color: "#C9952A" }}>{s.badge}</div>
          <h1 className="text-white mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15 }}>{s.heroTitle}</h1>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "1.0625rem" }}>{s.heroSub}</p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {s.services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <img src={serviceImages[i]} alt={service.title} className="w-full h-80 lg:h-[420px] object-cover rounded-3xl shadow-xl" />
                </div>
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "#0B1F3A" }}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h2 className="text-[#0B1F3A] mb-2" style={{ fontSize: "1.625rem", fontWeight: 700 }}>{service.title}</h2>
                  <p className="mb-5 font-medium" style={{ color: "#C9952A" }}>{service.tagline}</p>
                  <p className="text-slate-500 leading-relaxed mb-6 text-sm">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="text-[#0B1F3A] mb-3 text-sm font-semibold uppercase tracking-wide">{s.deliversTitle}</h4>
                    <ul className="space-y-2">
                      {service.details.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <CheckCircle size={15} className="shrink-0 mt-0.5" style={{ color: "#1E4D7B" }} />{d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.products.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-[#0B1F3A] mb-3 text-sm font-semibold uppercase tracking-wide">{s.productsTitle}</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.products.map((p) => (
                          <span key={p} className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: "#E8EDF2", color: "#1E4D7B" }}>{p}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "#C9952A" }}>
                    {s.inquireBtn} <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4" style={{ backgroundColor: "#E8EDF2", color: "#1E4D7B" }}>{s.faqBadge}</div>
            <h2 className="text-[#0B1F3A]" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700 }}>{s.faqTitle}</h2>
          </div>
          <div>
            {s.faqs.map((faq) => <FaqItem key={faq.q} faq={faq} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #1E4D7B 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 700 }}>{s.ctaTitle}</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto text-sm leading-relaxed">{s.ctaSub}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-all" style={{ backgroundColor: "#C9952A", color: "white" }}>
            {s.ctaBtn} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
