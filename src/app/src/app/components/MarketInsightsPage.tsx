import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Area,
  AreaChart,
} from "recharts";
import { TrendingUp, TrendingDown, BarChart3, Globe, AlertCircle, ArrowRight, RefreshCw } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

const lmeData = [
  { date: "Jan '26", price: 2340, volume: 420 },
  { date: "Feb '26", price: 2285, volume: 390 },
  { date: "Mar '26", price: 2310, volume: 445 },
  { date: "Apr '26", price: 2398, volume: 510 },
  { date: "May '26", price: 2445, volume: 480 },
  { date: "Jun '26", price: 2412, volume: 465 },
  { date: "Jul '26", price: 2478, volume: 530 },
  { date: "Aug '26", price: 2492, volume: 545 },
];

const regionalPremiums = [
  { region: "Rotterdam (Europe)", premium: "+$215/MT", trend: "up", change: "+$12" },
  { region: "Japan (Asia)", premium: "+$188/MT", trend: "up", change: "+$8" },
  { region: "Midwest (USA)", premium: "+$390/MT", trend: "down", change: "-$15" },
  { region: "Dubai (Middle East)", premium: "+$165/MT", trend: "neutral", change: "$0" },
  { region: "Singapore (SE Asia)", premium: "+$175/MT", trend: "up", change: "+$5" },
];

const news = [
  {
    date: "August 1, 2026",
    category: "Production",
    headline: "Chinese Aluminum Output Rises 4.2% YoY in July 2026",
    summary:
      "China's National Bureau of Statistics reported aluminum production of 3.62 million metric tons in July 2026, a 4.2% increase year-over-year, signaling continued expansion of smelting capacity despite energy cost pressures in Yunnan Province.",
    impact: "Bearish",
  },
  {
    date: "July 28, 2026",
    category: "Trade Policy",
    headline: "EU Carbon Border Adjustment Mechanism (CBAM) Phase 2 Targets Aluminum Imports",
    summary:
      "The European Commission confirmed Phase 2 of CBAM will apply carbon levies to primary aluminum imports beginning Q1 2027, estimated to add €45–$80/MT to costs from high-emission producers. This is expected to shift European buyer preference toward low-carbon smelters in Norway and Canada.",
    impact: "Bullish",
  },
  {
    date: "July 22, 2026",
    category: "Energy Markets",
    headline: "Hydropower Disruptions in Yunnan Threaten Q3 Aluminum Supply",
    summary:
      "Drought conditions in Yunnan Province — home to approximately 12% of China's aluminum smelting capacity — are forcing curtailments at multiple facilities. Analysts estimate 180,000–250,000 MT of production impact through September, supporting near-term LME prices.",
    impact: "Bullish",
  },
  {
    date: "July 15, 2026",
    category: "Demand",
    headline: "Global EV Production Growth Drives Record Aluminum Demand in Automotive Sector",
    summary:
      "The International Aluminum Institute reported a 14% increase in automotive sector aluminum demand in H1 2026, driven primarily by electric vehicle body structures, battery enclosures, and thermal management components. EV-related demand is forecast to grow an additional 18% in 2027.",
    impact: "Bullish",
  },
  {
    date: "July 8, 2026",
    category: "Currency",
    headline: "USD Strength Weighs on LME Aluminum as Dollar Index Hits 3-Month High",
    summary:
      "The US Dollar Index surged to 106.2 following stronger-than-expected U.S. jobs data, exerting downward pressure on USD-denominated LME aluminum prices. Historically, a 1% rise in the DXY index correlates with a 0.8–1.2% decline in LME aluminum.",
    impact: "Bearish",
  },
];

const marketMetrics = [
  { label: "LME Cash Price", value: "$2,492/MT", change: "+$14.50", positive: true },
  { label: "LME 3-Month", value: "$2,518/MT", change: "+$12.00", positive: true },
  { label: "Aluminum Inventory (LME)", value: "512,250 MT", change: "-18,500", positive: true },
  { label: "Open Interest", value: "654,200 lots", change: "+2,100", positive: true },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xl">
        <p className="font-semibold text-[#0B1F3A] mb-2 text-sm">{label}</p>
        <p className="text-sm" style={{ color: "#1E4D7B" }}>
          LME Price: <strong>${payload[0].value.toLocaleString()}/MT</strong>
        </p>
      </div>
    );
  }
  return null;
};

