const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QueueSchema = new Schema({
    title: {
        type: String,
    },

    year: {
        type: Date,
    },

    genre: {
        type: String,
    },

    imdbRating: {
        type: Number
    },

    network: {
        type: String,
    },

    region: {
        type: String,
    },



});



const Watchlist = mongoose.model('Watchlist', watchlistSchema);

module.exports = Watchlist;