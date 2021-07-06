
export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_QUEUE":
      return {
        ...state,
        queue: [action.payload, ...state.queue],
      };
    case "REMOVE_MOVIE_FROM_QUEUE":
      return {
        ...state,
        queue: state.queue.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        queue: state.queue.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    case "MOVE_TO_QUEUE":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        queue: [action.payload, ...state.queue],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};
