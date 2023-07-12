const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const routes = require("./routes/ToDoRoute");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to ...."))
    .catch((err) => console.error(err));

// Routes
app.use(routes);


// 3. step heroku
if(process.env.NODE_ENV = "production"){
    app.use(express.static("frontend/build"));
}

app.listen(PORT, () => console.log("Server running on port " + PORT));