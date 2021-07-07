const express = require("express");

const mongoose = require("mongoose");
const routes = require("./src/routes")
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/greenStream", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.listen(PORT, function() {
    console.log(`Listening on PORT: ${PORT}`);
});