// Central place for brand + marketing copy. Change BRAND here to rename everything.
// User-facing strings are wrapped in l(EN, DE, FR, IT) — see src/lib/locale.ts.
// Non-translated values (names, prices, hrefs, keys) stay as plain strings.
//
// NOTE: DE/FR/IT copy below was revised for a professional launch tone. Please
// have a native speaker proofread before going live, especially Swiss phrasing.
import { l, type L } from "@/lib/locale";

export const BRAND = "Taplino";

export const site = {
  brand: BRAND,
  tagline: l(
    "One tap. Every connection.",
    "Ein Tap. Jede Verbindung.",
    "Un tap. Toutes les connexions.",
    "Un tap. Ogni connessione.",
  ),
  email: "hello@taplino.ch",
  phone: "+41 44 000 00 00",
  city: l(
    "Switzerland",
    "Schweiz",
    "Suisse",
    "Svizzera",
  ),
  languages: ["EN", "DE", "FR", "IT"] as const,
};

export const nav = [
  { label: l("How it works", "So funktioniert's", "Comment ça marche", "Come funziona"), href: "#how" },
  { label: l("Benefits", "Vorteile", "Avantages", "Vantaggi"), href: "#features" },
  { label: l("FAQ", "FAQ", "FAQ", "FAQ"), href: "#faq" },
  { label: l("Design your card", "Karte gestalten", "Concevez votre carte", "Progetta la tua carta"), href: "/editor" },
];

// Header navigation. Diverges from `nav` (which still feeds the footer's
// product column): the header leads with pricing, the card editor and contact.
export const headerNav = [
  { label: l("Pricing", "Preise", "Tarifs", "Prezzi"), href: "#pricing" },
  { label: l("Design your card", "Karte gestalten", "Concevez votre carte", "Progetta la tua carta"), href: "/editor" },
  { label: l("Contact", "Kontakt", "Contact", "Contatto"), href: "/contact" },
];

export const heroStats = [
  { value: "0", label: l("Apps to install", "Apps zu installieren", "Applis à installer", "App da installare") },
  { value: "1 tap", label: l("To reviews, menu or links", "Zu Bewertungen, Menü oder Links", "Vers avis, menu ou liens", "Verso recensioni, menu o link") },
];

export const destinations = [
  {
    key: "reviews",
    label: l("Google Reviews", "Google-Bewertungen", "Avis Google", "Recensioni Google"),
    title: l("Rate your visit", "Bewerten Sie Ihren Besuch", "Évaluez votre visite", "Valuta la tua visita"),
    subtitle: "Café Bellevue",
    accent: "#2f6df0",
  },
  {
    key: "menu",
    label: l("Digital Menu", "Digitales Menü", "Menu digital", "Menu digitale"),
    title: l("Today's menu", "Menü des Tages", "Menu du jour", "Menu di oggi"),
    subtitle: "Ristorante Da Marco",
    accent: "#1c7d5c",
  },
  {
    key: "links",
    label: l("Link Hub", "Link-Hub", "Hub de liens", "Hub di link"),
    title: l("Stay connected", "Bleiben Sie in Kontakt", "Restez connecté", "Restiamo in contatto"),
    subtitle: "Boutique Nord",
    accent: "#2f6df0",
  },
];

export const steps = [
  {
    n: "01",
    title: l("Tap the card", "Karte antippen", "Approcher la carte", "Tappa la carta"),
    body: l(
      "Your guest holds their smartphone to the NFC card.",
      "Der Gast hält sein Smartphone an die NFC-Karte.",
      "Le client approche son smartphone de la carte NFC.",
      "L'ospite avvicina lo smartphone alla carta NFC.",
    ),
  },
  {
    n: "02",
    title: l("Open the menu", "Speisekarte öffnen", "Ouvrir le menu", "Apri il menu"),
    body: l(
      "The digital menu opens straight in the browser, in the language they choose.",
      "Die digitale Karte erscheint direkt im Browser, in der gewünschten Sprache.",
      "Le menu numérique s'ouvre directement dans le navigateur, dans la langue choisie.",
      "Il menu digitale si apre subito nel browser, nella lingua scelta.",
    ),
  },
  {
    n: "03",
    title: l("Connect & review", "Verbinden & bewerten", "Se connecter & noter", "Connetti e recensisci"),
    body: l(
      "Use the WiFi, explore the dishes and leave a Google review in one tap.",
      "WLAN nutzen, Gerichte entdecken und mit einem Klick Google-Bewertung abgeben.",
      "Utiliser le WiFi, découvrir les plats et laisser un avis Google en un clic.",
      "Usa il WiFi, scopri i piatti e lascia una recensione Google con un clic.",
    ),
  },
];

export const useCases = [
  {
    key: "reviews",
    label: l("Google Reviews", "Google-Bewertungen", "Avis Google", "Recensioni Google"),
    heading: l(
      "Turn every table into a five-star review",
      "Machen Sie aus jedem Tisch eine Fünf-Sterne-Bewertung",
      "Transformez chaque table en avis cinq étoiles",
      "Trasforma ogni tavolo in una recensione a cinque stelle",
    ),
    body: l(
      "Place a card on the counter or table. One tap opens your Google review form directly, with no searching and no typing. Restaurants see three to five times more reviews in the first month.",
      "Legen Sie eine Karte auf die Theke oder den Tisch. Ein Tap öffnet Ihr Google-Bewertungsformular direkt, ohne Suchen und ohne Tippen. Restaurants erhalten im ersten Monat drei bis fünf Mal mehr Bewertungen.",
      "Posez une carte sur le comptoir ou la table. Un tap ouvre directement votre formulaire d'avis Google, sans recherche ni saisie. Les restaurants voient trois à cinq fois plus d'avis le premier mois.",
      "Metti una carta sul bancone o sul tavolo. Un tap apre direttamente il modulo di recensione Google, senza cercare né digitare. I ristoranti ottengono da tre a cinque volte più recensioni nel primo mese.",
    ),
    points: [
      l(
        "A direct link to your review form, with no searching",
        "Ein Direktlink zu Ihrem Bewertungsformular, ganz ohne Suchen",
        "Un lien direct vers votre formulaire d'avis, sans aucune recherche",
        "Un link diretto al modulo di recensione, senza alcuna ricerca",
      ),
      l(
        "Smart routing to catch feedback before it goes public",
        "Intelligentes Routing fängt Feedback ab, bevor es öffentlich wird",
        "Routage intelligent pour capter les retours avant qu'ils ne soient publics",
        "Instradamento intelligente per intercettare i feedback prima che diventino pubblici",
      ),
      l(
        "Climb the local ranking as reviews roll in",
        "Steigen Sie im lokalen Ranking, je mehr Bewertungen eintreffen",
        "Grimpez dans le classement local à mesure que les avis arrivent",
        "Sali nella classifica locale man mano che arrivano le recensioni",
      ),
    ],
  },
  {
    key: "menu",
    label: l("Digital Menu", "Digitales Menü", "Menu digital", "Menu digitale"),
    heading: l(
      "A menu you update, never reprint",
      "Ein Menü, das Sie aktualisieren statt neu zu drucken",
      "Un menu que vous mettez à jour, jamais à réimprimer",
      "Un menu che aggiorni, mai da ristampare",
    ),
    body: l(
      "Tap to open your live menu in any language. Change a price or add a special from your phone and it goes live instantly on every card in the room.",
      "Ein Tap öffnet Ihr Live-Menü in jeder Sprache. Ändern Sie einen Preis oder ergänzen Sie ein Tagesangebot bequem vom Handy, und es ist sofort auf jeder Karte im Raum aktuell.",
      "Un tap ouvre votre menu en direct, dans toutes les langues. Modifiez un prix ou ajoutez une suggestion depuis votre téléphone : la mise à jour est instantanée sur chaque carte de la salle.",
      "Un tap apre il tuo menu live in ogni lingua. Cambia un prezzo o aggiungi un piatto del giorno dal telefono e l'aggiornamento è immediato su ogni carta della sala.",
    ),
    points: [
      l(
        "Multilingual: EN · DE · FR · IT",
        "Mehrsprachig: EN · DE · FR · IT",
        "Multilingue : EN · DE · FR · IT",
        "Multilingue: EN · DE · FR · IT",
      ),
      l(
        "Allergens, photos and daily specials",
        "Allergene, Fotos und Tagesangebote",
        "Allergènes, photos et suggestions du jour",
        "Allergeni, foto e piatti del giorno",
      ),
      l(
        "Zero reprint costs, ever",
        "Nie wieder Druckkosten",
        "Zéro frais de réimpression, jamais",
        "Zero costi di ristampa, per sempre",
      ),
    ],
  },
  {
    key: "links",
    label: l("Link Hub", "Link-Hub", "Hub de liens", "Hub di link"),
    heading: l(
      "Instagram, WiFi & booking in one tap",
      "Instagram, WLAN & Buchung mit einem Tap",
      "Instagram, WiFi & réservation en un tap",
      "Instagram, WiFi e prenotazioni con un tap",
    ),
    body: l(
      "A beautiful link page that holds everything: social profiles, WiFi access, table booking, loyalty and your webshop. One card, endless destinations.",
      "Eine elegante Linkseite, die alles vereint: Social-Media-Profile, WLAN-Zugang, Tischreservation, Treueprogramm und Ihren Webshop. Eine Karte, unendlich viele Ziele.",
      "Une belle page de liens qui réunit tout : profils sociaux, accès WiFi, réservation de table, fidélité et votre boutique en ligne. Une carte, une infinité de destinations.",
      "Una bella pagina di link che racchiude tutto: profili social, accesso WiFi, prenotazione tavoli, fidelizzazione e il tuo negozio online. Una carta, infinite destinazioni.",
    ),
    points: [
      l(
        "Instagram, TikTok & newsletter sign-up",
        "Instagram, TikTok & Newsletter-Anmeldung",
        "Instagram, TikTok & inscription newsletter",
        "Instagram, TikTok e iscrizione alla newsletter",
      ),
      l(
        "One-tap WiFi connect",
        "WLAN-Verbindung mit einem Tap",
        "Connexion WiFi en un tap",
        "Connessione WiFi con un tap",
      ),
      l(
        "Booking, loyalty and shop links",
        "Links zu Buchung, Treue und Shop",
        "Liens réservation, fidélité et boutique",
        "Link a prenotazioni, fidelizzazione e shop",
      ),
    ],
  },
];

export const features = [
  {
    key: "no-app",
    title: l("Multilingual", "Mehrsprachig", "Multilingue", "Multilingue"),
    body: l(
      "Every guest understands your offer, with no questions asked.",
      "Jeder Gast versteht Ihr Angebot, ohne Nachfragen.",
      "Chaque client comprend votre offre, sans avoir à demander.",
      "Ogni ospite capisce la tua offerta, senza chiedere.",
    ),
  },
  {
    key: "swiss",
    title: l("Always up to date", "Immer aktuell", "Toujours à jour", "Sempre aggiornato"),
    body: l(
      "Change dishes, prices and specials instantly. No reprints.",
      "Gerichte, Preise und Aktionen sofort ändern. Kein Neudruck.",
      "Modifiez plats, prix et offres instantanément. Aucune réimpression.",
      "Cambia piatti, prezzi e offerte all'istante. Nessuna ristampa.",
    ),
  },
  {
    key: "durable",
    title: l("Less work", "Weniger Aufwand", "Moins d'efforts", "Meno lavoro"),
    body: l(
      "WiFi and the menu explain themselves.",
      "WLAN und Speisekarte erklären sich von selbst.",
      "Le WiFi et le menu s'expliquent tout seuls.",
      "WiFi e menu si spiegano da soli.",
    ),
  },
  {
    key: "dashboard",
    title: l("More Google reviews", "Mehr Google-Bewertungen", "Plus d'avis Google", "Più recensioni Google"),
    body: l(
      "Happy guests leave a review in seconds.",
      "Zufriedene Gäste bewerten in Sekunden.",
      "Les clients satisfaits laissent un avis en quelques secondes.",
      "Gli ospiti soddisfatti recensiscono in pochi secondi.",
    ),
  },
  {
    key: "compat",
    title: l("No app download", "Kein App-Download", "Aucun téléchargement d'appli", "Nessun download di app"),
    body: l(
      "Works straight in the browser on iPhone and Android.",
      "Funktioniert direkt im Browser auf iPhone und Android.",
      "Fonctionne directement dans le navigateur sur iPhone et Android.",
      "Funziona direttamente nel browser su iPhone e Android.",
    ),
  },
  {
    key: "privacy",
    title: l("A premium impression", "Hochwertiger Auftritt", "Une image haut de gamme", "Un'immagine di qualità"),
    body: l(
      "Modern technology that fits your ambience.",
      "Moderne Technik, die zu Ihrem Ambiente passt.",
      "Une technologie moderne qui s'accorde à votre ambiance.",
      "Tecnologia moderna che si abbina al tuo ambiente.",
    ),
  },
];

