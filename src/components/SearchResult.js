import React from "react";

function SearchResults(props) {
  console.log(props)
  return (
    <ul className="list-group search-results">
      {props.results.map((result) => (
        <li key={result} className="list-group-item">
          <img alt="movie" src={result.poster_url} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;