export function MarketInsightsPage() {
  const [activeTab, setActiveTab] = useState<"chart" | "premiums">("chart");

  const currentPrice = lmeData[lmeData.length - 1].price;
  const prevPrice = lmeData[lmeData.length - 2].price;
  const priceChange = currentPrice - prevPrice;
  const priceChangePct = ((priceChange / prevPrice) * 100).toFixed(2);

  return (
    <div>
      {/* Hero */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #1E4D7B 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5" style={{ backgroundColor: "rgba(201,149,42,0.2)", color: "#C9952A" }}>
                Market Insights
              </div>
              <h1 className="text-white mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15 }}>
                LME Aluminum Prices &<br />Market Intelligence
              </h1>
              <p className="text-slate-300 max-w-xl" style={{ fontSize: "1.0625rem" }}>
                Stay informed with real-time LME pricing data, regional premiums, and expert market analysis from the Uriel Bridge Trading research desk.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 min-w-64">
              <div className="flex items-center justify-between mb-1">
                <span className="text-slate-300 text-xs font-medium">LME CASH PRICE</span>
                <div className="flex items-center gap-1 text-xs" style={{ color: "#C9952A" }}>
                  <RefreshCw size={10} />
                  <span>Updated Aug 1, 2026</span>
                </div>
              </div>
              <div className="text-white mb-2" style={{ fontSize: "2.25rem", fontWeight: 700 }}>
                ${currentPrice.toLocaleString()}
                <span className="text-base font-normal text-slate-400">/MT</span>
              </div>
              <div className={`flex items-center gap-1.5 text-sm font-medium ${priceChange >= 0 ? "text-green-400" : "text-red-400"}`}>
                {priceChange >= 0 ? <TrendingUp size={15} /> : <TrendingDown size={15} />}
                {priceChange >= 0 ? "+" : ""}{priceChange}/MT ({priceChange >= 0 ? "+" : ""}{priceChangePct}%) MTD
              </div>
              <div className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-400">
                Source: LME official settlement data
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section style={{ backgroundColor: "#F4F7FA" }} className="py-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {marketMetrics.map((metric) => (
              <div key={metric.label} className="bg-white rounded-xl p-4 border border-slate-100">
                <div className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wide">{metric.label}</div>
                <div className="font-bold text-[#0B1F3A] mb-1">{metric.value}</div>
                <div className={`text-xs font-medium ${metric.positive ? "text-green-600" : "text-red-500"}`}>
                  {metric.change} MoM
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Chart & Premiums */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-3 mb-8">
            {[
              { key: "chart", label: "Price History (LME)" },
              { key: "premiums", label: "Regional Premiums" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as "chart" | "premiums")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab.key ? "text-white shadow-md" : "text-slate-500 hover:text-slate-800 bg-slate-100"
                }`}
                style={activeTab === tab.key ? { backgroundColor: "#0B1F3A" } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "chart" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                <div>
                  <h3 className="text-[#0B1F3A]" style={{ fontSize: "1.125rem", fontWeight: 600 }}>LME Aluminum — 8-Month Price Trend</h3>
                  <p className="text-slate-500 text-xs mt-1">USD per Metric Ton • January – August 2026</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg">
                  <AlertCircle size={12} className="text-amber-600" />
                  Indicative prices for reference only
                </div>
              </div>
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={lmeData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1E4D7B" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#1E4D7B" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                  <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                  <YAxis
                    domain={[2200, 2600]}
                    tick={{ fontSize: 11, fill: "#94a3b8" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `$${v}`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine y={2400} stroke="#C9952A" strokeDasharray="4 4" label={{ value: "Key Level: $2,400", fill: "#C9952A", fontSize: 10 }} />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#1E4D7B"
                    strokeWidth={2.5}
                    fill="url(#priceGradient)"
                    dot={{ r: 4, fill: "#1E4D7B", strokeWidth: 2, stroke: "white" }}
                    activeDot={{ r: 6, fill: "#C9952A" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>
          )}

          {activeTab === "premiums" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
            >
              <h3 className="text-[#0B1F3A] mb-2" style={{ fontSize: "1.125rem", fontWeight: 600 }}>Regional Delivery Premiums</h3>
              <p className="text-slate-500 text-xs mb-6">
                Premiums above the LME Cash price for P1020A primary aluminum, per major market. As of August 1, 2026.
              </p>
              <div className="space-y-3">
                {regionalPremiums.map((rp) => (
                  <div key={rp.region} className="flex items-center justify-between p-4 rounded-xl" style={{ backgroundColor: "#F4F7FA" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#E8EDF2" }}>
                        <Globe size={14} style={{ color: "#1E4D7B" }} />
                      </div>
                      <span className="text-sm font-medium text-[#0B1F3A]">{rp.region}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-[#0B1F3A]">{rp.premium}</span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        rp.trend === "up" ? "bg-green-100 text-green-700" :
                        rp.trend === "down" ? "bg-red-100 text-red-700" :
                        "bg-slate-100 text-slate-500"
                      }`}>
                        {rp.change} WoW
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-4">WoW = Week-on-Week change. Data is indicative and for reference purposes only.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Industry News */}
      <section className="py-16" style={{ backgroundColor: "#F4F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-3" style={{ backgroundColor: "#E8EDF2", color: "#1E4D7B" }}>
                Industry News
              </div>
              <h2 className="text-[#0B1F3A]" style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 700 }}>
                Aluminum Market Updates
              </h2>
            </div>
          </div>

          <div className="space-y-5">
            {news.map((article, i) => (
              <motion.div
                key={article.headline}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs text-slate-400">{article.date}</span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: "#E8EDF2", color: "#1E4D7B" }}>
                        {article.category}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        article.impact === "Bullish" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}>
                        {article.impact}
                      </span>
                    </div>
                    <h3 className="text-[#0B1F3A] mb-2" style={{ fontSize: "1.0625rem", fontWeight: 600 }}>{article.headline}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{article.summary}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer & CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
            <div className="flex items-start gap-3">
              <AlertCircle size={18} className="text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-amber-900 mb-1 text-sm">Market Data Disclaimer</p>
                <p className="text-amber-800 text-xs leading-relaxed">
                  All price data, premiums, and market information presented on this page are indicative only and provided for informational purposes. Figures are based on Uriel Bridge Trading research and publicly available LME data. This does not constitute investment advice or a solicitation to trade. Commodity prices involve significant risk. Please contact our trading desk for live quotes and formal pricing.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #1E4D7B 100%)" }} >
            <div className="py-12 px-8 rounded-2xl">
              <h2 className="text-white mb-3" style={{ fontSize: "1.625rem", fontWeight: 700 }}>
                Need a Live Market Quote?
              </h2>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Our trading desk provides live, LME-linked pricing for any aluminum product. Get a formal quote within 48 hours.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-all"
                style={{ backgroundColor: "#C9952A", color: "white" }}
              >
                Request a Live Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
