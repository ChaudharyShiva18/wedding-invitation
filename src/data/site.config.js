/**
 * Edit this file to launch or customize the site.
 * No other source files need content changes.
 */

export const site = {
  siteUrl: "https://username.github.io/DeW/",
  defaultTheme: "lotus",
  themes: [
    { id: "marigold", label: "Marigold" },
    { id: "ruby", label: "Ruby" },
    { id: "emerald", label: "Emerald" },
    { id: "sapphire", label: "Sapphire" },
    { id: "lotus", label: "Lotus" },
  ],
  meta: {
    title: "Shiva & Nikita — We're getting married",
    description:
      "Join Shiva and Nikita in Dehradun on 12 December 2026. Ceremony, celebrations, and all the details.",
  },
  couple: {
    partnerA: "Shiva",
    partnerB: "Nikita",
  },
  hashtag: "#vani",
  weddingDateIso: "2026-12-12T23:30:00+05:30",
  displayDate: "12 December 2026",
  city: "Dehradun, Uttarakhand",
  // On hold for now
  music: {
    src: "music/celebration.wav",
    labelPlay: "Play music",
    labelPause: "Pause music",
  },
  skipLink: "Skip to content",
  hero: {
    kicker: "When the world stood still, we found forever",
    ctaLabel: "Step into our story",
    ctaHref: "#invitation",
  },
  invitation: {
    eyebrow: "A verse from us",
    heading: "Found in stillness, bound by song",
    paragraphs: [
      "Our story first found its opening notes in the familiar rush of college corridors. Yet it was when the world suddenly went quiet—when lockdowns kept everyone miles apart—that we truly found each other. While everything outside stood still, endless conversations and shared playlists bridged the distance, quietly revealing that we were always meant to walk through life side by side.",
      "Since then, our favourite chapters have been written in music and mountain air—chasing melodies, winding hill roads, and the simple comfort of home in one another.",
      "This December, beneath the winter skies and foothills of Dehradun, we begin our forever. Come with your warmth, your laughter, and your blessings as we turn our favourite song into a lifetime.",
    ],
    signOff: "Yours in melody & love",
  },
  countdown: {
    heading: "Until we say I do",
    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    arrivedHeading: "The day is here",
    arrivedMessage: "The celebrations have begun. We cannot wait to see you.",
  },
  lineup: {
    eyebrow: "The celebrations",
    heading: "Event line-up",
    mapsLabel: "Open in Google Maps",
  },
  events: [
    {
      id: "engagement",
      title: "Engagement",
      date: "14 November 2026",
      time: "Celebrated",
      venue: "Royal Pepper Banquet Hall (Krish), Delhi",
      note: "Rings exchanged, blessings collected, and chapter one officially locked in. We already said yes—now come help us seal the deal.",
      accent: "ruby",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Royal+Pepper+Banquet+Hall+Krish+Wazirpur+Delhi",
    },
    {
      id: "haldi",
      title: "Haldi",
      date: "9 December 2026",
      time: "11:00 AM", // Confirm exact start time
      venue: "Our Residence, Village Bhanera Jat",
      note: "Equal parts sacred blessing and full-contact turmeric ambush. Come ready to glow—and probably leave a shade brighter.",
      accent: "marigold",
      mapsUrl: "https://maps.app.goo.gl/AWr2NFXC2KHLdDeu6",
    },
    {
      id: "sangeet",
      title: "Mehandi & Sangeet",
      date: "10 December 2026",
      time: "5:00 PM", // Confirm exact start time
      venue: "Our Residence, Village Bhanera Jat",
      note: "Fresh henna, playlists turned up past sensible limits, and questionable dance moves cheered on like stadium anthems.",
      accent: "emerald",
      mapsUrl: "https://maps.app.goo.gl/AWr2NFXC2KHLdDeu6",
    },
    {
      id: "mandha",
      title: "Mandha",
      date: "11 December 2026",
      time: "12:00 PM",
      venue: "Our Residence, Village Bhanera Jat",
      note: "Time-honoured rituals, warm household chaos, hearty food, and a courtyard full of family stories before the big send-off.",
      accent: "marigold",
      mapsUrl: "https://maps.app.goo.gl/AWr2NFXC2KHLdDeu6",
    },
    {
      id: "ghudchadi",
      title: "Ghudchadi",
      date: "11 December 2026",
      time: "7:00 PM",
      venue: "Our Residence, Village Bhanera Jat",
      note: "Dhol beats on full blast, cousins claiming the front row, and the groom's grand send-off through Bhanera Jat.",
      accent: "sapphire",
      mapsUrl: "https://maps.app.goo.gl/AWr2NFXC2KHLdDeu6",
    },
    {
      id: "wedding",
      title: "Wedding",
      date: "12 December 2026",
      time: "05:30 PM", // Confirm if you want Baraat/dinner time shown earlier
      venue: "Le OVAL Hotel & Resort, Dehradun",
      note: "Seven vows under a crisp winter sky in the foothills—from a world paused in lockdown to forever, with the mountains looking on.",
      accent: "lotus",
      mapsUrl: "https://maps.app.goo.gl/zxjXebFxJSkmuUbY7",
    },
  ],
  venue: {
    eyebrow: "Find us",
    heading: "The wedding venue",
    name: "Le OVAL Hotel & Resort",
    addressLines: [
      "Near Reliance Jio-bp Pump, Kuwan Wala",
      "Harrawala, Dehradun, Uttarakhand 248005",
      "India",
    ],
    directions:
      "Located on Haridwar Road (NH 7), right near the Reliance Jio-bp Pump in Kuwan Wala, Harrawala. Harrawala Railway Station is about 5.4 km (10 minutes) away, and Dehradun Railway Station is roughly 14 km (20 minutes) away. Complimentary valet parking is available at the main entrance.",
    mapsCta: "Open in Google Maps",
    mapsUrl: "https://maps.app.goo.gl/zxjXebFxJSkmuUbY7",
    loadMapLabel: "Load the map",
    mapTitle: "Map of Le OVAL Hotel & Resort, Dehradun",
    embedUrl:
      "https://maps.google.com/maps?q=Le+OVAL+Hotel+%26+Resort,+Kuwan+Wala,+Harrawala,+Dehradun&t=&z=15&ie=UTF8&iwloc=&output=embed",
    facadeCaption:
      "Tap to load Google Maps. The map is not loaded until you ask, so the page stays light.",
  },
  // On hold for now (kept intact so existing components do not break)
  gallery: {
    eyebrow: "A few frames",
    heading: "From our story so far",
    lightboxLabel: "Photo viewer",
    closeLabel: "Close",
    prevLabel: "Previous photo",
    nextLabel: "Next photo",
    photos: [
      { src: "photos/1.jpeg", alt: "Shiva and Nikita — Moment 1", width: 800, height: 600 },
      { src: "photos/2.jpeg", alt: "Shiva and Nikita — Moment 2", width: 800, height: 600 },
      { src: "photos/3.jpeg", alt: "Shiva and Nikita — Moment 3", width: 800, height: 600 },
      { src: "photos/4.jpeg", alt: "Shiva and Nikita — Moment 4", width: 800, height: 600 },
      { src: "photos/5.jpeg", alt: "Shiva and Nikita — Moment 5", width: 800, height: 600 },
      { src: "photos/6.jpeg", alt: "Shiva and Nikita — Moment 6", width: 800, height: 600 },
      { src: "photos/7.jpeg", alt: "Shiva and Nikita — Moment 7", width: 800, height: 600 },
      { src: "photos/8.jpeg", alt: "Shiva and Nikita — Moment 8", width: 800, height: 600 },
    ],
  },
  footer: {
    closing: "We cannot wait to celebrate with you.",
    instagramPrompt: "Capturing the moments? Tag us in your stories with",
    instagram: [
      {
        handle: "@shiva.chaudhary_._",
        url: "https://www.instagram.com/shiva.chaudhary_._/",
      },
      {
        handle: "@tayalnikita_",
        url: "https://www.instagram.com/tayalnikita_/",
      },
    ],
    crafted: "With love, from our little corner of the internet.",
  },
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "invitation", label: "Invite" },
  { id: "lineup", label: "Events" },
  { id: "venue", label: "Venue" },
  { id: "gallery", label: "Photos" },
];

export default site;