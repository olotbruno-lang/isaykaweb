import { Helmet } from 'react-helmet-async'

export default function SEOMeta() {
  return (
    <Helmet>
      {/* Meta Tags */}
      <title>Artiste Graffiti Var PACA | Fresques Murales & Street Art — Isayka Draw</title>
      <meta
        name="description"
        content="Isayka Draw, artiste graffiti professionnel dans le Var (Toulon, Hyères, Fréjus). Fresques murales, street art sur commande, customisation et live painting. Devis gratuit."
      />
      <meta name="keywords" content="graffiti artiste Var, fresque murale Toulon, street art PACA, customisation graffiti, live painting événement" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href="https://isaykadraw.com" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://isaykadraw.com" />
      <meta property="og:title" content="Artiste Graffiti Var PACA | Fresques Murales & Street Art — Isayka Draw" />
      <meta property="og:description" content="Fresques murales, graffiti sur commande et customisation artistique dans le Var et toute la région PACA. Devis gratuit." />
      <meta property="og:image" content="https://isaykadraw.com/images/og-homepage.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Isayka Draw" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Artiste Graffiti Var PACA — Isayka Draw" />
      <meta name="twitter:description" content="Fresques murales, graffiti sur commande et customisation artistique dans le Var et PACA." />

      {/* Geo Tags */}
      <meta name="geo.region" content="FR-83" />
      <meta name="geo.placename" content="Var, Provence-Alpes-Côte d'Azur" />
      <meta name="geo.position" content="43.1167;6.1333" />
      <meta name="ICBM" content="43.1167, 6.1333" />

      {/* Viewport & Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#111009" />

      {/* JSON-LD LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': ['LocalBusiness', 'VisualArtist'],
          '@id': 'https://isaykadraw.com/#business',
          name: 'Isayka Draw',
          alternateName: 'Arnaud Isayka',
          description: 'Artiste graffiti professionnel basé dans le Var (PACA). Spécialisé en fresques murales, street art, customisation et live painting pour particuliers et entreprises.',
          url: 'https://isaykadraw.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://isaykadraw.com/images/logo-isayka-draw.png',
            width: 400,
            height: 400
          },
          telephone: '+33XXXXXXXXX',
          email: 'isaykadraw@gmail.com',
          address: {
            '@type': 'PostalAddress',
            addressRegion: 'Var',
            addressLocality: 'Var',
            postalCode: '83000',
            addressCountry: 'FR'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 43.1167,
            longitude: 6.1333
          },
          areaServed: [
            { '@type': 'State', name: 'Var' },
            { '@type': 'State', name: 'Provence-Alpes-Côte d\'Azur' },
            { '@type': 'City', name: 'Toulon' },
            { '@type': 'City', name: 'Marseille' },
            { '@type': 'City', name: 'Nice' },
            { '@type': 'City', name: 'Hyères' },
            { '@type': 'City', name: 'Fréjus' }
          ],
          priceRange: '€€–€€€',
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00'
          },
          sameAs: [
            'https://www.instagram.com/isayka_draw',
            'https://www.tiktok.com/@isayka_draw'
          ]
        })}
      </script>

      {/* JSON-LD Person Schema (E-E-A-T) */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://isaykadraw.com/#arnaud',
          name: 'Arnaud',
          alternateName: 'Isayka',
          jobTitle: 'Artiste graffiti et muraliste',
          description: 'Artiste graffiti avec plusieurs années d\'expérience dans le Var et la région PACA. Spécialisé dans les fresques murales, le lettrage graffiti et la customisation artistique.',
          url: 'https://isaykadraw.com',
          email: 'isaykadraw@gmail.com',
          worksFor: {
            '@id': 'https://isaykadraw.com/#business'
          },
          knowsAbout: ['Graffiti', 'Street art', 'Fresque murale', 'Customisation artistique', 'Live painting'],
          sameAs: [
            'https://www.instagram.com/isayka_draw',
            'https://www.tiktok.com/@isayka_draw'
          ]
        })}
      </script>

      {/* JSON-LD FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Combien coûte une fresque murale ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Le tarif d\'une fresque murale varie selon la surface, la complexité et l\'accessibilité. En général, comptez entre 50€ et 150€ le m² pour une fresque intérieure. Contactez Isayka Draw pour un devis gratuit.'
              }
            },
            {
              '@type': 'Question',
              name: 'Isayka Draw intervient-il en dehors du Var ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Oui, Isayka Draw intervient dans tout le département du Var et dans toute la région PACA, notamment à Marseille, Nice et Cannes. Des déplacements en France entière sont possibles sur demande.'
              }
            },
            {
              '@type': 'Question',
              name: 'Combien de temps faut-il pour réaliser une fresque ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'La durée dépend de la surface et de la complexité : une petite fresque intérieure peut être réalisée en 1 à 2 jours, tandis qu\'une grande fresque extérieure peut nécessiter 1 à 2 semaines.'
              }
            },
            {
              '@type': 'Question',
              name: 'Que comprend une prestation de live painting ?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Le live painting est une prestation artistique en direct lors de votre événement. Isayka Draw crée une oeuvre en temps réel devant vos invités. Durée : 2 à 4 heures selon votre programme.'
              }
            }
          ]
        })}
      </script>

      {/* JSON-LD BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Accueil',
              item: 'https://isaykadraw.com'
            }
          ]
        })}
      </script>
    </Helmet>
  )
}
