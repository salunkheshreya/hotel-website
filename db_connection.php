<?php
// Disable error reporting to prevent HTML warnings from breaking JSON response
error_reporting(0);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "localhost";
$username = "root";
$password = "Aditya5#";
$dbname = "hotel_booking";
$port = 3307;

// Create connection with error suppression (@)
$conn = @new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    // Return a JSON error message explicitly
    echo json_encode(["status" => "error", "message" => "Database Connection Failed: " . $conn->connect_error . ". Check if your XAMPP MySQL has a password."]);
    exit();
}
?>
