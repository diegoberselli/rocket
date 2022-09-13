import { Link, useHistory } from "react-router-dom";
import { Container, StyledButton } from "./styles";

const Header = () => {
  const history = useHistory();

  return (
    <Container className="header">
      <h1 className="header-logo" onClick={() => history.push("/")}>
        Rockets
      </h1>
      <StyledButton onClick={() => history.push("/login")}>Login</StyledButton>
    </Container>
  );
};
export default Header;
