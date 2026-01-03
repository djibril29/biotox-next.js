// ===== DONNÉES DU SITE BTLABS =====

export const siteConfig = {
  name: 'BTLABS',
  fullName: 'BIOTOX LABS CONSULTING',
  tagline: 'Expertise Environnementale',
  description: 'Structure spécialisée dans la surveillance environnementale et les études d\'impact (EIES/PGES)',
};

export const contact = {
  email: 'contact@btlabs.sn',
  phone: '+221 77 XXX XX XX',
  address: 'Dakar, Sénégal',
  linkedin: '#',
  facebook: '#',
  twitter: '#',
};

export const stats = [
  { number: '150+', label: 'Projets Réalisés' },
  { number: '9', label: 'Secteurs Couverts' },
  { number: '15+', label: 'Années d\'Expérience' },
  { number: '98%', label: 'Clients Satisfaits' },
];

export const mission = {
  title: 'Notre Mission',
  subtitle: 'Accompagner les entreprises vers l\'excellence environnementale',
  description: 'La mission principale de BTLABS est d\'accompagner les entreprises et les institutions dans la maîtrise de leurs impacts environnementaux et sanitaires, en fournissant des mesures fiables, des analyses scientifiques rigoureuses et des solutions adaptées pour améliorer durablement leur performance et leur conformité réglementaire.',
  image: '/images/services/service-1.jpeg',
};

export const vision = {
  title: 'Notre Vision',
  description: 'Devenir une référence nationale et sous-régionale en surveillance environnementale et en conseil QHSE, en offrant des solutions innovantes, fiables et scientifiquement rigoureuses qui contribuent à la protection de l\'environnement, à la santé publique et au développement durable des industries et des territoires.',
  ambition: 'À long terme, BTLABS ambitionne de devenir un acteur incontournable de la transition environnementale en Afrique de l\'Ouest, en développant des centres d\'excellence en surveillance environnementale, en renforçant l\'innovation technologique et en accompagnant les industries vers des pratiques plus durables.',
};

export const values = [
  {
    title: 'Rigueur Scientifique',
    description: 'Des analyses précises et des méthodologies conformes aux standards internationaux ISO, OMS et IFC.',
    icon: 'microscope',
  },
  {
    title: 'Innovation Technologique',
    description: 'Équipements modernes, modélisation avancée et solutions data-driven pour des résultats fiables.',
    icon: 'lightbulb',
  },
  {
    title: 'Transparence',
    description: 'Responsabilité environnementale et communication claire avec nos clients et partenaires.',
    icon: 'shield',
  },
  {
    title: 'Sécurité & Prévention',
    description: 'Priorité à la protection des personnes, des communautés et de l\'environnement.',
    icon: 'heart',
  },
  {
    title: 'Orientation Client',
    description: 'Solutions sur mesure adaptées aux besoins spécifiques de chaque projet et secteur.',
    icon: 'users',
  },
];

export const sectors = [
  {
    id: 'mines',
    title: 'Industries Extractives & Minières',
    description: 'Exploitations minières, carrières, traitement des minerais. Suivi environnemental, qualité de l\'air et de l\'eau, études d\'impact, bruit, poussières, métaux lourds.',
    icon: 'pickaxe',
    image: '/images/services/service-1.jpeg',
  },
  {
    id: 'ciment',
    title: 'Cimenteries & Matériaux',
    description: 'Monitoring poussières (PM10, PM2.5, TSP), NOx, SO₂, bruit, vibrations, EIES et plans de gestion environnementale.',
    icon: 'building',
    image: '/images/services/service-2.jpeg',
  },
  {
    id: 'agro',
    title: 'Agro-industrie & Agroalimentaire',
    description: 'Agropoles, usines de transformation, industries alimentaires. Qualité de l\'eau, air ambiant, nuisances sonores, formations.',
    icon: 'wheat',
    image: '/images/services/service-1.jpeg',
  },
  {
    id: 'chimie',
    title: 'Secteur Chimique & Pétrochimique',
    description: 'Mesures de polluants, monitoring en continu, évaluation des risques, conformité réglementaire, EIES avancées.',
    icon: 'flask',
    image: '/images/services/service-2.jpeg',
  },
  {
    id: 'btp',
    title: 'Infrastructure & BTP',
    description: 'Chantiers de construction, ouvrages publics, voiries. Suivi des poussières, bruit, évaluation des impacts temporaires.',
    icon: 'crane',
    image: '/images/projects/project-1.jpeg',
  },
  {
    id: 'eau',
    title: 'Eau & Assainissement',
    description: 'Stations d\'épuration, réseaux d\'eau potable, analyses physico-chimiques, conformité OMS/NS, audits.',
    icon: 'droplet',
    image: '/images/services/service-1.jpeg',
  },
  {
    id: 'energie',
    title: 'Énergie & Installations',
    description: 'Centrales électriques, installations thermiques. Analyse de combustion, efficacité énergétique, conformité ISO.',
    icon: 'zap',
    image: '/images/services/service-2.jpeg',
  },
  {
    id: 'collectivites',
    title: 'Collectivités & Zones Urbaines',
    description: 'Municipalités, zones industrielles, ports, aéroports. Cartographie de la pollution, campagnes de mesures, plans d\'amélioration.',
    icon: 'city',
    image: '/images/projects/project-2.jpeg',
  },
  {
    id: 'formation',
    title: 'Formation & Renforcement',
    description: 'Formations sur la qualité de l\'air, de l\'eau, le bruit, ISO 9001/14001/45001, sécurité au travail.',
    icon: 'graduation',
    image: '/images/hero/hero1.jpeg',
  },
];

