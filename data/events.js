// Helper function to format dates
const formatDate = (date) => {
  const day = date.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  return `${day} ${month}`;
};

// Generate dates for events
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const todayFormatted = formatDate(today);
const tomorrowFormatted = formatDate(tomorrow);

// One week from now
const nextWeek = new Date(today);
nextWeek.setDate(nextWeek.getDate() + 7);
const nextWeekFormatted = formatDate(nextWeek);

// One month from now
const nextMonth = new Date(today);
nextMonth.setMonth(nextMonth.getMonth() + 1);
const nextMonthFormatted = formatDate(nextMonth);

// Format for human readable display
const formatFullDate = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = date.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const dayName = days[date.getDay()];

  return `${dayName}, ${day} ${month}, ${year}`;
};

// Spotlight events data
const spotlightEvents = [
  {
    id: "exclusive-arts-gala",
    eventName: "EXCLUSIVE ARTS GALA",
    eventAddress: "National Gallery, Sydney",
    eventLocation: "Sydney",
    eventPrice: "299",
    eventPoster:
      "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2787&auto=format&fit=crop",
    rankScore: 98,
    eventRanking: "1",
    eventDateType: "nextWeek",
    date: formatFullDate(nextWeek),
    time: "07:00 pm to 11:00 pm (AEST)",
    venueName: "National Gallery",
    venueAddress: "Art Avenue, Sydney NSW 2000",
    locationMap: "https://maps.google.com/?q=National+Gallery+Sydney+NSW+2000",
    tags: ["Art", "Exhibition", "Gala", "Formal", "VIP"],
    description: `<p>Join us for the most prestigious arts event of the year. The Exclusive Arts Gala brings together acclaimed artists, collectors, and art enthusiasts for an evening of culture and elegance.</p>
    <p>Event highlights:</p>
    <ul>
      <li>Exhibition of rare and exclusive artworks</li>
      <li>Silent auction of select pieces</li>
      <li>Live performances by renowned musicians</li>
      <li>Gourmet catering and premium beverages</li>
      <li>Networking with industry leaders</li>
    </ul>
    <p>Formal attire required. Limited tickets available.</p>`,
    organizer: "Sydney Arts Foundation",
    sponsors: ["Sotheby's", "Westpac"],
  },
  {
    id: "vip-jazz-evening",
    eventName: "VIP JAZZ EVENING",
    eventAddress: "Opera House, Sydney",
    eventLocation: "Sydney",
    eventPrice: "349",
    eventPoster:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2940&auto=format&fit=crop",
    rankScore: 95,
    eventRanking: "2",
    eventDateType: "thisWeek",
    date: formatFullDate(nextWeek),
    time: "08:00 pm to 11:30 pm (AEST)",
    venueName: "Sydney Opera House",
    venueAddress: "Bennelong Point, Sydney NSW 2000",
    locationMap:
      "https://maps.google.com/?q=Sydney+Opera+House+Bennelong+Point+Sydney+NSW+2000",
    tags: ["Jazz", "VIP", "Live Music", "Opera House", "Evening"],
    description: `<p>An intimate evening of world-class jazz at the iconic Sydney Opera House. This VIP event features acclaimed jazz musicians in a sophisticated setting.</p>
    <p>The evening includes:</p>
    <ul>
      <li>Performances by award-winning jazz artists</li>
      <li>Intimate concert hall setting with perfect acoustics</li>
      <li>Pre-show reception with complimentary champagne</li>
      <li>Meet and greet with the performers (VIP ticket holders only)</li>
      <li>Commemorative program</li>
    </ul>
    <p>Smart casual attire. Early arrival recommended.</p>`,
    organizer: "Sydney Jazz Foundation",
    sponsors: ["Yamaha", "American Express"],
  },
];

// Carousel flyers data
const flyerData = [
  {
    id: "bollywood-sydney",
    image:
      "https://images.unsplash.com/photo-1556035511-3168381ea4d4?q=80&w=3087&auto=format&fit=crop",
    title: "Bollywood Sydney",
    location: "Mirror Bar, The Rocks",
    date: "15 MAR",
    ticketLink: "https://tixmojo.com",
    ticketSite: "TIXMOJO.COM",
  },
  {
    id: "st-patricks-day",
    image:
      "https://images.unsplash.com/photo-1628359355624-855775b5c9c4?q=80&w=3000&auto=format&fit=crop",
    title: "St. Patrick's Day",
    location: "Jameson Connects, Gurugram",
    date: "17 MAR",
    ticketLink: "https://tixmojo.com",
    ticketSite: "TIXMOJO.COM",
  },
  {
    id: "love-is-blind",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2940&auto=format&fit=crop",
    title: "Love is Blind",
    location: "1-Altitude Coast",
    date: "2 MAR",
    ticketLink: "https://tixmojo.com",
    ticketSite: "TIXMOJO.COM",
  },
];

