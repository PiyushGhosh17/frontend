import React from "react";
import "./App.css";
import Cards from "./Cards";

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

function App() {
  const itemsArray = [
    {
      id: "apple",
      name: "apple",
      image: tomato,
      title: "Apple",
      price: "25",
    },
  ];
  return (
    <>
      <div className="App">
        <Cards />
        <Cards
          id="banana"
          name="banana"
          image={banana}
          title={"Banana"}
          price={"2"}
        />
        <Cards
          id="brinjal"
          name="brinjal"
          image={brinjal}
          title={"Brinjal"}
          price={"20"}
        />
        <Cards
          id="broccoli"
          name="broccoli"
          image={broccoli}
          title={"Broccoli"}
          price={"50"}
        />
        <Cards
          id="capcicum"
          name="capcicum"
          image={capcicum}
          title={"Capcicum"}
          price={"4"}
        />
        <Cards
          id="carrot"
          name="carrot"
          image={carrot}
          title={"Carrot"}
          price={"10"}
        />
        <Cards
          id="cherry"
          name="cherry"
          image={cherry}
          title={"Cherry"}
          price={"8"}
        />
        <Cards
          id="graphes"
          name="graphes"
          image={graphes}
          title={"Graphes"}
          price={"40"}
        />
        <Cards
          id="guava"
          name="guava"
          image={guava}
          title={"Guava"}
          price={"15"}
        />
        <Cards
          id="mashroom"
          name="mashroom"
          image={mashroom}
          title={"Mashroom"}
          price={"12"}
        />
        <Cards
          id="pineapple"
          name="pineapple"
          image={pineapple}
          title={"Pineapple"}
          price={"100"}
        />
        <Cards
          id="onion"
          name="onion"
          image={onion}
          title={"Onion"}
          price={"20"}
        />
        <Cards
          id="redChilly"
          name="redChilly"
          image={redChilly}
          title={"RedChilly"}
          price={"30"}
        />
        <Cards
          id="strawberry"
          name="strawberry"
          image={strawberry}
          title={"Strawberry"}
          price={"10"}
        />
        <Cards
          id="tomato"
          name="tomato"
          image={tomato}
          title={"Tomato"}
          price={"3"}
        />
      </div>
    </>
  );
}

export default App;
