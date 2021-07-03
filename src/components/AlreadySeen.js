import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Container from "./Container";

export const AlreadySeen = () => {
  const { watched: AlreadySeen } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>

          <span className="count-pill">
            {AlreadySeen.length} {AlreadySeen.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {AlreadySeen.length > 0 ? (
          <div className="movie-grid">
            {AlreadySeen.map((movie) => (
              <Container movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