// Custom events for Sydney and Singapore
const sydneyEvents = [
  {
    id: "sydney-opera-house-symphony",
    eventName: "SYDNEY OPERA HOUSE SYMPHONY",
    eventAddress: "Sydney Opera House, Sydney",
    eventLocation: "Sydney",
    eventPrice: "199",
    eventPoster: "https://images.unsplash.com/photo-1595740229246-cfdda61917c6?q=80&w=2836&auto=format&fit=crop",
    rankScore: 98,
    eventRanking: "1",
    eventDateType: "thisWeek",
    date: formatFullDate(nextWeek),
    time: "7:30 pm to 10:00 pm (AEST)",
    venueName: "Sydney Opera House",
    venueAddress: "Bennelong Point, Sydney NSW 2000",
    locationMap: "https://maps.google.com/?q=Sydney+Opera+House",
    tags: ["Classical", "Symphony", "Orchestra", "Cultural"],
    description: `<p>Experience the magic of classical music at the iconic Sydney Opera House. The Sydney Symphony Orchestra presents an evening of timeless compositions by Mozart, Beethoven, and Tchaikovsky.</p>
    <p>The program includes:</p>
    <ul>
      <li>Mozart's Symphony No. 40 in G minor</li>
      <li>Beethoven's Piano Concerto No. 5</li>
      <li>Tchaikovsky's Symphony No. 6 "Pathétique"</li>
    </ul>
    <p>This performance features world-renowned guest conductor James Williams and piano soloist Emily Chang.</p>`,
    organizer: "Sydney Symphony Orchestra",
    sponsors: ["Australia Council for the Arts", "NSW Government"]
  },
  {
    id: "sydney-harbour-food-festival",
    eventName: "SYDNEY HARBOUR FOOD FESTIVAL",
    eventAddress: "Circular Quay, Sydney",
    eventLocation: "Sydney",
    eventPrice: "75",
    eventPoster: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2940&auto=format&fit=crop",
    rankScore: 96,
    eventRanking: "2",
    eventDateType: "today",
    date: formatFullDate(today),
    time: "11:00 am to 9:00 pm (AEST)",
    venueName: "Circular Quay",
    venueAddress: "Circular Quay, Sydney NSW 2000",
    locationMap: "https://maps.google.com/?q=Circular+Quay+Sydney",
    tags: ["Food", "Festival", "Culinary", "Waterfront", "Today's Event"],
    description: `<p>Indulge in the ultimate culinary experience at the Sydney Harbour Food Festival. Set against the stunning backdrop of Sydney Harbour, this festival brings together the city's finest chefs, restaurants, and food producers.</p>
    <p>Festival highlights:</p>
    <ul>
      <li>Cooking demonstrations by celebrity chefs</li>
      <li>Artisanal food market featuring local producers</li>
      <li>Wine and craft beer tasting sessions</li>
      <li>Seafood pavilion showcasing fresh Australian seafood</li>
      <li>Street food alley with international cuisines</li>
      <li>Live music and entertainment throughout the day</li>
    </ul>
    <p>Tickets include entry and five food sampling tokens. Additional tokens available for purchase at the event.</p>`,
    organizer: "Sydney Food Events",
    sponsors: ["Tourism NSW", "Australian Culinary Federation"]
  },
  {
    id: "bondi-beach-volleyball-tournament",
    eventName: "BONDI BEACH VOLLEYBALL TOURNAMENT",
    eventAddress: "Bondi Beach, Sydney",
    eventLocation: "Sydney",
    eventPrice: "25",
    eventPoster: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2007&auto=format&fit=crop",
    rankScore: 92,
    eventRanking: "3",
    eventDateType: "tomorrow",
    date: formatFullDate(tomorrow),
    time: "9:00 am to 6:00 pm (AEST)",
    venueName: "Bondi Beach",
    venueAddress: "Queen Elizabeth Dr, Bondi Beach NSW 2026",
    locationMap: "https://maps.google.com/?q=Bondi+Beach+Sydney",
    tags: ["Sports", "Beach", "Volleyball", "Tournament", "Tomorrow's Event"],
    description: `<p>Join us for the annual Bondi Beach Volleyball Tournament, featuring competitive matches, music, food, and good vibes!</p>
    <p>Event details:</p>
    <ul>
      <li>Professional and amateur divisions</li>
      <li>Teams of 2-4 players (register in advance)</li>
      <li>Cash prizes for winning teams</li>
      <li>Beach bar and food stalls</li>
      <li>DJ sets throughout the day</li>
      <li>Free volleyball clinics for spectators</li>
    </ul>
    <p>Spectator tickets include access to viewing areas, shade tents, and one complimentary drink.</p>`,
    organizer: "Sydney Beach Sports Association",
    sponsors: ["Mikasa", "Australian Volleyball Federation"]
  }
];

