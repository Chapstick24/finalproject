import React, {createContext, useReducer, useContext} from "react";

const StoreContext = createContext();
const {Provider} = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//     const [state, dispatch] = useReducer(reducer, {
//       posts: [],
//       currentPost: {
//         _id: 0,
//         title: "",
//         body: "",
//         author: ""
//       },
//       favorites: [],
//       loading: false
//     });
  
//     return <Provider value={[state, dispatch]} {...props} />;
//   };

const useStoreContext = () => {
    return useContext(StoreContext);
  };

export { useStoreContext };