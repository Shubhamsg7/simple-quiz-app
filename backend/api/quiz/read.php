<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../class/quiz.php';

$database = new Database();
$db = $database->getConnection();

$items = new Quiz($db);



$stmt = $items->getQuiz();

$itemCount = $stmt->rowCount();


//echo json_encode($itemCount);

if ($itemCount > 0) {

    $quizArr = array();
    $quizArr["data"] = array();
    $quizArr["itemCount"] = $itemCount;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $e = array(
            "id" => $id,
            "category" => $category,
            "question" => $question,
            "option1" => $option1,
            "option2" => $option2,
            "option3" => $option3,
            "option4" => $option4,
            "answer" => $answer,
            "level" => $level,
            "created_at" => $created_at
        );

        array_push($quizArr["data"], $e);
    }
    echo json_encode($quizArr);
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "No record found.")
    );
}