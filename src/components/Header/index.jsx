import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useRocket } from "../../providers/Rockets";
import { useUser } from "../../providers/User";
import { Container, StyledButton } from "./styles";

const Header = () => {
  const history = useHistory();
  const { isAuth, setIsAuth } = useUser();
  const { setModalADD, modalADD } = useRocket();

  return (
    <Container>
      {!isAuth ? (
        <>
          <h1 onClick={() => history.push("/")}>Rockets</h1>
          <StyledButton onClick={() => history.push("/login")}>
            Login
          </StyledButton>
        </>
      ) : (
        <>
          <h1 onClick={() => history.push("/dashboard")}>Rockets</h1>
          <StyledButton onClick={() => setModalADD(!modalADD)}>
            New Rocket
          </StyledButton>
          <StyledButton
            onClick={() => {
              localStorage.clear();
              history.push("/");
              toast.success("logout efetuado com sucesso")
              setIsAuth(false);
            }}
          >
            LogOut
          </StyledButton>
        </>
      )}
    </Container>
  );
};
export default Header;
