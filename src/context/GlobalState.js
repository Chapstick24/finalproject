import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  Queue: localStorage.getItem("Queue")
    ? JSON.parse(localStorage.getItem("Queue"))
    : [],
  AlreadySeen: localStorage.getItem("AlreadySeen")
    ? JSON.parse(localStorage.getItem("AlreadySeen"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("queue", JSON.stringify(state.Queue));
    localStorage.setItem("alreadySeen", JSON.stringify(state.AlreadySeen));
  }, [state]);

  // actions
  const addMovieToQueue = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_QUEUE", payload: movie });
  };

  const removeMovieFromQueue = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_QUEUE", payload: id });
  };

  const addMovieToAlreadySeen = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_ALREADYSEEN", payload: movie });
  };

  const moveToQueue = (movie) => {
    dispatch({ type: "MOVE_TO_QUEUE", payload: movie });
  };

  const removeFromAlreadySeen = (id) => {
    dispatch({ type: "REMOVE_FROM_ALREADYSEEN", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        Queue: state.Queue,
        AlreadySeen: state.AlreadySeen,
        addMovieToQueue,
        removeMovieFromQueue,
        addMovieToAlreadySeen,
        moveToQueue,
        removeFromAlreadySeen,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
