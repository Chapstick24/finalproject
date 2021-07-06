import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Button = ({ type, movie }) => {
  const {
    removeMovieFromQueue,
    addMovieToWatched,
    moveToQueue,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "queue" && (
        <div>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromQueue(movie.id)}
          >
            <i className="fa-fw fa fa-times-circle"></i>
          </button>
        </div>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToQueue(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
