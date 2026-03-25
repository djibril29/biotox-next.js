export default function Marquee() {
  const items = [
    'Expertise', 'Fiabilité', 'Innovation',
    'Performance', 'Conformité', 'Durabilité',
    'Rigueur', 'Excellence',
  ];

  const text = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8">
      <span className="text-white/80 text-sm font-semibold uppercase tracking-[0.2em]">{item}</span>
      <span className="text-[#37afae] text-lg leading-none select-none">·</span>
    </span>
  ));

  return (
    <div className="bg-gray-900 border-y border-white/5 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex items-center gap-8 pr-8">{text}</div>
        <div className="flex items-center gap-8 pr-8" aria-hidden="true">{text}</div>
        <div className="flex items-center gap-8 pr-8" aria-hidden="true">{text}</div>
      </div>
    </div>
  );
}
