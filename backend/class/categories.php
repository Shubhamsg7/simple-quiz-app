<?php
class Category
{

    // Connection
    private $conn;

    // Table
    private $db_table = "Categories";

    // Columns
    public $id;
    public $category_name;
    public $category_image;
    public $created_at;
    public $updated_at;

    // Db connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // GET ALL
    public function getCategories()
    {
        $sqlQuery = "SELECT id, category_name, category_image, created_at FROM " . $this->db_table . "";
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }

    // CREATE
    public function createCategory()
    {
        $sqlQuery = "INSERT INTO
                        " . $this->db_table . "
                    SET
                        category_name = :category_name, 
                        category_image = :category_image,  
                        created_at = :created_at";

        $stmt = $this->conn->prepare($sqlQuery);

        // sanitize
        $this->category_name = htmlspecialchars(strip_tags($this->category_name));
        $this->category_image = htmlspecialchars(strip_tags($this->category_image));
        $this->created_at = htmlspecialchars(strip_tags($this->created_at));


        // bind data
        $stmt->bindParam(":category_name", $this->category_name);
        $stmt->bindParam(":category_image", $this->category_image);
        $stmt->bindParam(":created_at", $this->created_at);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    // single category
    public function getSingleCategory()
    {
        $sqlQuery = "SELECT
                        id, 
                        category_name,
                        category_image, 
                        created_at
                      FROM
                        " . $this->db_table . "
                    WHERE 
                       id = ?
                    LIMIT 0,1";

        $stmt = $this->conn->prepare($sqlQuery);

        $stmt->bindParam(1, $this->id);

        $stmt->execute();

        $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->category_name = $dataRow['category_name'];
        $this->category_image = $dataRow['category_image'];
        $this->created_at = $dataRow['created_at'];
    }

    // UPDATE
    public function updateCategory()
    {
        $sqlQuery = "UPDATE
                        " . $this->db_table . "
                    SET
                        category_name = :category_name, 
                        category_image = :category_image, 
                        updated_at = :updated_at
                    WHERE 
                        id = :id";

        $stmt = $this->conn->prepare($sqlQuery);

        $this->category_name = htmlspecialchars(strip_tags($this->category_name));
        $this->category_image = htmlspecialchars(strip_tags($this->category_image));
        $this->updated_at = htmlspecialchars(strip_tags($this->updated_at));
        $this->id = htmlspecialchars(strip_tags($this->id));

        // bind data
        $stmt->bindParam(":category_name", $this->category_name);
        $stmt->bindParam(":category_image", $this->category_image);
        $stmt->bindParam(":updated_at", $this->updated_at);
        $stmt->bindParam(":id", $this->id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    // DELETE
    function deleteCategory()
    {
        $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE id = ?";
        $stmt = $this->conn->prepare($sqlQuery);

        $this->id = htmlspecialchars(strip_tags($this->id));

        $stmt->bindParam(1, $this->id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
}