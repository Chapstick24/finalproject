import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Container } from "./Container";

export const Queue = () => {
  const { queue } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Queue</h1>

          <span className="count-pill">
            {queue.length} {queue.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {queue.length > 0 ? (
          <div className="movie-grid">
            {queue.map((movie) => (
              <Container movie={movie} key={movie.id} type="queue" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies"> Add Some Movies to your Queue</h2>
        )}
      </div>
    </div>
  );
};