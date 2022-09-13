import { Container } from "./styles";

const Cards = ({ rocket }) => {
  return (
    <Container>
      <img className="card-img" src={rocket.image} alt="foto do foguete" />
      <h1>Name: {rocket.name}</h1>
      <div>
        <h2>Description: {rocket.description}</h2>
        <span>Height: {rocket.height}</span>
        <span>Diameter: {rocket.diameter}</span>
        <span>Mass: {rocket.mass}</span>
      </div>
    </Container>
  );
};

export default Cards;