// ── Our flagship: the metal NFC business card ─────────────────────────
// The first products section markets this card on its own. The menu card is
// showcased separately alongside the editor (see `menuCard` below).
// ── Page designer showcase (branding, reusable designs, AI translation, dietary labels) ──
export const studio = {
  eyebrow: l("Page designer", "Seiten-Designer", "Éditeur de pages", "Editor di pagine"),
  title: l(
    "Your restaurant, your look",
    "Ihr Restaurant, Ihr Look",
    "Votre restaurant, votre style",
    "Il tuo ristorante, il tuo stile",
  ),
  intro: l(
    "Every page carries your full branding. Write your menu once, and AI translates it for every guest.",
    "Jede Seite trägt Ihr komplettes Branding. Schreiben Sie Ihre Speisekarte einmal, die KI übersetzt sie für jeden Gast.",
    "Chaque page porte toute votre identité visuelle. Rédigez votre menu une fois, l'IA le traduit pour chaque client.",
    "Ogni pagina porta tutto il tuo branding. Scrivi il menu una volta, l'IA lo traduce per ogni ospite.",
  ),
  items: [
    {
      key: "branding",
      title: l("Your full branding", "Ihr komplettes Branding", "Toute votre identité", "Tutto il tuo branding"),
      body: l(
        "Logo, cover photo, colours, fonts and corner style. Guests see your restaurant, not a template.",
        "Logo, Titelbild, Farben, Schriften und Eckenstil. Gäste sehen Ihr Restaurant, keine Vorlage.",
        "Logo, photo de couverture, couleurs, polices et style des angles. Vos clients voient votre restaurant, pas un modèle.",
        "Logo, foto di copertina, colori, font e stile degli angoli. Gli ospiti vedono il tuo ristorante, non un modello.",
      ),
    },
    {
      key: "templates",
      title: l("Designs you reuse", "Designs zum Wiederverwenden", "Des designs réutilisables", "Design riutilizzabili"),
      body: l(
        "Start from a ready-made look or save your own, then apply it to every page in one click.",
        "Starten Sie mit einem fertigen Look oder speichern Sie Ihren eigenen und übernehmen Sie ihn mit einem Klick auf jede Seite.",
        "Partez d'un style prêt à l'emploi ou enregistrez le vôtre, puis appliquez-le à chaque page en un clic.",
        "Parti da uno stile pronto o salva il tuo, poi applicalo a ogni pagina con un clic.",
      ),
    },
    {
      key: "ai",
      title: l("AI translation", "KI-Übersetzung", "Traduction par IA", "Traduzione con IA"),
      body: l(
        "Type a dish in your language. One click fills in German, French, Italian and English, with Swiss wording and dish names kept intact.",
        "Tippen Sie ein Gericht in Ihrer Sprache. Ein Klick ergänzt Deutsch, Französisch, Italienisch und Englisch, mit Schweizer Schreibweise und unveränderten Gerichtnamen.",
        "Saisissez un plat dans votre langue. Un clic ajoute l'allemand, le français, l'italien et l'anglais, avec des tournures suisses et les noms de plats préservés.",
        "Scrivi un piatto nella tua lingua. Un clic aggiunge tedesco, francese, italiano e inglese, con formulazioni svizzere e i nomi dei piatti intatti.",
      ),
    },
    {
      key: "dietary",
      title: l("Vegan, vegetarian, spicy", "Vegan, vegetarisch, scharf", "Végan, végétarien, épicé", "Vegano, vegetariano, piccante"),
      body: l(
        "Mark dishes with one tap. Guests spot what suits them at a glance, with a chili scale for the heat.",
        "Markieren Sie Gerichte mit einem Tap. Gäste sehen auf einen Blick, was zu ihnen passt, mit Chili-Skala für die Schärfe.",
        "Signalez vos plats d'un simple tap. Vos clients repèrent d'un coup d'œil ce qui leur convient, avec une échelle de piment.",
        "Segna i piatti con un tap. Gli ospiti vedono subito cosa fa per loro, con una scala di peperoncini per il piccante.",
      ),
    },
  ],
  demo: {
    look: l("Look", "Look", "Style", "Stile"),
    language: l("Language", "Sprache", "Langue", "Lingua"),
    original: l("Written in German", "Auf Deutsch verfasst", "Rédigé en allemand", "Scritto in tedesco"),
    translated: l("Translated by AI", "Von KI übersetzt", "Traduit par l'IA", "Tradotto dall'IA"),
  },
};

// Demo menu for the page designer showcase. Keyed by menu language (not site
// language): the visitor switches it to see the AI translation.
export const studioMenu = {
  section: { DE: "Hauptgänge", EN: "Mains", FR: "Plats", IT: "Secondi" },
  vegan: { DE: "Vegan", EN: "Vegan", FR: "Végan", IT: "Vegano" },
  vegetarian: { DE: "Vegetarisch", EN: "Vegetarian", FR: "Végétarien", IT: "Vegetariano" },
  dishes: [
    {
      name: { DE: "Burrata mit Tomaten", EN: "Burrata with tomatoes", FR: "Burrata aux tomates", IT: "Burrata con pomodori" },
      desc: {
        DE: "Cremig, mit Basilikum und Olivenöl",
        EN: "Creamy, with basil and olive oil",
        FR: "Crémeuse, au basilic et à l'huile d'olive",
        IT: "Cremosa, con basilico e olio d'oliva",
      },
      price: "16.50",
      diet: "vegetarian" as const,
      spicy: 0,
    },
    {
      name: { DE: "Rösti mit Waldpilzen", EN: "Rösti with wild mushrooms", FR: "Rösti aux champignons des bois", IT: "Rösti ai funghi di bosco" },
      desc: {
        DE: "Knusprig, mit frischen Kräutern",
        EN: "Crispy, with fresh herbs",
        FR: "Croustillant, aux herbes fraîches",
        IT: "Croccante, con erbe fresche",
      },
      price: "24.00",
      diet: "vegan" as const,
      spicy: 0,
    },
    {
      name: { DE: "Chili con Carne", EN: "Chili con carne", FR: "Chili con carne", IT: "Chili con carne" },
      desc: {
        DE: "Hausgemacht, mit schwarzen Bohnen",
        EN: "Homemade, with black beans",
        FR: "Fait maison, aux haricots noirs",
        IT: "Fatto in casa, con fagioli neri",
      },
      price: "22.50",
      diet: null,
      spicy: 3,
    },
  ],
};

export const products = [
  {
    name: "NFC Business Card",
    // Price and availability are synced from the backend (see lib/catalog.ts).
    productKey: "business",
    material: l("Anodised aluminium", "Eloxiertes Aluminium", "Aluminium anodisé", "Alluminio anodizzato"),
    price: "89",
    blurb: l(
      "Our flagship. A premium metal NFC card that shares your contact details, socials and links with a single tap, fully customised with your brand.",
      "Unser Flaggschiff. Eine hochwertige NFC-Karte aus Metall, die mit einem Tap Ihre Kontaktdaten, Social Media und Links teilt, individuell gestaltet mit Ihrer Marke.",
      "Notre produit phare. Une carte NFC en métal premium qui partage vos coordonnées, réseaux et liens d'un simple tap, entièrement personnalisée à votre marque.",
      "Il nostro prodotto di punta. Una carta NFC in metallo premium che con un tap condivide contatti, social e link, personalizzata con il tuo marchio.",
    ),
    accent: true,
  },
];

// ── The menu card, showcased with the free editor ─────────────────────
export const menuCard = {
  name: "Menu Card",
  productKey: "review",
  material: l("PVC", "PVC", "PVC", "PVC"),
  price: "50",
  blurb: l(
    "Tap to open your live digital menu in any language. Update prices and specials from your phone and never reprint again.",
    "Ein Tap öffnet Ihr digitales Live-Menü in jeder Sprache. Preise und Angebote aktualisieren Sie bequem vom Handy und drucken nie wieder nach.",
    "Un tap ouvre votre menu numérique en direct, dans toutes les langues. Modifiez prix et suggestions depuis votre téléphone et oubliez les réimpressions.",
    "Un tap apre il tuo menu digitale live in ogni lingua. Aggiorna prezzi e offerte dal telefono e non ristampi mai più.",
  ),
};

// ── Separate line: the Google Reviews card ────────────────────────────
// A single, no-frills product just for collecting Google reviews.
export const reviewCards = [
  {
    name: "Google Review Card",
    productKey: "review",
    material: l("PVC", "PVC", "PVC", "PVC"),
    price: "50",
    blurb: l(
      "Credit-card sized and printed with your five-star Google review link, so one tap opens the review form. Hand it over or leave it on the table.",
      "Im Kreditkartenformat, bedruckt mit dem Link zu Ihren Google-Bewertungen. Ein Tap öffnet das Bewertungsformular. Überreichen Sie sie oder lassen Sie sie auf dem Tisch liegen.",
      "Au format carte bancaire, imprimée avec le lien vers vos avis Google cinq étoiles. Un tap ouvre le formulaire d'avis. À remettre en main propre ou à laisser sur la table.",
      "In formato carta di credito, stampata con il link alle tue recensioni Google a cinque stelle. Un tap apre il modulo di recensione. Consegnala o lasciala sul tavolo.",
    ),
    accent: true,
  },
];

export const pricing = [
  {
    name: "Starter",
    // Price is synced from the backend plan catalogue (see lib/catalog.ts).
    tier: "STARTER" as const,
    price: "50",
    unit: l("one-time / card", "einmalig / Karte", "unique / carte", "una tantum / carta"),
    monthly: false,
    tagline: l(
      "Buy cards, manage them yourself.",
      "Karten kaufen, selbst verwalten.",
      "Achetez vos cartes, gérez-les vous-même.",
      "Compra le carte, gestiscile da solo.",
    ),
    features: [
      l("Custom-printed NFC cards", "Individuell bedruckte NFC-Karten", "Cartes NFC personnalisées", "Carte NFC personalizzate"),
      l("Self-serve dashboard", "Dashboard zur Selbstverwaltung", "Tableau de bord en libre-service", "Dashboard self-service"),
      l("One destination per card", "Ein Ziel pro Karte", "Une destination par carte", "Una destinazione per carta"),
      l("Free QR code as backup", "Kostenloser QR-Code als Reserve", "QR de secours gratuit", "QR di riserva gratuito"),
      l("Email support", "Support per E-Mail", "Support par e-mail", "Supporto via e-mail"),
    ],
    cta: l("Order cards", "Karten bestellen", "Commander des cartes", "Ordina le carte"),
    featured: false,
  },
  {
    name: "Pro",
    tier: "PRO" as const,
    price: "39",
    unit: l("per month", "pro Monat", "par mois", "al mese"),
    monthly: true,
    tagline: l(
      "For growing venues & small chains.",
      "Für wachsende Betriebe & kleine Ketten.",
      "Pour établissements en croissance & petites chaînes.",
      "Per attività in crescita e piccole catene.",
    ),
    features: [
      l("Everything in Starter", "Alles aus Starter", "Tout de Starter", "Tutto di Starter"),
      l("Unlimited destination changes", "Unbegrenzte Zieländerungen", "Changements de destination illimités", "Cambi di destinazione illimitati"),
      l("Analytics & review insights", "Analytics und Einblicke in Bewertungen", "Analytics & analyse des avis", "Analisi e insight sulle recensioni"),
      l("Page designer with your branding", "Seiten-Designer mit Ihrem Branding", "Éditeur de pages à vos couleurs", "Editor di pagine con il tuo branding"),
      l("AI translation in 4 languages", "KI-Übersetzung in 4 Sprachen", "Traduction IA en 4 langues", "Traduzione IA in 4 lingue"),
      l("Multiple locations", "Mehrere Standorte", "Plusieurs établissements", "Più sedi"),
      l("Priority support", "Priorisierter Support", "Support prioritaire", "Supporto prioritario"),
    ],
    cta: l("Start free trial", "Gratis testen", "Essai gratuit", "Prova gratuita"),
    featured: true,
  },
  {
    name: "Managed",
    tier: "MANAGED" as const,
    price: "250",
    unit: l("per month", "pro Monat", "par mois", "al mese"),
    monthly: true,
    tagline: l(
      "We run your menu & reviews for you.",
      "Wir übernehmen Menü & Bewertungen für Sie.",
      "Nous gérons votre menu & vos avis pour vous.",
      "Gestiamo menu e recensioni per te.",
    ),
    features: [
      l("Everything in Pro", "Alles aus Pro", "Tout de Pro", "Tutto di Pro"),
      l("10 personalised NFC cards", "10 personalisierte NFC-Karten", "10 cartes NFC personnalisées", "10 carte NFC personalizzate"),
      l("Menu translation & updates", "Übersetzung und Updates des Menüs", "Traduction & mises à jour du menu", "Traduzione e aggiornamenti del menu"),
      l("Dedicated account manager", "Persönlicher Account Manager", "Gestionnaire de compte dédié", "Account manager dedicato"),
    ],
    cta: l("Talk to us", "Kontaktieren Sie uns", "Contactez-nous", "Parla con noi"),
    featured: false,
  },
];

// PLACEHOLDER testimonials — deliberately obvious. Replace each with a real
// customer quote, name and venue once we have them.
export const testimonials = [
  {
    quote: l(
      "[Placeholder] Your customer's words will appear here once we're live.",
      "[Platzhalter] Die Worte Ihres Kunden erscheinen hier, sobald wir live sind.",
      "[Exemple] Les mots de votre client apparaîtront ici dès notre lancement.",
      "[Segnaposto] Le parole del tuo cliente appariranno qui una volta online.",
    ),
    name: "Your customer",
    role: l("Your venue, City", "Ihr Betrieb, Ort", "Votre établissement, Ville", "La tua attività, Città"),
  },
  {
    quote: l(
      "[Placeholder] A real review from a happy business will go right here.",
      "[Platzhalter] Eine echte Bewertung eines zufriedenen Betriebs kommt hierher.",
      "[Exemple] Un vrai avis d'un établissement satisfait viendra ici.",
      "[Segnaposto] Una vera recensione di un'attività soddisfatta andrà qui.",
    ),
    name: "Your customer",
    role: l("Your venue, City", "Ihr Betrieb, Ort", "Votre établissement, Ville", "La tua attività, Città"),
  },
  {
    quote: l(
      "[Placeholder] We'll swap this sample for a genuine customer quote soon.",
      "[Platzhalter] Dieses Muster ersetzen wir bald durch ein echtes Kundenzitat.",
      "[Exemple] Nous remplacerons bientôt cet exemple par un vrai témoignage.",
      "[Segnaposto] Presto sostituiremo questo esempio con una vera testimonianza.",
    ),
    name: "Your customer",
    role: l("Your venue, City", "Ihr Betrieb, Ort", "Votre établissement, Ville", "La tua attività, Città"),
  },
];

