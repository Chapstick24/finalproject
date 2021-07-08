import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Container } from "./Container";

export const AlreadySeen = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Already Seen </h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <Container movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Go Watch Some Movies!!!</h2>
        )}
      </div>
    </div>
  );
};