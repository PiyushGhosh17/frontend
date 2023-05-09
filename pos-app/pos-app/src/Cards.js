import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Total from "./Total";

function Cards(props) {
  const [item, setItems] = useState([
    { id: "", count: "0", name: "", price: "" },
  ]);

  const { id, name, image, title, price } = props;

  const handleCart = (id, name) => {
    setItems([
      ...item,
      { id: id, count: item.count + 1, name: name, price: price },
    ]);
  };

  const bill = item.reduce((prev, curr) => {
    return prev + curr.price * curr.count;
  }, 0);

  console.log({ items: item });
  console.log({ sum: bill });

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

          <Button onClick={() => handleCart(id, name)} variant="primary">
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
      <Total className="bill" item={item} sum={bill} />
    </>
  );
}

export default Cards;
