// Helper function to format dates
const formatDate = (date) => {
  const day = date.getDate();
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
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
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = date.getDate();
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const dayName = days[date.getDay()];
  
  return `${dayName}, ${day} ${month}, ${year}`;
};

// Regular events data
const eventsData = [
  {
    id: "todays-live-concert",
    eventName: " Event 1",
    eventAddress: "Pulse Live (Former Yang), Sydney",
    eventLocation: "Sydney",
    eventPrice: "399",
    eventPoster: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2940&auto=format&fit=crop",
    rankScore: 95,
    eventRanking: "1",
    eventDateType: "today",
    date: formatFullDate(today),
    time: "07:00 pm to 11:00 pm (AEST)",
    venueName: "Pulse Live",
    venueAddress: "22 Darling Drive, Sydney NSW 2000",
    locationMap: "https://maps.google.com/?q=22+Darling+Drive+Sydney+NSW+2000",
    tags: ["Today's Event", "Music", "Live Concert", "Featured"],
    description: `<p>Experience the live concert event of the year with some of the best artists in the industry! Join us for an unforgettable night of music, energy, and entertainment.</p>
    <p>Lineup includes:</p>
    <ul>
      <li>Headliner performance by chart-topping artists</li>
      <li>Special guest appearances</li>
      <li>State-of-the-art sound and lighting</li>
      <li>VIP experiences available</li>
    </ul>
    <p>Doors open at 7:00 PM. Get your tickets early as this event will sell out!</p>`,
    organizer: "Sydney Live Events",
    sponsors: ["Spotify", "JBL"]
  },
  {
    id: "tomorrows-dance-party",
    eventName: "TOMORROW'S DANCE PARTY",
    eventAddress: "Marina Bay Sands, Sydney",
    eventLocation: "Sydney",
    eventPrice: "299",
    eventPoster: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2574&auto=format&fit=crop",
    rankScore: 90,
    eventRanking: "1",
    eventDateType: "tomorrow",
    date: formatFullDate(tomorrow),
    time: "09:00 pm to 03:00 am (AEST)",
    venueName: "Marina Bay Club",
    venueAddress: "35 Harbour Street, Sydney NSW 2000",
    locationMap: "https://maps.google.com/?q=35+Harbour+Street+Sydney+NSW+2000",
    tags: ["Tomorrow's Event", "Nightlife", "Dance", "18+"],
    description: `<p>The biggest dance party of the season is here! Join hundreds of party-goers for an electrifying night of dancing, music, and celebration.</p>
    <p>What to expect:</p>
    <ul>
      <li>Top DJs spinning the latest hits</li>
      <li>Multiple dance floors with different music genres</li>
      <li>Premium bar service</li>
      <li>Light shows and special effects</li>
      <li>Dress code: Stylish party attire</li>
    </ul>
    <p>This event is 18+ only. Valid ID required for entry.</p>`,
    organizer: "Sydney Nightlife Productions",
    sponsors: ["Red Bull", "Absolut"]
  },
  {
    id: "this-week-festival",
    eventName: "THIS WEEK FESTIVAL",
    eventAddress: "National Stadium, Sydney",
    eventLocation: "Sydney",
    eventPrice: "499",
    eventPoster: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2940&auto=format&fit=crop",
    rankScore: 88,
    eventRanking: "1",
    eventDateType: "thisWeek",
    date: formatFullDate(nextWeek),
    time: "12:00 pm to 11:00 pm (AEST)",
    venueName: "National Stadium",
    venueAddress: "Olympic Park, Sydney NSW 2127",
    locationMap: "https://maps.google.com/?q=Olympic+Park+Sydney+NSW+2127",
    tags: ["Festival", "Music", "Food", "Art", "All-Day"],
    description: `<p>The most anticipated festival of the year has arrived! A full day of music, art, food, and unforgettable experiences.</p>
    <p>Festival highlights:</p>
    <ul>
      <li>Multiple stages with over 30 performers</li>
      <li>International headliners and local talent</li>
      <li>Gourmet food stalls and craft beverages</li>
      <li>Interactive art installations</li>
      <li>Chill-out zones and VIP areas</li>
    </ul>
    <p>Festival runs rain or shine. No refunds. Come prepared for a day of fun!</p>`,
    organizer: "Festival Australia",
    sponsors: ["Corona", "Mastercard", "JBL"]
  },
  {
    id: "love-is-blind",
    eventName: "LOVE IS BLIND",
    eventAddress: "1-Altitude Coast, Singapore",
    eventLocation: "Singapore",
    eventPrice: "254",
    eventPoster: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2940&auto=format&fit=crop",
    rankScore: 92,
    eventRanking: "1",
    eventDateType: "nextWeek",
    date: "Sunday, 2 Mar, 2025",
    time: "02:00 pm to 05:00 pm (IST)",
    venueName: "1-Altitude Coast",
    venueAddress: "10 Artillery Avenue Singapore, 099951 Singapore",
    locationMap: "https://maps.google.com/?q=1-Altitude+Coast+Singapore+099951",
    tags: ["Bollywood", "Cultural", "Party", "International", "Themed"],
    description: `<p>Join us for an unforgettable evening celebrating the magic of Bollywood at our exclusive "Love is Blind" party. This vibrant event brings together the colorful aesthetics, energetic music, and romantic charm of Indian cinema.</p>
    <p>Experience a night filled with:</p>
    <ul>
      <li>Spectacular live performances</li>
      <li>DJ playing the best Bollywood hits</li>
      <li>Themed photo booths</li>
      <li>Special appearances</li>
      <li>Delicious Indian cuisine and drinks</li>
    </ul>
    <p>Dress code: Bollywood-inspired attire encouraged! Think colorful sarees, kurtas, or modern Bollywood fashion.</p>
    <p>This event sells out quickly every year, so secure your tickets early!</p>`,
    organizer: "Bollywood Nights Singapore",
    sponsors: ["HSBC"]
  }
];

