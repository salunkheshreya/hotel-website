<?php
include 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->bookingId) && isset($data->amount)) {
    $bookingId = $data->bookingId;
    $amount_paid = $data->amount;

    // First fetch the total price to calculate remaining
    $stmt = $conn->prepare("SELECT total_price FROM bookings WHERE id = ?");
    $stmt->bind_param("i", $bookingId);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($row = $result->fetch_assoc()) {
        $total_price = $row['total_price'];
        $remaining = $total_price - $amount_paid;

        // Update the payment record
        $updateStmt = $conn->prepare("UPDATE bookings SET payment_done = ?, remaining_payment = ? WHERE id = ?");
        $updateStmt->bind_param("ddi", $amount_paid, $remaining, $bookingId);
        
        if ($updateStmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Payment updated successfully"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Update failed: " . $conn->error]);
        }
        $updateStmt->close();
    } else {
        echo json_encode(["status" => "error", "message" => "Booking not found"]);
    }
    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid input data"]);
}

$conn->close();
?>
