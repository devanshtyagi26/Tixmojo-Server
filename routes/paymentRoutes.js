require('dotenv').config();
const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY_DEV);

router.post('/create-intent', async (req, res) => {
    try {
        const { amount, currency = 'usd', email, eventName } = req.body;

        if (!amount || isNaN(amount) || amount <= 0) {
            return res.status(400).json({ error: 'Invalid amount' });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100),
            currency,
            metadata: {
                email: email || 'no_email',
                event: eventName || 'unknown_event',
            },
        });

        res.json({
            id: paymentIntent.id,
            clientSecret: paymentIntent.client_secret,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
