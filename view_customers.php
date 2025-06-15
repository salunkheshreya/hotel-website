<?php
include('db_connection.php');  // Include the db_connection.php file to establish the connection

// SQL query to fetch all data from the custome_details table
$sql = "SELECT * FROM custome_details";  
$result = $conn->query($sql);  // Execute the query and store the result

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
    echo "0 results";  // If no results are found
}

// Close connection
$conn->close();  // Close the connection to the database
?>
