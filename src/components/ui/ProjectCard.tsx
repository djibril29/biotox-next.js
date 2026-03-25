import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { urlFor } from '@/lib/sanity';
import type { Projet } from '@/types/projet';

interface ProjectCardProps {
  projet: Projet;
}

export default function ProjectCard({ projet }: ProjectCardProps) {
  const { title, slug, coverImage, sector, client, year, city, summary, services } = projet;

  return (
    <Link
      href={`/projets/${slug.current}`}
      className="group relative block rounded-2xl overflow-hidden bg-gray-800 shadow-lg hover:shadow-2xl hover:shadow-black/30 transition-all duration-500"
    >
      {/* Cover image */}
      <div className="relative h-72 w-full overflow-hidden">
        {coverImage ? (
          <Image
            src={urlFor(coverImage).width(600).height(400).url()}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
        )}

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/10" />

        {/* Sector badge */}
        <span className="absolute top-4 left-4 z-10 bg-[#37afae]/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
          {sector}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <p className="text-white/50 text-xs font-medium mb-2 tracking-wide">
          {city} · {year} · {client}
        </p>

        {/* Title */}
        <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#37afae] transition-colors duration-300">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-white/60 text-sm leading-relaxed mb-5 line-clamp-2">
          {summary}
        </p>

        {/* Divider */}
        <div className="border-t border-white/10 pt-4 flex items-center justify-between">
          {/* Service tags */}
          <div className="flex flex-wrap gap-2">
            {services?.slice(0, 3).map((service) => (
              <span
                key={service}
                className="text-white/70 text-xs border border-white/20 rounded-full px-2.5 py-0.5"
              >
                {service}
              </span>
            ))}
            {services && services.length > 3 && (
              <span className="text-white/40 text-xs px-1">+{services.length - 3}</span>
            )}
          </div>

          {/* Read link */}
          <span className="text-[#37afae] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-300 flex-shrink-0">
            Lire
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
