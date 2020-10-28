import React from "react";
import './Card_80.css'

const Card = ({ name, img }) => {
  return (
    <div className="bg-light-blue dib br3 pa4 ma3 grow bw2 shadow-5">
      <h2>{name}</h2>
      <img src={process.env.PUBLIC_URL + img} alt='' />
    </div>
  );
};

export default Card;
