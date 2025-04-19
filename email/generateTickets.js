const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const generateTicketHTML = require('../utils/generateTicketHTML');
const sendMail = require('../utils/sendMails');

exports.sendTicket = async (req, res) => {
    const { name, email, eventName, bookingCode, seat, date } = req.body;

    // ✅ Step 1: Respond immediately to frontend
    res.status(200).json({ success: true, message: 'Ticket generation started.' });

    // ✅ Step 2: Handle PDF & email in background (no await in frontend)
    try {
        const html = generateTicketHTML({ name, eventName, bookingCode, seat, date });
        const pdfPath = path.join(__dirname, `../../email/${bookingCode}.pdf`);

        fs.mkdirSync(path.dirname(pdfPath), { recursive: true });

        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });
        await page.pdf({ path: pdfPath, format: 'A4' });
        await browser.close();

        // ✅ Step 3: Email the ticket PDF
        await sendMail(
            null,
            email,
            'ticket confirmation',
            {
                name,
                eventName,
                eventDate: date,
                ticketType: seat,
                ticketCount: 1,
                venue: 'See ticket',
                ticketId: bookingCode,
                attachmentPath: pdfPath
            }
        );

        console.log(`✅ Ticket email sent to ${email}`);
    } catch (err) {
        console.error('❌ Error during async ticket generation:', err);
    }
};
