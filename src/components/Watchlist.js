import React, { Component } from "react";
import API from "../utils/API";

class Watchlist extends Component {
    state = {
        watchlist: [],
        title: [],
        info: [],
        results: []
    };

    componentDidMount() {
        API.getSavedWatchlist()
        .then(res => {
            console.log(res)
            this.setState({watchlist: res})
        }) .catch (err => console.log(err))
    }

    render() {
        return (

        )
    }
}