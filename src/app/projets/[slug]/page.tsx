import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Calendar, Building2, Award } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { client, PROJET_QUERY, urlFor } from '@/lib/sanity';
import type { Projet } from '@/types/projet';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const projet: Projet = await client.fetch(PROJET_QUERY, { slug });
  if (!projet) return {};
  return {
    title: projet.title,
    description: projet.summary,
  };
}

export default async function ProjetPage({ params }: PageProps) {
  const { slug } = await params;
  const projet: Projet = await client.fetch(PROJET_QUERY, { slug });

  if (!projet) notFound();

  const { title, coverImage, sector, client: clientName, city, zone, year, summary, services, standards, context, intervention, valeurAjoutee, keywords } = projet;

  return (
    <main className="bg-white">

      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-gray-900">
        {coverImage && (
          <>
            <Image
              src={urlFor(coverImage).width(1600).height(900).url()}
              alt={title}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20" />
          </>
        )}

        <div className="container relative z-10 pb-16 pt-40">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Tous les projets
          </Link>

        

          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white leading-tight max-w-3xl mb-6">
            {title}
          </h1>

          <div className="flex flex-wrap gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2"><Building2 size={14} className="text-[#37afae]" />{clientName}</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-[#37afae]" />{zone || city}</span>
            <span className="flex items-center gap-2"><Calendar size={14} className="text-[#37afae]" />{year}</span>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Summary */}
              <div>
                <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-[#37afae] pl-6">
                  {summary}
                </p>
              </div>

              {/* Contexte & Enjeux */}
              {context && context.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contexte & Enjeux</h2>
                  <div className="prose prose-gray max-w-none">
                    <PortableText value={context} />
                  </div>
                </div>
              )}

              {/* Notre Intervention */}
              {intervention && intervention.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Intervention</h2>
                  <div className="prose prose-gray max-w-none">
                    <PortableText value={intervention} />
                  </div>
                </div>
              )}

              {/* Valeur ajoutée */}
              {valeurAjoutee && (
                <div className="bg-[#37afae]/5 border border-[#37afae]/20 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Award size={22} className="text-[#37afae]" />
                    Valeur ajoutée pour le client
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{valeurAjoutee}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">

              {/* Client */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Client</h3>
                {projet.clientLogo && (
                  <div className="relative h-16 w-40 mb-3">
                    <Image
                      src={urlFor(projet.clientLogo).width(320).height(128).url()}
                      alt={clientName}
                      fill
                      sizes="160px"
                      className="object-contain object-left"
                    />
                  </div>
                )}
                <p className="text-gray-700 font-medium text-sm">{clientName}</p>
              </div>

              {/* Services */}
              {services && services.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Services mobilisés</h3>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <span key={s} className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Standards */}
              {standards && standards.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Standards appliqués</h3>
                  <div className="flex flex-wrap gap-2">
                    {standards.map((s) => (
                      <span key={s} className="bg-white border border-[#37afae]/30 text-[#37afae] text-sm px-3 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Keywords */}
              {keywords && keywords.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Mots-clés</h3>
                  <div className="flex flex-wrap gap-2">
                    {keywords.map((k) => (
                      <span key={k} className="text-gray-500 text-sm">#{k}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Un projet similaire ?</h3>
                <p className="text-white/60 text-sm mb-4">Discutons de vos besoins environnementaux.</p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#37afae] hover:bg-[#2a9d9c] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors w-full text-center"
                >
                  Nous contacter
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
