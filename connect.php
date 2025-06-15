<?php
$servername = "localhost";   // Host, typically localhost for XAMPP
$username = "root";          // Default MySQL username for XAMPP
$password = "";              // Default password is empty in XAMPP
$dbname = "hotel-booking";   // Database name as per your SQL dump

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch all data from the custome_details table
$sql = "SELECT * FROM custome_details";
$result = $conn->query($sql);

// Check if there are results
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Name: " . $row["Name"]. "<br>";
        echo "Email ID: " . $row["Email id"]. "<br>";
        echo "Phone No: " . $row["Phone no"]. "<br>";
        echo "Address: " . $row["Adress"]. "<br>";
        echo "Check-in Date: " . $row["Check-in-date"]. "<br>";
        echo "Check-out Date: " . $row["Check-out-date"]. "<br>";
        echo "Payment Method: " . $row["Payment-method"]. "<br>";
        echo "Amount: " . $row["Ammount"]. "<br><br>";
    }
} else {
    echo "0 results";
}

// Close connection
$conn->close();
?>
