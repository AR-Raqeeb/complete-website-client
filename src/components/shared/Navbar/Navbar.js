import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import './Navbar.css';

const Navbar = () => {
  const [loggedUser, setLoggedUser] = useContext(userContext);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    fetch("https://desolate-river-58782.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, [loggedUser]);
  return (
    <section className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand text-primary" to="/">
          <h3> Dance Class</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link className="nav-link mr-5 navbarStyle" to="/">
              Home
            </Link>
            {
              isAdmin ? <Link className="nav-link mr-5 navbarStyle" to="/allAdmissions">
              Admin
            </Link> : <Link className="nav-link mr-5 navbarStyle" to="/admission">
              Dashboard
            </Link>
            }
            <Link className="nav-link mr-5 navbarStyle" to="">
              About
            </Link>
            <Link className="nav-link mr-5 navbarStyle" to="#">
              Contact
            </Link>
            {loggedUser?.displayName ? (
              <Link className="nav-link mr-5 navbarStyle">{loggedUser.displayName}</Link>
            ) : (
              <Link className="nav-link mr-5 navbarStyle" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
