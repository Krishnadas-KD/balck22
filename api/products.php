<?php
require_once 'config.php';

$query = "SELECT * FROM products WHERE is_featured = 1 LIMIT 3";
$result = $conn->query($query);

$products = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}

echo json_encode($products);
$conn->close();
?>