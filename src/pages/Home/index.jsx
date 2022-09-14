import Header from "../../components/Header";
import Rockets from "../../components/Rockets";
import { useRocket } from "../../providers/Rockets";
import { Container, StyledButton } from "./styles";

const Home = () => {
  const { nextPage, previousPage, rocketList } = useRocket();


  return (
    <Container>
      <Header />
      <div>
        <Rockets rocketList={rocketList} />
        <div className="buttons">
        <StyledButton onClick={previousPage}>Voltar</StyledButton>
        <StyledButton onClick={nextPage}>Avançar</StyledButton>
        </div>
      </div>
    </Container>
  );
};

export default Home;
