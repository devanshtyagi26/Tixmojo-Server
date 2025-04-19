// server/routes/ticketRoutes.js
const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const generateTickets = require('../email/generateTickets');

router.get('/', ticketController.getTickets);

router.post('/send-ticket', generateTickets.sendTicket);

module.exports = router;
