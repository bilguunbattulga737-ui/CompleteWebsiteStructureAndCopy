import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Send, CheckCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

type FormValues = {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  sub_q1: string;
  sub_q2: string;
  sub_q3: string;
  q7: string;
  q8: string;
  q9: string;
  q10: string;
};

const MATERIAL_CATEGORIES = [
  "Bauxite and alumina",
  "Corundum",
  "Foil and packaging",
  "Gallium",
  "Other",
  "Powders",
  "Primary aluminum and alloys",
  "Secondary alloys",
];

const PRIMARY_MATERIALS = [
  "Billets",
  "Rolling slabs",
  "Wire rod",
  "Primary aluminium",
  "Commodity inerta",
  "Primary foundry aluminium",
  "High-purity aluminium",
];

const SHAPES_BY_MATERIAL: Record<string, string[]> = {
  "Billets": ["Round Billet (DC Cast)", "Square Billet", "Porthole / Hollow Billet"],
  "Rolling slabs": ["Flat Rectangular Slab", "Tapered Rolling Slab"],
  "Wire rod": ["Coil (Rod Coil)", "Straight Rod"],
  "Primary aluminium": ["Bar", "Billets", "Ingots", "Liquid", "Non-standart billets", "Non-standart slabs", "Slabs", "Sow", "T-bars", "Wirerod"],
  "Commodity inerta": ["Sow", "T-bars"],
  "Primary foundry aluminium": ["Bar", "Ingots", "Liquid", "Sow", "T-bars"],
  "High-purity aluminium": ["Bar", "Ingots", "Liquid", "Slabs", "T-bars", "Wirerod"],
};

// Materials where grades depend only on sub_q1 (material type)
const GRADES_BY_MATERIAL: Record<string, string[]> = {
  "Billets": ["6060", "6061", "6063", "6082", "6005A", "6101", "7020", "7075", "2024", "1100", "1050"],
  "Rolling slabs": ["1050", "1100", "1200", "3003", "3105", "5052", "5083", "5182", "5754", "8011", "8079"],
  "Wire rod": ["1350 (EC Grade)", "1370", "6101", "8030", "8176"],
};

