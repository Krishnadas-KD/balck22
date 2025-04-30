<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "pass123";
$dbname = "db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

// Set headers for JSON API
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // For development; restrict this in production
?>