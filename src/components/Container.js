import React from "react";
import { Button } from "./Button";

export const Container = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <Button type={type} movie={movie} />
    </div>
  );
};


export default Container;