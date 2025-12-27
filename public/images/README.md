# 📁 Structure des Images - BTLABS

Ce dossier contient toutes les images utilisées sur le site BTLABS.

## 🗂️ Organisation des dossiers

```
images/
├── hero/           # Images de fond pour les sections hero
├── services/       # Images illustrant les services
├── projects/       # Photos des projets réalisés
├── team/           # Photos des membres de l'équipe
├── logos/          # Logo BTLABS et logos partenaires
└── icons/          # Icônes personnalisées (si nécessaire)
```

## 📐 Spécifications des images

### Hero (images de fond)
- **Format recommandé**: JPG ou WebP
- **Dimensions**: 1920x1080px minimum (ratio 16:9)
- **Poids**: < 500 Ko (optimisé)
- **Utilisation**: Sections hero plein écran

| Page | Fichier | Description |
|------|---------|-------------|
| Accueil | `hero-home.jpg` | Équipe en réunion/consultation |
| Services | `hero-services.jpg` | Travail collaboratif |
| Projets | `hero-projects.jpg` | Équipe sur le terrain |
| À propos | `hero-about.jpg` | Poignée de main/partenariat |
| Contact | `hero-contact.jpg` | Équipe au bureau |

### Services
- **Format**: JPG ou WebP
- **Dimensions**: 800x600px (ratio 4:3)
- **Poids**: < 200 Ko

| Service | Fichier | Description |
|---------|---------|-------------|
| EIES/PGES | `service-eies.jpg` | Étude documentaire |
| Qualité Air | `service-air.jpg` | Mesure de l'air |
| Qualité Eau | `service-eau.jpg` | Analyse d'eau |
| Bruit | `service-bruit.jpg` | Équipement acoustique |
| Audit | `service-audit.jpg` | Inspection/certification |
| Formation | `service-formation.jpg` | Session de formation |

### Projets
- **Format**: JPG ou WebP
- **Dimensions**: 1200x800px (ratio 3:2)
- **Poids**: < 300 Ko

| Projet | Fichier | Description |
|--------|---------|-------------|
| BRT Dakar | `projet-brt-dakar.jpg` | Infrastructure transport |
| Agropole Sud | `projet-agropole.jpg` | Zone agricole |
| ICS Mboro | `projet-ics-mboro.jpg` | Site industriel |
| Mbeubeuss | `projet-mbeubeuss.jpg` | Zone de décharge |

### Équipe
- **Format**: JPG ou WebP
- **Dimensions**: 400x400px (ratio 1:1, carré)
- **Poids**: < 100 Ko
- **Style**: Portrait professionnel, fond neutre

| Membre | Fichier |
|--------|---------|
| Serigne A. A. Ngom | `team-ngom.jpg` |
| Dr. Aminata Diallo | `team-diallo.jpg` |
| Moussa Ndiaye | `team-ndiaye.jpg` |
| Fatou Sow | `team-sow.jpg` |

### Logos
- **Format**: PNG (avec transparence) ou SVG
- **Dimensions**: Variable selon utilisation

| Logo | Fichier | Utilisation |
|------|---------|-------------|
| Logo principal | `logo-btlabs.svg` | Header, Footer |
| Logo blanc | `logo-btlabs-white.svg` | Fond sombre |
| Favicon | `favicon.ico` | Onglet navigateur |

## 🔄 Comment remplacer les images

1. **Préparez vos images** selon les spécifications ci-dessus
2. **Nommez-les** selon la convention indiquée
3. **Placez-les** dans le dossier approprié
4. **Mettez à jour** les références dans le code si nécessaire

### Exemple de mise à jour dans le code

```tsx
// Avant (image externe)
<Image
  src="https://images.pexels.com/photos/..."
  alt="Description"
  fill
/>

// Après (image locale)
<Image
  src="/images/hero/hero-home.jpg"
  alt="Description"
  fill
/>
```

## 🛠️ Optimisation des images

### Outils recommandés
- **Squoosh** (https://squoosh.app) - Compression en ligne
- **TinyPNG** (https://tinypng.com) - Compression PNG/JPG
- **SVGOMG** (https://jakearchibald.github.io/svgomg/) - Optimisation SVG

### Commandes avec Next.js
Next.js optimise automatiquement les images avec le composant `<Image>`. 
Assurez-vous d'utiliser ce composant plutôt que la balise `<img>` standard.

## 📋 Checklist avant déploiement

- [ ] Toutes les images sont optimisées (< taille max)
- [ ] Les dimensions sont correctes
- [ ] Les noms de fichiers respectent la convention
- [ ] Les attributs `alt` sont renseignés
- [ ] Les images sont au format WebP ou JPG optimisé
- [ ] Le logo existe en versions claire et sombre

## 🎨 Palette de couleurs pour les images

Pour maintenir une cohérence visuelle, privilégiez des images avec :
- **Tons bleus** (rappel de la couleur principale #2B4ECC)
- **Tons verts** (environnement, nature)
- **Lumière naturelle** (professionnalisme)
- **Contexte africain/sénégalais** (authenticité)