export const services = [
  {
    id: 'eies',
    title: 'Études d\'Impact (EIES/PGES)',
    description: 'Études d\'Impact Environnemental et Social complètes conformes aux normes nationales et internationales (IFC, Banque Mondiale).',
    icon: 'file-text',
    image: '/images/services/service-1.jpeg',
    details: [
      'Analyse des impacts environnementaux et sociaux',
      'Plans de Gestion Environnementale et Sociale (PGES)',
      'Consultation des parties prenantes',
      'Conformité réglementaire sénégalaise et internationale',
    ],
  },
  {
    id: 'air',
    title: 'Qualité de l\'Air',
    description: 'Mesures professionnelles de la qualité de l\'air ambiant et des émissions industrielles avec équipements certifiés.',
    icon: 'wind',
    image: '/images/services/service-2.jpeg',
    details: [
      'Mesure des particules (PM2.5, PM10, TSP)',
      'Analyse des gaz (SO₂, NO₂, CO, COV)',
      'Monitoring en continu avec transmission cloud',
      'Cartographie de la pollution atmosphérique',
    ],
  },
  {
    id: 'eau',
    title: 'Qualité de l\'Eau',
    description: 'Surveillance de la qualité des eaux de surface, souterraines et des rejets industriels selon les normes OMS.',
    icon: 'droplets',
    image: '/images/services/service-1.jpeg',
    details: [
      'Analyses physico-chimiques complètes',
      'Qualité bactériologique',
      'Conformité OMS et normes sénégalaises',
      'Suivi des effluents industriels',
    ],
  },
  {
    id: 'bruit',
    title: 'Bruit & Vibrations',
    description: 'Mesures acoustiques et de vibrations pour les activités industrielles, chantiers et infrastructures.',
    icon: 'volume-2',
    image: '/images/services/service-2.jpeg',
    details: [
      'Cartographie sonore et modélisation',
      'Mesures de vibrations structurelles',
      'Évaluation de l\'impact sur les bâtiments',
      'Recommandations d\'atténuation',
    ],
  },
  {
    id: 'audit',
    title: 'Audits & Conformité',
    description: 'Audits environnementaux, HSE et accompagnement vers les certifications ISO 14001 et 45001.',
    icon: 'clipboard-check',
    image: '/images/services/service-1.jpeg',
    details: [
      'Audits de conformité réglementaire',
      'Préparation aux certifications ISO',
      'Évaluation des risques environnementaux',
      'Plans d\'action corrective',
    ],
  },
  {
    id: 'formation',
    title: 'Formation & Capacitation',
    description: 'Programmes de formation sur mesure adaptés aux standards internationaux ISO, OMS et IFC.',
    icon: 'graduation-cap',
    image: '/images/services/service-2.jpeg',
    details: [
      'Formation ISO 9001/14001/45001',
      'Qualité de l\'air et de l\'eau',
      'Sécurité au travail',
      'Utilisation des équipements de mesure',
    ],
  },
];

export const methodology = [
  {
    step: 1,
    title: 'Analyse',
    description: 'Diagnostic terrain et étude documentaire approfondie pour comprendre votre contexte et vos enjeux spécifiques.',
    icon: 'search',
  },
  {
    step: 2,
    title: 'Stratégie',
    description: 'Définition des mesures d\'atténuation et élaboration de plans d\'action adaptés à vos objectifs.',
    icon: 'target',
  },
  {
    step: 3,
    title: 'Validation',
    description: 'Rapports conformes et accompagnement continu jusqu\'à la certification et au-delà.',
    icon: 'check-circle',
  },
];

export const equipment = [
  {
    title: 'Stations de Qualité de l\'Air',
    description: 'Stations intelligentes SGA/Zwinsoft pour la mesure continue des polluants (PM2.5, PM10, SO₂, NO₂, CO, COV) avec transmission cloud.',
    icon: 'activity',
  },
  {
    title: 'Analyseurs de Gaz & Poussières',
    description: 'Analyseurs ENVEA et Sauermann pour les gaz réglementés, particules fines et analyse de combustion.',
    icon: 'thermometer',
  },
  {
    title: 'Sonomètres & Vibromètres',
    description: 'Sonomètres intégrateurs classe 1 et capteurs de vibrations triaxiaux pour mesures normées.',
    icon: 'volume-2',
  },
  {
    title: 'Kits d\'Analyse d\'Eau',
    description: 'Sondes multiparamètres et spectrophotomètres pour analyses physico-chimiques in situ.',
    icon: 'droplet',
  },
  {
    title: 'GPS & Cartographie SIG',
    description: 'GPS différentiel et logiciels QGIS/ArcGIS pour cartographie précise et analyse spatiale.',
    icon: 'map',
  },
  {
    title: 'Modélisation Avancée',
    description: 'Logiciels de dispersion atmosphérique et modélisation acoustique pour simulations prédictives.',
    icon: 'cpu',
  },
];

