import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, Globe, ShieldCheck, Zap, TrendingUp, CheckCircle, Package } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { WorldTradeMap } from "./WorldTradeMap";

const factoryImage = "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtaW51bSUyMG1ldGFsJTIwaW5kdXN0cmlhbCUyMGZhY3Rvcnl8ZW58MXx8fHwxNzg1NTY0Mzc2fDA&ixlib=rb-4.1.0&q=80&w=1080";

const carouselImages = [
  "https://images.unsplash.com/photo-1516297702292-c919b6adea0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtaW51bSUyMGluZ290cyUyMHJhdyUyMG1hdGVyaWFsJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3ODU1NzkyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1727372416961-131342689e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhbHVtaW51bSUyMGluZ290cyUyMHJhdyUyMG1hdGVyaWFsJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3ODU1NzkyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1776235239513-1bf26921e458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhbHVtaW51bSUyMGluZ290cyUyMHJhdyUyMG1hdGVyaWFsJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3ODU1NzkyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1680391793434-12b2dd86d625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhbHVtaW51bSUyMGluZ290cyUyMHJhdyUyMG1hdGVyaWFsJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3ODU1NzkyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1697698532602-ccf880036281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHVtaW51bSUyMGNvaWxzJTIwc2hlZXQlMjBtZXRhbCUyMHdhcmVob3VzZXxlbnwxfHx8fDE3ODU1NzkyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1697698532634-ea59b636ccea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhbHVtaW51bSUyMGNvaWxzJTIwc2hlZXQlMjBtZXRhbCUyMHdhcmVob3VzZXxlbnwxfHx8fDE3ODU1NzkyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1709244596179-0a9d4d913788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhbHVtaW51bSUyMGNvaWxzJTIwc2hlZXQlMjBtZXRhbCUyMHdhcmVob3VzZXxlbnwxfHx8fDE3ODU1NzkyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1697281679321-a9ce55ce0a8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHNtZWx0aW5nJTIwZm91bmRyeSUyMGluZHVzdHJpYWwlMjBtb2x0ZW58ZW58MXx8fHwxNzg1NTc5MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    if (index === current) return;
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 500);
  };

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % carouselImages.length);
        setVisible(true);
      }, 500);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handleManual = (index: number) => {
    goTo(index);
    startInterval();
  };

  const handlePrev = () => {
    handleManual((current - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleNext = () => {
    handleManual((current + 1) % carouselImages.length);
  };

  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl group">
      {carouselImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Aluminum product ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: i === current ? (visible ? 1 : 0) : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      ))}

      {/* Prev / Next arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => handleManual(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{ backgroundColor: i === current ? "#C9952A" : "rgba(255,255,255,0.5)", width: i === current ? "20px" : "6px" }}
          />
        ))}
      </div>
    </div>
  );
}

const benefitIcons = [Globe, ShieldCheck, Zap, TrendingUp, CheckCircle];
const serviceIcons = [Package];

export function HomePage() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Carousel */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
              className="w-full">
              <HeroCarousel />
            </motion.div>

            {/* Text */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 border border-white/20"
                style={{ backgroundColor: "rgba(201,149,42,0.15)", color: "#C9952A" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#C9952A" }} />
                {h.badge}
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {h.heroTitle}
                <span style={{ color: "#C9952A" }}>{h.heroHighlight}</span>
                <br />{h.heroTitle2}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-300 mb-10" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
                {h.heroSub}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold transition-all hover:opacity-90 hover:shadow-2xl hover:-translate-y-0.5"
                  style={{ backgroundColor: "#C9952A", color: "white" }}>
                  {h.heroCta1} <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold border border-white/30 text-white hover:bg-white/10 transition-all hover:-translate-y-0.5">
                  {h.heroCta2}
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-white/10">
                {h.trustItems.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle size={14} style={{ color: "#C9952A" }} />{item}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4" style={{ backgroundColor: "#E8EDF2", color: "#1E4D7B" }}>{h.whyBadge}</div>
            <h2 className="text-[#0B1F3A] mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700 }}>
              {h.whyTitle.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>{h.whySub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {h.benefits.map((benefit, i) => {
              const Icon = benefitIcons[i];
              return (
                <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group p-8 rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-300" style={{ backgroundColor: "#FAFBFC" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "#E8EDF2" }}>
                    <Icon size={22} style={{ color: "#1E4D7B" }} />
                  </div>
                  <h3 className="text-[#0B1F3A] mb-3" style={{ fontSize: "1.0625rem", fontWeight: 600 }}>{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4" style={{ backgroundColor: "#E8EDF2", color: "#1E4D7B" }}>{h.servicesBadge}</div>
              <h2 className="text-[#0B1F3A]" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700 }}>
                {h.servicesTitle.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Service cards */}
            <div className="space-y-6">
              {h.services.map((service, i) => {
                const Icon = serviceIcons[i];
                return (
                  <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "#0B1F3A" }}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-[#0B1F3A] mb-3" style={{ fontSize: "1.125rem", fontWeight: 600 }}>{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                    <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all" style={{ color: "#C9952A" }}>
                      {service.link} <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            {/* World Trade Map */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <WorldTradeMap />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #1E4D7B 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <img src={factoryImage} alt="Aluminum manufacturing" className="w-full h-72 lg:h-96 object-cover rounded-3xl opacity-90" />
            </div>
            <div className="flex-1 text-white">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5" style={{ backgroundColor: "rgba(201,149,42,0.2)", color: "#C9952A" }}>{h.aboutBadge}</div>
              <h2 className="mb-5" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "white" }}>
                {h.aboutTitle.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-5">{h.aboutP1}</p>
              <p className="text-slate-300 leading-relaxed mb-8">{h.aboutP2}</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {[
                  { label: h.reliabilityTitle, desc: h.reliabilityDesc },
                  { label: h.transparencyTitle, desc: h.transparencyDesc },
                ].map((val) => (
                  <div key={val.label} className="flex-1 p-4 rounded-xl border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                    <div className="font-semibold mb-1" style={{ color: "#C9952A" }}>{val.label}</div>
                    <div className="text-sm text-slate-400">{val.desc}</div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-white/20 text-white hover:bg-white/10 transition-all">
                {h.aboutLink} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20" style={{ backgroundColor: "#C9952A" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700 }}>{h.ctaTitle}</h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>{h.ctaSub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 rounded-xl text-base font-semibold bg-white hover:bg-slate-100 transition-colors" style={{ color: "#0B1F3A" }}>{h.ctaBtn1}</Link>
            <Link to="/services" className="px-8 py-4 rounded-xl text-base font-semibold border-2 border-white text-white hover:bg-white/10 transition-colors">{h.ctaBtn2}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
