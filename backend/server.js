const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000; // ✅ Server runs on port 3000

app.use(cors());
app.use(bodyParser.json());

// ✅ MySQL Connection (now correctly using port 3307)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Aditya5#',
  database: 'hotel_booking_system',
  port: 3307 // ✅ Correct port for MySQL
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
  } else {
    console.log('✅ Connected to MySQL DB on port 3307');
  }
});

// ✅ Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Booking System!');
});

// ✅ Route to save booking
app.post('/bookings', (req, res) => {
  const {
    name,
    email,
    checkInDate,
    checkOutDate,
    paymentMethod,
    amountPaid
  } = req.body;

  const sql = `
    INSERT INTO bookings
    (name, email, check_in, check_out, payment_method, amount_paid)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, email, checkInDate, checkOutDate, paymentMethod, amountPaid],
    (err, result) => {
      if (err) {
        console.error('❌ Booking insert error:', err);
        return res.status(500).send('Failed to save booking');
      }
      res.send('✅ Booking saved!');
    }
  );
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
