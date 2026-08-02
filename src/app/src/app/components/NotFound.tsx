import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function NotFound() {
  const { t } = useLanguage();
  const n = t.notFound;
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center" style={{ backgroundColor: "#F4F7FA" }}>
      <div className="text-8xl font-black mb-4" style={{ color: "#E8EDF2" }}>404</div>
      <h1 className="mb-3" style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0B1F3A" }}>{n.title}</h1>
      <p className="text-slate-500 mb-8 max-w-md text-sm">{n.msg}</p>
      <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all" style={{ backgroundColor: "#C9952A" }}>
        {n.btn} <ArrowRight size={16} />
      </Link>
    </div>
  );
}
