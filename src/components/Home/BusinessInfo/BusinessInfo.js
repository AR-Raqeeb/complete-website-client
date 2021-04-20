import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { admissionContext } from "../../../App";
import "./BusinessInfo.css";

const BusinessInfo = () => {
  const [admission, setAdmission] = useContext(admissionContext);
  const [courses, setCourses] = useState([]);

  const handleClick = (id) => {
    axios
      .get(`http://localhost:3001/services/${id}`)
      .then((response) => {
        console.log(response.data);
        setAdmission(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/services")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="text-center mt-3">
      <h2 className="text-info">OUR SERVICES</h2>
      <div className="d-flex justify-content-center">
        <div className="w-75 row">
        {courses.length === 0 && (
        <div
          className="spinner-border container text-info"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}
          {courses.map((course) => (
            <div className="col-md-4">
              <Link to="/admission" style={{ textDecoration: "none" }}>
                <div
                  onClick={() => handleClick(`${course._id}`)}
                  className={`text-center info-card`}
                >
                  <div className="mr-3">
                    <img
                      src={course.img}
                      className="img-fluid"
                      style={{ width: "50px" }}
                      alt=""
                    />
                  </div>
                  <div>
                    <h5>{course.Title}</h5>
                    <hr />
                    <small>{course.Description}</small>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;
