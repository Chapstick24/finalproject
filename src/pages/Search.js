import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResult"


class Search extends Component {
    state = {
        search: "",
        title: [],
        results: []
    };

    componentDidMount() {
        API.getMovieTitle()
        .then(res => this.setState({title: res.data}))
        .catch (err => console.log(err))
    }
    handleInputChange = event => {
        this.setState({ search: event.target.value });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        API.getMovieTitle(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message)
            }
            console.log(res)
            this.setState({ results: res.data.title_results, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      };
      render() {
        return (
          <div>
            <Container style={{ minHeight: "50%" }}>
              <h1 className="text-center">Search a movie title</h1>
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                titles={this.state.titles}
              />
              <SearchResults results={this.state.results} />
            </Container>
          </div>
        );
      }
    }
    
export default Search