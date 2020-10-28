import React from "react";
import Card from "./Card_80";

const CardList = ({ demo }) => {
  return (
    <div>
      {demo.map((user, i) => {
        return <Card key={i} id={user.id} name={user.name} img={user.img} />;
      })}
    </div>
  );
};

export default CardList;
