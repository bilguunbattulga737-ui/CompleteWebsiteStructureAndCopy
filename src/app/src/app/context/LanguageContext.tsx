import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Language = "en" | "mn";

export const translations = {
  en: {
    nav: {
      home: "Home", about: "About Us", services: "Services", contact: "Contact",
      cta: "Request a Quote", tagline: "Global Aluminum Brokerage & Trading",
    },
    home: {
      badge: "Global Aluminum Brokerage & Trading",
      heroTitle: "The Bridge Between",
      heroHighlight: " Global Aluminum",
      heroTitle2: "Markets & Your Business",
      heroSub: "Uriel Bridge Trading LLC connects industrial manufacturers, construction firms, and global commodities traders with the world's leading aluminum producers — delivering speed, transparency, and unmatched market expertise on every transaction.",
      heroCta1: "Request a Quote", heroCta2: "Explore Our Services",
      trustItems: ["LME-Linked Pricing", "ISO-Certified Partners", "24/7 Global Support", "Secure Transactions"],
      statsLabels: ["Metric Tons Traded Annually", "Countries in Our Network", "Industry Partners", "On-Time Delivery Rate"],
      whyBadge: "Why Choose Us",
      whyTitle: "Built for Industrial Scale.\nEngineered for Global Trade.",
      whySub: "We are not just another commodity broker. We are a strategic trading partner committed to delivering measurable value across your entire aluminum procurement lifecycle.",
      benefits: [
        { title: "Global Market Access", desc: "Tap into our extensive network of vetted aluminum producers and suppliers spanning 30+ countries across Asia, Europe, and the Americas." },
        { title: "Verified Quality Assurance", desc: "Every transaction is backed by rigorous quality control processes, certified supplier audits, and full documentation compliance." },
        { title: "Rapid Execution", desc: "Our streamlined procurement process eliminates delays. From sourcing to delivery confirmation, we move at the speed your operations demand." },
        { title: "Market Intelligence", desc: "Benefit from real-time LME price tracking, trend analysis, and expert hedging advisory to protect your margins and optimize timing." },
        { title: "Transparent Pricing", desc: "No hidden fees. No surprises. We provide clear, competitive pricing structures with full traceability on every order." },
      ],
      servicesBadge: "Our Services", servicesTitle: "Full-Spectrum Aluminum\nTrading Solutions", servicesLink: "View All Services",
      services: [
        { title: "Aluminum Sourcing & Brokerage", desc: "We identify and negotiate with the best global suppliers to meet your exact alloy specifications, volume, and budget requirements.", link: "Learn More" },
      ],
      industriesBadge: "Industries We Serve",
      industriesTitle: "Powering Aluminum-Intensive Industries Worldwide",
      industriesSub: "From the factory floor to global infrastructure projects, we supply the aluminum that keeps modern industry moving. Our clients range from Fortune 500 manufacturers to agile mid-market producers.",
      industries: ["Automotive Manufacturing", "Aerospace & Defense", "Construction & Architecture", "Packaging & Consumer Goods", "Electrical & Electronics", "Marine & Shipbuilding"],
      partnersLabel: "Verified Partners", turnaroundLabel: "Avg. Quote Turnaround",
      aboutBadge: "About Uriel Bridge", aboutTitle: "The Trusted Bridge in\nGlobal Aluminum Trade",
      aboutP1: "Founded with a singular purpose — to eliminate the inefficiencies, opacity, and risk that plague the aluminum trading market — Uriel Bridge Trading LLC has grown into a trusted intermediary for industrial buyers and producers across three continents.",
      aboutP2: "Our team combines deep commodities expertise with cutting-edge logistics capabilities and a relationship-driven approach that puts your business interests first. We don't just execute trades — we build lasting supply chain partnerships.",
      reliabilityTitle: "Reliability", reliabilityDesc: "Consistent delivery on every commitment",
      transparencyTitle: "Transparency", transparencyDesc: "Full visibility from quote to delivery",
      aboutLink: "About Us",
      ctaTitle: "Ready to Optimize Your Aluminum Supply Chain?",
      ctaSub: "Speak with our trading specialists today. Get a competitive quote, access real-time market data, and discover how Uriel Bridge can reduce your procurement costs.",
      ctaBtn1: "Get a Free Quote", ctaBtn2: "Explore Our Services",
    },
    about: {
      badge: "About Us",
      heroTitle: "A Decade of Building Bridges in Global Aluminum Trade",
      heroSub: "Uriel Bridge Trading LLC was built on a simple but powerful premise: the aluminum market needed a smarter, more transparent, and more reliable intermediary. We became that bridge.",
      purposeBadge: "Our Purpose",
      missionTitle: "Our Mission",
      missionText: "To be the world's most trusted aluminum trading intermediary by delivering consistent value, absolute transparency, and innovative market solutions. We measure success not just in metric tons traded, but in the long-term growth we generate for every partner in our network.",
      visionTitle: "Our Vision",
      visionText: "A global aluminum market where every industrial buyer has seamless, fair, and efficient access to the materials they need — regardless of geography, scale, or market complexity. We are building the infrastructure, relationships, and technology to make that vision real.",
      cta: "Work With Us",
      stat1: "Years in Business", stat2: "Countries Served", stat3: "Trade Volume Facilitated",
      valuesBadge: "Our Core Values", valuesTitle: "The Principles That Guide Every Trade",
      values: [
        { title: "Reliability", desc: "Every commitment we make is backed by rigorous due diligence and operational excellence. Our clients count on us because we have never missed a critical delivery milestone. Reliability is not a feature — it's our foundation." },
        { title: "Transparency", desc: "We believe that open communication and full pricing visibility build stronger partnerships. You receive complete documentation — from origin certificates to LME benchmark pricing — on every transaction we facilitate." },
        { title: "Global Network", desc: "Our relationships with producers, freight operators, and financial institutions span 30+ countries. This network is our greatest asset, and we leverage it daily to secure superior terms for our clients." },
        { title: "Integrity", desc: "We operate with the highest ethical standards. Every trade is conducted in strict compliance with international commodity trading regulations, anti-corruption frameworks, and responsible sourcing guidelines." },
      ],
    },
    services: {
      badge: "Our Services",
      heroTitle: "Full-Spectrum Aluminum Trading Solutions",
      heroSub: "From initial sourcing to final delivery, Uriel Bridge Trading provides end-to-end services that remove complexity, reduce cost, and deliver reliability at every stage of the aluminum procurement process.",
      inquireBtn: "Inquire About This Service",
      deliversTitle: "What We Deliver", productsTitle: "Products & Instruments",
      processBadge: "Our Process", processTitle: "From First Contact to Final Delivery",
      processSub: "A proven, six-step process designed to eliminate friction and maximize certainty at every stage of your procurement.",
      faqBadge: "FAQ", faqTitle: "Frequently Asked Questions",
      ctaTitle: "Need a Custom Trading Solution?",
      ctaSub: "Our specialists work with companies of all sizes — from regional buyers to Fortune 500 procurement teams. Tell us your requirements and we'll build a solution around them.",
      ctaBtn: "Start a Conversation",
      services: [
        {
          title: "Aluminum Sourcing & Brokerage", tagline: "Connecting Buyers with the Right Suppliers, Every Time",
          description: "Our core brokerage service handles the entire supplier discovery, qualification, and negotiation process on your behalf. Whether you need primary aluminum ingots, rolled products, extrusion billets, or specialty alloys, we have the network and the expertise to source exactly what you need.",
          details: ["Alloy specification matching (1xxx–8xxx series and beyond)", "Global supplier sourcing across 30+ producing countries", "Supplier due diligence and factory audits", "Volume contracts from 20 MT to 10,000+ MT"],
          products: [],
        },
      ],
      process: [
        { step: "01", title: "Initial Consultation", desc: "We begin with a detailed consultation to understand your exact specifications, volume requirements, delivery schedule, and budget parameters." },
        { step: "02", title: "Supplier Qualification", desc: "Our team identifies, vets, and shortlists the most suitable suppliers from our global network based on your criteria." },
        { step: "03", title: "Commercial Negotiation", desc: "We negotiate pricing, payment terms, and contractual conditions with selected suppliers on your behalf." },
        { step: "04", title: "Documentation & Compliance", desc: "Full trade documentation — including contracts, L/Cs, certificates of origin, and quality reports — is prepared and verified." },
      ],
      faqs: [
        { q: "What is the minimum order volume you handle?", a: "We work with orders starting from 20 metric tons (MT). For smaller test orders or sample requests, contact us directly to discuss feasibility." },
        { q: "Which aluminum grades and alloys do you source?", a: "We source across the full alloy spectrum: 1xxx (pure aluminum), 2xxx, 3xxx, 5xxx, 6xxx, and 7xxx series in primary and secondary forms, including cast and wrought alloys." },
        { q: "How is pricing structured?", a: "Our pricing is LME-linked (Cash or 3-month average) plus a regional premium. We provide full price breakdown transparency so you can benchmark accurately." },
        { q: "What countries do you operate in?", a: "We source primarily from China, Russia, Canada, UAE, Bahrain, Australia, Norway, and India. We deliver globally, with established freight routes into Europe, Southeast Asia, the Middle East, and North America." },
      ],
    },
    contact: {
      badge: "Contact Us", heroTitle: "Connect With Our Trading Specialists",
      heroSub: "Whether you're sourcing aluminum for the first time or looking to optimize an existing supply chain, our trading specialists are ready to help.",
      phoneLabel: "Phone (HQ)", emailLabel: "Email",
      hoursLabel: "Trading Desk Hours", hours: "24/5 Global Coverage", hoursDetail: "Mon–Fri across all time zones",
      officesTitle: "Our Global Offices",
      formTitle: "Inquiry Form", formSub: "All fields marked with * are required. We respond within 1 business day.",
      fields: {
        name: "Full Name *", namePlaceholder: "John Smith",
        company: "Company Name *", companyPlaceholder: "Acme Manufacturing Ltd.",
        email: "Business Email *", emailPlaceholder: "john@company.com",
        phone: "Phone / WhatsApp", phonePlaceholder: "+1 (555) 000-0000",
        country: "Country *", countryPlaceholder: "United States",
        inquiryType: "Inquiry Type *", inquiryPlaceholder: "Select inquiry type…",
        volume: "Estimated Volume (MT)", volumePlaceholder: "e.g. 500 MT/month",
        product: "Aluminum Product / Alloy", productPlaceholder: "e.g. 6061 Extrusion Billet",
        message: "Your Message *", messagePlaceholder: "Please describe your aluminum requirements, preferred delivery ports, payment terms, and any other relevant details...",
      },
      inquiryTypes: ["Aluminum Sourcing & Purchasing", "Logistics & Supply Chain", "Market Intelligence & Hedging", "Becoming a Supplier Partner", "Media & Press Inquiry", "General Information"],
      privacy: "By submitting this form, you agree that Uriel Bridge Trading LLC may contact you regarding your inquiry. Your information will not be shared with third parties without your consent.",
      submitBtn: "Submit Inquiry", submitting: "Submitting...",
      successTitle: "Inquiry Submitted",
      successMsg: "Thank you for reaching out to Uriel Bridge Trading LLC. Our trading specialists will review your inquiry and respond within one business day. For urgent matters, please call us directly.",
      successBtn: "Submit Another Inquiry",
      globalTitle: "Global Presence", globalSub: "Operating across Asia Pacific, the Middle East, Europe, and the Americas.",
      errors: { nameRequired: "Name is required", companyRequired: "Company is required", emailRequired: "Email is required", emailInvalid: "Invalid email address", countryRequired: "Country is required", inquiryRequired: "Please select an inquiry type", messageRequired: "Please describe your requirements" },
    },
    footer: {
      desc: "Your trusted bridge between global aluminum markets and industrial buyers. Precision, speed, and integrity in every transaction.",
      navTitle: "Navigation", servicesTitle: "Services", contactTitle: "Contact",
      copyright: "© 2026 Uriel Bridge Trading LLC. All rights reserved.",
      privacy: "Privacy Policy", terms: "Terms of Service", legal: "Legal Disclaimer",
      address: "BaynZurkh District, 410 Apartment, Ulaanbaatar 13311, Mongolia",
      globalOps: "Global Operations",
      servicesList: ["Aluminum Sourcing & Brokerage"],
    },
    notFound: { title: "Page Not Found", msg: "The page you're looking for doesn't exist. Let's get you back to the right place.", btn: "Back to Home" },
  },

  mn: {
    nav: {
      home: "Нүүр", about: "Бидний тухай", services: "Үйлчилгээ", contact: "Холбоо барих",
      cta: "Үнийн санал авах", tagline: "Дэлхийн хөнгөн цагааны арилжаа",
    },
    home: {
      badge: "Дэлхийн хөнгөн цагааны арилжаа",
      heroTitle: "Дэлхийн хөнгөн цагааны зах зээл",
      heroHighlight: " болон таны бизнесийн",
      heroTitle2: "хоорондох гүүр",
      heroSub: "Uriel Bridge Trading LLC нь үйлдвэрлэлийн компаниуд, барилгын фирмүүд болон дэлхийн арилжааны компаниудыг дэлхийн тэргүүлэгч хөнгөн цагааны үйлдвэрлэгчидтэй холбож, хурд, ил тод байдал болон өндөр мэргэшлийн түвшинд арилжааны үйл ажиллагаа явуулдаг.",
      heroCta1: "Үнийн санал авах", heroCta2: "Үйлчилгээтэй танилцах",
      trustItems: ["LME-тэй холбоотой үнэ", "ISO баталгаажсан хамтрагчид", "24/7 Дэлхийн дэмжлэг", "Найдвартай гүйлгээ"],
      statsLabels: ["Жил бүр арилжаалагдах хэмжээ (МТ)", "Манай сүлжээний улс орнууд", "Аж үйлдвэрийн хамтрагчид", "Цаг хугацаандаа хүргэлт"],
      whyBadge: "Яагаад биднийг сонгох вэ?",
      whyTitle: "Аж үйлдвэрийн хэмжээнд.\nДэлхийн арилжааны зориулалтаар.",
      whySub: "Бид зөвхөн брокер биш. Таны хөнгөн цагааны нийлүүлэлтийн бүхий л үйл явцад хэмжигдэхүйц үнэ цэнийг хүргэхэд зориулагдсан стратегийн арилжааны хамтрагч юм.",
      benefits: [
        { title: "Дэлхийн зах зээлд нэвтрэх", desc: "Ази, Европ болон Америкийн 30 гаруй улс орноос баталгаажсан хөнгөн цагааны үйлдвэрлэгчид, нийлүүлэгчидтэй холбогдох боломж." },
        { title: "Баталгаажсан чанарын хяналт", desc: "Бүх гүйлгээ нь чанарын хатуу шалгалт, баталгаажсан нийлүүлэгчийн аудит, бүрэн баримт бичгийн хяналттай байдаг." },
        { title: "Хурдан гүйцэтгэл", desc: "Нийлүүлэгч олохоос хүргэлтийн баталгаа хүртэл саад тотгорыг арилгасан нийлүүлэлтийн үйл явц." },
        { title: "Зах зээлийн мэдээлэл", desc: "Бодит цагийн LME үнийн хяналт, чиг хандлагын шинжилгээ, маржиныг хамгаалах мэргэжилтний зөвлөмжийг ашиглаарай." },
        { title: "Ил тод үнэ", desc: "Нуугдмал хураамж байхгүй. Гайхшрал байхгүй. Бид бүх захиалгад тодорхой, өрсөлдөхүйц үнийн бүтцийг хангадаг." },
      ],
      servicesBadge: "Манай үйлчилгээ", servicesTitle: "Хөнгөн цагааны арилжааны\nбүрэн шийдэл", servicesLink: "Бүх үйлчилгээг үзэх",
      services: [
        { title: "Хөнгөн цагаан эрэлт хайгуул & Брокер", desc: "Таны хайш, хэмжээ, төсвийн шаардлагад нийцсэн хамгийн сайн дэлхийн нийлүүлэгчийг олж тогтоон, хэлэлцээр хийдэг.", link: "Дэлгэрэнгүй" },
      ],
      industriesBadge: "Бидний үйлчлэх салбарууд",
      industriesTitle: "Дэлхийн хөнгөн цагаан шаардлагатай салбаруудыг дэмжих",
      industriesSub: "Үйлдвэрийн шалнаас дэлхийн дэд бүтцийн төслүүд хүртэл бид орчин үеийн үйлдвэрлэлийг хөдөлгөдөг хөнгөн цагааныг нийлүүлдэг.",
      industries: ["Автомашины үйлдвэрлэл", "Агаарын тээвэр & Батлан хамгаалах", "Барилга & Архитектур", "Сав баглаа & Хэрэглээний бараа", "Цахилгаан & Электроник", "Далайн тээвэр & Хөлөг онгоц"],
      partnersLabel: "Баталгаажсан хамтрагчид", turnaroundLabel: "Дундаж үнийн санал хүртэлх хугацаа",
      aboutBadge: "Uriel Bridge-ийн тухай", aboutTitle: "Дэлхийн хөнгөн цагааны\nарилжаан дахь итгэлт гүүр",
      aboutP1: "Uriel Bridge Trading LLC нь хөнгөн цагааны арилжааны зах зээлийн үр ашиггүй байдал, ил тод бус байдал, эрсдэлийг арилгах зорилготой байгуулагдаж, гурван тивийн аж үйлдвэрийн худалдан авагчид болон үйлдвэрлэгчдийн итгэлт зуучлагч болж өссөн.",
      aboutP2: "Манай баг нь гүн гүнзгий барааны бирж мэдлэгийг дэвшилтэт логистикийн чадавхи болон харилцааг чухалчилсан хандлагатай хослуулж, таны бизнесийн ашиг сонирхлыг нэн тэргүүнд тавьдаг.",
      reliabilityTitle: "Найдвартай байдал", reliabilityDesc: "Бүх амлалтдаа тогтмол биелүүлэлт",
      transparencyTitle: "Ил тод байдал", transparencyDesc: "Үнийн саналаас хүргэлт хүртэл бүрэн ойлголт",
      aboutLink: "Бидний тухай",
      ctaTitle: "Хөнгөн цагааны нийлүүлэлтийн сүлжээгээ оновчлоход бэлэн үү?",
      ctaSub: "Өнөөдөр манай арилжааны мэргэжилтнүүдтэй ярилцаарай. Өрсөлдөхүйц үнийн санал аваарай, бодит цагийн зах зээлийн өгөгдөлд нэвтрэх боломжтой.",
      ctaBtn1: "Үнэгүй үнийн санал авах", ctaBtn2: "Үйлчилгээтэй танилцах",
    },
    about: {
      badge: "Бидний тухай",
      heroTitle: "Дэлхийн хөнгөн цагааны арилжаанд аравжилтай гүүр",
      heroSub: "Uriel Bridge Trading LLC нь энгийн боловч хүчтэй үзэл санаан дээр байгуулагдсан: хөнгөн цагааны зах зээлд илүү ухаалаг, ил тод, найдвартай зуучлагч хэрэгтэй байсан. Бид тэр гүүр болсон.",
      purposeBadge: "Манай зорилго",
      missionTitle: "Манай эрхэм зорилго",
      missionText: "Тогтмол үнэ цэн, бүрэн ил тод байдал, шинэлэг зах зээлийн шийдлээр дэлхийн хамгийн итгэлтэй хөнгөн цагааны арилжааны зуучлагч болох. Бид амжилтаа зөвхөн арилжаалагдсан метрик тонноор бус, манай сүлжээний бүх хамтрагчид бий болгосон урт хугацааны өсөлтөөр хэмждэг.",
      visionTitle: "Манай алсын зорилт",
      visionText: "Дэлхийн хөнгөн цагааны зах зээлд бүх аж үйлдвэрийн худалдан авагч газар зүй, хэмжээ, зах зээлийн нарийн төвөгтэй байдлаас үл хамааран хэрэгцээт материалдаа тасралтгүй, шударга, үр ашигтай нэвтрэх боломжтой болно.",
      cta: "Бидэнтэй хамтрах",
      stat1: "Жил ажилласан", stat2: "Үйлчилгээ үзүүлсэн улс", stat3: "Хийгдсэн арилжааны хэмжээ",
      valuesBadge: "Манай үндсэн үнэт зүйлс", valuesTitle: "Бүх арилжааг чиглүүлдэг зарчмууд",
      values: [
        { title: "Найдвартай байдал", desc: "Бидний гаргаж буй бүх амлалт нь хатуу шалгалт, үйл ажиллагааны өндөр гүйцэтгэлд тулгуурладаг. Бид чухал хүргэлтийн хугацааг хэзээ ч алдаагүй учраас манай үйлчлүүлэгчид биднийг найддаг." },
        { title: "Ил тод байдал", desc: "Нээлттэй харилцаа холбоо, бүрэн үнийн ил тод байдал нь илүү хүчтэй түншлэлийг бий болгодог гэж бид үздэг. Бид хийх бүх гүйлгээнд гарал үүслийн гэрчилгээнээс LME эталон үнэ хүртэл бүрэн баримт бичгийг хүргэдэг." },
        { title: "Дэлхийн сүлжээ", desc: "Үйлдвэрлэгчид, тээвэрлэгчид болон санхүүгийн байгууллагуудтай манай харилцаа 30 гаруй улс оронд үргэлжилдэг. Энэ сүлжээ бол манай хамгийн том хөрөнгө бөгөөд бид үүнийг өдөр бүр ашигладаг." },
        { title: "Шударга байдал", desc: "Бид хамгийн өндөр ёс зүйн стандартад нийцүүлэн ажилладаг. Бүх арилжаа нь олон улсын барааны бирж арилжааны дүрэм, авилгын эсрэг тогтолцоо, хариуцлагатай эх сурвалжийн удирдамжид нийцдэг." },
      ],
    },
    services: {
      badge: "Манай үйлчилгээ",
      heroTitle: "Хөнгөн цагааны арилжааны бүрэн шийдэл",
      heroSub: "Анхны эрэлт хайгуулаас эцсийн хүргэлт хүртэл Uriel Bridge Trading нь хөнгөн цагааны нийлүүлэлтийн бүх шатанд нарийн төвөгтэй байдлыг арилгаж, зардлыг бууруулж, найдвартай байдлыг хангасан бүрэн үйлчилгээ үзүүлдэг.",
      inquireBtn: "Энэ үйлчилгээний талаар лавлах",
      deliversTitle: "Бидний хүргэдэг зүйлс", productsTitle: "Бүтээгдэхүүн & Хэрэгслүүд",
      processBadge: "Манай үйл явц", processTitle: "Анхны холбоосоос эцсийн хүргэлт хүртэл",
      processSub: "Нийлүүлэлтийн бүх шатанд үрэлтийг арилгаж, тодорхой байдлыг нэмэгдүүлэхэд зориулсан зургаан алхамт туршлагатай үйл явц.",
      faqBadge: "Түгээмэл асуултууд", faqTitle: "Түгээмэл асуулт хариулт",
      ctaTitle: "Захиалгат арилжааны шийдэл хэрэгтэй юу?",
      ctaSub: "Манай мэргэжилтнүүд бүх хэмжээний компаниудтай — бүс нутгийн худалдан авагчдаас Fortune 500 нийлүүлэлтийн багууд хүртэл — хамтран ажилладаг.",
      ctaBtn: "Яриа эхлүүлэх",
      services: [
        {
          title: "Хөнгөн цагаан эрэлт хайгуул & Брокер", tagline: "Худалдан авагчдыг зөв нийлүүлэгчидтэй холбох",
          description: "Манай үндсэн брокерийн үйлчилгээ нь нийлүүлэгч олох, тэдгээрийг шалгах, хэлэлцээр хийх бүх үйл явцыг таны өмнөөс гүйцэтгэдэг. Анхдагч хөнгөн цагааны цул, хусмал бүтээгдэхүүн, пресслэх бланк эсвэл онцгой хайшнууд хэрэгтэй бол бид таны шаардлагад нийцсэн зүйлийг эрэлт хайх мэдлэг, сүлжээтэй.",
          details: ["Хайшны үзүүлэлт тохируулах (1xxx–8xxx серийн болон бусад)", "30 гаруй үйлдвэрлэгч улс орноос дэлхийн нийлүүлэгч хайх", "Нийлүүлэгчийн нарийвчилсан шалгалт болон үйлдвэрийн аудит", "20 МТ-аас 10,000+ МТ хүртэлх багц гэрээ"],
          products: [],
        },
      ],
      process: [
        { step: "01", title: "Анхны зөвлөлгөө", desc: "Таны яг нарийн үзүүлэлт, хэмжээний шаардлага, хүргэлтийн хуваарь, төсвийн параметрийг ойлгохын тулд дэлгэрэнгүй зөвлөлгөөнөөс эхэлдэг." },
        { step: "02", title: "Нийлүүлэгч шалгалт", desc: "Манай баг таны шалгуурт нийцсэн хамгийн тохиромжтой нийлүүлэгчдийг дэлхийн сүлжээнээсээ олж, шалгаж, жагсаалтад оруулдаг." },
        { step: "03", title: "Арилжааны хэлэлцээр", desc: "Сонгосон нийлүүлэгчидтэй таны өмнөөс үнэ, төлбөрийн нөхцөл болон гэрээний нөхцөлийг хэлэлцэн тохирдог." },
        { step: "04", title: "Баримт бичиг & Нийцэл", desc: "Гэрээ, аккредитив, гарал үүслийн гэрчилгээ болон чанарын тайлан зэрэг бүх арилжааны баримт бичгийг бэлтгэж, баталгаажуулдаг." },
      ],
      faqs: [
        { q: "Та хамгийн бага хэддэн МТ захиалга авдаг вэ?", a: "Бид 20 метрик тоннос (МТ) эхэлсэн захиалгуудтай ажилладаг. Жижиг туршилтын захиалга эсвэл дэлгэц авах хүсэлтийн хувьд биднийг шууд холбогдоод хэрэгжих боломжийг хэлэлцэнэ." },
        { q: "Та ямар хөнгөн цагааны зэрэглэл, хайш нийлүүлдэг вэ?", a: "Бид хайшны бүрэн хүрээгээр нийлүүлдэг: анхдагч болон хоёрдогч хэлбэрд 1xxx, 2xxx, 3xxx, 5xxx, 6xxx, 7xxx серийн хийгдмэл болон боловсруулагдсан хайшийг багтаан." },
        { q: "Үнийг хэрхэн тогтоодог вэ?", a: "Манай үнэ нь LME-тэй холбоотой (Бэлэн эсвэл 3 сарын дундаж) дээр бүс нутгийн нэмэгдэлтэй байдаг. Та нарийвчлан харьцуулах боломжтой байхын тулд бид бүрэн үнийн задаргааг ил тод хүргэдэг." },
        { q: "Та ямар улс орнуудад үйл ажиллагаа явуулдаг вэ?", a: "Бид голчлон Хятад, Орос, Канад, АНЭУ, Бахрейн, Австрали, Норваги, Энэтхэгээс нийлүүлдэг. Европ, Зүүн Өмнөд Ази, Дунд Дорнод болон Хойд Америкт нийлүүлдэг бид дэлхий даяар хүргэдэг." },
      ],
    },
    contact: {
      badge: "Холбоо барих", heroTitle: "Манай арилжааны мэргэжилтнүүдтэй холбогдоорой",
      heroSub: "Та анх удаа хөнгөн цагаан нийлүүлэх гэж байгаа эсвэл одоо байгаа нийлүүлэлтийн сүлжээгээ оновчлохыг хүсч байгаа бол манай арилжааны мэргэжилтнүүд тусалахад бэлэн.",
      phoneLabel: "Утас (Төв офис)", emailLabel: "И-мэйл",
      hoursLabel: "Арилжааны тасгийн цаг", hours: "24/5 Дэлхийн хамрах хүрээ", hoursDetail: "Да–Баа, цагийн бүс дэлхий даяар",
      officesTitle: "Манай дэлхийн офисууд",
      formTitle: "Лавлах маягт", formSub: "* тэмдэглэсэн бүх талбарыг бөглөх шаардлагатай. Бид 1 ажлын өдрийн дотор хариу өгдөг.",
      fields: {
        name: "Бүтэн нэр *", namePlaceholder: "Бат-Эрдэнэ Дорж",
        company: "Компанийн нэр *", companyPlaceholder: "Эйм ҮЛД",
        email: "Ажлын и-мэйл *", emailPlaceholder: "bat@company.mn",
        phone: "Утас / WhatsApp", phonePlaceholder: "+976 9900-0000",
        country: "Улс *", countryPlaceholder: "Монгол",
        inquiryType: "Лавлах төрөл *", inquiryPlaceholder: "Лавлах төрөл сонгох…",
        volume: "Тооцоолсон хэмжээ (МТ)", volumePlaceholder: "жнь. 500 МТ/сар",
        product: "Хөнгөн цагааны бүтээгдэхүүн / Хайш", productPlaceholder: "жнь. 6061 Пресслэх бланк",
        message: "Таны мессеж *", messagePlaceholder: "Хөнгөн цагааны шаардлага, хүргэлтийн боомт, төлбөрийн нөхцөл болон бусад холбогдох мэдээллийг тайлбарлана уу...",
      },
      inquiryTypes: ["Хөнгөн цагаан нийлүүлэх & Худалдан авах", "Логистик & Нийлүүлэлтийн сүлжээ", "Зах зээлийн мэдээлэл & Хедж", "Нийлүүлэгч хамтрагч болох", "Мэдээлэл & Хэвлэлийн асуулга", "Ерөнхий мэдээлэл"],
      privacy: "Энэ маягтыг илгээснээр та Uriel Bridge Trading LLC танай лавлагааны талаар тантай холбоо барихыг зөвшөөрч байгаа юм. Таны мэдээллийг таны зөвшөөрөлгүйгээр гуравдагч этгээдтэй хуваалцахгүй.",
      submitBtn: "Лавлагаа илгээх", submitting: "Илгээж байна...",
      successTitle: "Лавлагаа илгээгдлээ",
      successMsg: "Uriel Bridge Trading LLC-тэй холбоо барьсанд баярлалаа. Манай арилжааны мэргэжилтнүүд таны лавлагааг хянаж нэг ажлын өдрийн дотор хариу өгнө.",
      successBtn: "Өөр лавлагаа илгээх",
      globalTitle: "Дэлхийн байршил", globalSub: "Ази-Номхон далай, Дунд Дорнод, Европ болон Америкт үйл ажиллагаа явуулж байна.",
      errors: { nameRequired: "Нэр оруулна уу", companyRequired: "Компанийн нэр оруулна уу", emailRequired: "И-мэйл оруулна уу", emailInvalid: "И-мэйлийн хаяг буруу байна", countryRequired: "Улс оруулна уу", inquiryRequired: "Лавлах төрлөө сонгоно уу", messageRequired: "Шаардлагаа тайлбарлана уу" },
    },
    footer: {
      desc: "Дэлхийн хөнгөн цагааны зах зээл болон аж үйлдвэрийн худалдан авагчдын хоорондох итгэлт гүүр. Нарийвчлал, хурд, шударга байдал.",
      navTitle: "Навигаци", servicesTitle: "Үйлчилгээ", contactTitle: "Холбоо барих",
      copyright: "© 2026 Uriel Bridge Trading LLC. Бүх эрх хуулиар хамгаалагдсан.",
      privacy: "Нууцлалын бодлого", terms: "Үйлчилгээний нөхцөл", legal: "Хуулийн мэдэгдэл",
      address: "Баянзүрх дүүрэг, 410 Апартмент, Улаанбаатар 13311, Монгол",
      globalOps: "Дэлхийн үйл ажиллагаа",
      servicesList: ["Хөнгөн цагаан эрэлт хайгуул & Брокер"],
    },
    notFound: { title: "Хуудас олдсонгүй", msg: "Таны хайсан хуудас байхгүй байна. Зөв газарт буцаа очицгооё.", btn: "Нүүр хуудас руу буцах" },
  },
};

export type T = typeof translations.en;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: T;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
