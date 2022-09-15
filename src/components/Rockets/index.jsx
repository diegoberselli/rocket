import Cards from "../Cards";
import { Container } from "./styles";

const Rockets = ({ rocketList }) => {

  return (
    <Container>
      {rocketList.map((element) => (
        <Cards rocket={element} key={element.id} />
      ))}
    </Container>
  );
};

export default Rockets;
