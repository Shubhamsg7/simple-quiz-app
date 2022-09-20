<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../class/categories.php';

$database = new Database();
$db = $database->getConnection();

$item = new Category($db);

$item->id = isset($_GET['id']) ? $_GET['id'] : die();

$item->getSingleCategory();

if ($item->category_name != null) {
    // create array
    $emp_arr = array(
        "id" =>  $item->id,
        "category_name" => $item->category_name,
        "category_image" => $item->category_image,
        "created_at" => $item->created_at
    );

    http_response_code(200);
    echo json_encode($emp_arr);
} else {
    http_response_code(404);
    echo json_encode("Category not found.");
}