export const faqs = [
  {
    q: l(
      "Do my guests need an app?",
      "Brauchen meine Gäste eine App?",
      "Mes clients ont-ils besoin d'une appli ?",
      "I miei ospiti hanno bisogno di un'app?",
    ),
    a: l(
      "No. The menu opens straight in the browser.",
      "Nein. Die Speisekarte öffnet sich direkt im Browser.",
      "Non. Le menu s'ouvre directement dans le navigateur.",
      "No. Il menu si apre direttamente nel browser.",
    ),
  },
  {
    q: l(
      "What if a phone has no NFC?",
      "Was ist, wenn ein Handy kein NFC hat?",
      "Et si un téléphone n'a pas de NFC ?",
      "E se un telefono non ha l'NFC?",
    ),
    a: l(
      "On request, we add a QR code as a backup.",
      "Auf Wunsch integrieren wir einen QR-Code als Backup.",
      "Sur demande, nous intégrons un QR code de secours.",
      "Su richiesta, aggiungiamo un QR code di riserva.",
    ),
  },
  {
    q: l(
      "Can the pages match my branding?",
      "Passen die Seiten zu meinem Branding?",
      "Les pages peuvent-elles reprendre mon identité visuelle ?",
      "Le pagine possono riprendere il mio branding?",
    ),
    a: l(
      "Yes. Upload your logo and a cover photo, pick your colours and fonts, and save the design to reuse it on all your pages.",
      "Ja. Laden Sie Logo und Titelbild hoch, wählen Sie Farben und Schriften und speichern Sie das Design, um es auf allen Seiten zu verwenden.",
      "Oui. Importez votre logo et une photo de couverture, choisissez couleurs et polices, puis enregistrez le design pour le réutiliser sur toutes vos pages.",
      "Sì. Carica logo e foto di copertina, scegli colori e font e salva il design per riutilizzarlo su tutte le pagine.",
    ),
  },
  {
    q: l(
      "How does the automatic translation work?",
      "Wie funktioniert die automatische Übersetzung?",
      "Comment fonctionne la traduction automatique ?",
      "Come funziona la traduzione automatica?",
    ),
    a: l(
      "You write in your language and click Translate. AI fills in the other languages in seconds, and you can adjust any word afterwards.",
      "Sie schreiben in Ihrer Sprache und klicken auf Übersetzen. Die KI ergänzt die anderen Sprachen in Sekunden, und Sie können jedes Wort danach anpassen.",
      "Vous écrivez dans votre langue et cliquez sur Traduire. L'IA complète les autres langues en quelques secondes, et vous pouvez ajuster chaque mot ensuite.",
      "Scrivi nella tua lingua e clicchi su Traduci. L'IA completa le altre lingue in pochi secondi e puoi modificare ogni parola in seguito.",
    ),
  },
  {
    q: l(
      "Can I change the menu myself?",
      "Kann ich die Speisekarte selbst ändern?",
      "Puis-je modifier le menu moi-même ?",
      "Posso modificare il menu da solo?",
    ),
    a: l(
      "Yes. Content is easy to update, with no reprints.",
      "Ja. Inhalte lassen sich unkompliziert aktualisieren, ohne Neudruck.",
      "Oui. Le contenu se met à jour facilement, sans réimpression.",
      "Sì. I contenuti si aggiornano facilmente, senza ristampe.",
    ),
  },
  {
    q: l(
      "Which languages is the menu available in?",
      "In welchen Sprachen ist die Speisekarte verfügbar?",
      "Dans quelles langues le menu est-il disponible ?",
      "In quali lingue è disponibile il menu?",
    ),
    a: l(
      "Any you like, e.g. German, English, Italian, Turkish, Chinese and more.",
      "Beliebig erweiterbar, z. B. Deutsch, Englisch, Italienisch, Türkisch, Chinesisch und mehr.",
      "Autant que vous voulez, p. ex. allemand, anglais, italien, turc, chinois et plus.",
      "Quante ne vuoi, es. tedesco, inglese, italiano, turco, cinese e altre.",
    ),
  },
  {
    q: l(
      "How quickly is it ready to use?",
      "Wie schnell ist es einsatzbereit?",
      "En combien de temps est-ce prêt ?",
      "Quanto velocemente è pronto all'uso?",
    ),
    a: l(
      "After a quick setup, usually within a few days.",
      "Nach Abstimmung meist in wenigen Tagen.",
      "Après concertation, généralement en quelques jours.",
      "Dopo un breve confronto, di solito in pochi giorni.",
    ),
  },
];

// Customer marquee (proper nouns — not translated). Items with a `logo` render
// the real logo image; the rest are placeholders inviting the next customers.
export type CustomerLogo = { name: string; logo?: string };
export const logoNames: CustomerLogo[] = [
  { name: "Pizza Bella", logo: "/customers/pizza-bella-logo.svg" },
  { name: "Your venue" },
  { name: "Your café" },
  { name: "Your shop" },
  { name: "Your logo here" },
];