export const projects = [
  {
    id: 'brt-dakar',
    title: 'Projet BRT Dakar',
    subtitle: 'Situation de référence environnementale',
    category: 'Infrastructure',
    sector: 'BTP',
    year: '2022',
    location: 'Dakar, Sénégal',
    client: 'CSE (Compagnie Sahélienne D\'entreprise)',
    featured: true,
    image: '/images/projects/project-1.jpeg',
    services: ['Qualité de l\'air', 'Bruit', 'Vibrations', 'Analyse des sols'],
    description: 'Établissement d\'une situation de référence complète pour le projet de Bus Rapid Transit de Dakar, incluant l\'analyse de l\'air, du bruit et des vibrations.',
    results: [
      'Cartographie complète de la pollution atmosphérique sur le tracé',
      'Identification des zones sensibles au bruit (écoles, hôpitaux)',
      'Évaluation des vibrations sur les bâtiments existants',
      'Recommandations pour l\'atténuation des impacts',
    ],
    metrics: [
      { label: 'Sites mesurés', value: '25+' },
      { label: 'Paramètres analysés', value: '15' },
      { label: 'Durée', value: '3 mois' },
    ],
  },
  {
    id: 'agropole-sud',
    title: 'Agropoles Sud',
    subtitle: 'Situation de référence environnementale',
    category: 'Agro-industrie',
    sector: 'Agriculture',
    year: '2024',
    location: 'Kolda, Sédhiou, Ziguinchor',
    client: 'CSE & AGROPOLE SUD',
    featured: false,
    image: '/images/projects/project-2.jpeg',
    services: ['Qualité de l\'air', 'Eau', 'Sol', 'Bruit', 'Vibrations'],
    description: 'Établissement de la situation de référence environnementale pour les agropoles du sud du Sénégal.',
    results: [
      'Baseline environnementale complète',
      'Analyse multi-sites (3 communes)',
      'Données de référence pour le suivi',
    ],
    metrics: [
      { label: 'Communes', value: '3' },
      { label: 'Paramètres', value: '20+' },
      { label: 'Année', value: '2024' },
    ],
  },
  {
    id: 'ics-mboro',
    title: 'Suivi ICS Mboro',
    subtitle: 'Monitoring des émissions',
    category: 'Industrie Chimique',
    sector: 'Chimie',
    year: '2023',
    location: 'Mboro, Sénégal',
    client: 'Industries Chimiques du Sénégal',
    featured: false,
    image: '/images/projects/project-1.jpeg',
    services: ['Suivi des émissions', 'Qualité de l\'air', 'Analyse chimique'],
    description: 'Suivi des émissions du site de rejet de jus fluosilicique des ICS à Mboro.',
    results: [
      'Monitoring continu des émissions',
      'Conformité réglementaire vérifiée',
      'Recommandations d\'amélioration',
    ],
    metrics: [
      { label: 'Durée suivi', value: '12 mois' },
      { label: 'Paramètres', value: '10+' },
    ],
  },
  {
    id: 'mbeubeuss',
    title: 'Décharge de Mbeubeuss',
    subtitle: 'Étude sanitaire post-réhabilitation',
    category: 'Environnement',
    sector: 'Gestion des déchets',
    year: '2023',
    location: 'Mbeubeuss, Dakar',
    client: 'À préciser',
    featured: false,
    image: '/images/projects/project-2.jpeg',
    services: ['Qualité de l\'air', 'Sol', 'Eau', 'Étude sanitaire'],
    description: 'Étude sanitaire du site de la décharge de Mbeubeuss en vue de sa fréquentation par le public après réhabilitation.',
    results: [
      'Situation de référence complète (air, sol, eau)',
      'Évaluation des risques sanitaires',
      'Recommandations pour la sécurisation du site',
    ],
    metrics: [
      { label: 'Superficie', value: '175 ha' },
      { label: 'Paramètres', value: '25+' },
    ],
  },
];

export const team = [
  {
    name: 'Serigne Abdoul Aziz Ngom',
    position: 'Ingénieur QHSE / Chargé de Projet',
    expertise: 'Qualité, Hygiène, Sécurité, Environnement',
    bio: 'Expert en gestion environnementale et études d\'impact, avec une solide expérience dans l\'accompagnement des industries vers la conformité réglementaire.',
    image: '/images/hero/hero1.jpeg',
    linkedin: '#',
  },
  // Autres membres à ajouter
];

export const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Services', href: '/services' },
  { name: 'Projets', href: '/projets' },
  { name: 'Contact', href: '/contact' },
];




