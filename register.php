<?php
include 'db_connection.php';

// Check if request is JSON or FormData
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if (stripos($contentType, 'application/json') !== false) {
    $data = json_decode(file_get_contents("php://input"), true);
    $name           = $data['name']     ?? '';
    $email          = $data['email']    ?? '';
    $password       = $data['password'] ?? '';
    $phone          = $data['phone']    ?? '';
    $address        = $data['address']  ?? '';
    $pinCode        = $data['pinCode']  ?? '';
    $profilePicture = '';
} else {
    $name           = $_POST['name']     ?? '';
    $email          = $_POST['email']    ?? '';
    $password       = $_POST['password'] ?? '';
    $phone          = $_POST['phone']    ?? '';
    $address        = $_POST['address']  ?? '';
    $pinCode        = $_POST['pinCode']  ?? '';

    // Handle File Upload
    $profilePicture = '';
    if (isset($_FILES['profilePicture']) && $_FILES['profilePicture']['error'] == 0) {
        $target_dir = "uploads/";
        if (!file_exists($target_dir)) {
            mkdir($target_dir, 0777, true);
        }
        $target_file = $target_dir . basename($_FILES["profilePicture"]["name"]);
        if (move_uploaded_file($_FILES["profilePicture"]["tmp_name"], $target_file)) {
            $profilePicture = $target_file;
        }
    }
}

if (!empty($name) && !empty($email) && !empty($password) && !empty($phone)) {
    // Check if email already exists
    $checkStmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $checkStmt->bind_param("s", $email);
    $checkStmt->execute();
    $checkStmt->store_result();

    if ($checkStmt->num_rows > 0) {
        echo json_encode(["status" => "error", "message" => "Email already exists"]);
        $checkStmt->close();
        $conn->close();
        exit();
    }
    $checkStmt->close();

    // Insert new user with prepared statement
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare(
        "INSERT INTO users (name, email, password, phone, address, pin_code, profile_picture)
         VALUES (?, ?, ?, ?, ?, ?, ?)"
    );
    $stmt->bind_param("sssssss", $name, $email, $hashed_password, $phone, $address, $pinCode, $profilePicture);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "User registered successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error: " . $stmt->error]);
    }
    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Please fill in all required fields (name, email, password, phone)."]);
}

$conn->close();
?>
