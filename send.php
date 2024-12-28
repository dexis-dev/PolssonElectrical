<?php
// please indicate chat ID and token
$token = "Your token";
$chat_id = "your chat id";


$name = htmlspecialchars($_POST['name']);
$surname = htmlspecialchars($_POST['surname']);
$address = htmlspecialchars($_POST['address']);
$number = htmlspecialchars($_POST['number']);


$message = "New Application:\n";
$message .= "Name: $name\n";
$message .= "Surname: $surname\n";
$message .= "Address: $address\n";
$message .= "Number: $number";


$url = "https://api.telegram.org/bot$token/sendMessage";
$data = array(
    'chat_id' => $chat_id,
    'text' => $message
);

$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data),
    ),
);

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);


if ($result) {
    echo "Message sent successfully!";
} else {
    echo "Error sending message.";
}
?>
