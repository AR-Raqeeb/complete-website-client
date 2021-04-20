import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import "./Sidebar.css";

const Sidebar = () => {
  const [loggedUser, setLoggedUser] = useContext(userContext);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="text-white">
            <span>Home</span>
          </Link>
        </li>
        {
          !isAdmin && <div>
          <li>
            <Link to="/admission" className="text-white">
              <span>Admission</span>
            </Link>
          </li>
          <li>
            <Link to="/review" className="text-white">
              <span>Review</span>
            </Link>
          </li>
          <li>
            <Link to="/admissionList" className="text-white">
              <span>Your Admissions</span>
            </Link>
          </li>
        </div>
        }
        {isAdmin && (
          <div>
            <li>
            <Link to="/allAdmissions" className="text-white">
              <span>Admissions</span>
            </Link>
          </li>
            <li>
              <Link to="/addService" className="text-white">
                <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/makeAdmin" className="text-white">
                <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/manageService" className="text-white">
                <span>Manage Services</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
