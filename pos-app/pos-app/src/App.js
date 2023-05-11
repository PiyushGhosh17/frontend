import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Cards from "./Cards";
import Total from "./Total";
import apple from "./img/apple.jpeg";
import banana from "./img/banana.png";
import brinjal from "./img/brinjal.jpeg";
import broccoli from "./img/broccoli.jpeg";
import capcicum from "./img/capcicum.jpeg";
import carrot from "./img/carrot.jpg";
import cherry from "./img/cherry.png";
import graphes from "./img/graphes.jpeg";
import guava from "./img/guava.png";
import mashroom from "./img/mashroom.png";
import onion from "./img/onion.jpg";
import pineapple from "./img/pineapple.png";
import redChilly from "./img/red-chilly.jpeg";
import strawberry from "./img/strawberry.jpg";
import tomato from "./img/tomato.png";
import storage from "./LocalStorage/Storage";

const itemsArray = [
  {
    id: "apple",
    name: "apple",
    image: apple,
    title: "Apple",
    price: 25,
  },
  {
    id: "banana",
    name: "banana",
    image: banana,
    title: "Banana",
    price: 2,
  },
  {
    id: "brinjal",
    name: "brinjal",
    image: brinjal,
    title: "Brinjal",
    price: 20,
  },
  {
    id: "broccoli",
    name: "broccoli",
    image: broccoli,
    title: "Broccoli",
    price: 50,
  },
  {
    id: "capcicum",
    name: "capcicum",
    image: capcicum,
    title: "Capcicum",
    price: 4,
  },
  {
    id: "carrot",
    name: "carrot",
    image: carrot,
    title: "Carrot",
    price: 10,
  },
  {
    id: "cherry",
    name: "cherry",
    image: cherry,
    title: "Cherry",
    price: 8,
  },
  {
    id: "graphes",
    name: "graphes",
    image: graphes,
    title: "Graphes",
    price: 40,
  },
  {
    id: "guava",
    name: "guava",
    image: guava,
    title: "Guava",
    price: 15,
  },
  {
    id: "mashroom",
    name: "mashroom",
    image: mashroom,
    title: "Mashroom",
    price: 12,
  },
  {
    id: "pineapple",
    name: "pineapple",
    image: pineapple,
    title: "Pineapple",
    price: 100,
  },
  {
    id: "onion",
    name: "onion",
    image: onion,
    title: "Onion",
    price: 20,
  },
  {
    id: "redChilly",
    name: "redChilly",
    image: redChilly,
    title: "RedChilly",
    price: 30,
  },
  {
    id: "tomato",
    name: "tomato",
    image: tomato,
    title: "Tomato",
    price: 3,
  },
];

const getCartData = () => {
  let localCartData = storage.get("items");
  console.log(localCartData);
  return !localCartData ? [] : JSON.parse(localCartData);
};
function App() {
  const [item, setItems] = useState(getCartData);
  console.log({ item });

  useEffect(() => {
    storage.set("items", JSON.stringify(item));
  }, [item]);

  const handleCart = (id, name, price) => {
    setItems((item) => {
      const itemdIndex = item.findIndex((ele) => ele.id === id);
      if (itemdIndex === -1) {
        return [...item, { name: name, price: price, id: id, count: 1 }];
      } else {
        return item.map((product, index) =>
          index === itemdIndex
            ? { ...product, count: product.count + 1 }
            : product
        );
      }
    });
  };
  const removeCart = (id, name, price) => {
    setItems((item) => {
      const itemdIndex = item.findIndex((ele) => ele.id === id);
      return item.map((product, index) =>
        index === itemdIndex
          ? {
              ...product,
              count:
                product.count <= 1
                  ? item.splice(itemdIndex, 1)
                  : product.count - 1,
            }
          : product
      );
    });
  };

  const removeCart1 = (id) => {
    setItems((item) => {
      return item.filter((obj) => {
        return obj.id !== id ?? { ...obj, count: obj.count - 1 };
      });
    });
  };

  const NetTotal = useMemo(() => {
    return item.reduce((acc, i) => {
      console.log({ acc, i });
      return acc + i.count * i.price;
    }, 0);
  }, [item]);

  console.log({ NetTotal });
  console.log({ item });

  return (
    <>
      <div className="App">
        {itemsArray.map((data) => {
          return (
            <Cards
              key={data.id}
              id={data.id}
              image={data.image}
              name={data.name}
              price={data.price}
              title={data.title}
              handleCart={handleCart}
              removeCart={removeCart}
            />
          );
        })}
      </div>
      {item.map((item) => {
        return (
          <Total
            className="bill"
            item={item}
            name={item.name}
            price={item.price}
            count={item.count}
            sum={NetTotal}
          />
        );
      })}
    </>
  );
}

export default App;
