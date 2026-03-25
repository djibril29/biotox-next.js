import { useRef, useState } from 'react';
import type { CSSProperties, MouseEvent } from 'react';

export function useMagnetic<T extends HTMLElement = HTMLElement>(strength = 0.3) {
  const ref = useRef<T>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  const onMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setStyle({ transform: `translate(${x}px, ${y}px)`, transition: 'transform 0.1s ease' });
  };

  const onMouseLeave = () => {
    setStyle({
      transform: 'translate(0, 0)',
      transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
    });
  };

  return { ref, style, onMouseMove, onMouseLeave };
}
