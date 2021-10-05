import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <div
        className="home-page
        "
      >
        <div className="home-banner">
          <h1>
            <span className="title-color">The New Way To </span> <br /> Learn
            Skill With Us.
          </h1>
          <p>
            Any successful career starts with good education. Together with us
            you will have deeper knowledge of the subjects that will be
            especially useful for you when climbing the career ladder.
          </p>
          <button className="visit-button">Visit Now</button>
        </div>
      </div>

      <div className="home-courses container">
        <h1 className="courses-title">Our Courses</h1>
        <Row xs={1} md={2} className="g-4">
          {courses.slice(0, 4).map((course) => (
            <Cart key={course.code} course={course} />
          ))}
        </Row>
      </div>
      <div className="mb-5">
        <NavLink to="/courses" className="courses-load fw-bolder">
          Load More...
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
