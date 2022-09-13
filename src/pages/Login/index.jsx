import { useHistory, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import Header from "../../components/Header";
import { Container, StyledForm, StyledInput } from "./styles";
import { toast } from "react-toastify";

const Login = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        const { token } = response.data;

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        setAuthenticated(true);
        toast.success("Logado com sucesso");
        return history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Username ou senha inválidos")
        console.log(err);
      });
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Header />
      <Container>
        <StyledForm
          onSubmit={handleSubmit(onSubmitFunction)}
          className="formulario"
        >
          <h2>Login</h2>
          <label>Username</label>
          <StyledInput
            type="text"
            name="username"
            placeholder="username"
            {...register("username")}
          />
          <span>{errors.username?.message}</span>
          <label>Senha</label>
          <StyledInput
            name="password"
            type="password"
            placeholder="senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
          <button type="submit">Entrar</button>
        </StyledForm>
        <p>Somente Administradores podem acessar está área</p>
      </Container>
    </>
  );
};
export default Login;
