import React, { Component } from "react";
import axios from "axios";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResult"


class Title extends Component{
    state = {
    search: "",
    title: []
};
componentDidMount() {
    var options = {
        method: 'GET',
        url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
        params: {term: 'bojack', country: 'uk'},
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
}

render() {
    return(
        <div>
            {this.renderItem}
        </div>
    )
}

}