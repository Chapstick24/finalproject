import React from "react";


function SearchForm(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="movie">Movie Title:</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="movie"
            list="actor"
            type="text"
            className="form-control"
            placeholder="Enter Movie Title"
            id="title"
          />
          {/* <datalist id="title">
            {props.title.map(title => (
              <option value={title} key={title} />
            ))}
          </datalist> */}
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;