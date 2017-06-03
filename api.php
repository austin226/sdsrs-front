<?php

if (!isset($_POST['userInput'])) {
    http_response_code(400);
    die('Need post data - userInput');
}

$userInput = $_POST['userInput'];

$output = "You said $userInput. ";

$number = rand(1, 100);
$output .= "I have generated $number";

header('Content-Type: application/json');
echo json_encode(['responseText' => $output]);