// Materials where grades depend on both sub_q1 (material) AND sub_q2 (shape)
const GRADES_BY_MATERIAL_SHAPE: Record<string, Record<string, string[]>> = {
  "Primary aluminium": {
    "Bar": ["AA 1090", "AA 356.2 (Sr)", "AA 1060", "AA 1070", "AA 1070 EC", "AA 1080A", "AA 1085", "High-Purity Al 99.92%"],
    "Billets": ["P1018", "P1020A"],
    "Ingots": [
      "AA 1090", "A35", "AA 1050A", "AA 1050 EC", "AA 1060", "AA 1070", "AA 1070 EC", "AA 1070 WP",
      "AA 1080A", "AA 1085", "AA 1085-034", "AA 1085-J", "AA 1085 (3N)", "AA 1085 (A87Se16)",
      "AA 1085 (Fe 0.05%)", "AA 1085 (P0303)", "AA 1085 (P0303A)", "AA 1085 (P0303J)",
      "AA 1085 (P0304)", "AA 1085 (P0404)", "AA 1085 (P0405)", "AA 1085 (P0406)",
      "AA 1085 (P0504)", "AA 1085 (P0505)", "AA 1085 (P0506A)", "AA 1085 (P0604)",
      "AA 1085 Si", "AA 1085 Si 0.045%", "AA 1085 SiFe", "AA 1099 (Pure 99.99%)",
      "AA 1092 (Pure 99.92%)", "AA 1092 (3N)", "AB", "AB87", "AB91", "AB97",
      "P0305", "P0406", "P1020A",
    ],
    "Liquid": [
      "AA 1090", "AA 1020", "A35", "AA 1050A", "AA 1050 EC", "AA 1060", "AA 1070",
      "AA 1070 EC", "AA 1080A", "AA 1085", "AB91", "AB97",
    ],
    "Non-standart billets": ["AA 6005", "AA 6060", "AA 6063", "AA 1095"],
    "Non-standart slabs": [
      "AA 1050", "AA 1100", "AA 1200", "AA 1235", "AA 3003", "AA 3104", "AA 5005",
      "AA 5052", "AA 5083", "AA 5182", "AA 5251", "AA 5252", "AA 5754", "AA 6014",
      "AA 6016", "AA 6021", "AA 6061", "AA 6082", "AA 6090", "AA 6111", "AA 6451",
      "AA 6590", "AA 6670", "AA 8006", "AA 8011", "AA 8079", "AA 1097",
      "AM5Sc", "AA 5052 (AlMg2)",
    ],
    "Slabs": [
      "AA 4006 Remelt", "AA 5579 Remelt", "AA 7873 Remelt", "AA 7948 Remelt",
      "AA 1090", "A35", "AA 1050A", "AA 1060", "AA 1070", "AA 1070 EC", "AA 1080A",
      "P0610", "P0610L", "P0812", "P0812L", "P1020A",
    ],
    "Sow": [
      "AA 1090", "AA 1050A", "AA 1060", "AA 1070", "AA 1070 EC", "AA 1080A", "AA 1085",
      "AA 1085 (P0202A)", "AA 1085 (P0303)", "AA 1085 (P0303A)", "AA 1085 (P0303J)",
      "AA 1085 (P0304)", "AA 1085 (P0404)", "AA 1085 (P0406)", "AA 1085 (P0506)",
      "AA 1085 Si", "AA 1092", "P0610", "P0610L", "P0812", "P0812L", "P1020A",
    ],
    "T-bars": [
      "AA 1090", "A35", "AA 1050A", "AA 1050 EC", "AA 1060", "AA 1070", "AA 1070 EC",
      "AA 1080A", "AA 1085", "AA 1099", "AA 1092", "AB", "AB91", "AB97", "P1020A",
    ],
    "Wirerod": ["Aluminum Wire Rod"],
  },

  "Commodity inerta": {
    "Sow": ["Inerta"],
    "T-bars": ["AA 1020", "ALLOW INERTA A8"],
  },

  "Primary foundry aluminium": {
    "Bar": [
      "A356.2", "A356.2 (Sr)", "AlSi10", "AlSi10Mg", "AlSi11", "AlSi11Mg", "AlSi11MgSr",
      "AlSi7", "AlSi7Mg", "AlSi7MgCu", "AlSi7MgMn", "AlSi7MgSr", "AlSi9Mg", "AlSi9MgSr", "AS6",
    ],
    "Ingots": [
      "AA 319.0 (EN AC-45200)", "AA 355.2 (EN AC-45100)", "AA 356.2 (EN AC-42200)",
      "AA 356.2 (Sr modified)", "AA 357.0 (Sr modified)", "AA 360.1 (EN AC-43400)",
      "AA 6060 (EN AW-6060)", "JIS AC2A (AA 208.0)", "JIS ADC12 (EN AC-46000 / AlSi9Cu3)",
      "AlSi10Cu2Ni (EN AC-46400)", "AlSi10Cu2Zn", "AlSi11 (EN AC-44000)",
      "AlSi12 (EN AC-44200 / AA 413.0)", "AlSi12Cu2 (EN AC-46100)", "AlSi18", "AlSi6Cu2",
      "AlSi7 (EN AC-42000)", "AlSi7 (Pyrometric Grade)", "AlSi8Cu", "AlSi8Cu3",
      "AlSi9 (EN AC-43200)", "AlSi9 (High Purity Grade)", "AlSi9Cu2 (EN AC-46300)", "AlSi9Ti",
      "AlCa3MnZn", "AlCa5MnZn", "AlMg5Si2Mn (EN AC-51500)", "AlMn2Ca2",
      "AlNi Master Alloy (TM 2026)", "AlNi5 Master Alloy", "AlSi10 (EN AC-43000)", "AlSi10CuZr",
      "AlSi10Mg (EN AC-43100)", "AlSi11 (EN AC-44000)", "AlSi11Mg (EN AC-44100)",
      "AlSi11Mg (Sr modified)", "AlSi12 (EN AC-44200)", "AlSi5Cu4 (EN AC-45400)",
      "AlSi6Cu2MnMg", "AlSi6Cu4 (EN AC-45000)", "AlSi6MgMn", "AlSi7 (EN AC-45300)",
      "AlSi7Cu4", "AlSi7Mg (EN AC-42100 / AA 356.0)", "AlSi7MgCu (EN AC-45500)",
      "AlSi7MgMn", "AlSi7Mg (Sr modified)", "AlSi8MgMn", "AlSi9Cu3 (EN AC-46000)",
      "AlSi9Mg (EN AC-43300)", "AlSi9Mg (Sr modified)", "AlZn5Ni0.4Fe", "AlMg5",
      "AlSi10", "AlSi6", "AlSi9", "Castaduct-42 (AlMg4Fe2)", "FM-B2", "FM-S2N", "FM120",
      "GAS9C1 (AlSi9Cu1)", "KS 1275 (AlSi12CuNiMg)", "KS 1295 (AlSi12CuNiMg)",
      "Magsimal-plus (AlMg5Si2Mn)", "AlSi12Cu2MgNi (EN AC-48000)", "AlSi12Cu3Mg2Ni",
      "AlSi12CuMgNi", "AlSi12 (Ultra Pure Grade)", "AlSi12 (Ultra Pure Grade 113-B)",
      "AlSi12 (Pyrometric Grade)", "AlSi12 (Pyrometric Ultra Pure Grade)",
      "AlSi12 (High Purity Grade)", "AlSi13 (Pyrometric Ultra Pure Grade)",
      "AlSi5Cu2 (Pyrometric Grade)", "AlSi5Cu (High Purity Grade)", "AlSi6Cu2Mg0.5",
      "AlSi7Cu2Mg", "AlSi7 (Pyrometric Grade)", "AlSi7 (Pyrometric Ultra Pure Grade)",
      "AlSi7 (High Purity Grade)", "AlSi8Cu3 (High Purity Grade)", "AlSi9CuMgNi",
      "AlSi9 (Pyrometric Grade)", "AlSi9 (Pyrometric Ultra Pure Grade)",
      "AlSi9CuNi (High Purity Grade)", "AlSi9Ni (High Purity Grade)",
      "AlSi9 (High Purity Grade)", "AlSi9Mg (AL9M Modified)", "AP4 Primary Ingot",
      "AlZn5Ni0.4Fe", "AlZn6Ni0.5Fe",
    ],
    "Liquid": ["AA 1020", "AlSi11 (EN AC-44000)"],
    "Sow": ["AlSi10 (EN AC-43000)", "AlSi3", "AlSi3Sr"],
    "T-bars": [
      "410T", "AA 356.2", "AA 356.2 (Sr)", "AA 357.0 (Sr)", "AlSi11 (EN AC-44000)",
      "AlSi12Cu2 (EN AC-46100)", "AlSi6Cu2", "AlSi9Ti", "AlSi11", "AlSi3", "AlSi3Sr",
      "AlSi6Cu2Mg0.5", "AlMgMn",
    ],
  },

  "High-purity aluminium": {
    "Bar": ["High-Purity Al 99.999% (5N)"],
    "Ingots": [
      "High-Purity Al 99.98% (3N8)", "High-Purity Al 99.996% (4N6)",
      "AA 1095 (Al 99.95%)", "AA 1097 (Al 99.97%)", "AA 1099 (Al 99.99%)",
      "High-Purity Al 99.995%", "P0101 High-Purity Ingot",
    ],
    "Liquid": [
      "AA 1095 (Al 99.95%)", "AA 1097 (Al 99.97%)", "AA 1099 (Al 99.99%)",
      "High-Purity Al 99.995%",
    ],
    "Slabs": ["AA 1050A-H18", "AA 1099 (Al 99.99%)"],
    "T-bars": [
      "High-Purity Al 99.99% (4N)", "High-Purity Al 99.98% (3N8)",
      "High-Purity Al 99.996% (4N6)", "AA 1095 (Al 99.95%)", "AA 1097 (Al 99.97%)",
      "AA 1099 (Al 99.99%)", "High-Purity Al 99.995%", "P0101 High-Purity Ingot",
    ],
    "Wirerod": ["AA 1099 (Al 99.99%)"],
  },
};

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Belarus", "Belgium", "Bolivia",
  "Bosnia and Herzegovina", "Brazil", "Bulgaria", "Cambodia", "Canada", "Chile", "China",
  "Colombia", "Croatia", "Czech Republic", "Denmark", "Ecuador", "Egypt", "Estonia",
  "Ethiopia", "Finland", "France", "Georgia", "Germany", "Ghana", "Greece", "Hungary",
  "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Japan",
  "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon",
  "Libya", "Lithuania", "Luxembourg", "Malaysia", "Mexico", "Moldova", "Mongolia",
  "Morocco", "Mozambique", "Myanmar", "Netherlands", "New Zealand", "Nigeria", "Norway",
  "Oman", "Pakistan", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russia", "Saudi Arabia", "Serbia", "Singapore", "Slovakia", "Slovenia", "South Africa",
  "South Korea", "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Taiwan",
  "Tajikistan", "Tanzania", "Thailand", "Tunisia", "Turkey", "Turkmenistan", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Uzbekistan", "Venezuela",
  "Vietnam", "Yemen", "Zimbabwe",
];