const singaporeEvents = [
  {
    id: "gardens-by-the-bay-light-festival",
    eventName: "GARDENS BY THE BAY LIGHT FESTIVAL",
    eventAddress: "Gardens by the Bay, Singapore",
    eventLocation: "Singapore",
    eventPrice: "35",
    eventPoster: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2835&auto=format&fit=crop",
    rankScore: 97,
    eventRanking: "1",
    eventDateType: "thisWeek",
    date: formatFullDate(nextWeek),
    time: "7:00 pm to 11:00 pm (SGT)",
    venueName: "Gardens by the Bay",
    venueAddress: "18 Marina Gardens Dr, Singapore 018953",
    locationMap: "https://maps.google.com/?q=Gardens+by+the+Bay+Singapore",
    tags: ["Light Festival", "Art", "Outdoor", "Family"],
    description: `<p>Witness Gardens by the Bay transformed into a magical wonderland of lights and sounds during this spectacular night festival.</p>
    <p>Festival features:</p>
    <ul>
      <li>Immersive light installations by international artists</li>
      <li>Interactive projection mapping on the Supertrees</li>
      <li>Illuminated garden trails</li>
      <li>Live performances by local and international musicians</li>
      <li>Food village featuring Singapore's best street food</li>
      <li>Art workshops for all ages</li>
    </ul>
    <p>Special extended hours for the Flower Dome and Cloud Forest during the festival period.</p>`,
    organizer: "Gardens by the Bay",
    sponsors: ["Singapore Tourism Board", "National Arts Council"]
  },
  {
    id: "singapore-night-food-tour",
    eventName: "SINGAPORE NIGHT FOOD TOUR",
    eventAddress: "Chinatown, Singapore",
    eventLocation: "Singapore",
    eventPrice: "85",
    eventPoster: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=2940&auto=format&fit=crop",
    rankScore: 94,
    eventRanking: "2",
    eventDateType: "tomorrow",
    date: formatFullDate(tomorrow),
    time: "6:00 pm to 10:00 pm (SGT)",
    venueName: "Chinatown Food Street",
    venueAddress: "Smith Street, Chinatown, Singapore",
    locationMap: "https://maps.google.com/?q=Chinatown+Food+Street+Singapore",
    tags: ["Food Tour", "Culinary", "Cultural", "Night", "Tomorrow's Event"],
    description: `<p>Embark on a gastronomic journey through Singapore's vibrant food scene on this guided night food tour.</p>
    <p>Tour highlights:</p>
    <ul>
      <li>Visit to 5 different food stops across Singapore's diverse neighborhoods</li>
      <li>Sample over 12 local dishes and delicacies</li>
      <li>Learn about the cultural significance of Singapore's hawker centers</li>
      <li>Try Singapore's signature dishes like Hainanese Chicken Rice, Laksa, and Chili Crab</li>
      <li>Expert local guide sharing insights on Singapore's food culture</li>
      <li>Small group experience (maximum 8 participants)</li>
    </ul>
    <p>Tour includes all food tastings, one local beverage, and transportation between food stops.</p>`,
    organizer: "Singapore Food Trails",
    sponsors: ["Singapore Tourism Board"]
  },
  {
    id: "marina-bay-tech-conference",
    eventName: "MARINA BAY TECH CONFERENCE",
    eventAddress: "Marina Bay Sands, Singapore",
    eventLocation: "Singapore",
    eventPrice: "299",
    eventPoster: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=2940&auto=format&fit=crop",
    rankScore: 93,
    eventRanking: "3",
    eventDateType: "today",
    date: formatFullDate(today),
    time: "9:00 am to 6:00 pm (SGT)",
    venueName: "Marina Bay Sands Convention Centre",
    venueAddress: "10 Bayfront Avenue, Singapore 018956",
    locationMap: "https://maps.google.com/?q=Marina+Bay+Sands+Singapore",
    tags: ["Tech", "Conference", "Business", "Innovation", "Today's Event"],
    description: `<p>Asia's premier technology conference bringing together innovators, entrepreneurs, and industry leaders to explore the future of technology.</p>
    <p>Conference agenda:</p>
    <ul>
      <li>Keynote speeches by global tech visionaries</li>
      <li>Panel discussions on AI, blockchain, cybersecurity, and more</li>
      <li>Startup pitch competition with $100,000 prize</li>
      <li>Product demos and interactive exhibitions</li>
      <li>Networking sessions with industry leaders</li>
      <li>Career fair featuring top tech companies</li>
    </ul>
    <p>Full day pass includes access to all sessions, lunch, refreshments, and networking reception.</p>`,
    organizer: "TechAsia Events",
    sponsors: ["Google", "Microsoft", "Singapore Economic Development Board"]
  }
];

// Add location-specific events collections
const locationEvents = {
  "Sydney": sydneyEvents,
  "Singapore": singaporeEvents
};

module.exports = {
  spotlightEvents,
  flyerData,
  locationEvents,
  formatDate,
  formatFullDate,
};
