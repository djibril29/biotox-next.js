import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Building2 } from 'lucide-react';
import { urlFor } from '@/lib/sanity';
import type { Projet } from '@/types/projet';

interface FeaturedProjectProps {
  projet: Projet;
}

export default function FeaturedProject({ projet }: FeaturedProjectProps) {
  const { title, slug, coverImage, sector, client, city, year, summary, services, zone } = projet;

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center card-elevated overflow-hidden">

          {/* Image */}
          <div className="relative h-[300px] lg:h-[450px]">
            {coverImage ? (
              <Image
                src={urlFor(coverImage).width(800).height(600).url()}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
            )}
            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 bg-[#37afae] text-white text-sm font-medium rounded-full">
                Projet Vedette
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-2 text-sm text-[#37afae] font-medium mb-3">
              <Building2 size={16} />
              {sector}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {title}
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {summary}
            </p>

            <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
              <MapPin size={16} className="text-[#37afae]" />
              {zone || city} · {year} · {client}
            </div>

            {/* Services tags */}
            {services && services.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-gray-100">
                {services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            )}

            <Link
              href={`/projets/${slug.current}`}
              className="inline-flex items-center gap-1 text-[#37afae] font-semibold text-sm hover:gap-2 transition-all"
            >
              Voir l&apos;étude complète
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
