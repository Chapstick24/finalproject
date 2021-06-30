import axios from "axios";

//Watchmode API key 

const apikey ="HvQeYWF8egyTqO4MLNzG4SUy7NPg0om3WPMGUXTt"
const BASEURL = "";

export default {
  getMovieTitle: function(searchValue) {
    return axios.get(`https://api.watchmode.com/v1/search/?apiKey=${apikey}&search_field=name&search_value=${searchValue}`)
  },
  getSavedWatchlist: function() {
    return axios.get("/api/movies/watchlist")
  },
  getShowInfo: function(showID) {
    return axios.get(`https://api.watchmode.com/v1/title/${showID}/seasons/?apiKey=${apikey}`)
  }
}




// https://api.watchmode.com/v1/title/345534/seasons/?apiKey=HvQeYWF8egyTqO4MLNzG4SUy7NPg0om3WPMGUXTt



// let url = 'https://api.watchmode.com/v1/title/345534/seasons/?apiKey={apiKey}';
