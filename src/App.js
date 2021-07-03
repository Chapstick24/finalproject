import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header";
import { Queue } from "./components/Queue";
import { AlreadySeen } from "./components/AlreadySeen";
import { Add } from "./components/Add";
import Login from "./components/Login";
import Signup from "./components/Signup"
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

// import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    // <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Queue />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/watched">
            <AlreadySeen />
          </Route>
          <Route exact path = "/login">
            <Login/>
          </Route>
          <Route exact path = "/SignUp">
            <Signup />
          </Route>
        </Switch>
      </Router>
    // </GlobalProvider>
  );
}

export default App;
