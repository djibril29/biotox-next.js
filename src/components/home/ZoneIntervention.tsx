'use client';

import { useEffect, useRef, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

const COUNTRIES = [
  { id: '686', name: 'Sénégal',        projects: 120, flag: '🇸🇳' },
  { id: '324', name: 'Guinée Conakry', projects: 3,  flag: '🇬🇳' },
  { id: '768', name: 'Togo',           projects: 3,  flag: '🇹🇬' },
];

const HIGHLIGHTED_IDS = new Set(COUNTRIES.map(c => c.id));

const AFRICA_IDS = new Set([
  '12',  '24',  '204', '72',  '854', '108', '132', '120', '140', '148',
  '174', '178', '180', '262', '818', '226', '232', '748', '231', '266',
  '270', '288', '324', '624', '384', '404', '426', '430', '434', '450',
  '454', '466', '478', '480', '504', '508', '516', '562', '566', '646',
  '678', '686', '694', '706', '710', '728', '729', '834', '768', '788',
  '800', '894', '716', '690', '732',
]);

const isAfrica = (id: string) =>
  AFRICA_IDS.has(id) || AFRICA_IDS.has(String(parseInt(id, 10)));

type HoveredCountry = { name: string; projects: number } | null;

export default function ZoneIntervention() {
  const [mounted, setMounted]               = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<HoveredCountry>(null);
  const [mousePos, setMousePos]             = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => { setMounted(true); }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="section-padding bg-gray-900 relative overflow-hidden">

      {/* Decorative number */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-8 right-0 text-[20rem] font-black text-white/[0.03] leading-none"
      >
        03
      </span>

      <div className="container">
        <div
          ref={ref}
          className={`grid lg:grid-cols-5 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >

          {/* ── Map ── */}
          <div className="lg:col-span-3">
            <div
              ref={mapRef}
              className="relative bg-gray-800/40 border border-white/5 rounded-2xl overflow-hidden p-2"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              {mounted ? (
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{ center: [20, 10], scale: 480 }}
                  viewBox="0 0 800 700"
                  style={{ width: '100%', height: 'auto' }}
                >
                  <Geographies geography={GEO_URL}>
                    {({ geographies }: { geographies: any[] }) =>
                      geographies.map((geo: any) => {
                        const id = String(geo.id);
                        const isHighlighted = HIGHLIGHTED_IDS.has(id) || HIGHLIGHTED_IDS.has(String(parseInt(id, 10)));
                        const inAfrica = isHighlighted || isAfrica(id);
                        const country = isHighlighted
                          ? COUNTRIES.find(c => c.id === id || c.id === String(parseInt(id, 10)))
                          : null;

                        const fill = isHighlighted ? '#37afae' : inAfrica ? '#374151' : '#1f2937';
                        const hoverFill = isHighlighted ? '#2a9d9c' : inAfrica ? '#4b5563' : '#1f2937';

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={fill}
                            stroke={inAfrica ? '#111827' : '#1a2030'}
                            strokeWidth={inAfrica ? 0.5 : 0.2}
                            onMouseEnter={() => {
                              if (country) setHoveredCountry({ name: country.name, projects: country.projects });
                            }}
                            onMouseLeave={() => setHoveredCountry(null)}
                            style={{
                              default: { outline: 'none', cursor: isHighlighted ? 'pointer' : 'default' },
                              hover:   { outline: 'none', fill: hoverFill },
                              pressed: { outline: 'none' },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ComposableMap>
              ) : (
                <div className="h-[450px] flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-[#37afae] border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              {/* Hover tooltip */}
              {hoveredCountry && (
                <div
                  className="absolute z-50 pointer-events-none bg-gray-950 border border-[#37afae]/40 rounded-lg px-4 py-2.5 shadow-xl"
                  style={{ left: mousePos.x + 14, top: mousePos.y - 54 }}
                >
                  <p className="text-white font-bold text-sm">{hoveredCountry.name}</p>
                  <p className="text-[#37afae] text-xs font-semibold mt-0.5">
                    {hoveredCountry.projects} projets réalisés
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ── Text ── */}
          <div className="lg:col-span-2">
            <p className="text-[#37afae] text-sm font-semibold uppercase tracking-widest mb-3">
              Zone d&apos;intervention
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Notre présence en{' '}
              <span className="text-[#37afae]">Afrique de l&apos;Ouest</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Nous intervenons principalement au Sénégal et dans toute la sous-région
              ouest-africaine, accompagnant industries, collectivités et projets de
              développement vers la conformité environnementale et la performance durable.
            </p>

            <div className="space-y-4">
              {[
                { value: '3',    label: 'Pays d\'intervention active' },
                { value: '150+', label: 'Projets réalisés en Afrique de l\'Ouest' },
                { value: '9',    label: 'Secteurs industriels couverts' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4 border-b border-white/5 pb-4 last:border-0">
                  <span className="text-2xl font-black text-[#37afae] w-16 flex-shrink-0">{stat.value}</span>
                  <span className="text-white/50 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
