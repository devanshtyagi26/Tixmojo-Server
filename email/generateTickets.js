const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const generateTicketHTML = require('../email/generateTicketHTML');
const sendMail = require('../utils/sendMails');

exports.sendTicket = async (req, res) => {
    const { name, email, eventName, bookingCode, seat, date } = req.body;
    console.log('🔥 /api/tickets/send-ticket HIT');
    console.log('📥 Payload:', req.body);

    const html = generateTicketHTML({ name, eventName, bookingCode, seat, date });
    const pdfPath = path.join(__dirname, `../../email/${bookingCode}.pdf`);

    // Ensure /email folder exists
    fs.mkdirSync(path.dirname(pdfPath), { recursive: true });

    try {
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });

        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });
        await page.pdf({ path: pdfPath, format: 'A4' });
        await browser.close();

        // Send using your unified mailer
        await sendMail(
            null, // ID (optional if not verifying user)
            email,
            'ticket confirmation',
            {
                name,
                eventName,
                eventDate: date,
                ticketType: seat,
                ticketCount: 1,
                venue: 'See ticket', // or pass real venue
                ticketId: bookingCode,
                attachmentPath: pdfPath
            }
        );

        console.log('🎯 /send-ticket route hit');
        console.log('📧 Sending ticket to:', email);
        console.log('📄 Ticket PDF path:', pdfPath);
        return res.json({ success: true });
    } catch (error) {
        console.error('Error generating or sending ticket:', error);
        return res.status(500).json({ success: false, message: 'Ticket delivery failed.' });
    }
};