// ── UI strings that live inside components (headings, labels, buttons) ──
export const ui = {
  nav: {
    orderCards: l("Order cards", "Karten bestellen", "Commander des cartes", "Ordina le carte"),
  },
  hero: {
    headPre: l("One tap that delights your", "Ein Tap, der Ihre", "Un tap qui séduit vos", "Un tap che conquista i tuoi"),
    headHighlight: l("guests", "Gäste", "invités", "ospiti"),
    // Leading separator is part of the string so each language can punctuate
    // correctly after the highlighted word (e.g. German needs a space + verb).
    headPost: l(".", " begeistert.", ".", "."),
    body: l(
      "A multilingual menu, WiFi access and Google reviews, straight from your guests' phones. No app download. No reprints. No extra work for your team.",
      "Mehrsprachige Speisekarte, WLAN-Zugang und Google-Bewertung, direkt vom Smartphone Ihrer Gäste. Kein App-Download. Kein Neudruck. Kein zusätzlicher Aufwand für Ihr Team.",
      "Menu multilingue, accès WiFi et avis Google, directement depuis le smartphone de vos clients. Aucun téléchargement d'appli. Aucune réimpression. Aucun effort supplémentaire pour votre équipe.",
      "Menu multilingue, accesso WiFi e recensioni Google, direttamente dallo smartphone dei tuoi ospiti. Nessun download di app. Nessuna ristampa. Nessuno sforzo in più per il tuo team.",
    ),
    ctaPrimary: l("Request a free demo", "Kostenlose Demo anfragen", "Demander une démo gratuite", "Richiedi una demo gratuita"),
    ctaSecondary: l("See how it works", "So funktioniert's", "Voir comment ça marche", "Scopri come funziona"),
  },
  logos: {
    trusted: l(
      "Built for venues across Switzerland",
      "Gemacht für Betriebe in der ganzen Schweiz",
      "Conçu pour les établissements de toute la Suisse",
      "Pensato per le attività di tutta la Svizzera",
    ),
  },
  problem: {
    eyebrow: l("The problem", "Das Problem", "Le problème", "Il problema"),
    title: l("Sound familiar?", "Kennen Sie das?", "Ça vous parle ?", "Ti suona familiare?"),
    body: l(
      "Paper menus go out of date fast. Foreign-language guests keep asking for explanations. The WiFi password gets hunted down. And happy guests forget the Google review. On top of that, a professional-looking card usually means paying a designer.",
      "Papierkarten sind schnell veraltet. Fremdsprachige Gäste fragen ständig nach Erklärungen. Das WLAN-Passwort wird gesucht. Und zufriedene Gäste vergessen die Google-Bewertung. Und für eine professionelle Karte braucht es meist einen Designer.",
      "Les cartes papier se démodent vite. Les clients étrangers demandent sans cesse des explications. On cherche le mot de passe WiFi. Et les clients satisfaits oublient l'avis Google. En plus, une carte à l'allure professionnelle nécessite généralement un graphiste.",
      "I menu di carta invecchiano in fretta. Gli ospiti stranieri chiedono continuamente spiegazioni. Si cerca la password del WiFi. E gli ospiti soddisfatti dimenticano la recensione Google. In più, una carta dall'aspetto professionale di solito richiede un grafico.",
    ),
    note: l(
      "Yet service should be simple, for your team and for your guests.",
      "Dabei soll Service einfach sein, für Ihr Team und für Ihre Gäste.",
      "Pourtant, le service devrait être simple, pour votre équipe et pour vos clients.",
      "Eppure il servizio dovrebbe essere semplice, per il tuo team e per i tuoi ospiti.",
    ),
  },
  solution: {
    eyebrow: l("The solution", "Die Lösung", "La solution", "La soluzione"),
    title: l(
      "The NFC menu for your restaurant",
      "Die NFC-Speisekarte für Ihr Restaurant",
      "Le menu NFC pour votre restaurant",
      "Il menu NFC per il tuo ristorante",
    ),
    body: l(
      "A premium card on the table, that's all it takes. Guests hold their smartphone to it and land straight on your digital menu. There they pick their language, see every dish, connect to your WiFi and, if they like, leave a Google review right away.",
      "Eine hochwertige Karte auf dem Tisch, mehr braucht es nicht. Gäste halten ihr Smartphone daran und landen sofort auf Ihrer digitalen Speisekarte. Dort wählen sie ihre Sprache, sehen alle Gerichte, verbinden sich mit Ihrem WLAN und geben bei Bedarf direkt eine Google-Bewertung ab.",
      "Une belle carte sur la table, il n'en faut pas plus. Les clients y approchent leur smartphone et arrivent aussitôt sur votre menu numérique. Ils y choisissent leur langue, voient tous les plats, se connectent à votre WiFi et laissent au besoin un avis Google directement.",
      "Una carta di qualità sul tavolo, non serve altro. Gli ospiti vi avvicinano lo smartphone e arrivano subito sul tuo menu digitale. Lì scelgono la lingua, vedono tutti i piatti, si connettono al tuo WiFi e, se vogliono, lasciano subito una recensione Google.",
    ),
    note: l(
      "No app download. No out-of-date menus. No misunderstandings.",
      "Kein App-Download. Keine veralteten Karten. Keine Missverständnisse.",
      "Aucun téléchargement d'appli. Aucune carte périmée. Aucun malentendu.",
      "Nessun download di app. Nessun menu obsoleto. Nessun malinteso.",
    ),
    designer: l(
      "And you design the card yourself in our free editor, no designer needed.",
      "Und die Karte gestalten Sie selbst in unserem kostenlosen Editor, ganz ohne Designer.",
      "Et vous concevez la carte vous-même dans notre éditeur gratuit, sans graphiste.",
      "E progetti la carta da solo nel nostro editor gratuito, senza grafico.",
    ),
    editorCta: l("Open the editor", "Editor öffnen", "Ouvrir l'éditeur", "Apri l'editor"),
  },
  forWhom: {
    eyebrow: l("Who it's for", "Für wen", "Pour qui", "Per chi"),
    title: l("Who is it for?", "Für wen?", "Pour qui ?", "Per chi?"),
    body: l(
      "For restaurants, cafés, bars, hotels, food trucks and anyone who wants to give their guests a simpler, more modern service.",
      "Für Restaurants, Cafés, Bars, Hotels, Food Trucks und alle, die ihren Gästen einen einfacheren, moderneren Service bieten wollen.",
      "Pour les restaurants, cafés, bars, hôtels, food trucks et tous ceux qui veulent offrir à leurs clients un service plus simple et plus moderne.",
      "Per ristoranti, caffè, bar, hotel, food truck e tutti coloro che vogliono offrire ai propri ospiti un servizio più semplice e moderno.",
    ),
  },
  how: {
    eyebrow: l("How it works", "So funktioniert's", "Comment ça marche", "Come funziona"),
    title: l(
      "In 3 steps to a better guest experience",
      "In 3 Schritten zum besseren Gästeerlebnis",
      "En 3 étapes vers une meilleure expérience client",
      "In 3 passi verso una migliore esperienza per gli ospiti",
    ),
    intro: l(
      "No technical setup. No app for your guests. Just a beautifully made card on the table.",
      "Kein technisches Setup. Keine App für Ihre Gäste. Nur eine schön gemachte Karte auf dem Tisch.",
      "Aucune configuration technique. Aucune appli pour vos clients. Juste une belle carte sur la table.",
      "Nessuna configurazione tecnica. Nessuna app per i tuoi ospiti. Solo una carta ben fatta sul tavolo.",
    ),
  },
  useCases: {
    eyebrow: l("Use cases", "Anwendungen", "Cas d'usage", "Casi d'uso"),
    title: l(
      "One card, whatever you need it to do",
      "Eine Karte für alles, was Sie brauchen",
      "Une carte, pour tout ce dont vous avez besoin",
      "Una carta, per tutto ciò che ti serve",
    ),
    intro: l(
      "Point a tap anywhere. Switch the destination whenever your goals change, and the card stays the same.",
      "Verweisen Sie einen Tap auf ein beliebiges Ziel und ändern Sie es, wann immer sich Ihre Pläne ändern. Die Karte bleibt dieselbe.",
      "Dirigez un tap où vous voulez. Changez de destination quand vos objectifs évoluent, et la carte reste la même.",
      "Indirizza un tap ovunque. Cambia la destinazione quando cambiano i tuoi obiettivi: la carta resta la stessa.",
    ),
    // Big stat shown per active tab (reviews / menu / links).
    stats: [
      {
        value: l("+380%", "+380%", "+380%", "+380%"),
        desc: l(
          "more reviews in the first month",
          "mehr Bewertungen im ersten Monat",
          "d'avis en plus le premier mois",
          "recensioni in più nel primo mese",
        ),
      },
      {
        value: l("0", "0", "0", "0"),
        desc: l(
          "reprints, updated from your phone",
          "Nachdrucke, aktualisiert vom Handy",
          "réimpressions, mis à jour depuis le téléphone",
          "ristampe, aggiorni dal telefono",
        ),
      },
      {
        value: l("1 tap", "1 Tap", "1 tap", "1 tap"),
        desc: l(
          "to every profile, link and WiFi",
          "zu jedem Profil, Link und WLAN",
          "vers chaque profil, lien et WiFi",
          "verso ogni profilo, link e WiFi",
        ),
      },
    ],
  },
  features: {
    eyebrow: l("Benefits", "Vorteile", "Avantages", "Vantaggi"),
    title: l(
      "What it brings you and your guests",
      "Das bringt's Ihnen und Ihren Gästen",
      "Ce que ça vous apporte, à vous et à vos clients",
      "Cosa offre a te e ai tuoi ospiti",
    ),
    intro: l(
      "Everything is engineered to just work, for you and for every guest who taps.",
      "Alles ist so gebaut, dass es einfach funktioniert, für Sie und für jeden Gast, der tippt.",
      "Tout est pensé pour fonctionner sans effort, pour vous et pour chaque client qui tape.",
      "Tutto è progettato per funzionare e basta: per te e per ogni cliente che tappa.",
    ),
  },
  products: {
    range: {
      eyebrow: l("Our products", "Unsere Produkte", "Nos produits", "I nostri prodotti"),
      title: l(
        "The metal NFC business card",
        "Die NFC-Metall-Visitenkarte",
        "La carte de visite NFC en métal",
        "Il biglietto da visita NFC in metallo",
      ),
      intro: l(
        "Our flagship card in premium anodised aluminium. One tap shares your contact details, socials and links, fully customised with your brand.",
        "Unser Flaggschiff aus hochwertigem eloxiertem Aluminium. Ein Tap teilt Ihre Kontaktdaten, Social Media und Links, individuell gestaltet mit Ihrer Marke.",
        "Notre produit phare en aluminium anodisé premium. Un tap partage vos coordonnées, réseaux et liens, entièrement personnalisé à votre marque.",
        "Il nostro prodotto di punta in alluminio anodizzato premium. Un tap condivide contatti, social e link, personalizzato con il tuo marchio.",
      ),
      cta: l("See bundles", "Pakete ansehen", "Voir les offres", "Vedi i pacchetti"),
      badge: l("Most popular", "Am beliebtesten", "Le plus populaire", "Più popolare"),
    },
    review: {
      eyebrow: l("Free card editor", "Kostenloser Karteneditor", "Éditeur de cartes gratuit", "Editor di carte gratuito"),
      title: l(
        "Design your menu card in minutes",
        "Gestalten Sie Ihre Menükarte in Minuten",
        "Concevez votre carte menu en quelques minutes",
        "Progetta la tua carta menu in pochi minuti",
      ),
      intro: l(
        "Open our editor, pick a preset for your trade, drop in your logo and brand colours, and watch the card come to life as you type. No designer, no back-and-forth. When it looks right, order it in a couple of taps.",
        "Öffnen Sie unseren Editor, wählen Sie eine Vorlage für Ihre Branche, fügen Sie Logo und Markenfarben hinzu und sehen Sie beim Tippen zu, wie die Karte entsteht. Kein Designer, kein Hin und Her. Sieht sie gut aus, bestellen Sie mit wenigen Taps.",
        "Ouvrez notre éditeur, choisissez un modèle pour votre secteur, ajoutez votre logo et vos couleurs, et voyez la carte prendre vie au fil de la saisie. Aucun graphiste, aucun aller-retour. Quand tout est bon, commandez en quelques taps.",
        "Apri il nostro editor, scegli un modello per il tuo settore, aggiungi logo e colori del marchio e guarda la carta prendere vita mentre scrivi. Nessun designer, nessun rimpallo. Quando è perfetta, ordinala con pochi tap.",
      ),
      features: [
        l(
          "Ready-made presets for restaurants, salons, gyms and shops",
          "Fertige Vorlagen für Restaurants, Salons, Fitnessstudios und Shops",
          "Modèles prêts à l'emploi pour restaurants, salons, salles de sport et boutiques",
          "Modelli pronti per ristoranti, saloni, palestre e negozi",
        ),
        l(
          "Your logo, colours and fonts, updated live as you edit",
          "Ihr Logo, Ihre Farben und Schriften, live aktualisiert beim Bearbeiten",
          "Votre logo, vos couleurs et polices, mis à jour en direct",
          "Logo, colori e font aggiornati in tempo reale mentre modifichi",
        ),
        l(
          "A live preview of the exact card you will receive",
          "Eine Live-Vorschau der Karte, die Sie genau so erhalten",
          "Un aperçu en direct de la carte exacte que vous recevrez",
          "Un'anteprima dal vivo della carta esatta che riceverai",
        ),
        l(
          "Backup QR code built in, for phones without NFC",
          "Integrierter Backup-QR-Code für Handys ohne NFC",
          "Code QR de secours intégré, pour les téléphones sans NFC",
          "Codice QR di riserva integrato, per i telefoni senza NFC",
        ),
      ],
      cta: l("See pricing", "Preise ansehen", "Voir les tarifs", "Vedi i prezzi"),
      editorCta: l(
        "Open the editor",
        "Editor öffnen",
        "Ouvrir l'éditeur",
        "Apri l'editor",
      ),
      badge: l("Best value", "Bestes Angebot", "Meilleur rapport", "Miglior valore"),
    },
    order: l("Order", "Bestellen", "Commander", "Ordina"),
    from: l("from", "ab", "dès", "da"),
  },
  pricing: {
    eyebrow: l("Pricing", "Preise", "Tarifs", "Prezzi"),
    title: l(
      "Simple pricing, no surprises",
      "Einfache Preise, keine Überraschungen",
      "Des tarifs simples, sans surprise",
      "Prezzi semplici, nessuna sorpresa",
    ),
    intro: l(
      "Buy cards outright, or let us run the whole thing. Cancel monthly plans anytime, with no lock-in beyond the first 3 months on Managed.",
      "Karten direkt kaufen oder alles von uns betreiben lassen. Monatspläne sind jederzeit kündbar. Ausser den ersten 3 Monaten beim Managed-Plan gibt es keine Vertragsbindung.",
      "Achetez vos cartes ou confiez-nous toute la gestion. Résiliez les forfaits mensuels à tout moment, sans engagement au-delà des 3 premiers mois pour Managed.",
      "Compra le carte a titolo definitivo o lascia gestire tutto a noi. Disdici i piani mensili quando vuoi: nessun vincolo oltre i primi 3 mesi con Managed.",
    ),
    badge: l("Best value", "Bestes Angebot", "Meilleur rapport", "Miglior valore"),
    perMonth: l("mo", "Mt.", "mois", "mese"),
    perCard: l("card", "Karte", "carte", "carta"),
    footnotePre: l(
      "Need 50+ cards or a multi-location rollout?",
      "Brauchen Sie 50+ Karten oder einen Rollout an mehreren Standorten?",
      "Besoin de 50+ cartes ou d'un déploiement multi-sites ?",
      "Ti servono 50+ carte o un rollout multi-sede?",
    ),
    footnoteLink: l("Talk to our team →", "Sprechen Sie mit unserem Team →", "Parlez à notre équipe →", "Parla con il nostro team →"),
  },
  testimonials: {
    eyebrow: l("Loved by owners", "Von Inhabern geliebt", "Adoré par les gérants", "Amato dai titolari"),
    title: l("Small cards, real results", "Kleine Karten, echte Resultate", "Petites cartes, vrais résultats", "Piccole carte, risultati reali"),
  },
  faq: {
    eyebrow: l("FAQ", "FAQ", "FAQ", "FAQ"),
    title: l("Questions, answered", "Fragen, beantwortet", "Vos questions, nos réponses", "Domande, con risposta"),
    intro: l(
      "Still unsure? Write to us and we usually reply within a few hours.",
      "Noch unsicher? Schreiben Sie uns, wir antworten meist innert weniger Stunden.",
      "Encore un doute ? Écrivez-nous, nous répondons généralement en quelques heures.",
      "Ancora dubbi? Scrivici: di solito rispondiamo in poche ore.",
    ),
  },
  cta: {
    eyebrow: l("Get started", "Loslegen", "Commencer", "Inizia"),
    title: l(
      "Make the first tap.",
      "Machen Sie den ersten Tap.",
      "Faites le premier tap.",
      "Fai il primo tap.",
    ),
    body: l(
      "In a free demo we'll show you how your digital menu looks, with no obligation and tailored to you.",
      "Wir zeigen Ihnen in einer kostenlosen Demo, wie Ihre digitale Speisekarte aussieht, unverbindlich und individuell.",
      "Lors d'une démo gratuite, nous vous montrons à quoi ressemble votre menu numérique, sans engagement et personnalisé.",
      "In una demo gratuita ti mostriamo com'è il tuo menu digitale, senza impegno e su misura.",
    ),
    primary: l("Request a free demo", "Kostenlose Demo anfragen", "Demander une démo gratuite", "Richiedi una demo gratuita"),
  },
  editor: {
    // ── Card editor page ────────────────────────────────────────────
    badge: l(
      "Design studio",
      "Design-Studio",
      "Studio de design",
      "Studio di design",
    ),
    title: l(
      "Design your card, order in minutes",
      "Gestalten Sie Ihre Karte, in Minuten bestellt",
      "Concevez votre carte, commandez en minutes",
      "Progetta la tua carta, ordina in pochi minuti",
    ),
    intro: l(
      "Pick a style, drop in your logo, choose your colours and set where a tap should lead. Your card updates live, so order it when it looks right.",
      "Wählen Sie einen Stil, laden Sie Ihr Logo hoch, bestimmen Sie Farben und das Tap-Ziel. Ihre Karte aktualisiert sich live, bestellen Sie einfach, sobald sie passt.",
      "Choisissez un style, ajoutez votre logo, définissez vos couleurs et la destination d'un tap. Votre carte se met à jour en direct, commandez quand elle vous convient.",
      "Scegli uno stile, aggiungi il tuo logo, definisci i colori e la destinazione del tap. La tua carta si aggiorna in tempo reale: ordina quando è pronta.",
    ),
    notAvailable: l("Currently not available", "Zurzeit nicht verfügbar", "Actuellement indisponible", "Attualmente non disponibile"),
  },
  orderSuccess: {
    // ── Order confirmation page (after Stripe Checkout) ─────────────
    metaTitle: l("Order confirmation", "Bestellbestätigung", "Confirmation de commande", "Conferma d'ordine"),
    eyebrow: l("Order", "Bestellung", "Commande", "Ordine"),
    titlePaid: l("Thank you for your order", "Vielen Dank für Ihre Bestellung", "Merci pour votre commande", "Grazie per il tuo ordine"),
    titlePending: l("Almost there", "Fast geschafft", "Presque terminé", "Quasi fatto"),
    introPaid: l(
      "Your payment was received. We are preparing your cards and will send you an email as soon as they ship.",
      "Ihre Zahlung ist eingegangen. Wir bereiten Ihre Karten vor und informieren Sie per E-Mail, sobald sie versandt werden.",
      "Votre paiement a bien été reçu. Nous préparons vos cartes et vous écrivons dès leur expédition.",
      "Abbiamo ricevuto il pagamento. Stiamo preparando le tue carte e ti scriveremo appena saranno spedite.",
    ),
    introPending: l(
      "Your payment is being confirmed. This usually takes a few seconds.",
      "Ihre Zahlung wird bestätigt. Das dauert normalerweise nur wenige Sekunden.",
      "Votre paiement est en cours de confirmation. Cela ne prend généralement que quelques secondes.",
      "Stiamo confermando il pagamento. Di solito bastano pochi secondi.",
    ),
    introClosed: l(
      "This order is no longer active. If you think this is a mistake, please contact us.",
      "Diese Bestellung ist nicht mehr aktiv. Falls das ein Irrtum ist, kontaktieren Sie uns bitte.",
      "Cette commande n'est plus active. S'il s'agit d'une erreur, contactez-nous.",
      "Questo ordine non è più attivo. Se pensi sia un errore, contattaci.",
    ),
    refresh: l("Refresh status", "Status aktualisieren", "Actualiser le statut", "Aggiorna lo stato"),
    refreshing: l("Refreshing…", "Wird aktualisiert…", "Actualisation…", "Aggiornamento…"),
    orderNumber: l("Order number", "Bestellnummer", "Numéro de commande", "Numero d'ordine"),
    status: l("Status", "Status", "Statut", "Stato"),
    items: l("Items", "Artikel", "Articles", "Articoli"),
    total: l("Total", "Total", "Total", "Totale"),
    confirmationSent: l(
      "A confirmation has been sent to",
      "Eine Bestätigung wurde gesendet an",
      "Une confirmation a été envoyée à",
      "Una conferma è stata inviata a",
    ),
    statusPending: l("Payment being confirmed", "Zahlung wird bestätigt", "Paiement en confirmation", "Pagamento in conferma"),
    statusPaid: l("Paid", "Bezahlt", "Payée", "Pagato"),
    statusProduction: l("In production", "In Produktion", "En production", "In produzione"),
    statusShipped: l("Shipped", "Versandt", "Expédiée", "Spedito"),
    statusExpired: l("Expired", "Abgelaufen", "Expirée", "Scaduto"),
    statusCancelled: l("Cancelled", "Storniert", "Annulée", "Annullato"),
    accountEyebrow: l("Next step", "Nächster Schritt", "Étape suivante", "Prossimo passo"),
    accountTitle: l(
      "Create your free Taplino account",
      "Erstellen Sie Ihr kostenloses Taplino-Konto",
      "Créez votre compte Taplino gratuit",
      "Crea il tuo account Taplino gratuito",
    ),
    accountBody: l(
      "Manage your cards, change where a tap leads at any time and see how often they are used. Sign up with the email address from this order and your cards appear in your account automatically.",
      "Verwalten Sie Ihre Karten, ändern Sie jederzeit das Tap-Ziel und sehen Sie, wie oft sie genutzt werden. Registrieren Sie sich mit der E-Mail-Adresse dieser Bestellung, dann erscheinen Ihre Karten automatisch in Ihrem Konto.",
      "Gérez vos cartes, modifiez à tout moment la destination d'un tap et voyez leur utilisation. Inscrivez-vous avec l'adresse e-mail de cette commande et vos cartes apparaissent automatiquement dans votre compte.",
      "Gestisci le tue carte, cambia in qualsiasi momento la destinazione del tap e scopri quanto vengono usate. Registrati con l'indirizzo email di questo ordine e le carte compariranno automaticamente nel tuo account.",
    ),
    accountCta: l("Create free account", "Kostenloses Konto erstellen", "Créer un compte gratuit", "Crea account gratuito"),
    accountClaimed: l(
      "This order is already linked to a Taplino account.",
      "Diese Bestellung ist bereits mit einem Taplino-Konto verknüpft.",
      "Cette commande est déjà liée à un compte Taplino.",
      "Questo ordine è già collegato a un account Taplino.",
    ),
    accountOpen: l("Open Taplino", "Taplino öffnen", "Ouvrir Taplino", "Apri Taplino"),
    notFoundTitle: l("Order not found", "Bestellung nicht gefunden", "Commande introuvable", "Ordine non trovato"),
    notFoundBody: l(
      "We could not find this order. If you just paid, please check your email for the confirmation or contact us.",
      "Wir konnten diese Bestellung nicht finden. Falls Sie gerade bezahlt haben, prüfen Sie bitte Ihre E-Mails oder kontaktieren Sie uns.",
      "Nous n'avons pas trouvé cette commande. Si vous venez de payer, vérifiez vos e-mails ou contactez-nous.",
      "Non abbiamo trovato questo ordine. Se hai appena pagato, controlla la tua email o contattaci.",
    ),
    errorBody: l(
      "We could not load your order right now. Please refresh in a moment. Your payment is safe.",
      "Ihre Bestellung konnte gerade nicht geladen werden. Bitte aktualisieren Sie die Seite gleich noch einmal. Ihre Zahlung ist sicher.",
      "Impossible de charger votre commande pour le moment. Actualisez la page dans un instant. Votre paiement est en sécurité.",
      "Al momento non riusciamo a caricare il tuo ordine. Aggiorna la pagina tra un attimo. Il pagamento è al sicuro.",
    ),
    contact: l("Contact us", "Kontakt aufnehmen", "Nous contacter", "Contattaci"),
    backHome: l("Back to the homepage", "Zurück zur Startseite", "Retour à l'accueil", "Torna alla home"),
  },
  contact: {
    eyebrow: l("Contact", "Kontakt", "Contact", "Contatto"),
    title: l(
      "Let's talk",
      "Sprechen wir",
      "Discutons",
      "Parliamone",
    ),
    intro: l(
      "Questions about cards, pricing or a bigger rollout? Send us a message and we usually reply within a few hours.",
      "Fragen zu Karten, Preisen oder einem grösseren Rollout? Schreiben Sie uns, wir antworten meist innert weniger Stunden.",
      "Des questions sur les cartes, les tarifs ou un déploiement plus large ? Écrivez-nous, nous répondons généralement en quelques heures.",
      "Domande su carte, prezzi o un rollout più ampio? Scrivici, di solito rispondiamo in poche ore.",
    ),
    fieldName: l("Name", "Name", "Nom", "Nome"),
    fieldNamePh: l("Jane Meier", "Jane Meier", "Jane Meier", "Jane Meier"),
    fieldEmail: l("Email", "E-Mail", "E-mail", "Email"),
    fieldEmailPh: l("jane@meier.ch", "jane@meier.ch", "jane@meier.ch", "jane@meier.ch"),
    fieldCompany: l("Company (optional)", "Firma (optional)", "Entreprise (facultatif)", "Azienda (facoltativo)"),
    fieldCompanyPh: l("Meier GmbH", "Meier GmbH", "Meier Sàrl", "Meier SA"),
    fieldPhone: l("Phone (optional)", "Telefon (optional)", "Téléphone (facultatif)", "Telefono (facoltativo)"),
    fieldPhonePh: l("+41 79 123 45 67", "+41 79 123 45 67", "+41 79 123 45 67", "+41 79 123 45 67"),
    fieldMessage: l("Message", "Nachricht", "Message", "Messaggio"),
    fieldMessagePh: l(
      "Tell us what you're looking for…",
      "Erzählen Sie uns, wonach Sie suchen…",
      "Dites-nous ce que vous cherchez…",
      "Raccontaci cosa cerchi…",
    ),
    submit: l("Send message", "Nachricht senden", "Envoyer le message", "Invia messaggio"),
    sending: l("Sending…", "Wird gesendet…", "Envoi…", "Invio…"),
    successTitle: l("Message sent", "Nachricht gesendet", "Message envoyé", "Messaggio inviato"),
    successBody: l(
      "Thanks for reaching out. We'll get back to you shortly.",
      "Danke für Ihre Nachricht. Wir melden uns in Kürze.",
      "Merci de nous avoir contactés. Nous vous répondrons sous peu.",
      "Grazie per averci scritto. Ti risponderemo a breve.",
    ),
    error: l(
      "Something went wrong. Please try again in a moment.",
      "Etwas ist schiefgelaufen. Bitte versuchen Sie es gleich noch einmal.",
      "Une erreur s'est produite. Veuillez réessayer dans un instant.",
      "Qualcosa è andato storto. Riprova tra un istante.",
    ),
  },
  footer: {
    description: l(
      "NFC cards for any business, from a Swiss company.",
      "NFC-Karten für jedes Business, von einem Schweizer Unternehmen.",
      "Cartes NFC pour toute entreprise, par une société suisse.",
      "Carte NFC per ogni attività, da un'azienda svizzera.",
    ),
    productHeading: l("Product", "Produkt", "Produit", "Prodotto"),
    companyHeading: l("Company", "Unternehmen", "Entreprise", "Azienda"),
    contactHeading: l("Contact", "Kontakt", "Contact", "Contatto"),
    contactLink: l("Contact form", "Kontaktformular", "Formulaire de contact", "Modulo di contatto"),
    companyLinks: [
      { href: "/about", label: l("About", "Über uns", "À propos", "Chi siamo") },
    ],
    privacy: { href: "/privacy", label: l("Privacy", "Datenschutz", "Confidentialité", "Privacy") },
    terms: { href: "/terms", label: l("Terms", "AGB", "Conditions", "Termini") },
    imprint: { href: "/imprint", label: l("Imprint", "Impressum", "Mentions légales", "Note legali") },
  },
  cookie: {
    message: l(
      "We use cookies to run this site and understand how it is used. See our privacy policy for details.",
      "Wir verwenden Cookies, um diese Website zu betreiben und zu verstehen, wie sie genutzt wird. Details finden Sie in unserer Datenschutzerklärung.",
      "Nous utilisons des cookies pour faire fonctionner ce site et comprendre son utilisation. Consultez notre politique de confidentialité pour en savoir plus.",
      "Utilizziamo i cookie per far funzionare questo sito e capire come viene utilizzato. Consulta la nostra informativa sulla privacy per i dettagli.",
    ),
    learnMore: l("Learn more", "Mehr erfahren", "En savoir plus", "Scopri di più"),
    accept: l("Accept", "Akzeptieren", "Accepter", "Accetta"),
    decline: l("Decline", "Ablehnen", "Refuser", "Rifiuta"),
    settings: l("Cookie settings", "Cookie-Einstellungen", "Paramètres des cookies", "Impostazioni cookie"),
  },
  tapCard: {
    tapToOpen: l("Tap to open · no app needed", "Tippen zum Öffnen · keine App nötig", "Tapez pour ouvrir · sans appli", "Tappa per aprire · nessuna app"),
    tellUs: l("Tell us how it went…", "Wie war Ihr Besuch?…", "Dites-nous comment c'était…", "Com'è andata?…"),
    postToGoogle: l("Post to Google", "Auf Google posten", "Publier sur Google", "Pubblica su Google"),
    links: [
      l("Instagram", "Instagram", "Instagram", "Instagram"),
      l("Connect to WiFi", "Mit WLAN verbinden", "Se connecter au WiFi", "Connetti al WiFi"),
      l("Book a table", "Tisch reservieren", "Réserver une table", "Prenota un tavolo"),
      l("Our webshop", "Unser Webshop", "Notre boutique", "Il nostro shop"),
    ],
  },
};

