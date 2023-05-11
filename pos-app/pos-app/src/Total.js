import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Toast from "react-bootstrap/Toast";
import Badge from "react-bootstrap/Badge";

function Total(props) {
  const { name, price, count, sum } = props;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {name}{" "}
            <Badge bg="secondary">
              {price}x{count}={price * count}
            </Badge>{" "}
          </ListGroup.Item>
        </ListGroup>
        <Card.Header>Net Total:{sum}</Card.Header>
      </Card>
      {setTimeout(() => {
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Added to cart</strong>
            <small>Just now.</small>
          </Toast.Header>
          <Toast.Body>{name}</Toast.Body>
        </Toast>;
      }, 3000)}
      );
    </div>
  );
}

export default Total;
