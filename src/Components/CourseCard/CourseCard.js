import React from "react";
import { Card, Col } from "react-bootstrap";

const CourseCard = (props) => {
  const { title, image, duration, price } = props.allCourse;
  return (
    <div>
      <Col>
        <Card className="">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <h1>{title}</h1>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <h2>
              {" "}
              {duration} {price}
            </h2>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CourseCard;
