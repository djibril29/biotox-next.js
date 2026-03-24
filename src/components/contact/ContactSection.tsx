'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import { contact } from '@/lib/data';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="card p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#37afae]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#37afae]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                  <p className="text-gray-600">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Envoyez-nous un message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#37afae] focus:border-[#37afae] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#37afae] focus:border-[#37afae] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Entreprise
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nom de l'entreprise"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#37afae] focus:border-[#37afae] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Sujet
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#37afae] focus:border-[#37afae] transition-colors bg-white"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="eies">Études d&apos;Impact (EIES/PGES)</option>
                          <option value="air">Qualité de l&apos;Air</option>
                          <option value="eau">Qualité de l&apos;Eau</option>
                          <option value="bruit">Bruit et Vibrations</option>
                          <option value="audit">Audit &amp; Conformité</option>
                          <option value="formation">Formation</option>
                          <option value="devis">Demande de devis</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Décrivez votre projet..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#37afae] focus:border-[#37afae] transition-colors resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      Envoyer le message
                      <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#37afae]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#37afae]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Notre Bureau</h3>
                  <p className="text-gray-600 text-sm">{contact.address}</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#37afae]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#37afae]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href={`mailto:${contact.email}`} className="text-[#37afae] text-sm hover:underline">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#37afae]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#37afae]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                  <a href={`tel:${contact.phone}`} className="text-[#37afae] text-sm hover:underline">
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#37afae]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#37afae]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Horaires</h3>
                  <p className="text-gray-600 text-sm">Lun - Ven: 8h00 - 18h00</p>
                  <p className="text-gray-600 text-sm">Sam: 9h00 - 13h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
