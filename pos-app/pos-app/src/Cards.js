import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Cards(props) {
  const { id, name, image, title, price, handleCart } = props;

  return (
    <>
      <Card style={{ minWidth: "10rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Card.Text>
            {" "}
            <i class="fa fa-inr">{price} </i>
            {""}
          </Card.Text>

          <Button onClick={() => handleCart(id, name, price)} variant="primary">
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
