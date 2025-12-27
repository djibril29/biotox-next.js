'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, Building2 } from 'lucide-react';
import { projects } from '@/lib/data';

export default function FeaturedProject() {
  const featured = projects.find((p) => p.featured) || projects[0];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center card-elevated overflow-hidden">
          {/* Image */}
          <div className="relative h-[300px] lg:h-[450px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
            />
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
              {featured.category}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {featured.title}
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {featured.description}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
              <MapPin size={16} className="text-[#37afae]" />
              {featured.location} • {featured.year}
            </div>

            {/* Metrics */}
            {featured.metrics && (
              <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-gray-100">
                {featured.metrics.map((metric, index) => (
                  <div key={index}>
                    <div className="text-xl font-bold text-[#37afae]">{metric.value}</div>
                    <div className="text-xs text-gray-500">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Results */}
            <div className="space-y-2 mb-6">
              {featured.results.slice(0, 2).map((result, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#37afae] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{result}</span>
                </div>
              ))}
            </div>

            <Link
              href={`#${featured.id}`}
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
