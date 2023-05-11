import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

import Badge from "react-bootstrap/Badge";

function Total(props) {
  const { name, price, count, sum } = props;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {name} <Badge bg="secondary">{price * count}</Badge>{" "}
          </ListGroup.Item>
        </ListGroup>
        <Card.Header>Net Total:{sum}</Card.Header>
      </Card>
      );
    </div>
  );
}

export default Total;
