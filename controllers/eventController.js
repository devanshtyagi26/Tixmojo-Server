const { formatDate, formatFullDate } = require('../data/events');
const { sendSuccess, sendError } = require('../utils/responseUtils');
const { connectToDatabase } = require('../utils/db');

/**
 * Get all events
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getAllEvents = async (req, res) => {
  let client;
  
  try {
    const location = req.query.location || 'Sydney';
    
    // Capitalize first letter for consistency
    const formattedLocation = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();
    
    // Connect to MongoDB
    const connection = await connectToDatabase();
    const db = connection.db;
    client = connection.client;
    
    // Get events for this location
    const events = await db.collection('events').find({ 
      eventLocation: formattedLocation,
      eventType: 'location' 
    }).toArray();
    
    return sendSuccess(res, events);
  } catch (error) {
    console.error('Error getting events:', error);
    return sendError(res, 500, 'Failed to get events', error);
  } finally {
    // Close the client connection if it exists
    if (client) {
      try {
        await client.close();
      } catch (err) {
        console.error('Error closing MongoDB connection:', err);
      }
    }
  }
};

/**
 * Get spotlight events
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getSpotlightEvents = async (req, res) => {
  let client;
  
  try {
    const location = req.query.location;
    
    // Connect to MongoDB
    const connection = await connectToDatabase();
    const db = connection.db;
    client = connection.client;
    
    // Base query to get spotlight events
    const query = { eventType: 'spotlight' };
    
    // Add location filter if provided
    if (location) {
      query.eventLocation = location.toLowerCase() === location ? 
        location : location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();
    }
    
    // Get spotlight events
    const spotlightEvents = await db.collection('events').find(query).toArray();
    
    return sendSuccess(res, spotlightEvents);
  } catch (error) {
    console.error('Error getting spotlight events:', error);
    return sendError(res, 500, 'Failed to get spotlight events', error);
  } finally {
    // Close the client connection if it exists
    if (client) {
      try {
        await client.close();
      } catch (err) {
        console.error('Error closing MongoDB connection:', err);
      }
    }
  }
};

/**
 * Get flyers for carousel
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getFlyers = async (req, res) => {
  let client;
  
  try {
    // Connect to MongoDB
    const connection = await connectToDatabase();
    const db = connection.db;
    client = connection.client;
    
    // Get flyers
    const flyers = await db.collection('flyers').find({}).toArray();
    
    return sendSuccess(res, flyers);
  } catch (error) {
    console.error('Error getting flyers:', error);
    return sendError(res, 500, 'Failed to get flyers', error);
  } finally {
    // Close the client connection if it exists
    if (client) {
      try {
        await client.close();
      } catch (err) {
        console.error('Error closing MongoDB connection:', err);
      }
    }
  }
};

/**
 * Get single event by ID
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getEventById = async (req, res) => {
  let client;
  
  try {
    const { id } = req.params;
    
    // Connect to MongoDB
    const connection = await connectToDatabase();
    const db = connection.db;
    client = connection.client;
    
    // Get event by ID
    const event = await db.collection('events').findOne({ id });
    
    // If not found, return 404
    if (!event) {
      return sendError(res, 404, 'Event not found');
    }
    
    // Make sure tags exist and are always returned as an array
    if (!event.tags) {
      event.tags = ["Featured Event"];
    } else if (!Array.isArray(event.tags)) {
      event.tags = [event.tags];
    }
    
    // Fetch organizer details if available
    if (event.organizerId) {
      // Get organizer details
      const organizer = await db.collection('organizers').findOne({ id: event.organizerId });
      
      if (organizer) {
        // Replace organizerId with full organizer details
        event.organizer = organizer;
        
        // Add organizer stats
        event.organizer.stats = {
          totalEvents: 24,
          rating: 4.9,
          ticketsSold: "5k+"
        };
      }
    }
    
    return sendSuccess(res, event);
  } catch (error) {
    console.error('Error getting event:', error);
    return sendError(res, 500, 'Failed to get event', error);
  } finally {
    // Close the client connection if it exists
    if (client) {
      try {
        await client.close();
      } catch (err) {
        console.error('Error closing MongoDB connection:', err);
      }
    }
  }
};

/**
 * Get available locations
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getLocations = async (req, res) => {
  let client;
  
  try {
    // Connect to MongoDB
    const connection = await connectToDatabase();
    const db = connection.db;
    client = connection.client;
    
    // Get locations from locations collection
    const locations = await db.collection('locations').find({}).toArray();
    const locationNames = locations.map(location => location.name);
    
    // Also get unique locations from events collection
    const eventLocations = await db.collection('events').distinct('eventLocation');
    
    // Combine and deduplicate
    const allLocations = [...new Set([...locationNames, ...eventLocations])];
    
    return sendSuccess(res, allLocations);
  } catch (error) {
    console.error('Error getting locations:', error);
    return sendError(res, 500, 'Failed to get locations', error);
  } finally {
    // Close the client connection if it exists
    if (client) {
      try {
        await client.close();
      } catch (err) {
        console.error('Error closing MongoDB connection:', err);
      }
    }
  }
};

/**
 * Get raw events data
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getRawEvents = async (req, res) => {
  let client;
  
  try {
    const location = req.query.location || 'Sydney';
    
    // Capitalize first letter for consistency
    const formattedLocation = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();
    
    // Connect to MongoDB
    const connection = await connectToDatabase();
    const db = connection.db;
    client = connection.client;
    
    // Get events for this location
    const events = await db.collection('events').find({ 
      eventLocation: formattedLocation 
    }).toArray();
    
    return sendSuccess(res, events);
  } catch (error) {
    console.error('Error getting raw events data:', error);
    return sendError(res, 500, 'Failed to get raw events data', error);
  } finally {
    // Close the client connection if it exists
    if (client) {
      try {
        await client.close();
      } catch (err) {
        console.error('Error closing MongoDB connection:', err);
      }
    }
  }
};

/**
 * Get location-specific events
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getLocationSpecificEvents = async (req, res) => {
  let client;
  
  try {
    const { location } = req.params;
    
    if (!location) {
      return sendError(res, 400, 'Location parameter is required');
    }
    
    // Capitalize first letter for consistency
    const formattedLocation = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();
    
    // Connect to MongoDB
    const connection = await connectToDatabase();
    const db = connection.db;
    client = connection.client;
    
    // Get events for this location
    const events = await db.collection('events').find({ 
      eventLocation: formattedLocation 
    }).toArray();
    
    return sendSuccess(res, events);
  } catch (error) {
    console.error('Error getting location-specific events:', error);
    return sendError(res, 500, 'Failed to get location events', error);
  } finally {
    // Close the client connection if it exists
    if (client) {
      try {
        await client.close();
      } catch (err) {
        console.error('Error closing MongoDB connection:', err);
      }
    }
  }
};

/**
 * Get location details with additional metadata
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getLocationDetails = async (req, res) => {
  let client;
  
  try {
    const { location } = req.params;
    
    // Connect to MongoDB
    const connection = await connectToDatabase();
    const db = connection.db;
    client = connection.client;
    
    // Get location details
    if (location) {
      // Get details for specific location
      const locationDetails = await db.collection('locationDetails').findOne({ id: location });
      
      if (!locationDetails) {
        return sendError(res, 404, 'Location details not found');
      }
      
      return sendSuccess(res, locationDetails);
    } else {
      // Get all location details
      const locationDetails = await db.collection('locationDetails').find({}).toArray();
      
      // Convert to object with location ID as key
      const locationDetailsObj = locationDetails.reduce((acc, location) => {
        acc[location.id] = location;
        return acc;
      }, {});
      
      return sendSuccess(res, locationDetailsObj);
    }
  } catch (error) {
    console.error('Error getting location details:', error);
    return sendError(res, 500, 'Failed to get location details', error);
  } finally {
    // Close the client connection if it exists
    if (client) {
      try {
        await client.close();
      } catch (err) {
        console.error('Error closing MongoDB connection:', err);
      }
    }
  }
};

/**
 * Get events by organizer ID
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getEventsByOrganizer = async (req, res) => {
  let client;
  
  try {
    const { organizerId } = req.params;
    
    if (!organizerId) {
      return sendError(res, 400, 'Organizer ID parameter is required');
    }
    
    // Connect to MongoDB
    const connection = await connectToDatabase();
    const db = connection.db;
    client = connection.client;
    
    // Get events for this organizer
    const events = await db.collection('events').find({ 
      organizerId: organizerId 
    }).toArray();
    
    return sendSuccess(res, events);
  } catch (error) {
    console.error('Error getting events by organizer:', error);
    return sendError(res, 500, 'Failed to get events by organizer', error);
  } finally {
    // Close the client connection if it exists
    if (client) {
      try {
        await client.close();
      } catch (err) {
        console.error('Error closing MongoDB connection:', err);
      }
    }
  }
};

/**
 * Get all application data in a single response
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getAllAppData = async (req, res) => {
  let client;
  
  try {
    // Connect to MongoDB
    const connection = await connectToDatabase();
    const db = connection.db;
    client = connection.client;
    
    // Get all data in parallel
    const [events, spotlightEvents, flyers, locationDetails, locations] = await Promise.all([
      db.collection('events').find({}).toArray(),
      db.collection('events').find({ eventType: 'spotlight' }).toArray(),
      db.collection('flyers').find({}).toArray(),
      db.collection('locationDetails').find({}).toArray(),
      db.collection('locations').find({}).toArray()
    ]);
    
    // Group events by location
    const locationEventsMap = events
      .filter(event => event.eventLocation && event.eventType !== 'spotlight')
      .reduce((map, event) => {
        const location = event.eventLocation;
        if (!map[location]) {
          map[location] = [];
        }
        map[location].push(event);
        return map;
      }, {});
    
    // Convert location details to object with location as key
    const locationDetailsObj = locationDetails.reduce((acc, location) => {
      acc[location.id] = location;
      return acc;
    }, {});
    
    // Extract location names
    const locationNames = locations.map(location => location.name);
    
    // Compile response
    const response = {
      locationEvents: locationEventsMap,
      spotlightEvents,
      flyerData: flyers,
      locationDetails: locationDetailsObj,
      locations: locationNames
    };
    
    return sendSuccess(res, response);
  } catch (error) {
    console.error('Error getting all app data:', error);
    return sendError(res, 500, 'Failed to get application data', error);
  } finally {
    // Close the client connection if it exists
    if (client) {
      try {
        await client.close();
      } catch (err) {
        console.error('Error closing MongoDB connection:', err);
      }
    }
  }
};

module.exports = {
  getAllEvents,
  getSpotlightEvents,
  getFlyers,
  getEventById,
  getLocations,
  getLocationDetails,
  getRawEvents,
  getLocationSpecificEvents,
  getEventsByOrganizer,
  getAllAppData
};