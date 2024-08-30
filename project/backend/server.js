const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");

// Initialize the app and middleware
const app = express();
app.use(express.json());
app.use(cors());

// Initialize multer for file uploads
const upload = multer();

// Database connection configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ez#290701",
  database: "sharerippy",
});

// Connect to the database with error handling
db.connect(err => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    process.exit(1);  // Exit the process if the database connection fails
  }
  console.log("Connected to database.");
});

// Endpoint to retrieve all recipes
app.get('/subrecipe', (req, res) => {
  const sql = "SELECT * FROM recipe";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error retrieving data: " + err.message);
      return res.status(500).json(err);
    }
    res.json(data);
  });
});

// Endpoint to submit a new recipe with an image
app.post('/subrecipe', upload.single('image'), (req, res) => {
  try {
    const { recipeName, description, ingredients, cookingSteps, difficulty, category } = req.body;
    const image = req.file;

    // Debugging information
    console.log("Recipe data received:", req.body);
    if (image) {
      console.log("Image file received:", image.originalname);
    } else {
      console.log("No image file received.");
    }

    const sql = "INSERT INTO recipe (recipe_name, description, ingredients, cooking_steps, difficulty, category, image) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
      recipeName,
      description,
      ingredients,
      cookingSteps,
      difficulty,
      category,
      image ? image.buffer.toString('base64') : null // Convert image to base64 string if available
    ];

    db.query(sql, values, (err, data) => {
      if (err) {
        console.error("Error inserting data: " + err.message);
        return res.status(500).json({ error: err.message });
      }
      res.json(data);
    });
  } catch (err) {
    console.error("Unexpected error occurred: " + err.message);
    res.status(500).json({ error: "Server error, please try again later." });
  }
});

// Start the server and listen on port 5000
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
