<?php
include 'db_connection.php';

$response = array();

// 1. Fetch Summary Stats
$statsQuery = "SELECT 
                COALESCE(SUM(total_price), 0) as totalRevenue, 
                COUNT(*) as bookingsCount, 
                COALESCE(SUM(guests), 0) as totalGuests,
                COUNT(*) as totalPayments 
              FROM bookings";
$statsResult = $conn->query($statsQuery);
$stats = $statsResult->fetch_assoc();

// 2. Fetch Recent Bookings
$recentQuery = "SELECT id, guest_name as guest, room_type as room, check_in as date, total_price as amount, 'Confirmed' as status 
                FROM bookings 
                ORDER BY created_at DESC LIMIT 5";
$recentResult = $conn->query($recentQuery);
$recentBookings = array();
while($row = $recentResult->fetch_assoc()) {
    $recentBookings[] = $row;
}

// 3. Fetch Revenue Data for Chart (Last 7 bookings or dates)
$chartQuery = "SELECT DATE_FORMAT(created_at, '%b %d') as name, total_price as uv 
               FROM bookings 
               ORDER BY created_at ASC LIMIT 10";
$chartResult = $conn->query($chartQuery);
$revenueData = array();
while($row = $chartResult->fetch_assoc()) {
    $revenueData[] = $row;
}

$response['status'] = 'success';
$response['stats'] = array(
    'totalRevenue' => $stats['totalRevenue'],
    'bookingsCount' => $stats['bookingsCount'],
    'totalGuests' => $stats['totalGuests'],
    'totalPayments' => $stats['totalPayments'],
    'occupancyRate' => rand(70, 95) . '%' // Mock occupancy rate for now
);
$response['recentBookings'] = $recentBookings;
$response['revenueData'] = $revenueData;

echo json_encode($response);
$conn->close();
?>
