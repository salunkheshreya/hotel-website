<?php
include 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->guest_name) && isset($data->user_email) && isset($data->room_type) && isset($data->check_in) && isset($data->check_out) && isset($data->guests) && isset($data->total_price)) {
    $guest_name = $data->guest_name;
    $user_email = $data->user_email;
    $room_type = $data->room_type;
    $check_in = $data->check_in;
    $check_out = $data->check_out;
    $guests = $data->guests;
    $total_price = $data->total_price;
    $hotel_name = isset($data->hotel_name) ? $data->hotel_name : 'Luxury Inn';
    $location = isset($data->location) ? $data->location : 'Mumbai';
    $payment_done = isset($data->payment_done) ? $data->payment_done : 0.00;
    $remaining_payment = $total_price - $payment_done;

    $stmt = $conn->prepare("INSERT INTO bookings (guest_name, user_email, room_type, check_in, check_out, guests, total_price, hotel_name, location, payment_done, remaining_payment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    if (!$stmt) {
        echo json_encode(["status" => "error", "message" => "Prepare failed: " . $conn->error]);
        exit;
    }
    $stmt->bind_param("sssssidssdd", $guest_name, $user_email, $room_type, $check_in, $check_out, $guests, $total_price, $hotel_name, $location, $payment_done, $remaining_payment);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Booking successful", "insertId" => $conn->insert_id]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error executing: " . $stmt->error]);
    }
    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid input", "received" => $data]);
}

$conn->close();
?>
