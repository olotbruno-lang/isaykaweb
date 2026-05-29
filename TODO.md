# À faire — Isayka Draw

## 🔴 Bientôt

- [ ] **Mentions légales — compléter 2 champs** (`src/components/Footer.tsx` → `MentionsContent`)
  Remplacer les placeholders `[À COMPLÉTER]` (légalement requis en France) :
  - [ ] Statut juridique / n° SIRET d'Isayka (Arnaud Cariou) — ou mention « dispensé d'immatriculation »
  - [ ] Adresse postale — ou « disponible sur demande »
  > Isayka fournira les valeurs.

- [ ] **EmailJS en prod** — reporter les 5 vars `VITE_EMAILJS_*` (actuellement dans `.env.local`) dans les variables d'environnement de l'hébergeur (Vercel/Netlify/Replit) puis redéployer. Sinon le formulaire bascule en fallback mailto.

## 🟡 Améliorations identifiées (audit)

- [ ] Prerender / SSR (SPA CSR limite le GEO — Perplexity/ChatGPT)
- [ ] Blog / contenu topical (autorité + longue traîne)
- [ ] Renommer images en slugs SEO (`stitch-pop-art-isayka.jpeg` au lieu de hash)
- [ ] Schema `ImageObject` par œuvre
- [ ] Google Business Profile (SEO local Var/PACA)
- [ ] Routing + filtre galerie en URL (`?cat=`)
- [ ] Upload image dans le formulaire de devis
- [ ] Images WebP/AVIF + srcset + width/height (CLS)
- [ ] Code-split framer-motion (bundle ~135 kB gzip)
- [ ] Section avis / témoignages (E-E-A-T)
