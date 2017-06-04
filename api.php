<?php

if (!isset($_POST['userInput'])) {
    http_response_code(400);
    die('Need post data - userInput');
}

$configData = json_decode(file_get_contents('config.json'), true);
$accessToken = $configData['accessToken'];

$userInput = $_POST['userInput'];

$apiAiRequestData = [
    'query' => $userInput,
    'lang' => 'en',
    'sessionId' => 0
];

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'https://api.api.ai/v1/query?v=20150910');
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($apiAiRequestData));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$curlHeaders = [
    "Authorization: Bearer {$accessToken}",
    'Content-Type: application/json'
];
curl_setopt($curl, CURLOPT_HTTPHEADER, $curlHeaders);
$serverOutput = json_decode(curl_exec($curl), true);
curl_close($curl);

$output = $serverOutput['result']['fulfillment']['messages'][0]['speech'];

header('Content-Type: application/json');
echo json_encode(['responseText' => $output]);
