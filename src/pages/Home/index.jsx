import { ClipLoader } from "react-spinners";
import Header from "../../components/Header";
import Rockets from "../../components/Rockets";
import { useRocket } from "../../providers/Rockets";
import { Container, Spinner, StyledButton } from "./styles";

const Home = () => {
  const { nextPage, previousPage, rocketList, loading } = useRocket();


  return (
    <>
      <Header />
      {loading ? (
        <Spinner>
          <ClipLoader color=" #FF577F" />
        </Spinner>
      ) : (
        <Container>
         
            <Rockets rocketList={rocketList} />
            <div className="buttons">
              <StyledButton onClick={previousPage}>Voltar</StyledButton>
              <StyledButton onClick={nextPage}>Avançar</StyledButton>
            </div>
    
        </Container>
      )}
    </>
  );
};

export default Home;
