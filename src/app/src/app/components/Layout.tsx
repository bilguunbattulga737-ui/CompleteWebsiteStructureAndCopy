import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, Phone, Mail, MapPin, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../../imports/Asset_2.png";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../context/LanguageContext";

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.services, path: "/services" },
    { label: t.nav.contact, path: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch {}
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  function LangSwitcher({ mobile }: { mobile?: boolean }) {
    return (
      <div className={`flex items-center gap-0.5 rounded-lg p-0.5 ${mobile ? "bg-white/10" : "bg-white/10"}`}>
        {(["en", "mn"] as Language[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1.5 rounded-md text-xs font-bold tracking-wider transition-all ${
              lang === l ? "bg-white text-[#0B1F3A] shadow-sm" : "text-slate-300 hover:text-white"
            }`}
          >
            {l === "en" ? "ENG" : "MNG"}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-xl backdrop-blur-md" : ""}`}
        style={{ backgroundColor: scrolled ? "rgba(11,31,58,0.97)" : "#0B1F3A" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logoImg} alt="Uriel Bridge Trading LLC" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm transition-all duration-200 font-medium ${
                    isActive(link.path) ? "" : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                  style={isActive(link.path) ? { color: "#C9952A" } : {}}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop: Lang switcher + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <LangSwitcher />
              <Link
                to="/contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: "#C9952A", color: "white" }}
              >
                {t.nav.cta}
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/10 overflow-hidden"
              style={{ backgroundColor: "#0B1F3A" }}
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.path) ? "bg-white/10" : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                    style={isActive(link.path) ? { color: "#C9952A" } : {}}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2 flex gap-2">
                  <LangSwitcher mobile />
                  <Link
                    to="/contact"
                    className="flex-1 block text-center px-4 py-3 rounded-lg text-sm font-semibold"
                    style={{ backgroundColor: "#C9952A", color: "white" }}
                  >
                    {t.nav.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#070F1E" }} className="text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-5">
                <img src={logoImg} alt="Uriel Bridge Trading LLC" className="h-12 w-auto object-contain" />
              </div>
              <p className="text-sm leading-relaxed text-slate-400 mb-5">{t.footer.desc}</p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin size={15} className="text-slate-300" />
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter size={15} className="text-slate-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">{t.footer.navTitle}</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-slate-400 hover:text-white transition-colors inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">{t.footer.servicesTitle}</h4>
              <ul className="space-y-2.5">
                {t.footer.servicesList.map((s) => (
                  <li key={s}>
                    <Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">{t.footer.contactTitle}</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "#C9952A" }} />
                  <span className="text-sm text-slate-400">{t.footer.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={15} className="shrink-0" style={{ color: "#C9952A" }} />
                  <a href="tel:+97695007249" className="text-sm text-slate-400 hover:text-white transition-colors">+976 9500-7249</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={15} className="shrink-0" style={{ color: "#C9952A" }} />
                  <a href="mailto:urielbridgetradingllc@gmail.com" className="text-sm text-slate-400 hover:text-white transition-colors">urielbridgetradingllc@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe size={15} className="shrink-0" style={{ color: "#C9952A" }} />
                  <span className="text-sm text-slate-400">{t.footer.globalOps}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">{t.footer.copyright}</p>
            <div className="flex gap-5 text-xs text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-slate-300 transition-colors">{t.footer.terms}</a>
              <a href="#" className="hover:text-slate-300 transition-colors">{t.footer.legal}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
