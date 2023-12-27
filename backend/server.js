const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();

const port = 5001;
const app = express();

// Connexion à la database mongodb

connectDB();

//Midleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({extended:false }))

// Route
app.use("/post", require("./routes/post.routes"));



// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port));