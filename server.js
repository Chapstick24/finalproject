const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const app = express();
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);

mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost/accountInfoGSdb',{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`);
})