import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Rockets from "../../components/Rockets";
import api from "../../services/api";
import { Container, StyledButton } from "./styles";

const Home = () => {
  const [rocketList, setRocketList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
      .get(`/rockets/pagination?take=2&skip=${page}`)
      .then((response) => setRocketList(response.data));
  }, [page]);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    setPage(page + 1);
    if (!null) {
      previousPage();
    }
  };

  console.log(rocketList);

  return (
    <Container>
      <Header />
      <div className="tipos">
        <StyledButton onClick={previousPage}>Voltar</StyledButton>
        <Rockets rocketList={rocketList} />
        <StyledButton onClick={nextPage}>Avançar</StyledButton>
      </div>
    </Container>
  );
};

export default Home;
