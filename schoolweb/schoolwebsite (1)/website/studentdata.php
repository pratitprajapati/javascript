<?php
$host = "localhost"; 
$db = "school";
$username = "root";
$password = "";


$conn = new mysqli($host, $username, $password, $db);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $fname = isset($_POST["first-name"]) ? $conn->real_escape_string(trim($_POST["first-name"])) : null;
    $mname = isset($_POST["middle-name"]) ? $conn->real_escape_string(trim($_POST["middle-name"])) : null;
    $lname = isset($_POST["last-name"]) ? $conn->real_escape_string(trim($_POST["last-name"])) : null;
    $contact = isset($_POST["contact"]) ? $conn->real_escape_string(trim($_POST["contact"])) : null;
    $email = isset($_POST["email"]) ? $conn->real_escape_string(trim($_POST["email"])) : null;
    $address = isset($_POST["address"]) ? $conn->real_escape_string(trim($_POST["address"])) : null;
    $dob = isset($_POST["dob"]) ? $conn->real_escape_string(trim($_POST["dob"])) : null;
    

    
    if (empty($fname) || empty($lname) || empty($contact) || empty($email) || empty($dob)) {
        die("Error: Required fields cannot be empty.");
    }

   
    $stmt = $conn->prepare("INSERT INTO studentdata (Firstname, Middlename, Lastname, Contact, email, Address, `Date Of Birth`) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $fname, $mname, $lname, $contact, $email, $address, $dob);

    
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}


$conn->close();
?>