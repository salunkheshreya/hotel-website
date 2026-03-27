<?php
include 'db_connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$query = "SELECT CONCAT('BK', LPAD(b.id, 3, '0')) as id, COALESCE(b.guest_name, u.name, 'Guest') as guest, b.room_type as room, b.check_in as checkIn, b.check_out as checkOut, b.total_price as amount, 'Confirmed' as status 
          FROM bookings b 
          LEFT JOIN users u ON b.user_email = u.email 
          ORDER BY b.created_at DESC";

$result = $conn->query($query);

$bookings = [];
if ($result && $result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $bookings[] = $row;
    }
}

echo json_encode(["status" => "success", "bookings" => $bookings]);
$conn->close();
?>
