<?php
include 'db_connection.php';

$queries = [
    "ALTER TABLE bookings ADD COLUMN hotel_name VARCHAR(100) DEFAULT 'Luxury Inn'",
    "ALTER TABLE bookings ADD COLUMN location VARCHAR(100) DEFAULT 'Mumbai'",
    "ALTER TABLE bookings ADD COLUMN payment_done DECIMAL(10,2) DEFAULT 0.00",
    "ALTER TABLE bookings ADD COLUMN remaining_payment DECIMAL(10,2) DEFAULT 0.00"
];

foreach ($queries as $query) {
    if ($conn->query($query) === TRUE) {
        echo "Query successful: $query\n";
    } else {
        echo "Query failed: $query - Error: " . $conn->error . "\n";
    }
}

$conn->close();
?>
