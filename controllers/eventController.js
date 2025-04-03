const { eventsData, spotlightEvents, flyerData } = require('../data/events');
const { sendSuccess, sendError } = require('../utils/responseUtils');

// Event location details with additional data
const locationDetails = {
  "Sydney": {
    title: "Events in Sydney",
    subtitle: "Discover the most popular events happening in Sydney right now",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop",
    description: "Sydney, capital of New South Wales and one of Australia's largest cities, is known for its vibrant arts scene and iconic harbour. Experience world-class entertainment, dining, and cultural events throughout the year."
  },
  "Melbourne": {
    title: "Events in Melbourne",
    subtitle: "Explore Melbourne's thriving cultural and entertainment scene",
    image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?q=80&w=2071&auto=format&fit=crop",
    description: "Melbourne, Australia's cultural capital, is home to vibrant arts, music, and food scenes. Discover hidden laneways, world-class galleries, and exciting events year-round."
  },
  "Brisbane": {
    title: "Events in Brisbane",
    subtitle: "Find the best entertainment options in Queensland's capital",
    image: "https://images.unsplash.com/photo-1629947487869-4e2ae7d2d724?q=80&w=2070&auto=format&fit=crop",
    description: "Brisbane offers a perfect blend of urban sophistication and outdoor adventure. Enjoy vibrant cultural events, riverside dining, and a thriving arts scene in this sun-soaked Queensland capital."
  },
  "Singapore": {
    title: "Events in Singapore",
    subtitle: "Experience the best of Singapore's entertainment calendar",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2070&auto=format&fit=crop",
    description: "Singapore, a global city with a rich cultural tapestry, offers year-round events ranging from international festivals to local celebrations, all set against a backdrop of futuristic architecture and lush gardens."
  }
};

/**
 * Get all events
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getAllEvents = (req, res) => {
  try {
    const location = req.query.location || 'Sydney';
    
    // Filter events by location if provided
    const filteredEvents = eventsData.filter(event => 
      !location || event.eventLocation.toLowerCase() === location.toLowerCase()
    );
    
    return sendSuccess(res, filteredEvents);
  } catch (error) {
    console.error('Error getting events:', error);
    return sendError(res, 500, 'Failed to get events', error);
  }
};

/**
 * Get spotlight events
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getSpotlightEvents = (req, res) => {
  try {
    const location = req.query.location || 'Sydney';
    
    // Filter events by location if provided
    const filteredEvents = spotlightEvents.filter(event => 
      !location || event.eventLocation.toLowerCase() === location.toLowerCase()
    );
    
    return sendSuccess(res, filteredEvents);
  } catch (error) {
    console.error('Error getting spotlight events:', error);
    return sendError(res, 500, 'Failed to get spotlight events', error);
  }
};

/**
 * Get flyers for carousel
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getFlyers = (req, res) => {
  try {
    return sendSuccess(res, flyerData);
  } catch (error) {
    console.error('Error getting flyers:', error);
    return sendError(res, 500, 'Failed to get flyers', error);
  }
};

/**
 * Get single event by ID
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getEventById = (req, res) => {
  try {
    const { id } = req.params;
    
    // First check regular events
    let event = eventsData.find(event => event.id === id);
    
    // If not found, check spotlight events
    if (!event) {
      event = spotlightEvents.find(event => event.id === id);
    }
    
    // If still not found, return 404
    if (!event) {
      return sendError(res, 404, 'Event not found');
    }
    
    // Log tags for debugging
    console.log(`Event ${id} tags:`, event.tags);
    console.log('Is tags array?', Array.isArray(event.tags));
    
    // Make sure tags exist and are always returned as an array
    if (!event.tags) {
      event.tags = ["Featured Event"];
    } else if (!Array.isArray(event.tags)) {
      event.tags = [event.tags];
    }
    
    return sendSuccess(res, event);
  } catch (error) {
    console.error('Error getting event:', error);
    return sendError(res, 500, 'Failed to get event', error);
  }
};

/**
 * Get available locations
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getLocations = (req, res) => {
  try {
    // Extract unique locations from events
    const allEvents = [...eventsData, ...spotlightEvents];
    const locations = [...new Set(allEvents.map(event => event.eventLocation))];
    
    return sendSuccess(res, locations);
  } catch (error) {
    console.error('Error getting locations:', error);
    return sendError(res, 500, 'Failed to get locations', error);
  }
};

/**
 * Get raw events data directly from eventsData array
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getRawEvents = (req, res) => {
  try {
    const location = req.query.location || 'Sydney';
    
    // Filter events by location if provided
    const filteredEvents = eventsData.filter(event => 
      !location || event.eventLocation.toLowerCase() === location.toLowerCase()
    );
    
    return sendSuccess(res, filteredEvents);
  } catch (error) {
    console.error('Error getting raw events data:', error);
    return sendError(res, 500, 'Failed to get raw events data', error);
  }
};

/**
 * Get location details with additional metadata
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getLocationDetails = (req, res) => {
  try {
    const { location } = req.params;
    
    // Get details for the requested location
    if (location && locationDetails[location]) {
      return sendSuccess(res, locationDetails[location]);
    } 
    // If location is not specified or not found, return all locations data
    else if (!location) {
      return sendSuccess(res, locationDetails);
    }
    // Location not found
    else {
      return sendError(res, 404, 'Location details not found');
    }
  } catch (error) {
    console.error('Error getting location details:', error);
    return sendError(res, 500, 'Failed to get location details', error);
  }
};

module.exports = {
  getAllEvents,
  getSpotlightEvents,
  getFlyers,
  getEventById,
  getLocations,
  getLocationDetails,
  getRawEvents
};