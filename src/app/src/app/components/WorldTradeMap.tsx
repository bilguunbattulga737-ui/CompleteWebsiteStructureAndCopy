import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// SVG coordinates pre-computed for geoMercator scale=130, center=[20,20], viewBox 800x600
const hubs = [
  { name: "Ulaanbaatar", svg: [597, 220] as [number, number] },
  { name: "Shanghai",    svg: [630, 272] as [number, number] },
  { name: "Dubai",       svg: [480, 288] as [number, number] },
  { name: "Rotterdam",   svg: [365, 207] as [number, number] },
  { name: "Singapore",   svg: [590, 343] as [number, number] },
  { name: "New York",    svg: [187, 247] as [number, number] },
  { name: "Sydney",      svg: [698, 427] as [number, number] },
  { name: "Mumbai",      svg: [520, 305] as [number, number] },
  { name: "Moscow",      svg: [432, 186] as [number, number] },
];

// geo coords matching hubs order (for Marker placement)
const hubCoords: [number, number][] = [
  [106.9, 47.9], [121.5, 31.2], [55.3, 25.2], [4.5, 51.9],
  [103.8, 1.3],  [-74.0, 40.7], [151.2, -33.9], [72.8, 19.1],
  [37.6, 55.75],
];

const routes = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 3], [1, 4], [2, 3], [2, 7],
  [4, 7], [3, 5], [1, 6],
  [8, 3], [8, 0], [8, 2],
];

function arcPath([x1, y1]: [number, number], [x2, y2]: [number, number]): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  // control point pulled perpendicular to midpoint (curve upward)
  const len = Math.sqrt(dx * dx + dy * dy);
  const bend = len * 0.22;
  const cx = mx + (dy / len) * bend * -1;
  const cy = my - (dx / len) * bend * 0.5 - bend * 0.4;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

export function WorldTradeMap() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf: number;
    let v = 0;
    const tick = () => {
      v = (v + 0.35) % 22;
      setOffset(v);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-xl"
      style={{ backgroundColor: "#071828" }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 130, center: [20, 20] }}
        viewBox="0 0 800 600"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* Countries */}
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#0F2D4A"
                stroke="#1A4A6E"
                strokeWidth={0.4}
                style={{
                  default: { outline: "none" },
                  hover:   { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Animated dashed trade route arcs */}
        {routes.map(([a, b], i) => (
          <path
            key={i}
            d={arcPath(hubs[a].svg, hubs[b].svg)}
            fill="none"
            stroke="#C9952A"
            strokeWidth={1.4}
            strokeDasharray="7 5"
            strokeDashoffset={offset * (i % 2 === 0 ? 1 : -1)}
            opacity={0.75}
          />
        ))}

        {/* Hub markers */}
        {hubCoords.map((coords, i) => (
          <Marker key={hubs[i].name} coordinates={coords}>
            <circle r={5} fill="#C9952A" stroke="#fff" strokeWidth={1.2} opacity={0.95} />
            <circle r={10} fill="#C9952A" opacity={0.18} />
            <circle r={15} fill="#C9952A" opacity={0.07} />
          </Marker>
        ))}
      </ComposableMap>

      {/* Corner label */}
      <div className="absolute bottom-3 right-4 text-xs" style={{ color: "rgba(201,149,42,0.6)" }}>
        Global Aluminum Trade Network
      </div>
    </div>
  );
}
