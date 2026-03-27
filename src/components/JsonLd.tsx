const BASE_URL = 'https://www.btlabsconsulting.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  '@id': `${BASE_URL}/#organization`,
  name: 'BTLABS - BIOTOX LABS CONSULTING',
  alternateName: 'BTLABS',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  image: `${BASE_URL}/images/hero/hero1.jpeg`,
  description:
    "Cabinet spécialisé en études d'impact environnemental et social (EIES/PGES), qualité de l'air, QHSE et surveillance environnementale au Sénégal et en Afrique de l'Ouest.",
  email: 'admin@btlabsconsulting.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Villa Nabou, N°7996, Rue 3',
    addressLocality: 'Dakar',
    addressCountry: 'SN',
    addressRegion: 'Dakar',
  },
  areaServed: [
    { '@type': 'Country', name: 'Sénégal' },
    { '@type': 'Country', name: 'Guinée' },
    { '@type': 'Country', name: 'Togo' },
    { '@type': 'AdministrativeArea', name: 'Afrique de l\'Ouest' },
  ],
  serviceType: [
    "Études d'Impact Environnemental et Social (EIES)",
    'Plans de Gestion Environnementale et Sociale (PGES)',
    "Qualité de l'Air",
    "Qualité de l'Eau",
    'Bruit et Vibrations',
    'Audits Environnementaux',
    'QHSE',
    'Formation Environnementale',
  ],
  knowsAbout: [
    "études environnementales et sociales",
    "qualité de l'air Sénégal",
    'QHSE',
    'EIES',
    'PGES',
    'surveillance environnementale',
    'audit environnemental',
    'ISO 14001',
    'ISO 45001',
  ],
  foundingDate: '2009',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 15 },
  slogan: "Expertise Environnementale pour un Avenir Durable",
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'BTLABS Consulting',
  description: "Cabinet conseil en environnement au Sénégal",
  publisher: { '@id': `${BASE_URL}/#organization` },
  inLanguage: 'fr-FR',
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
