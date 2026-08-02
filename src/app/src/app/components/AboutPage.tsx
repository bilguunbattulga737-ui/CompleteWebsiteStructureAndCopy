import { Link } from "react-router";
import { ArrowRight, Eye, Handshake, Globe, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Target } from "lucide-react";

const factoryImage = "https://images.unsplash.com/photo-1716643863806-989dd76ae093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhbHVtaW51bSUyMG1ldGFsJTIwaW5kdXN0cmlhbCUyMGZhY3Rvcnl8ZW58MXx8fHwxNzg1NTY0Mzc2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const cargoImage = "https://images.unsplash.com/photo-1606964212858-c215029db704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxnbG9iYWwlMjB0cmFkZSUyMHN1cHBseSUyMGNoYWluJTIwbG9naXN0aWNzfGVufDF8fHx8MTc4NTU2NDM3N3ww&ixlib=rb-4.1.0&q=80&w=1080";

const valueIcons = [ShieldCheck, Eye, Globe, Handshake];

export function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="absolute inset-0 opacity-15">
          <img src={cargoImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(11,31,58,1) 30%, rgba(11,31,58,0.7) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ backgroundColor: "rgba(201,149,42,0.2)", color: "#C9952A" }}>
              {a.badge}
            </div>
            <h1 className="text-white mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15 }}>
              {a.heroTitle}
            </h1>
            <p className="text-slate-300 leading-relaxed" style={{ fontSize: "1.0625rem" }}>{a.heroSub}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ backgroundColor: "#E8EDF2", color: "#1E4D7B" }}>
                {a.purposeBadge}
              </div>
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#0B1F3A" }}>
                    <Target size={18} className="text-white" />
                  </div>
                  <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#0B1F3A" }}>{a.missionTitle}</h2>
                </div>
                <p className="text-slate-500 leading-relaxed pl-13">{a.missionText}</p>
              </div>
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#0B1F3A" }}>
                    <Eye size={18} className="text-white" />
                  </div>
                  <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#0B1F3A" }}>{a.visionTitle}</h2>
                </div>
                <p className="text-slate-500 leading-relaxed">{a.visionText}</p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: "#C9952A" }}>
                {a.cta} <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <img src={factoryImage} alt="Industrial manufacturing facility" className="w-full h-[450px] object-cover rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24" style={{ backgroundColor: "#F4F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4" style={{ backgroundColor: "#E8EDF2", color: "#1E4D7B" }}>{a.valuesBadge}</div>
            <h2 className="text-[#0B1F3A]" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700 }}>{a.valuesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {a.values.map((val, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div key={val.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#E8EDF2" }}>
                      <Icon size={22} style={{ color: "#1E4D7B" }} />
                    </div>
                    <div>
                      <h3 className="text-[#0B1F3A] mb-3" style={{ fontSize: "1.125rem", fontWeight: 600 }}>{val.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
