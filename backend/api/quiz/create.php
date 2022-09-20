<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../class/quiz.php';

$database = new Database();
$db = $database->getConnection();

$item = new Quiz($db);

$data = json_decode(file_get_contents("php://input"));

$item->category = $data->category;
$item->question = $data->question;
$item->option1 = $data->option1;
$item->option2 = $data->option2;
$item->option3 = $data->option3;
$item->option4 = $data->option4;
$item->answer = $data->answer;
$item->level = $data->level;
$item->created_at = date('Y-m-d H:i:s');

if ($item->createQuiz()) {
    echo 'Question created successfully.';
} else {
    echo 'Question could not be created.';
}