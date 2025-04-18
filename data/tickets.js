// server/data/tickets.js
const tickets = [
  {
    id: 1,
    name: 'Early Bird Ticket',
    description: 'Includes entry for 1 person',
    price: '29.00',
    currency: 'AUD',
    available: 10
  },
  {
    id: 2,
    name: 'General Admission',
    description: 'Standard entry ticket',
    price: '39.00',
    currency: 'AUD',
    available: 50
  },
  {
    id: 3,
    name: 'VIP Package',
    description: 'Premium entry with exclusive perks',
    price: '79.00',
    currency: 'AUD',
    available: 5
  },
  {
    id: 4,
    name: 'Group Ticket (4 people)',
    description: 'Discounted entry for 4 people',
    price: '99.00',
    currency: 'AUD',
    available: 8
  },
  {
    id: 5,
    name: 'Backstage Pass',
    description: 'General admission + backstage access',
    price: '149.00',
    currency: 'AUD',
    available: 3
  }
];

module.exports = tickets;
