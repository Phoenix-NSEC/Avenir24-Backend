const mailTemplate = ({
  participantName,
  eventName,
  eventDate,
}: {
  participantName: string;
  eventName: string;
  eventDate?: string;
}) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Avenir 2024 Registration Confirmation</title>
  </head>
  <body>
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <img src="https://res.cloudinary.com/dlbiliyzy/image/upload/v1715175625/Letterhead-Mail_x5d9jv.png" alt="Avenir 2024 Logo" style="max-width: 100%; height: auto; display: block; margin: 0 auto 20px;">
          <h1>Congratulations! Your registration for Avenir 2024 has been successfully verified.</h1>
          
          <p>Dear ${participantName},</p>
          
          <p>We are thrilled to inform you that your registration for the ${eventName} at Avenir’24 has been successfully processed! Congratulations on securing your spot in what promises to be an exhilarating competition filled with excitement, enthusiasm, and enjoyment.</p>
          
          <h2>Registration Details:</h2>
          <ul>
              <li><strong>Event:</strong>${eventName}</li>
              <li><strong>Date:</strong>${eventDate}</li>
          </ul>
          
          <p>Please make sure to arrive at the venue well before the designated time, and don't hesitate to reach out to us if you have any questions or require further assistance. Our team is here to support you every step of the way.</p>
          
          <p>Once again, congratulations on your successful registration, and we look forward to seeing you shine at Avenir’24!</p>
          
          <p>Best regards,<br>
          PHOENIX</p>
          
          <p>For inquiries please contact:</p>
          <ul>
              <li>Yash Shaw: 7439558508</li>
              <li>Rajit Dutta: 9830487386</li>
          </ul>
      </div>
  </body>
  </html>
  `;
};

export default mailTemplate;
