const mailTemplate = () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Notification</title>
</head>
<body>
  <h1>Your registration has been successfully verified</h1>
  <p>
    Congratulations! We're thrilled to inform you that your registration has been successfully verified. You're now a part of our community!
  </p>
  <p>
    At our upcoming event, we look forward to welcoming you and offering valuable insights into the latest industry trends. Your participation will enrich our discussions and contribute to a vibrant exchange of ideas.
  </p>
  <p>
    Should you have any questions or need assistance, please don't hesitate to reach out to us. We're here to ensure your experience with us is seamless and enjoyable.
  </p>
  <p>
    We're excited about the journey ahead and the opportunities to connect, learn, and grow together. Thank you for being a part of our community!
  </p>
  <p>For enquiries, please contact:</p>
  <ul>
    <li>John Doe - john.doe@example.com</li>
    <li>Jane Smith - jane.smith@example.com</li>
  </ul>
</body>
</html>


`;

module.exports = mailTemplate;
