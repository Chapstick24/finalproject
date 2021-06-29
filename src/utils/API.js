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
  }
}


