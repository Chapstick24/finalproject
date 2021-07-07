import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  queue: localStorage.getItem("queue")
    ? JSON.parse(localStorage.getItem("queue"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("queue", JSON.stringify(state.queue));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addMovieToQueue= (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_QUEUE", payload: movie });
  };

  const removeMovieFromQueue = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_QUEUE", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveToQueue = (movie) => {
    dispatch({ type: "MOVE_TO_QUEUE", payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        queue: state.queue,
        watched: state.watched,
        addMovieToQueue,
        removeMovieFromQueue,
        addMovieToWatched,
        moveToQueue,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
    };