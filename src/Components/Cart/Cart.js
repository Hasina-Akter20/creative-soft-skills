import React from "react";
import { Card, Col } from "react-bootstrap";
import img from "../../images/clock.svg";
import "./Cart.css";

const Cart = (props) => {
  const { title, image, duration, price, description } = props.course;
  return (
    <div>
      <Col className="h-100">
        <Card className="card">
          <Card.Img variant="top" className="cart-img" src={image} />
          <Card.Body>
            <div className="home-text">
              <h2>{title}</h2>
              <Card.Text className="description">{description}</Card.Text>
            </div>
            <div className="bottom-div d-flex justify-content-between">
              <p className="duration ">
                <img className="image" src={img} alt="" /> {duration}
              </p>
              <p className="price"> {price}</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Cart;
