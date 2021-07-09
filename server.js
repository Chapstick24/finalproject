require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/user");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//"mongodb://localhost/greenstream"

// Add routes, both API and view
app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI , //update db name
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    error => {
        if (error) {
          console.error(error);
          process.exit(1);
        } else {
          console.log('📊 MongoDB Connected')
        }
      }
  );



app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);