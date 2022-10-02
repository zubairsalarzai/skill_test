import React from "react";
import "./Card.css";
import card1 from "../../assets/02.png";
import card2 from "../../assets/01.png";
import card3 from "../../assets/03.png";

function Card(props) {
  return (
    <section id="card" className="bg-black p-5 ">
      <p className="text-center mb-4">White paper</p>
      <div className="container d-flex ">
        <div className="x ms-5">
          <img className="cardImage" src={card1} />
        </div>
        <div className="x ">
          <img className="cardImage" src={card2} />
        </div>
        <div className="x me-5">
          <img className="cardImage" src={card3} />
        </div>
      </div>
    </section>
  );
}

export default Card;
