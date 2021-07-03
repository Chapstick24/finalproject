

//Watchmode API key 

// const apikey ="HvQeYWF8egyTqO4MLNzG4SUy7NPg0om3WPMGUXTt"
// const BASEURL = "";

// export default {
//   getMovieTitle: function(searchValue) {
//     return axios.get(`https://api.watchmode.com/v1/search/?apiKey=${apikey}&search_field=name&search_value=${searchValue}`)
//   },
//   getShowInfo: function(showID) {
//     return axios.get(`https://api.watchmode.com/v1/title/${showID}/seasons/?apiKey=${apikey}`)
//   }
// }

var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
  params: {term: `${title}`, country: 'uk'},
  headers: {
    'x-rapidapi-key': '3369f20bcemsha5e7b92efaebe64p10d3adjsnf5a2eeaf9544',
    'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



// https://api.watchmode.com/v1/title/345534/seasons/?apiKey=HvQeYWF8egyTqO4MLNzG4SUy7NPg0om3WPMGUXTt



// let url = 'https://api.watchmode.com/v1/title/345534/seasons/?apiKey={apiKey}';
