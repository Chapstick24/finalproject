import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";

export const SearchResult = ({ movie }) => {
  const {
    addMovieToQueue,
    addMovieToWatched,
    Queue,
    AlreadySeen,
  } = useContext(GlobalContext);

  let storedMovie = Queue.find((o) => o.id === movie.id);
  let storedMovieWatched = AlreadySeen.find((o) => o.id === movie.id);

  const QueueDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={QueueDisabled}
            onClick={() => addMovieToQueue(movie)}
          >
            Add to Queue
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