// ── Static content pages (About, Privacy, Terms, Imprint) ─────────────
// Reached from the footer. Each renders through <ContentPage>. A section's
// `body` may contain blank lines to separate paragraphs; single line breaks
// are preserved (used for the imprint address block).
//
// NOTE: The legal copy below is a professional-tone starting point, NOT a
// substitute for legal advice. Have the privacy policy and terms reviewed
// before launch, and fill in the real company details in the imprint.
export type ContentSection = { heading: L; body: L };
export type ContentPageData = {
  eyebrow: L;
  title: L;
  intro: L;
  // Optional "last updated" line, shown under the intro on legal pages.
  updated?: L;
  sections: ContentSection[];
};

export const pages: Record<"about" | "privacy" | "terms" | "imprint", ContentPageData> = {
  about: {
    eyebrow: l("About", "Über uns", "À propos", "Chi siamo"),
    title: l(
      "The team behind Taplino",
      "Das Team hinter Taplino",
      "L'équipe derrière Taplino",
      "Il team dietro Taplino",
    ),
    intro: l(
      "We build premium NFC cards for Swiss businesses. One tap between you and everything you share.",
      "Wir bauen hochwertige NFC-Karten für Schweizer Unternehmen. Ein Tap zwischen Ihnen und allem, was Sie teilen.",
      "Nous concevons des cartes NFC premium pour les entreprises suisses. Un tap entre vous et tout ce que vous partagez.",
      "Realizziamo carte NFC premium per le aziende svizzere. Un tap tra te e tutto ciò che condividi.",
    ),
    sections: [
      {
        heading: l("Our mission", "Unsere Mission", "Notre mission", "La nostra missione"),
        body: l(
          "Every business deserves a simple, elegant way to connect with its customers. We turn a single tap into more reviews, live menus and link hubs, with no app to install and no friction for your guests.",
          "Jedes Unternehmen verdient eine einfache, elegante Art, mit seinen Kunden in Kontakt zu treten. Wir verwandeln einen einzigen Tap in mehr Bewertungen, Live-Menüs und Link-Hubs, ohne App-Installation und ohne Hürden für Ihre Gäste.",
          "Chaque entreprise mérite un moyen simple et élégant de rester en lien avec ses clients. Nous transformons un simple tap en plus d'avis, de menus en direct et de hubs de liens, sans application à installer, sans friction pour vos clients.",
          "Ogni attività merita un modo semplice ed elegante per connettersi con i propri clienti. Trasformiamo un singolo tap in più recensioni, menu live e hub di link, senza app da installare e senza ostacoli per i tuoi clienti.",
        ),
      },
      {
        heading: l("Built in Switzerland", "In der Schweiz entwickelt", "Conçu en Suisse", "Sviluppato in Svizzera"),
        body: l(
          "We design the cards, program them and run the whole platform ourselves. The NFC hardware is produced by trusted partners to our specifications, using premium, durable materials, then quality-checked by our team before it ships to your door.",
          "Wir gestalten die Karten, programmieren sie und betreiben die gesamte Plattform selbst. Die NFC-Hardware wird von vertrauenswürdigen Partnern nach unseren Vorgaben aus hochwertigen, langlebigen Materialien gefertigt und von unserem Team geprüft, bevor sie zu Ihnen geliefert wird.",
          "Nous concevons les cartes, les programmons et exploitons toute la plateforme nous-mêmes. Le matériel NFC est produit par des partenaires de confiance selon nos spécifications, avec des matériaux premium et durables, puis contrôlé par notre équipe avant d'être expédié.",
          "Progettiamo le carte, le programmiamo e gestiamo noi l'intera piattaforma. L'hardware NFC è prodotto da partner affidabili secondo le nostre specifiche, con materiali premium e durevoli, e controllato dal nostro team prima della spedizione.",
        ),
      },
      {
        heading: l("Get in touch", "Kontakt aufnehmen", "Nous contacter", "Contattaci"),
        body: l(
          "Questions, ideas or a bulk order? Write to us at hello@taplino.ch and we usually reply within a few hours.",
          "Fragen, Ideen oder eine Grossbestellung? Schreiben Sie uns an hello@taplino.ch, wir antworten meist innert weniger Stunden.",
          "Des questions, des idées ou une commande en gros ? Écrivez-nous à hello@taplino.ch, nous répondons généralement en quelques heures.",
          "Domande, idee o un ordine all'ingrosso? Scrivici a hello@taplino.ch, di solito rispondiamo in poche ore.",
        ),
      },
    ],
  },
  privacy: {
    eyebrow: l("Privacy", "Datenschutz", "Confidentialité", "Privacy"),
    title: l(
      "Privacy policy",
      "Datenschutzerklärung",
      "Politique de confidentialité",
      "Informativa sulla privacy",
    ),
    intro: l(
      "We take your privacy seriously. This policy explains what personal data we collect, why we process it, who we share it with and the rights you have under Swiss data protection law.",
      "Wir nehmen Ihren Datenschutz ernst. Diese Erklärung beschreibt, welche Personendaten wir bearbeiten, zu welchen Zwecken, an wen wir sie weitergeben und welche Rechte Ihnen nach schweizerischem Datenschutzrecht zustehen.",
      "Nous prenons votre confidentialité au sérieux. Cette politique explique quelles données personnelles nous traitons, à quelles fins, avec qui nous les partageons et les droits dont vous disposez selon le droit suisse de la protection des données.",
      "Prendiamo sul serio la tua privacy. Questa informativa spiega quali dati personali trattiamo, per quali finalità, con chi li condividiamo e quali diritti hai secondo il diritto svizzero sulla protezione dei dati.",
    ),
    updated: l(
      "Last updated: September 2026",
      "Zuletzt aktualisiert: September 2026",
      "Dernière mise à jour : septembre 2026",
      "Ultimo aggiornamento: settembre 2026",
    ),
    sections: [
      {
        heading: l("Who is responsible", "Verantwortliche Stelle", "Responsable du traitement", "Titolare del trattamento"),
        body: l(
          "Taplino is the controller responsible for the personal data processed through this website and our services. You can reach us with any privacy question at hello@taplino.ch. Full company details are listed in our imprint.",
          "Taplino ist die verantwortliche Stelle für die über diese Website und unsere Dienste bearbeiteten Personendaten. Bei Fragen zum Datenschutz erreichen Sie uns unter hello@taplino.ch. Die vollständigen Firmenangaben finden Sie in unserem Impressum.",
          "Taplino est le responsable du traitement des données personnelles traitées via ce site et nos services. Pour toute question relative à la protection des données, écrivez-nous à hello@taplino.ch. Les coordonnées complètes figurent dans nos mentions légales.",
          "Taplino è il titolare del trattamento dei dati personali gestiti tramite questo sito e i nostri servizi. Per qualsiasi domanda sulla privacy puoi contattarci a hello@taplino.ch. I dati completi dell'azienda sono nelle note legali.",
        ),
      },
      {
        heading: l("What data we collect", "Welche Daten wir bearbeiten", "Quelles données nous collectons", "Quali dati raccogliamo"),
        body: l(
          "We process the following categories of personal data:\nContact and order data you provide, such as your name, business name, email address, phone number, billing and delivery address and the details of your order.\nCommunication data from the messages you send us, for example by email or through a contact form.\nPayment data needed to process your purchase, which is handled by our payment providers.\nUsage and technical data collected automatically when you visit the site, such as your IP address, browser type, device information, the pages you view and the date and time of access.",
          "Wir bearbeiten folgende Kategorien von Personendaten:\nKontakt- und Bestelldaten, die Sie angeben, etwa Name, Firmenname, E-Mail-Adresse, Telefonnummer, Rechnungs- und Lieferadresse sowie die Angaben zu Ihrer Bestellung.\nKommunikationsdaten aus den Nachrichten, die Sie uns senden, zum Beispiel per E-Mail oder über ein Kontaktformular.\nZahlungsdaten, die zur Abwicklung Ihres Kaufs nötig sind und von unseren Zahlungsdienstleistern verarbeitet werden.\nNutzungs- und technische Daten, die beim Besuch der Website automatisch erfasst werden, etwa IP-Adresse, Browsertyp, Geräteinformationen, die aufgerufenen Seiten sowie Datum und Uhrzeit des Zugriffs.",
          "Nous traitons les catégories de données personnelles suivantes :\nDonnées de contact et de commande que vous fournissez, comme votre nom, le nom de votre entreprise, votre adresse e-mail, votre numéro de téléphone, vos adresses de facturation et de livraison et les détails de votre commande.\nDonnées de communication issues des messages que vous nous envoyez, par exemple par e-mail ou via un formulaire de contact.\nDonnées de paiement nécessaires au traitement de votre achat, gérées par nos prestataires de paiement.\nDonnées d'utilisation et techniques collectées automatiquement lors de votre visite, telles que votre adresse IP, le type de navigateur, les informations sur l'appareil, les pages consultées ainsi que la date et l'heure d'accès.",
          "Trattiamo le seguenti categorie di dati personali:\nDati di contatto e d'ordine che fornisci, come nome, nome dell'azienda, indirizzo email, numero di telefono, indirizzo di fatturazione e di consegna e i dettagli del tuo ordine.\nDati di comunicazione contenuti nei messaggi che ci invii, ad esempio via email o tramite un modulo di contatto.\nDati di pagamento necessari per elaborare il tuo acquisto, gestiti dai nostri fornitori di servizi di pagamento.\nDati d'uso e tecnici raccolti automaticamente quando visiti il sito, come indirizzo IP, tipo di browser, informazioni sul dispositivo, pagine visitate e data e ora dell'accesso.",
        ),
      },
      {
        heading: l("Why we use your data", "Zu welchen Zwecken wir Daten bearbeiten", "Pourquoi nous utilisons vos données", "Perché usiamo i tuoi dati"),
        body: l(
          "We process your data to fulfil and deliver your orders, respond to your enquiries, operate and improve our website and service, keep our systems secure, send you service-related messages and, with your consent, occasional product updates, and to comply with legal obligations such as accounting and tax rules. We rely on the performance of our contract with you, our legitimate business interests, our legal obligations or your consent, which you can withdraw at any time.",
          "Wir bearbeiten Ihre Daten, um Ihre Bestellungen zu erfüllen und auszuliefern, Ihre Anfragen zu beantworten, unsere Website und unseren Dienst zu betreiben und zu verbessern, unsere Systeme sicher zu halten, Ihnen dienstbezogene Nachrichten und, mit Ihrer Einwilligung, gelegentliche Produktinformationen zu senden sowie gesetzliche Pflichten wie Buchführungs- und Steuervorschriften zu erfüllen. Grundlage ist die Erfüllung unseres Vertrags mit Ihnen, unser berechtigtes Interesse, unsere gesetzlichen Pflichten oder Ihre Einwilligung, die Sie jederzeit widerrufen können.",
          "Nous traitons vos données pour exécuter et livrer vos commandes, répondre à vos demandes, exploiter et améliorer notre site et notre service, sécuriser nos systèmes, vous envoyer des messages liés au service et, avec votre consentement, des informations ponctuelles sur nos produits, ainsi que pour respecter nos obligations légales telles que les règles comptables et fiscales. Nous nous fondons sur l'exécution de notre contrat avec vous, sur nos intérêts légitimes, sur nos obligations légales ou sur votre consentement, que vous pouvez retirer à tout moment.",
          "Trattiamo i tuoi dati per evadere e consegnare i tuoi ordini, rispondere alle tue richieste, gestire e migliorare il nostro sito e servizio, mantenere sicuri i nostri sistemi, inviarti messaggi relativi al servizio e, con il tuo consenso, occasionali informazioni sui prodotti, nonché per adempiere agli obblighi di legge come le norme contabili e fiscali. Ci basiamo sull'esecuzione del contratto con te, sui nostri interessi legittimi, sui nostri obblighi di legge o sul tuo consenso, che puoi revocare in qualsiasi momento.",
        ),
      },
      {
        heading: l("Cookies and analytics", "Cookies und Analyse", "Cookies et analyse", "Cookie e analisi"),
        body: l(
          "We use the cookies needed to run the website and, where you agree, cookies or similar technologies that help us understand how the site is used so we can improve it. You can accept or decline non-essential cookies and change your choice at any time in your browser settings. Where we use analytics services, we configure them to limit the data collected about you.",
          "Wir verwenden die zum Betrieb der Website nötigen Cookies und, sofern Sie zustimmen, Cookies oder ähnliche Technologien, die uns helfen zu verstehen, wie die Website genutzt wird, damit wir sie verbessern können. Nicht notwendige Cookies können Sie annehmen oder ablehnen und Ihre Wahl jederzeit in den Browsereinstellungen ändern. Wo wir Analysedienste einsetzen, konfigurieren wir sie so, dass möglichst wenige Daten über Sie erhoben werden.",
          "Nous utilisons les cookies nécessaires au fonctionnement du site et, avec votre accord, des cookies ou technologies similaires qui nous aident à comprendre comment le site est utilisé afin de l'améliorer. Vous pouvez accepter ou refuser les cookies non essentiels et modifier votre choix à tout moment dans les paramètres de votre navigateur. Lorsque nous utilisons des services d'analyse, nous les configurons pour limiter les données collectées à votre sujet.",
          "Utilizziamo i cookie necessari al funzionamento del sito e, se acconsenti, cookie o tecnologie simili che ci aiutano a capire come viene usato il sito per migliorarlo. Puoi accettare o rifiutare i cookie non essenziali e modificare la tua scelta in qualsiasi momento nelle impostazioni del browser. Quando utilizziamo servizi di analisi, li configuriamo in modo da limitare i dati raccolti su di te.",
        ),
      },
      {
        heading: l("Hosting and server logs", "Hosting und Server-Logs", "Hébergement et journaux serveur", "Hosting e log del server"),
        body: l(
          "Our website is hosted by a specialised provider that processes data on our behalf and under our instructions. For security and stability, the server automatically records log data such as your IP address, the request made and the time of access. This data helps us keep the service reliable and detect misuse, and is deleted or anonymised after a short period.",
          "Unsere Website wird von einem spezialisierten Anbieter gehostet, der Daten in unserem Auftrag und nach unseren Weisungen bearbeitet. Aus Sicherheits- und Stabilitätsgründen erfasst der Server automatisch Log-Daten wie Ihre IP-Adresse, die getätigte Anfrage und den Zeitpunkt des Zugriffs. Diese Daten helfen uns, den Dienst zuverlässig zu halten und Missbrauch zu erkennen; sie werden nach kurzer Zeit gelöscht oder anonymisiert.",
          "Notre site est hébergé par un prestataire spécialisé qui traite les données pour notre compte et selon nos instructions. Pour des raisons de sécurité et de stabilité, le serveur enregistre automatiquement des données de journal telles que votre adresse IP, la requête effectuée et l'heure d'accès. Ces données nous aident à assurer la fiabilité du service et à détecter les abus ; elles sont supprimées ou anonymisées après une courte période.",
          "Il nostro sito è ospitato da un fornitore specializzato che tratta i dati per nostro conto e secondo le nostre istruzioni. Per motivi di sicurezza e stabilità, il server registra automaticamente dati di log come il tuo indirizzo IP, la richiesta effettuata e l'ora dell'accesso. Questi dati ci aiutano a mantenere affidabile il servizio e a rilevare abusi, e vengono cancellati o anonimizzati dopo un breve periodo.",
        ),
      },
      {
        heading: l("Sharing your data", "Weitergabe Ihrer Daten", "Partage de vos données", "Condivisione dei tuoi dati"),
        body: l(
          "We never sell your personal data. We share it only where necessary: with service providers who work on our behalf, such as hosting, payment, shipping and email providers, and with authorities or advisors where the law requires it. These providers may process your data only under our instructions and are bound to keep it confidential and secure.",
          "Wir verkaufen Ihre Personendaten niemals. Wir geben sie nur weiter, soweit dies nötig ist: an Dienstleister, die in unserem Auftrag tätig sind, etwa für Hosting, Zahlung, Versand und E-Mail, sowie an Behörden oder Berater, wenn das Gesetz dies verlangt. Diese Dienstleister dürfen Ihre Daten nur nach unseren Weisungen bearbeiten und sind zu Vertraulichkeit und Sicherheit verpflichtet.",
          "Nous ne vendons jamais vos données personnelles. Nous ne les partageons que lorsque c'est nécessaire : avec des prestataires qui agissent pour notre compte, comme l'hébergement, le paiement, l'expédition et la messagerie, et avec les autorités ou conseillers lorsque la loi l'exige. Ces prestataires ne peuvent traiter vos données que selon nos instructions et sont tenus d'en assurer la confidentialité et la sécurité.",
          "Non vendiamo mai i tuoi dati personali. Li condividiamo solo quando necessario: con fornitori di servizi che operano per nostro conto, come hosting, pagamento, spedizione ed email, e con autorità o consulenti quando la legge lo richiede. Questi fornitori possono trattare i tuoi dati solo secondo le nostre istruzioni e sono tenuti a mantenerli riservati e sicuri.",
        ),
      },
      {
        heading: l("Data transfers abroad", "Datenübermittlung ins Ausland", "Transferts de données à l'étranger", "Trasferimenti di dati all'estero"),
        body: l(
          "Some of our service providers process data outside Switzerland, including in the European Economic Area and other countries. Where we transfer personal data to a country that does not offer an equivalent level of protection, we rely on appropriate safeguards, such as the standard contractual clauses recognised by the Swiss authorities, to protect your data.",
          "Einige unserer Dienstleister bearbeiten Daten ausserhalb der Schweiz, unter anderem im Europäischen Wirtschaftsraum und in weiteren Ländern. Übermitteln wir Personendaten in ein Land ohne gleichwertiges Schutzniveau, stützen wir uns auf geeignete Garantien wie die von den Schweizer Behörden anerkannten Standardvertragsklauseln, um Ihre Daten zu schützen.",
          "Certains de nos prestataires traitent des données en dehors de la Suisse, notamment dans l'Espace économique européen et dans d'autres pays. Lorsque nous transférons des données personnelles vers un pays n'offrant pas un niveau de protection équivalent, nous nous appuyons sur des garanties appropriées, telles que les clauses contractuelles types reconnues par les autorités suisses, pour protéger vos données.",
          "Alcuni dei nostri fornitori trattano i dati al di fuori della Svizzera, anche nello Spazio economico europeo e in altri Paesi. Quando trasferiamo dati personali in un Paese che non offre un livello di protezione equivalente, ci basiamo su garanzie adeguate, come le clausole contrattuali tipo riconosciute dalle autorità svizzere, per proteggere i tuoi dati.",
        ),
      },
      {
        heading: l("How long we keep your data", "Wie lange wir Ihre Daten aufbewahren", "Combien de temps nous conservons vos données", "Per quanto tempo conserviamo i tuoi dati"),
        body: l(
          "We keep your personal data only as long as necessary for the purposes described above or as required by law. Order and invoicing data is retained for the statutory retention period, which in Switzerland is generally ten years. Other data is deleted once it is no longer needed.",
          "Wir bewahren Ihre Personendaten nur so lange auf, wie es für die oben genannten Zwecke nötig ist oder das Gesetz es verlangt. Bestell- und Rechnungsdaten werden während der gesetzlichen Aufbewahrungsfrist aufbewahrt, die in der Schweiz in der Regel zehn Jahre beträgt. Andere Daten werden gelöscht, sobald sie nicht mehr benötigt werden.",
          "Nous ne conservons vos données personnelles que le temps nécessaire aux finalités décrites ci-dessus ou requis par la loi. Les données de commande et de facturation sont conservées pendant la durée légale de conservation, qui est en Suisse généralement de dix ans. Les autres données sont supprimées dès qu'elles ne sont plus nécessaires.",
          "Conserviamo i tuoi dati personali solo per il tempo necessario alle finalità descritte sopra o richiesto dalla legge. I dati di ordine e fatturazione vengono conservati per il periodo di conservazione previsto dalla legge, che in Svizzera è generalmente di dieci anni. Gli altri dati vengono cancellati quando non sono più necessari.",
        ),
      },
      {
        heading: l("Data security", "Datensicherheit", "Sécurité des données", "Sicurezza dei dati"),
        body: l(
          "We take appropriate technical and organisational measures to protect your personal data against loss, misuse and unauthorised access. No transmission over the internet can be guaranteed to be completely secure, but we work continuously to keep our safeguards up to date.",
          "Wir treffen angemessene technische und organisatorische Massnahmen, um Ihre Personendaten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen. Kein Datentransfer über das Internet kann als vollständig sicher garantiert werden, doch wir arbeiten laufend daran, unsere Schutzmassnahmen aktuell zu halten.",
          "Nous prenons des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'usage abusif et l'accès non autorisé. Aucune transmission sur Internet ne peut être garantie totalement sûre, mais nous travaillons en permanence à maintenir nos protections à jour.",
          "Adottiamo misure tecniche e organizzative adeguate per proteggere i tuoi dati personali da perdita, uso improprio e accesso non autorizzato. Nessuna trasmissione via Internet può essere garantita come completamente sicura, ma lavoriamo costantemente per mantenere aggiornate le nostre misure di protezione.",
        ),
      },
      {
        heading: l("Your rights", "Ihre Rechte", "Vos droits", "I tuoi diritti"),
        body: l(
          "You have the right to access the personal data we hold about you, to have it corrected or deleted, and to object to or restrict its processing. Where processing is based on your consent, you may withdraw it at any time. To exercise these rights, contact us at hello@taplino.ch; we may need to verify your identity first. If you believe we have not handled your data correctly, you can lodge a complaint with the Swiss Federal Data Protection and Information Commissioner (FDPIC). We comply with the Swiss Federal Act on Data Protection (revFADP) and, where it applies to you, the EU General Data Protection Regulation (GDPR).",
          "Sie haben das Recht, auf die von uns über Sie gespeicherten Personendaten zuzugreifen, sie berichtigen oder löschen zu lassen sowie der Bearbeitung zu widersprechen oder sie einzuschränken. Beruht die Bearbeitung auf Ihrer Einwilligung, können Sie diese jederzeit widerrufen. Zur Ausübung dieser Rechte kontaktieren Sie uns unter hello@taplino.ch; wir müssen Ihre Identität allenfalls zuerst überprüfen. Sind Sie der Ansicht, dass wir Ihre Daten nicht korrekt bearbeitet haben, können Sie beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) Beschwerde einreichen. Wir halten das Schweizer Datenschutzgesetz (revDSG) und, soweit auf Sie anwendbar, die EU-Datenschutz-Grundverordnung (DSGVO) ein.",
          "Vous avez le droit d'accéder aux données personnelles que nous détenons à votre sujet, de les faire corriger ou supprimer, et de vous opposer à leur traitement ou de le limiter. Lorsque le traitement repose sur votre consentement, vous pouvez le retirer à tout moment. Pour exercer ces droits, contactez-nous à hello@taplino.ch ; nous pourrions devoir vérifier votre identité au préalable. Si vous estimez que nous n'avons pas traité vos données correctement, vous pouvez déposer une réclamation auprès du Préposé fédéral à la protection des données et à la transparence (PFPDT). Nous respectons la loi fédérale suisse sur la protection des données (nLPD) et, lorsqu'il s'applique à vous, le Règlement général sur la protection des données de l'UE (RGPD).",
          "Hai il diritto di accedere ai dati personali che deteniamo su di te, di farli correggere o cancellare e di opporti al trattamento o limitarlo. Se il trattamento si basa sul tuo consenso, puoi revocarlo in qualsiasi momento. Per esercitare questi diritti, contattaci a hello@taplino.ch; potremmo dover verificare prima la tua identità. Se ritieni che non abbiamo trattato correttamente i tuoi dati, puoi presentare un reclamo all'Incaricato federale della protezione dei dati e della trasparenza (IFPDT). Rispettiamo la legge federale svizzera sulla protezione dei dati (nLPD) e, ove applicabile a te, il Regolamento generale sulla protezione dei dati dell'UE (GDPR).",
        ),
      },
      {
        heading: l("Changes to this policy", "Änderungen dieser Erklärung", "Modifications de cette politique", "Modifiche a questa informativa"),
        body: l(
          "We may update this policy from time to time to reflect changes to our service or the law. The current version is always available on this page, with the date of the last update shown above.",
          "Wir können diese Erklärung von Zeit zu Zeit anpassen, um Änderungen an unserem Dienst oder an der Gesetzgebung Rechnung zu tragen. Die aktuelle Fassung ist stets auf dieser Seite verfügbar; das Datum der letzten Aktualisierung ist oben angegeben.",
          "Nous pouvons mettre à jour cette politique de temps à autre pour tenir compte des évolutions de notre service ou de la loi. La version en vigueur est toujours disponible sur cette page, avec la date de la dernière mise à jour indiquée ci-dessus.",
          "Possiamo aggiornare questa informativa di tanto in tanto per riflettere modifiche al nostro servizio o alla legge. La versione in vigore è sempre disponibile su questa pagina, con la data dell'ultimo aggiornamento indicata sopra.",
        ),
      },
    ],
  },
  terms: {
    eyebrow: l("Terms", "AGB", "Conditions", "Termini"),
    title: l(
      "Terms and conditions",
      "Allgemeine Geschäftsbedingungen",
      "Conditions générales",
      "Termini e condizioni",
    ),
    intro: l(
      "These terms and conditions govern your use of the Taplino website, the purchase of our NFC cards and the use of the related online service. Please read them carefully before placing an order.",
      "Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der Taplino-Website, den Kauf unserer NFC-Karten sowie die Nutzung des zugehörigen Online-Dienstes. Bitte lesen Sie sie vor einer Bestellung sorgfältig durch.",
      "Ces conditions générales régissent l'utilisation du site Taplino, l'achat de nos cartes NFC et l'utilisation du service en ligne associé. Veuillez les lire attentivement avant de passer commande.",
      "Questi termini e condizioni regolano l'uso del sito Taplino, l'acquisto delle nostre carte NFC e l'utilizzo del relativo servizio online. Ti invitiamo a leggerli con attenzione prima di effettuare un ordine.",
    ),
    updated: l(
      "Last updated: September 2026",
      "Zuletzt aktualisiert: September 2026",
      "Dernière mise à jour : septembre 2026",
      "Ultimo aggiornamento: settembre 2026",
    ),
    sections: [
      {
        heading: l("Scope", "Geltungsbereich", "Champ d'application", "Ambito di applicazione"),
        body: l(
          "These terms apply to all orders placed with Taplino, to the use of our website and to the online service that powers your cards. By placing an order or using the service, you accept these terms. Differing conditions of yours apply only if we have agreed to them in writing. Our offer is directed primarily at businesses; where you order as a consumer, your mandatory statutory rights remain unaffected.",
          "Diese Bedingungen gelten für alle bei Taplino aufgegebenen Bestellungen, für die Nutzung unserer Website und für den Online-Dienst, der Ihre Karten betreibt. Mit einer Bestellung oder der Nutzung des Dienstes akzeptieren Sie diese Bedingungen. Abweichende Bedingungen Ihrerseits gelten nur, wenn wir ihnen schriftlich zugestimmt haben. Unser Angebot richtet sich in erster Linie an Unternehmen; bestellen Sie als Konsumentin oder Konsument, bleiben Ihre zwingenden gesetzlichen Rechte unberührt.",
          "Ces conditions s'appliquent à toutes les commandes passées auprès de Taplino, à l'utilisation de notre site et au service en ligne qui fait fonctionner vos cartes. En passant commande ou en utilisant le service, vous acceptez ces conditions. Des conditions divergentes de votre part ne s'appliquent que si nous les avons acceptées par écrit. Notre offre s'adresse principalement aux entreprises ; si vous commandez en tant que consommateur, vos droits légaux impératifs ne sont pas affectés.",
          "Questi termini si applicano a tutti gli ordini effettuati presso Taplino, all'uso del nostro sito e al servizio online che fa funzionare le tue carte. Effettuando un ordine o utilizzando il servizio, accetti questi termini. Eventuali tue condizioni divergenti si applicano solo se le abbiamo accettate per iscritto. La nostra offerta è rivolta principalmente alle aziende; se ordini come consumatore, i tuoi diritti legali imperativi restano impregiudicati.",
        ),
      },
      {
        heading: l("How a contract is formed", "Zustandekommen des Vertrags", "Formation du contrat", "Conclusione del contratto"),
        body: l(
          "The presentation of our products on the website is an invitation to order, not a binding offer. A contract is formed when we confirm your order or dispatch the products. We may decline an order, for example if a product is unavailable or if we suspect misuse.",
          "Die Darstellung unserer Produkte auf der Website ist eine Aufforderung zur Bestellung und kein verbindliches Angebot. Ein Vertrag kommt zustande, wenn wir Ihre Bestellung bestätigen oder die Produkte versenden. Wir können eine Bestellung ablehnen, etwa wenn ein Produkt nicht verfügbar ist oder wir einen Missbrauch vermuten.",
          "La présentation de nos produits sur le site constitue une invitation à commander et non une offre ferme. Le contrat est conclu lorsque nous confirmons votre commande ou expédions les produits. Nous pouvons refuser une commande, par exemple si un produit est indisponible ou si nous soupçonnons un abus.",
          "La presentazione dei nostri prodotti sul sito è un invito a ordinare e non un'offerta vincolante. Il contratto si perfeziona quando confermiamo il tuo ordine o spediamo i prodotti. Possiamo rifiutare un ordine, ad esempio se un prodotto non è disponibile o se sospettiamo un abuso.",
        ),
      },
      {
        heading: l("Prices and payment", "Preise und Zahlung", "Prix et paiement", "Prezzi e pagamento"),
        body: l(
          "All prices are in Swiss francs (CHF) and include statutory VAT unless stated otherwise. Shipping costs, if any, are shown before you complete your order. Payment is due as indicated at checkout, through the payment methods offered. The products remain our property until they have been paid for in full.",
          "Alle Preise verstehen sich in Schweizer Franken (CHF) und inklusive gesetzlicher MwSt., sofern nicht anders angegeben. Allfällige Versandkosten werden vor Abschluss der Bestellung ausgewiesen. Die Zahlung ist wie beim Checkout angegeben über die angebotenen Zahlungsmittel fällig. Die Produkte bleiben bis zur vollständigen Bezahlung unser Eigentum.",
          "Tous les prix sont en francs suisses (CHF) et incluent la TVA légale, sauf indication contraire. Les frais d'expédition éventuels sont indiqués avant la finalisation de votre commande. Le paiement est dû comme indiqué lors du passage en caisse, par les moyens de paiement proposés. Les produits restent notre propriété jusqu'à leur paiement intégral.",
          "Tutti i prezzi sono in franchi svizzeri (CHF) e includono l'IVA di legge, salvo diversa indicazione. Le eventuali spese di spedizione sono indicate prima di concludere l'ordine. Il pagamento è dovuto come indicato al momento del checkout, tramite i metodi di pagamento offerti. I prodotti restano di nostra proprietà fino al loro completo pagamento.",
        ),
      },
      {
        heading: l("Delivery", "Lieferung", "Livraison", "Consegna"),
        body: l(
          "We ship across Switzerland once your design has been approved. Delivery times are estimates and not guaranteed. If a delivery is delayed or lost, contact us and we will help resolve it. The risk passes to you once the products are handed over to you or, for business customers, to the carrier.",
          "Wir liefern in die ganze Schweiz, sobald Ihr Design freigegeben ist. Lieferfristen sind Richtwerte und nicht garantiert. Ist eine Lieferung verspätet oder geht sie verloren, kontaktieren Sie uns, und wir helfen bei der Klärung. Die Gefahr geht auf Sie über, sobald die Produkte Ihnen oder, bei Geschäftskunden, dem Transporteur übergeben werden.",
          "Nous livrons dans toute la Suisse une fois votre design validé. Les délais de livraison sont indicatifs et non garantis. En cas de retard ou de perte d'une livraison, contactez-nous et nous vous aiderons à résoudre le problème. Le risque vous est transféré dès que les produits vous sont remis ou, pour les clients professionnels, remis au transporteur.",
          "Spediamo in tutta la Svizzera una volta approvato il tuo design. I tempi di consegna sono indicativi e non garantiti. Se una consegna è in ritardo o va persa, contattaci e ti aiuteremo a risolvere il problema. Il rischio passa a te non appena i prodotti ti vengono consegnati o, per i clienti aziendali, consegnati al vettore.",
        ),
      },
      {
        heading: l("Personalised products, cancellation and returns", "Personalisierte Produkte, Widerruf und Rückgabe", "Produits personnalisés, annulation et retours", "Prodotti personalizzati, annullamento e resi"),
        body: l(
          "Because our cards are personalised to your brand, they are made to order. Once you have approved your design and production has started, an order can no longer be cancelled or returned for reasons of preference. This does not affect your rights if a product is defective. Under Swiss law there is generally no statutory right of withdrawal for distance purchases, so please check your design carefully before approving it.",
          "Da unsere Karten individuell auf Ihre Marke abgestimmt sind, werden sie auf Bestellung gefertigt. Sobald Sie Ihr Design freigegeben haben und die Produktion begonnen hat, kann eine Bestellung nicht mehr aus Gründen des Nichtgefallens storniert oder zurückgegeben werden. Ihre Rechte bei einem fehlerhaften Produkt bleiben davon unberührt. Nach schweizerischem Recht besteht bei Fernkäufen grundsätzlich kein gesetzliches Widerrufsrecht; bitte prüfen Sie Ihr Design daher vor der Freigabe sorgfältig.",
          "Comme nos cartes sont personnalisées à votre marque, elles sont fabriquées sur commande. Une fois votre design validé et la production lancée, une commande ne peut plus être annulée ou retournée pour des raisons de convenance. Cela n'affecte pas vos droits en cas de produit défectueux. Le droit suisse ne prévoit en général aucun droit de rétractation légal pour les achats à distance ; veuillez donc vérifier votre design attentivement avant de le valider.",
          "Poiché le nostre carte sono personalizzate con il tuo marchio, sono realizzate su ordinazione. Una volta approvato il design e avviata la produzione, un ordine non può più essere annullato o restituito per motivi di gradimento. Ciò non pregiudica i tuoi diritti in caso di prodotto difettoso. Secondo il diritto svizzero, per gli acquisti a distanza non esiste in genere un diritto di recesso legale; ti invitiamo quindi a controllare con attenzione il tuo design prima di approvarlo.",
        ),
      },
      {
        heading: l("The Taplino service", "Der Taplino-Dienst", "Le service Taplino", "Il servizio Taplino"),
        body: l(
          "Each card links to an online destination, such as a review page, menu or link hub, that you control through our service. We aim to keep the service available and reliable, but we do not guarantee uninterrupted access and may carry out maintenance or make reasonable changes to features. Where the service is provided on a subscription or ongoing basis, the term and fees are those stated when you sign up.",
          "Jede Karte verweist auf ein Online-Ziel, etwa eine Bewertungsseite, ein Menü oder einen Link-Hub, das Sie über unseren Dienst steuern. Wir sind bestrebt, den Dienst verfügbar und zuverlässig zu halten, garantieren jedoch keinen unterbrechungsfreien Zugang und können Wartungen durchführen oder Funktionen in angemessenem Rahmen ändern. Wird der Dienst als Abonnement oder laufend erbracht, gelten die bei der Anmeldung angegebene Laufzeit und Gebühren.",
          "Chaque carte renvoie vers une destination en ligne, telle qu'une page d'avis, un menu ou un hub de liens, que vous gérez via notre service. Nous nous efforçons de maintenir le service disponible et fiable, mais nous ne garantissons pas un accès ininterrompu et pouvons effectuer des opérations de maintenance ou apporter des modifications raisonnables aux fonctionnalités. Lorsque le service est fourni sur abonnement ou de manière continue, la durée et les frais sont ceux indiqués lors de votre inscription.",
          "Ogni carta rimanda a una destinazione online, come una pagina di recensioni, un menu o un hub di link, che gestisci tramite il nostro servizio. Ci impegniamo a mantenere il servizio disponibile e affidabile, ma non garantiamo un accesso ininterrotto e possiamo eseguire manutenzioni o apportare modifiche ragionevoli alle funzionalità. Quando il servizio è fornito in abbonamento o in modo continuativo, la durata e i costi sono quelli indicati al momento della registrazione.",
        ),
      },
      {
        heading: l("Your content and intellectual property", "Ihre Inhalte und geistiges Eigentum", "Vos contenus et propriété intellectuelle", "I tuoi contenuti e proprietà intellettuale"),
        body: l(
          "You keep all rights to the logos, text and other content you provide, and you grant us the right to use it only to produce your cards and operate your service. You confirm that you are entitled to use this content and that it does not infringe the rights of others. All rights in our website, designs, software and the Taplino brand remain with us.",
          "Sie behalten alle Rechte an den von Ihnen bereitgestellten Logos, Texten und weiteren Inhalten und räumen uns das Recht ein, diese ausschliesslich zur Herstellung Ihrer Karten und zum Betrieb Ihres Dienstes zu nutzen. Sie bestätigen, dass Sie zur Nutzung dieser Inhalte berechtigt sind und dass sie keine Rechte Dritter verletzen. Alle Rechte an unserer Website, unseren Designs, unserer Software und der Marke Taplino verbleiben bei uns.",
          "Vous conservez tous les droits sur les logos, textes et autres contenus que vous fournissez, et vous nous accordez le droit de les utiliser uniquement pour produire vos cartes et exploiter votre service. Vous confirmez être en droit d'utiliser ces contenus et qu'ils ne portent pas atteinte aux droits de tiers. Tous les droits sur notre site, nos designs, nos logiciels et la marque Taplino nous restent réservés.",
          "Mantieni tutti i diritti su loghi, testi e altri contenuti che fornisci e ci concedi il diritto di utilizzarli esclusivamente per produrre le tue carte e gestire il tuo servizio. Confermi di avere il diritto di utilizzare tali contenuti e che essi non violano i diritti di terzi. Tutti i diritti sul nostro sito, sui nostri design, sul nostro software e sul marchio Taplino restano di nostra proprietà.",
        ),
      },
      {
        heading: l("Acceptable use", "Zulässige Nutzung", "Utilisation acceptable", "Uso consentito"),
        body: l(
          "You agree to use the service lawfully and not to link it to content that is illegal, misleading, infringing or harmful. We may suspend or terminate a card or account that is used in breach of these terms or the law.",
          "Sie verpflichten sich, den Dienst rechtmässig zu nutzen und ihn nicht mit rechtswidrigen, irreführenden, rechtsverletzenden oder schädlichen Inhalten zu verknüpfen. Wir können eine Karte oder ein Konto sperren oder kündigen, das unter Verstoss gegen diese Bedingungen oder das Gesetz genutzt wird.",
          "Vous vous engagez à utiliser le service de manière licite et à ne pas le relier à des contenus illégaux, trompeurs, contrefaisants ou préjudiciables. Nous pouvons suspendre ou résilier une carte ou un compte utilisé en violation de ces conditions ou de la loi.",
          "Ti impegni a utilizzare il servizio in modo lecito e a non collegarlo a contenuti illegali, ingannevoli, lesivi di diritti o dannosi. Possiamo sospendere o chiudere una carta o un account utilizzato in violazione di questi termini o della legge.",
        ),
      },
      {
        heading: l("Warranty for defects", "Gewährleistung für Mängel", "Garantie des défauts", "Garanzia per i difetti"),
        body: l(
          "We provide our products with due care. If a product is defective, contact us within a reasonable time of discovering the defect and we will repair it, replace it or refund it, at our discretion. Statutory warranty rights for consumers under Swiss law apply and are not limited by these terms.",
          "Wir erbringen unsere Produkte mit der gebotenen Sorgfalt. Ist ein Produkt mangelhaft, melden Sie sich innert angemessener Frist nach Entdeckung des Mangels bei uns; wir reparieren, ersetzen oder erstatten das Produkt nach unserem Ermessen. Die gesetzlichen Gewährleistungsrechte von Konsumentinnen und Konsumenten nach schweizerischem Recht gelten und werden durch diese Bedingungen nicht eingeschränkt.",
          "Nous fournissons nos produits avec le soin requis. Si un produit est défectueux, contactez-nous dans un délai raisonnable après avoir découvert le défaut et nous procéderons, à notre discrétion, à sa réparation, à son remplacement ou à son remboursement. Les droits de garantie légaux des consommateurs prévus par le droit suisse s'appliquent et ne sont pas limités par ces conditions.",
          "Forniamo i nostri prodotti con la dovuta diligenza. Se un prodotto è difettoso, contattaci entro un termine ragionevole dalla scoperta del difetto e provvederemo, a nostra discrezione, alla riparazione, alla sostituzione o al rimborso. I diritti di garanzia legali dei consumatori previsti dal diritto svizzero si applicano e non sono limitati da questi termini.",
        ),
      },
      {
        heading: l("Liability", "Haftung", "Responsabilité", "Responsabilità"),
        body: l(
          "We provide our products and services with due care. To the extent permitted by law, we exclude liability for slight negligence and for indirect or consequential damages, such as lost profit or lost data. Nothing in these terms limits our liability for death or personal injury, for unlawful intent or gross negligence, or where liability cannot be excluded by law.",
          "Wir erbringen unsere Produkte und Dienstleistungen mit der gebotenen Sorgfalt. Im gesetzlich zulässigen Rahmen schliessen wir die Haftung für leichte Fahrlässigkeit sowie für indirekte Schäden und Folgeschäden wie entgangenen Gewinn oder Datenverlust aus. Keine Bestimmung dieser Bedingungen beschränkt unsere Haftung für Tod oder Körperverletzung, für rechtswidrige Absicht oder grobe Fahrlässigkeit oder soweit die Haftung gesetzlich nicht ausgeschlossen werden kann.",
          "Nous fournissons nos produits et services avec le soin requis. Dans la mesure permise par la loi, nous excluons toute responsabilité pour négligence légère ainsi que pour les dommages indirects ou consécutifs, tels que la perte de bénéfice ou de données. Aucune disposition de ces conditions ne limite notre responsabilité en cas de décès ou de dommage corporel, d'intention illicite ou de négligence grave, ou lorsque la responsabilité ne peut être exclue par la loi.",
          "Forniamo i nostri prodotti e servizi con la dovuta diligenza. Nei limiti consentiti dalla legge, escludiamo la responsabilità per colpa lieve e per danni indiretti o consequenziali, come mancato guadagno o perdita di dati. Nessuna disposizione di questi termini limita la nostra responsabilità in caso di morte o lesioni personali, di dolo o colpa grave, o quando la responsabilità non può essere esclusa per legge.",
        ),
      },
      {
        heading: l("Data protection", "Datenschutz", "Protection des données", "Protezione dei dati"),
        body: l(
          "We process personal data in accordance with our privacy policy, which forms part of your agreement with us.",
          "Wir bearbeiten Personendaten gemäss unserer Datenschutzerklärung, die Bestandteil Ihrer Vereinbarung mit uns ist.",
          "Nous traitons les données personnelles conformément à notre politique de confidentialité, qui fait partie intégrante de votre contrat avec nous.",
          "Trattiamo i dati personali in conformità con la nostra informativa sulla privacy, che è parte integrante del tuo accordo con noi.",
        ),
      },
      {
        heading: l("Changes to these terms", "Änderungen dieser Bedingungen", "Modifications de ces conditions", "Modifiche a questi termini"),
        body: l(
          "We may update these terms to reflect changes to our products, service or the law. The version in force at the time of your order applies to that order. The current version is always available on this page.",
          "Wir können diese Bedingungen anpassen, um Änderungen an unseren Produkten, unserem Dienst oder der Gesetzgebung Rechnung zu tragen. Für eine Bestellung gilt die zum Zeitpunkt der Bestellung geltende Fassung. Die aktuelle Fassung ist stets auf dieser Seite verfügbar.",
          "Nous pouvons mettre à jour ces conditions pour tenir compte des évolutions de nos produits, de notre service ou de la loi. La version en vigueur au moment de votre commande s'applique à cette commande. La version actuelle est toujours disponible sur cette page.",
          "Possiamo aggiornare questi termini per riflettere modifiche ai nostri prodotti, al servizio o alla legge. All'ordine si applica la versione in vigore al momento dell'ordine stesso. La versione attuale è sempre disponibile su questa pagina.",
        ),
      },
      {
        heading: l("Governing law and jurisdiction", "Anwendbares Recht und Gerichtsstand", "Droit applicable et for", "Legge applicabile e foro competente"),
        body: l(
          "These terms are governed by Swiss law, excluding its conflict-of-law rules and the UN Convention on Contracts for the International Sale of Goods. The exclusive place of jurisdiction is our registered seat in Switzerland, subject to any mandatory place of jurisdiction that the law provides for consumers.",
          "Diese Bedingungen unterstehen schweizerischem Recht unter Ausschluss der Kollisionsnormen und des UN-Kaufrechts (CISG). Ausschliesslicher Gerichtsstand ist unser Sitz in der Schweiz, vorbehältlich eines zwingenden Gerichtsstands, den das Gesetz für Konsumentinnen und Konsumenten vorsieht.",
          "Ces conditions sont régies par le droit suisse, à l'exclusion de ses règles de conflit de lois et de la Convention des Nations Unies sur les contrats de vente internationale de marchandises. Le for exclusif est notre siège en Suisse, sous réserve de tout for impératif prévu par la loi pour les consommateurs.",
          "Questi termini sono regolati dal diritto svizzero, con esclusione delle norme sui conflitti di legge e della Convenzione delle Nazioni Unite sui contratti di vendita internazionale di merci. Il foro esclusivo è la nostra sede in Svizzera, fatto salvo ogni foro imperativo previsto dalla legge per i consumatori.",
        ),
      },
    ],
  },
  imprint: {
    eyebrow: l("Imprint", "Impressum", "Mentions légales", "Note legali"),
    title: l("Imprint", "Impressum", "Mentions légales", "Note legali"),
    intro: l(
      "Information pursuant to Swiss law.",
      "Angaben gemäss schweizerischem Recht.",
      "Informations conformément au droit suisse.",
      "Informazioni ai sensi del diritto svizzero.",
    ),
    sections: [
      {
        heading: l("Responsible for this website", "Verantwortlich für diese Website", "Responsable de ce site", "Responsabile di questo sito"),
        body: l(
          "Taplino\nMarco Jucker\nSchwarztorstrasse 115\n3007 Bern\nSwitzerland",
          "Taplino\nMarco Jucker\nSchwarztorstrasse 115\n3007 Bern\nSchweiz",
          "Taplino\nMarco Jucker\nSchwarztorstrasse 115\n3007 Bern\nSuisse",
          "Taplino\nMarco Jucker\nSchwarztorstrasse 115\n3007 Bern\nSvizzera",
        ),
      },
      {
        heading: l("Contact", "Kontakt", "Contact", "Contatto"),
        body: l(
          "Email: hello@taplino.ch",
          "E-Mail: hello@taplino.ch",
          "E-mail : hello@taplino.ch",
          "Email: hello@taplino.ch",
        ),
      },
      {
        heading: l("Disclaimer", "Haftungsausschluss", "Clause de non-responsabilité", "Esclusione di responsabilità"),
        body: l(
          "The content of this website has been prepared with the greatest possible care. However, we assume no liability for the accuracy, completeness or timeliness of the content. Liability for links to external websites lies solely with their operators.",
          "Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Für Links zu externen Websites sind ausschliesslich deren Betreiber verantwortlich.",
          "Le contenu de ce site a été élaboré avec le plus grand soin. Nous déclinons toutefois toute responsabilité quant à l'exactitude, l'exhaustivité et l'actualité du contenu. La responsabilité des liens vers des sites externes incombe exclusivement à leurs exploitants.",
          "I contenuti di questo sito sono stati redatti con la massima cura. Tuttavia non ci assumiamo alcuna responsabilità per l'esattezza, la completezza e l'attualità dei contenuti. La responsabilità per i link a siti esterni è esclusivamente dei rispettivi gestori.",
        ),
      },
    ],
  },
};