const inputCls = "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors bg-[#FAFBFC] text-black";
const labelCls = "block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide";
const errorCls = "text-red-500 text-xs mt-1";

function SelectField({ label, name, options, placeholder, error, register: reg, disabled }: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
  error?: string;
  register: ReturnType<typeof useForm<FormValues>>["register"];
  disabled?: boolean;
}) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      <div className="relative">
        <select
          {...reg(name as keyof FormValues)}
          disabled={disabled}
          className={`${inputCls} appearance-none pr-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
          style={{ borderColor: error ? "#ef4444" : "#E2E8F0", color: "#000" }}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
      </div>
      {error && <p className={errorCls}>{error}</p>}
    </div>
  );
}

export function MaterialInquiryForm() {
  const { t } = useLanguage();
  const c = t.contact;

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormValues>({ defaultValues: { q6: "", sub_q1: "", sub_q2: "", sub_q3: "" } });

  const q6Val = useWatch({ control, name: "q6" });
  const subQ1Val = useWatch({ control, name: "sub_q1" });
  const subQ2Val = useWatch({ control, name: "sub_q2" });
  const q10Val = useWatch({ control, name: "q10" }) ?? "";

  const isPrimary = q6Val === "Primary aluminum and alloys";
  const shapeOptions = SHAPES_BY_MATERIAL[subQ1Val] ?? [];

  // If this material has shape-dependent grades, require sub_q2 first
  const hasShapeDependentGrades = !!GRADES_BY_MATERIAL_SHAPE[subQ1Val];
  const gradeOptions = hasShapeDependentGrades
    ? (GRADES_BY_MATERIAL_SHAPE[subQ1Val]?.[subQ2Val] ?? [])
    : (GRADES_BY_MATERIAL[subQ1Val] ?? []);
  const gradeDisabled = !subQ1Val || (hasShapeDependentGrades && !subQ2Val);

  const charCount = q10Val.length;

  const onSubmit = async (data: FormValues) => {
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwcKw7jw6qMT1lU-RHvPsus49mqJA16k6fl1mKHzLZTQuYYhiSEu9T97gKN6uNChtme/exec";
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Name": data.q1,
          "Company": data.q2,
          "Email": data.q3,
          "Phone": data.q4,
          "Country": data.q5,
          "Incoterms": data.q6,
          "Material Category": data.sub_q1,
          "Shape": data.sub_q2 || "N/A",
          "Grade / Alloy": data.sub_q3 || "N/A",
          "Quantity (MT)": data.q7,
          "Delivery Port": data.q8,
          "Payment Terms": data.q9,
          "Additional Information": data.q10,
        }),
      });
    } catch (err) {
      console.error("Submission failed:", err);
    }
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-sm border border-slate-100 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: "#E8EDF2" }}>
          <CheckCircle size={32} style={{ color: "#1E4D7B" }} />
        </div>
        <h3 className="text-[#0B1F3A] mb-3" style={{ fontSize: "1.375rem", fontWeight: 700 }}>{c.successTitle}</h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-md">{c.successMsg}</p>
        <button onClick={() => setSubmitted(false)}
          className="mt-8 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{ backgroundColor: "#0B1F3A" }}>
          {c.successBtn}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 space-y-6">
      <div>
        <h2 className="text-[#0B1F3A] mb-1" style={{ fontSize: "1.375rem", fontWeight: 700 }}>Inquiry Form</h2>
        <p className="text-slate-500 text-sm">All fields marked with * are required. We respond within 1 business day.</p>
      </div>

      {/* Q1–Q4: 2-column */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Name of the applicant *</label>
          <input {...register("q1", { required: "Name is required" })} placeholder="Full name"
            className={inputCls} style={{ borderColor: errors.q1 ? "#ef4444" : "#E2E8F0" }} />
          {errors.q1 && <p className={errorCls}>{errors.q1.message}</p>}
        </div>

        <div>
          <label className={labelCls}>Company name *</label>
          <input {...register("q2", { required: "Company is required" })} placeholder="e.g. Acme Manufacturing Ltd."
            className={inputCls} style={{ borderColor: errors.q2 ? "#ef4444" : "#E2E8F0" }} />
          {errors.q2 && <p className={errorCls}>{errors.q2.message}</p>}
        </div>

        <div>
          <label className={labelCls}>Business Email *</label>
          <input {...register("q3", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })}
            type="email" placeholder="john@company.com"
            className={inputCls} style={{ borderColor: errors.q3 ? "#ef4444" : "#E2E8F0" }} />
          {errors.q3 && <p className={errorCls}>{errors.q3.message}</p>}
        </div>

        <div>
          <label className={labelCls}>Phone number *</label>
          <input {...register("q4", { required: "Phone is required" })} type="tel" placeholder="+1 (555) 000-0000"
            className={inputCls} style={{ borderColor: errors.q4 ? "#ef4444" : "#E2E8F0" }} />
          {errors.q4 && <p className={errorCls}>{errors.q4.message}</p>}
        </div>
      </div>

      {/* Q5: Country */}
      <SelectField label="Country of material destination *" name="q5" options={COUNTRIES}
        placeholder="Select country…" error={errors.q5?.message} register={register} />

      {/* Q6: Material Category */}
      <div>
        <label className={labelCls}>Material Category *</label>
        <div className="relative">
          <select
            {...register("q6", { required: "Please select a material category" })}
            className={`${inputCls} appearance-none pr-10 cursor-pointer`}
            style={{ borderColor: errors.q6 ? "#ef4444" : "#E2E8F0", color: "#000" }}
          >
            <option value="">Select material category…</option>
            {MATERIAL_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
        {errors.q6 && <p className={errorCls}>{errors.q6.message}</p>}
      </div>

      {/* Conditional: Primary aluminum sub-questions */}
      <AnimatePresence>
        {isPrimary && (
          <motion.div
            key="primary-section"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="rounded-2xl border border-slate-200 p-5 space-y-5" style={{ backgroundColor: "#F4F7FA" }}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1 h-5 rounded-full" style={{ backgroundColor: "#C9952A" }} />
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Primary Aluminum Details</span>
              </div>

              {/* sub_q1: Required material */}
              <div>
                <label className={labelCls}>Required material *</label>
                <div className="relative">
                  <select
                    {...register("sub_q1", { required: isPrimary ? "Please select required material" : false })}
                    className={`${inputCls} appearance-none pr-10 cursor-pointer`}
                    style={{ borderColor: errors.sub_q1 ? "#ef4444" : "#E2E8F0", color: "#000" }}
                  >
                    <option value="">Select material…</option>
                    {PRIMARY_MATERIALS.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
                {errors.sub_q1 && <p className={errorCls}>{errors.sub_q1.message}</p>}
              </div>

              {/* sub_q2: Required shape (depends on sub_q1) */}
              <div>
                <label className={`${labelCls} ${!subQ1Val ? "opacity-50" : ""}`}>Required shape *</label>
                <div className="relative">
                  <select
                    {...register("sub_q2", { required: isPrimary && !!subQ1Val ? "Please select required shape" : false })}
                    disabled={!subQ1Val}
                    className={`${inputCls} appearance-none pr-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                    style={{ borderColor: errors.sub_q2 ? "#ef4444" : "#E2E8F0", color: "#000" }}
                  >
                    <option value="">{subQ1Val ? "Select shape…" : "Select material first"}</option>
                    {shapeOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
                {errors.sub_q2 && <p className={errorCls}>{errors.sub_q2.message}</p>}
              </div>

              {/* sub_q3: Required grade (depends on sub_q1, and sub_q2 for shape-dependent materials) */}
              <div>
                <label className={`${labelCls} ${gradeDisabled ? "opacity-50" : ""}`}>Required grade (alloy) *</label>
                <div className="relative">
                  <select
                    {...register("sub_q3", { required: isPrimary && !gradeDisabled ? "Please select required grade" : false })}
                    disabled={gradeDisabled}
                    className={`${inputCls} appearance-none pr-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                    style={{ borderColor: errors.sub_q3 ? "#ef4444" : "#E2E8F0", color: "#000" }}
                  >
                    <option value="">
                      {!subQ1Val ? "Select material first" : hasShapeDependentGrades && !subQ2Val ? "Select shape first" : "Select grade…"}
                    </option>
                    {gradeOptions.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
                {errors.sub_q3 && <p className={errorCls}>{errors.sub_q3.message}</p>}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Q7: Others (optional) */}
      <div>
        <label className={labelCls}>Others (please specify)</label>
        <input {...register("q7")} placeholder="Any additional material details…"
          className={inputCls} style={{ borderColor: "#E2E8F0" }} />
      </div>

      {/* Q8: Final application */}
      <div>
        <label className={labelCls}>Final material application / What is the material used for? *</label>
        <input {...register("q8", { required: "Please describe the material application" })}
          placeholder="e.g. Automotive body panels, electrical cables, construction extrusions…"
          className={inputCls} style={{ borderColor: errors.q8 ? "#ef4444" : "#E2E8F0" }} />
        {errors.q8 && <p className={errorCls}>{errors.q8.message}</p>}
      </div>

      {/* Q9: Volume */}
      <div>
        <label className={labelCls}>Required volume per month (mt) *</label>
        <input
          {...register("q9", { required: "Volume is required", min: { value: 1, message: "Volume must be at least 1 mt" } })}
          type="number" min={1} placeholder="e.g. 500"
          className={inputCls} style={{ borderColor: errors.q9 ? "#ef4444" : "#E2E8F0" }} />
        {errors.q9 && <p className={errorCls}>{errors.q9.message}</p>}
      </div>

      {/* Q10: Other Information (300+ chars) */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className={labelCls + " mb-0"}>Other Information *</label>
          <span className={`text-xs font-medium ${charCount >= 300 ? "text-green-600" : "text-slate-400"}`}>
            {charCount} / 300 {charCount >= 300 ? "✓" : "min"}
          </span>
        </div>
        <textarea
          {...register("q10", {
            required: "Please provide additional information",
            minLength: { value: 300, message: "Minimum 300 characters required" },
          })}
          rows={6}
          placeholder="Please describe your procurement requirements in detail — delivery port preferences, incoterms, payment terms, packaging requirements, certifications needed, lead time expectations, and any other relevant specifications…"
          className={`${inputCls} resize-none`}
          style={{ borderColor: errors.q10 ? "#ef4444" : charCount >= 300 ? "#22c55e" : "#E2E8F0" }}
        />
        {errors.q10 && <p className={errorCls}>{errors.q10.message}</p>}
        {charCount > 0 && charCount < 300 && (
          <p className="text-amber-500 text-xs mt-1">{300 - charCount} more characters required</p>
        )}
      </div>

      {/* Privacy */}
      <p className="text-xs text-slate-400 leading-relaxed">{c.privacy}</p>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: "#C9952A" }}
      >
        {isSubmitting ? <span>Submitting…</span> : <><span>Submit Inquiry</span><Send size={17} /></>}
      </button>
    </form>
  );
}