// Spotlight events data
const spotlightEvents = [
  {
    id: "exclusive-arts-gala",
    eventName: "EXCLUSIVE ARTS GALA",
    eventAddress: "National Gallery, Sydney",
    eventLocation: "Sydney",
    eventPrice: "299",
    eventPoster: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2787&auto=format&fit=crop",
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
    sponsors: ["Sotheby's", "Westpac"]
  },
  {
    id: "vip-jazz-evening",
    eventName: "VIP JAZZ EVENING",
    eventAddress: "Opera House, Sydney",
    eventLocation: "Sydney",
    eventPrice: "349",
    eventPoster: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2940&auto=format&fit=crop",
    rankScore: 95,
    eventRanking: "2",
    eventDateType: "thisWeek",
    date: formatFullDate(nextWeek),
    time: "08:00 pm to 11:30 pm (AEST)",
    venueName: "Sydney Opera House",
    venueAddress: "Bennelong Point, Sydney NSW 2000",
    locationMap: "https://maps.google.com/?q=Sydney+Opera+House+Bennelong+Point+Sydney+NSW+2000",
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
    sponsors: ["Yamaha", "American Express"]
  }
];

// Carousel flyers data
const flyerData = [
  {
    id: "bollywood-sydney",
    image: "https://images.unsplash.com/photo-1556035511-3168381ea4d4?q=80&w=3087&auto=format&fit=crop",
    title: "Bollywood Sydney",
    location: "Mirror Bar, The Rocks",
    date: "15 MAR",
    ticketLink: "https://tixmojo.com",
    ticketSite: "TIXMOJO.COM"
  },
  {
    id: "st-patricks-day",
    image: "https://images.unsplash.com/photo-1628359355624-855775b5c9c4?q=80&w=3000&auto=format&fit=crop",
    title: "St. Patrick's Day",
    location: "Jameson Connects, Gurugram",
    date: "17 MAR",
    ticketLink: "https://tixmojo.com",
    ticketSite: "TIXMOJO.COM"
  },
  {
    id: "love-is-blind",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2940&auto=format&fit=crop",
    title: "Love is Blind",
    location: "1-Altitude Coast",
    date: "2 MAR",
    ticketLink: "https://tixmojo.com",
    ticketSite: "TIXMOJO.COM"
  }
];

module.exports = {
  eventsData,
  spotlightEvents,
  flyerData,
  formatDate,
  formatFullDate
};