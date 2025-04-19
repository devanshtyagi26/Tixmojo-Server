// utils/generateTicketHTML.js
module.exports = function generateTicketHTML({ name, eventName, bookingCode, seat, date }) {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              padding: 30px;
              color: #333;
            }
            .ticket {
              border: 2px dashed #6f44ff;
              padding: 20px;
              border-radius: 10px;
              max-width: 500px;
              margin: auto;
            }
            h1 {
              color: #6f44ff;
            }
            .label {
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="ticket">
            <h1>🎟️ TixMojo Ticket</h1>
            <p><span class="label">Event:</span> ${eventName}</p>
            <p><span class="label">Name:</span> ${name}</p>
            <p><span class="label">Booking Code:</span> ${bookingCode}</p>
            <p><span class="label">Seat:</span> ${seat}</p>
            <p><span class="label">Date:</span> ${date}</p>
          </div>
        </body>
      </html>
    `;
};
