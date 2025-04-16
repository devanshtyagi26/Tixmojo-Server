const express = require('express');
const router = express.Router();
const { 
  contactValidationRules, 
  submitContactForm
} = require('../controllers/contactController');

// POST /api/contact - Submit contact form
router.post('/', contactValidationRules, submitContactForm);

module.exports = router;