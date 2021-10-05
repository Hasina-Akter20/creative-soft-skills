import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  return (
    <div className="container">
      <Row xs={1} md={2} className="g-4">
        {allCourses.map((allCourse) => (
          <CourseCard key={allCourse.code} allCourse={allCourse} />
        ))}
      </Row>
    </div>
  );
};

export default Courses;
