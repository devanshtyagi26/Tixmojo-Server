# TixMojo API Server

Backend API server for TixMojo events platform.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Create a `.env` file in the server directory with:
```
PORT=5000
NODE_ENV=development
```

3. Start the server:
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

## API Endpoints

### Events

- `GET /api/events` - Get all events (optionally filtered by location)
- `GET /api/events/spotlight` - Get spotlight/featured events 
- `GET /api/events/flyers` - Get carousel flyers data
- `GET /api/events/locations` - Get available event locations
- `GET /api/events/:id` - Get single event by ID

### Health Check

- `GET /health` - Server health check endpoint

## Project Structure

- `/controllers` - API endpoint handlers
- `/data` - Static data for events (in-memory database)
- `/middleware` - Custom middleware (logging, error handling)
- `/routes` - API route definitions
- `/utils` - Utility functions 
- `server.js` - Main server entry point

## Environment Variables

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment mode (development, production)