import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useRocket } from "../../providers/Rockets";
import { Container } from "./styles";

const Cards = ({ rocket }) => {
  const history = useHistory();
  const { setId } = useRocket();

  const handleClick = () => {
    setId(rocket.id);
    history.push(`/rocket/${rocket.id}`);
  };

  return (
    <Container onClick={handleClick}>
      <img className="card-img" src={rocket.image} alt="foto do foguete" />
      <h1>Name:{rocket.name}</h1>
    </Container>
  );
};

export default Cards;
