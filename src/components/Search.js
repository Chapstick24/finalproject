//Image of show/movie
//Title
//description
//imdb rating
//streaming platform
//country streaming in?
import React from "react";

function Search() {
    return (
        <div>
            <form>
                <label>
                    Title:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <card>
                <h1>Title</h1>
                <p>Image of Title</p>
                <p>Description</p>
                <p>Rating</p>
                <p>Streaming platforms</p>
            </card>
        </div>
    );
}

export default Search;

//bootstrapped card react example


{/* <Card border="warning" style={{ width: '18rem' }}>
<Card.Header>Header</Card.Header>
<Card.Body>
  <Card.Title>Warning Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk
    of the card's content.
  </Card.Text>
</Card.Body>
</Card> */}