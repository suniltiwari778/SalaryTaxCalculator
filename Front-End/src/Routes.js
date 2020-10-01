import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Navigation from "./components/navigation";
import User from "./components/user";
import UserServices from "./components/userServices";
import Home from "./components/home";
import About from "./components/about";
import App from "./App.js";

const Routes = () => {
  return (
    <Router>
      <App />
      <div>
        <Route path="/" exact strict component={Home} />

        <Route path="/about" exact strict component={About} />

        <Route path="/navigation" exact strict component={Navigation} />

        <Route path="/user/:username" exact strict component={User} />

        <Route path="/user/services/" exact strict component={UserServices} />
      </div>
    </Router>
  );
};

export default Routes;
