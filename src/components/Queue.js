import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Container from "./Container";

export const Queue = () => {
  const { Queue } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Queue</h1>

          <span className="count-pill">
            {Queue.length} {Queue.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {Queue.length > 0 ? (
          <div className="movie-grid">
            {Queue.map((movie) => (
              <Container movie={movie} key={movie.id} type="Queue" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
