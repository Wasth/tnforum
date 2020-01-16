<?php


$name = $_POST["first_name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$company = $_POST["company"];
$position = $_POST["position"];
$invitation = $_POST["invitation"];
$capcha = $_POST["g-recaptcha-response"];
$secret = "6LcVs7YUAAAAAM9t0iQihHtiaAnOBIdipt3AB9Vf";

function httpPost($url, $data)
{
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    curl_close($curl);
    return $response;
}


try {
	if($name == "") throw new Exception("Не заполнено имя", 1);
	if($email == "") throw new Exception("Не заполнено Email", 1);
	if($phone == "") throw new Exception("Не заполнен Телефон", 1);
	if($company == "") throw new Exception("Введите название компании", 1);
	if($position == "") throw new Exception("введите должность", 1);

	$recapcha = httpPost("https://www.google.com/recaptcha/api/siteverify", ["secret"=>$secret, "response"=>$capcha]);
	$arc = json_decode($recapcha, true);
	if($arc["success"] == false) {
		throw new Exception("Вы не прошли проверку безопасности", 1);
	}

	$message = "Имя:$name<br /> Email: $email<br /> Телефон: $phone<br /> Компания: $company<br /> Должность: $position<br /> Прислать приглашение: $invitation<br />";

	$headers = 'From: tnforum.ru <www-data@tnforum.ru>' . "\r\n";
	$headers .= "Content-type: text/html; charset=\"utf-8\"";
	$send = mail("abdullintat@yandex.ru, abdullinii@tatneft.ru, shmidtni@tatneft.ru", "Заявка на форум", $message, $headers);

	echo json_encode(["status"=>$send]);
} catch(Exception $e) {
	echo json_encode(["status"=>0, "message"=>$e->getMessage()]);
}