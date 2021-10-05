import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CourseCard from "../CourseCard/CourseCard";
import "./Course.css";

const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  return (
    <div className="container course">
      <h1 className="courses-title">Our Courses</h1>
      <Row xs={1} md={3} className="g-4">
        {allCourses.map((allCourse) => (
          <CourseCard key={allCourse.code} allCourse={allCourse} />
        ))}
      </Row>
    </div>
  );
};

export default Courses;
