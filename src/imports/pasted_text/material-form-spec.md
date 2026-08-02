 1. Form Hierarchy & Conditional Logic Specification
BASE FORM FIELDS (Main Questions):
Q1: Name of the applicant (Text Input - Required)
Q2: Company name (Text Input - Required)
Q3: Business Email (Email Input - Required)
Q4: Phone number (Tel Input - Required)
Q5: Country of material destination (Dropdown - List of 190+ countries)
Q6: Material Category / Product Type (Dropdown):
Bauxite and alumina
Corundum
Foil and packaging
Gallium
Other
Powders
Primary aluminum and alloys ⚡ (Triggers dynamic conditional sub-questions)
Secondary alloys
⚡ CONDITIONAL SUB-QUESTIONS (Only displayed if Q6 == "Primary aluminum and alloys"):
Sub-Question 1: Required material (Dropdown)
🔹 Option A: If Required material == "Billets"
Sub-Q2 (Required shape): Billets (Auto-selected)
Sub-Q3 (Required grade):
AA 1200A, AA 1050, AA 1060, AA 1070, AA 3003, AA 6005, AA 6012, AA 6022, AA 6032, AA 6060, AA 6061, AA 6063, AA 6082, AA 60F22, AA 6101, AA 6105, AA 6106, AA 6351, AA 6360, AA 63F25, AA 6460, AA 6463, AA 6560, AA 6605, AA 6660, AA 6760, AA 6763, AA 1070, AA 1070 EC-C, AA 9003, ABE, BC62S2, BC65, F22, F25, F25OFF, F27, F28, F31, AA 6005A, IMAC 10, IMAC 11, R19, AA 1070A, AA 1050A, AA 6063, AA 6082
🔹 Option B: If Required material == "Rolling slabs"
Sub-Q2 (Required shape): Slabs (Auto-selected)
Sub-Q3 (Required grade):
1407ch, 352S, AA 5754 (AlMg3.2), AA 7994, AA 1090, AA 1090 (Fe 0.05%), AA 1050, AA 1070, AA 1080, AA 1100, AA 1110, AA 1200, AA 1235, AA 1350, AA 1581, AA 1910, AA 1921, AA 3003, AA 3004, AA 3005, AA 3057, AA 3103, AA 3104, AA 3105, AA 3203, A35, AA 4006, AA 1050A, AA 5005, AA 5006, AA 5030, AA 5050, AA 5052, AA 5081, AA 5083, AA 5182, AA 5252, AA 5352, AA 5577, AA 5579, AA 5657, AA 5754, AA 5849, AA 5852, AA 5952, AA 1060, AA 6014, AA 6016, AA 6021, AA 6061, AA 6082, AA 6090, AA 6101, AA 6111, AA 6451, AA 6514, AA 6519, AA 6590, AA 6659, AA 6667, AA 6670, AA 6815, AA 1070, AA 7009, AA 7784, AA 7793, AA 7805, AA 7825, AA 7841, AA 7847, AA 7857, AA 7873, AA 7900, AA 7948, AA 1070 EC, AA 1070 EC-C, AA 1080A, AA 8006, AA 8011, AA 8021, AA 8079, AA 1085, AM5Sc, P0610, P0610L, P0812, P0812L, AA 1050A-PI, AA 1050A-PI-Ti, AA 1050A-Sh, AA 1050A-Sh-Ti, AA 1200, AA 1070A, AA 1050A, AA 5052 (AlMg2), AA 5754 (AlMg3), AA 5056 (AlMg5), AA 5083 (AlMg6), AA 3003 (AlMn1)
🔹 Option C: If Required material == "Wire rod"
Sub-Q2 (Required shape): Wirerod (Auto-selected)
Sub-Q3 (Required grade):
AA 6201-T4, AA 1080, AA 1350, AA 1350-O, AA 1370-O, AA 3103, AA 4043, AA 5019, AA 1350-M, AA 1350-O, AA 1350-T1, AA 1350-T2, AA 1350-T3, AA 1070-M, AA 1070-O, AA 1070-T1, AA 1070-T2, AA 1070-T3, AA 1080-M, AA 1080-O, AA 8017, AA 8030, AA 8176, AA 6201-T1/T4, AA 1085 Wire Rod, Deoxidized Aluminum Wire Rod, Al 5059, ALLOW INERTA 1370-H11, Deoxidized Aluminum, ElectraMax, EN AW-1070A-H11, EN AW-6101 T1, EN AW-6101 T4, EN AW-6201 T1, KAC KTAL, KAC TAL, KAC XTAL, KAC ZTAL, KAS 1, KAS 2, TAC-18, TAC-25, TAC-25(F), TAL, ZTAL, AA 3103 / ER3103, AA 1350-H14, AA 1070-H14, AA 1080-H14, AA 1070A (EN AW-1070A), Al-Fe-Zr Heat Resistant Alloy, AA 1350 Wire Rod, AA 6101 / AA 6201 Wire Rod, Deoxidized Aluminum Wire Rod, AA 1350 Semi-Hard Wire Rod, AA 1350-H14 Wire Rod, AA 1370-H14 Wire Rod, AA 1350 Semi-Hard Wire Rod, AA 1070 Semi-Hard Wire Rod, AA 1080 Semi-Hard Wire Rod, TS11 Heat-Resistant Al-Zr Rod, TS12 Heat-Resistant Al-Zr Rod, TS13 Heat-Resistant Al-Zr Rod, AA 6201 Wire Rod, AA 1350-T1 Wire Rod, AA 1070-T1 Wire Rod, AA 1080-T1 Wire Rod, AA 1350-T2 Wire Rod, AA 1070-T2 Wire Rod, AA 1080-T2 Wire Rod, AA 1350-T3 Wire Rod, AA 1070-T3 Wire Rod, AA 3003 / EN AW-3103, TAL 25, ZTAL 30, ER4043 (AlSi5), ER5754 (AlMg3), ER3103 (AlMn1)
🔹 Option D: If Required material == "Primary aluminium"
Sub-Q2 (Required shape): Bar, Billets, Ingots, Liquid, Non-standart billets, Non-standart slabs, Slabs, Sow, T-bars, Wirerod
Sub-Q3 (Required grade - Depends on Sub-Q2 selection):
Bar: AA 1090, AA 356.2 (Sr), AA 1060, AA 1070, AA 1070 EC, AA 1080A, AA 1085, High-Purity Al 99.92%
Billets: P1018, P1020A
Ingots: AA 1090, A35, AA 1050A, AA 1050 EC, AA 1060, AA 1070, AA 1070 EC, AA 1070 WP, AA 1080A, AA 1085, AA 1085-034, AA 1085-J, AA 1085 (3N), AA 1085 (A87Se16), AA 1085 (Fe 0.05%), AA 1085 (P0303), AA 1085 (P0303A), AA 1085 (P0303J), AA 1085 (P0304), AA 1085 (P0404), AA 1085 (P0405), AA 1085 (P0406), AA 1085 (P0504), AA 1085 (P0505), AA 1085 (P0506A), AA 1085 (P0604), AA 1085 Si, AA 1085 Si 0.045%, AA 1085 SiFe, AA 1099 (Pure 99.99%), AA 1092 (Pure 99.92%), AA 1092 (3N), AB, AB87, AB91, AB97, P0305, P0406, P1020A
Liquid: AA 1090, AA 1020, A35, AA 1050A, AA 1050 EC, AA 1060, AA 1070, AA 1070 EC, AA 1080A, AA 1085, AB91, AB97
Non-standart billets: AA 6005, AA 6060, AA 6063, AA 1095
Non-standart slabs: AA 1050, AA 1100, AA 1200, AA 1235, AA 3003, AA 3104, AA 5005, AA 5052, AA 5083, AA 5182, AA 5251, AA 5252, AA 5754, AA 6014, AA 6016, AA 6021, AA 6061, AA 6082, AA 6090, AA 6111, AA 6451, AA 6590, AA 6670, AA 8006, AA 8011, AA 8079, AA 1097, AM5Sc, AA 5052 (AlMg2)
Slabs: AA 4006 Remelt, AA 5579 Remelt, AA 7873 Remelt, AA 7948 Remelt, AA 1090, A35, AA 1050A, AA 1060, AA 1070, AA 1070 EC, AA 1080A, P0610, P0610L, P0812, P0812L, P1020A
Sow: AA 1090, AA 1050A, AA 1060, AA 1070, AA 1070 EC, AA 1080A, AA 1085, AA 1085 (P0202A), AA 1085 (P0303), AA 1085 (P0303A), AA 1085 (P0303J), AA 1085 (P0304), AA 1085 (P0404), AA 1085 (P0406), AA 1085 (P0506), AA 1085 Si, AA 1092, P0610, P0610L, P0812, P0812L, P1020A
T-bars: AA 1090, A35, AA 1050A, AA 1050 EC, AA 1060, AA 1070, AA 1070 EC, AA 1080A, AA 1085, AA 1099, AA 1092, AB, AB91, AB97, P1020A
Wirerod: Aluminum Wire Rod
🔹 Option E: If Required material == "Commodity inerta"
Sub-Q2 (Required shape): Sow, T-bars
Sub-Q3 (Required grade):
Sow: Inerta
T-bars: AA 1020, ALLOW INERTA A8
🔹 Option F: If Required material == "Primary foundry aluminium"
Sub-Q2 (Required shape): Bar, Ingots, Liquid, Sow, T-bars
Sub-Q3 (Required grade):
Bar: A356.2, A356.2 (Sr), AlSi10, AlSi10Mg, AlSi11, AlSi11Mg, AlSi11MgSr, AlSi7, AlSi7Mg, AlSi7MgCu, AlSi7MgMn, AlSi7MgSr, AlSi9Mg, AlSi9MgSr, AS6
Ingots: AA 319.0 (EN AC-45200), AA 355.2 (EN AC-45100), AA 356.2 (EN AC-42200), AA 356.2 (Sr modified), AA 357.0 (Sr modified), AA 360.1 (EN AC-43400), AA 6060 (EN AW-6060), JIS AC2A (AA 208.0), JIS ADC12 (EN AC-46000 / AlSi9Cu3), AlSi10Cu2Ni (EN AC-46400), AlSi10Cu2Zn, AlSi11 (EN AC-44000), AlSi12 (EN AC-44200 / AA 413.0), AlSi12Cu2 (EN AC-46100), AlSi18, AlSi6Cu2, AlSi7 (EN AC-42000), AlSi7 (Pyrometric Grade), AlSi8Cu, AlSi8Cu3, AlSi9 (EN AC-43200), AlSi9 (High Purity Grade), AlSi9Cu2 (EN AC-46300), AlSi9Ti, AlCa3MnZn, AlCa5MnZn, AlMg5Si2Mn (EN AC-51500), AlMn2Ca2, AlNi Master Alloy (TM 2026), AlNi5 Master Alloy, AlSi10 (EN AC-43000), AlSi10CuZr, AlSi10Mg (EN AC-43100), AlSi11 (EN AC-44000), AlSi11Mg (EN AC-44100), AlSi11Mg (Sr modified), AlSi12 (EN AC-44200), AlSi5Cu4 (EN AC-45400), AlSi6Cu2MnMg, AlSi6Cu4 (EN AC-45000), AlSi6MgMn, AlSi7 (EN AC-45300), AlSi7Cu4, AlSi7Mg (EN AC-42100 / AA 356.0), AlSi7MgCu (EN AC-45500), AlSi7MgMn, AlSi7Mg (Sr modified), AlSi8MgMn, AlSi9Cu3 (EN AC-46000), AlSi9Mg (EN AC-43300), AlSi9Mg (Sr modified), AlZn5Ni0.4Fe, AlMg5, AlSi10, AlSi6, AlSi9, Castaduct-42 (AlMg4Fe2), FM-B2, FM-S2N, FM120, GAS9C1 (AlSi9Cu1), KS 1275 (AlSi12CuNiMg), KS 1295 (AlSi12CuNiMg), Magsimal-plus (AlMg5Si2Mn), AlSi12Cu2MgNi (EN AC-48000), AlSi12Cu3Mg2Ni, AlSi12CuMgNi, AlSi12 (Ultra Pure Grade), AlSi12 (Ultra Pure Grade 113-B), AlSi12 (Pyrometric Grade), AlSi12 (Pyrometric Ultra Pure Grade), AlSi12 (High Purity Grade), AlSi13 (Pyrometric Ultra Pure Grade), AlSi5Cu2 (Pyrometric Grade), AlSi5Cu (High Purity Grade), AlSi6Cu2Mg0.5, AlSi7Cu2Mg, AlSi7 (Pyrometric Grade), AlSi7 (Pyrometric Ultra Pure Grade), AlSi7 (High Purity Grade), AlSi8Cu3 (High Purity Grade), AlSi9CuMgNi, AlSi9 (Pyrometric Grade), AlSi9 (Pyrometric Ultra Pure Grade), AlSi9CuNi (High Purity Grade), AlSi9Ni (High Purity Grade), AlSi9 (High Purity Grade), AlSi9Mg (AL9M Modified), AP4 Primary Ingot, AlZn5Ni0.4Fe, AlZn6Ni0.5Fe
Liquid: AA 1020, AlSi11 (EN AC-44000)
Sow: AlSi10 (EN AC-43000), AlSi3, AlSi3Sr
T-bars: 410T, AA 356.2, AA 356.2 (Sr), AA 357.0 (Sr), AlSi11 (EN AC-44000), AlSi12Cu2 (EN AC-46100), AlSi6Cu2, AlSi9Ti, AlSi11, AlSi3, AlSi3Sr, AlSi6Cu2Mg0.5, AlMgMn
🔹 Option G: If Required material == "High-purity aluminium"
Sub-Q2 (Required shape): Bar, Ingots, Liquid, Slabs, T-bars, Wirerod
Sub-Q3 (Required grade):
Bar: High-Purity Al 99.999% (5N)
Ingots: High-Purity Al 99.98% (3N8), High-Purity Al 99.996% (4N6), AA 1095 (Al 99.95%), AA 1097 (Al 99.97%), AA 1099 (Al 99.99%), High-Purity Al 99.995%, P0101 High-Purity Ingot
Liquid: AA 1095 (Al 99.95%), AA 1097 (Al 99.97%), AA 1099 (Al 99.99%), High-Purity Al 99.995%
Slabs: AA 1050A-H18, AA 1099 (Al 99.99%)
T-bars: High-Purity Al 99.99% (4N), High-Purity Al 99.98% (3N8), High-Purity Al 99.996% (4N6), AA 1095 (Al 99.95%), AA 1097 (Al 99.97%), AA 1099 (Al 99.99%), High-Purity Al 99.995%, P0101 High-Purity Ingot
Wirerod: AA 1099 (Al 99.99%)
FINAL FORM FIELDS:
Q7: Others (please specify): (Text Input - Optional)
Q8: Final material application/What is the material used for? (Text Input - Required)
Q9: Required volume per month, mt (Numeric Input - Required)
Q10: Other Information (300+ characters) (Textarea - Min length 300 - Required)