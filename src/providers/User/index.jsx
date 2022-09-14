import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [token, setToken] = useState(
    localStorage.getItem("@token:Rocket") || ""
  );
  const [isAuth, setIsAuth] = useState(false);


  const login = (data, history) => {
    api
      .post("/login", data)
      .then((response) => {
        const { token } = response.data;

        setToken(token);

        localStorage.setItem("@token:Rocket", JSON.stringify(token));
        toast.success("Logado com sucesso");

        setIsAuth(true);
        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Username ou senha inválidos");
      });
  };


  return (
    <UserContext.Provider value={{ userInfo, token, login, isAuth, setToken, setIsAuth}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
