// server/controllers/ticketController.js
const tickets = require('../data/tickets');

exports.getTickets = (req, res) => {
  res.json(tickets);
};
