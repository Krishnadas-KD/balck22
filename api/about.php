<?php
require_once 'config.php';

$query = "SELECT * FROM pages WHERE page_name = 'about'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $data = $result->fetch_assoc();
    echo json_encode($data);
} else {
    echo json_encode(['error' => 'No data found']);
}

$conn->close();
?>