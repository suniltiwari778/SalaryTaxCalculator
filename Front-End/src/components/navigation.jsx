import React, { Component } from "react";
import logo from "../images/logo-sampleT.png";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
          <div className="container">
            <a href="/" className="navbar-brand">
              <img
                src={logo}
                width="45"
                alt=""
                className="d-inline-block align-middle mr-2"
              />

              <span className="text-uppercase font-weight-bold">Company</span>
            </a>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              id="navbarSupportedContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink
                    to="/"
                    exact
                    activeClassName="active"
                    activeStyle={{ color: "green" }}
                  >
                    Home
                  </NavLink>
                  <span className="sr-only">(current)</span>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" exact activeStyle={{ color: "green" }}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/user/services/"
                    exact
                    activeStyle={{ color: "green" }}
                  >
                    Services
                  </NavLink>
                </li>
                <NavLink
                  to="/user/sunil"
                  exact
                  activeStyle={{ color: "green" }}
                >
                  {" "}
                  User
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
