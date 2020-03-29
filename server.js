const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 3000;

// if deployed, use the deployed database. Otherwise use the local mogoHealines database.
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workouttracker";

app.use(compression());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(MONGODB_URI);

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouttracker", {
//    useNewUrlParser: true
//});

app.listen(PORT, function() {
    console.log(`Now listening on port: ${PORT}`);
});