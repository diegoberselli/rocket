import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../components/Header";
import { Container, StyledForm, StyledInput } from "./styles";
import { useUser } from "../../providers/User";

const Login = () => {
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

  const { login, isAuth } = useUser();
  const history = useHistory();

  const onSubmit = (data) => {
    login(data, history);
  };

  if (isAuth) {
    return history.push("/dashboard");
  }

  return (
    <>
      <Header />
      <Container>
        <StyledForm onSubmit={handleSubmit(onSubmit)} className="formulario">
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
