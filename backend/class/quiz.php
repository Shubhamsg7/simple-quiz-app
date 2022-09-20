<?php
class Quiz
{

    // Connection
    private $conn;

    // Table
    private $db_table = "Quiz";

    // Columns
    public $id;
    public $category;
    public $question;
    public $option1;
    public $option2;
    public $option3;
    public $option4;
    public $answer;
    public $level;
    public $created_at;

    // Db connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // GET ALL
    public function getQuiz()
    {

        $category = isset($_GET['category']) ? $_GET['category'] : die();

        $sqlQuery = "(SELECT id,category,question,option1,option2,option3,option4,answer,level,created_at FROM " . $this->db_table . " WHERE level = 'beginner' AND category= '$category' ORDER BY RAND() LIMIT 4) UNION (SELECT id,category,question,option1,option2,option3,option4,answer,level,created_at FROM " . $this->db_table . " WHERE level = 'intermediate' AND category='$category' ORDER BY RAND() LIMIT 3) UNION (SELECT id,category,question,option1,option2,option3,option4,answer,level,created_at FROM " . $this->db_table . " WHERE level = 'professional' AND category='$category' ORDER BY RAND() LIMIT 3)";
        $stmt = $this->conn->prepare($sqlQuery);

        $stmt->execute();
        return $stmt;
    }

    // CREATE
    public function createQuiz()
    {
        $sqlQuery = "INSERT INTO
                        " . $this->db_table . "
                    SET
                        category = :category, 
                        question = :question,  
                        option1 = :option1,  
                        option2 = :option2,  
                        option3 = :option3,  
                        option4 = :option4,  
                        answer = :answer,  
                        level = :level,  
                        created_at = :created_at";

        $stmt = $this->conn->prepare($sqlQuery);

        // sanitize
        $this->category = htmlspecialchars(strip_tags($this->category));
        $this->question = htmlspecialchars(strip_tags($this->question));
        $this->option1 = htmlspecialchars(strip_tags($this->option1));
        $this->option2 = htmlspecialchars(strip_tags($this->option2));
        $this->option3 = htmlspecialchars(strip_tags($this->option3));
        $this->option4 = htmlspecialchars(strip_tags($this->option4));
        $this->answer = htmlspecialchars(strip_tags($this->answer));
        $this->level = htmlspecialchars(strip_tags($this->level));
        $this->created_at = htmlspecialchars(strip_tags($this->created_at));


        // bind data
        $stmt->bindParam(":category", $this->category);
        $stmt->bindParam(":question", $this->question);
        $stmt->bindParam(":option1", $this->option1);
        $stmt->bindParam(":option2", $this->option2);
        $stmt->bindParam(":option3", $this->option3);
        $stmt->bindParam(":option4", $this->option4);
        $stmt->bindParam(":answer", $this->answer);
        $stmt->bindParam(":level", $this->level);
        $stmt->bindParam(":created_at", $this->created_at);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }


    // UPDATE
    public function updateQuiz()
    {
        $sqlQuery = "UPDATE
                        " . $this->db_table . "
                    SET
                        category = :category,
                        question = :question,
                        option1 = :option1,
                        option2 = :option2,
                        option3 = :option3,
                        option4 = :option4,
                        answer = :answer,
                        level = :level
                    WHERE 
                        id = :id";

        $stmt = $this->conn->prepare($sqlQuery);

        $this->category = htmlspecialchars(strip_tags($this->category));
        $this->question = htmlspecialchars(strip_tags($this->question));
        $this->option1 = htmlspecialchars(strip_tags($this->option1));
        $this->option2 = htmlspecialchars(strip_tags($this->option2));
        $this->option3 = htmlspecialchars(strip_tags($this->option3));
        $this->option4 = htmlspecialchars(strip_tags($this->option4));
        $this->answer = htmlspecialchars(strip_tags($this->answer));
        $this->level = htmlspecialchars(strip_tags($this->level));
        $this->id = htmlspecialchars(strip_tags($this->id));

        // bind data
        $stmt->bindParam(":category", $this->category);
        $stmt->bindParam(":question", $this->question);
        $stmt->bindParam(":option1", $this->option1);
        $stmt->bindParam(":option2", $this->option2);
        $stmt->bindParam(":option3", $this->option3);
        $stmt->bindParam(":option4", $this->option4);
        $stmt->bindParam(":answer", $this->answer);
        $stmt->bindParam(":level", $this->level);
        $stmt->bindParam(":id", $this->id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    // DELETE
    function deleteQuiz()
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