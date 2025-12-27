'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'BTLABS nous a accompagnés tout au long de notre projet BRT avec un professionnalisme remarquable. Leur expertise technique et leur réactivité ont été déterminantes.',
    author: 'Amadou Diallo',
    position: 'Directeur de Projet, CSE',
    image: '/images/hero/hero1.jpeg',
  },
  {
    quote: 'Une équipe d\'experts qui maîtrise parfaitement les enjeux environnementaux. Leur accompagnement nous a permis d\'obtenir notre certification ISO 14001.',
    author: 'Fatou Sow',
    position: 'Responsable QHSE, SOCOCIM',
    image: '/images/hero/hero2.jpeg',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Ce que disent nos clients
            </h2>
            <p className="text-gray-600">
              La satisfaction de nos partenaires est notre priorité.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-12 h-12 bg-[#37afae] rounded-full flex items-center justify-center hover:bg-[#2a9d9c] transition-colors">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elevated p-8"
            >
              <Quote className="w-10 h-10 text-[#37afae]/30 mb-4" />
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
