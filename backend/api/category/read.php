<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../class/categories.php';

$database = new Database();
$db = $database->getConnection();

$items = new Category($db);

$stmt = $items->getCategories();
$itemCount = $stmt->rowCount();


///echo json_encode($itemCount);

if ($itemCount > 0) {

    $categoryArr = array();
    $categoryArr["data"] = array();
    $categoryArr["itemCount"] = $itemCount;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $e = array(
            "id" => $id,
            "category_name" => $category_name,
            "category_image" => $category_image,
            "created_at" => $created_at
        );

        array_push($categoryArr["data"], $e);
    }
    echo json_encode($categoryArr);
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "No record found.")
    );
}