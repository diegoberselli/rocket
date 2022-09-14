import Header from "../../components/Header";
import { useRocket } from "../../providers/Rockets";
import { Container } from "./styles";

const Rocket = () => {
  const { rocketId } = useRocket();

  return (
    <>
      <Header />
      <Container>
        <img src={rocketId.image} alt="foto do foguete" />
        <div>
          <h1>Name: {rocketId.name}</h1>
          <h3>Description: {rocketId.description}</h3>
          <p>Height: {rocketId.height}</p>
          <p>Diameter: {rocketId.diameter}</p>
          <p>Mass: {rocketId.mass}</p>
        </div>
      </Container>
    </>
  );
};
export default Rocket;
