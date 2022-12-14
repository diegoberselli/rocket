import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";
import { useUser } from "../User";

const RocketContext = createContext();

export const RocketProvider = ({ children }) => {
  const [rocketList, setRocketList] = useState([]);
  const [rocketId, setRocketId] = useState([]);
  const [allRockets, setAllRockets] = useState([]);
  const [page, setPage] = useState(0);
  const [id, setId] = useState();
  const [modalADD, setModalADD] = useState(false);
  const [loading, setLoading] = useState(false);
  const { token } = useUser();



  useEffect(() => {
    api.get(`/rockets`).then((response) => {
      setLoading(true);
      setAllRockets(response.data);
      setLoading(false);
    });
  }, [allRockets]);

  useEffect(() => {
    api.get(`/rockets/pagination?take=2&skip=${page}`).then((response) => {
      setLoading(true);
      setRocketList(response.data);
      if(!response.data[0]){
        setPage(0)
      }

    });
  }, [page]);

  const previousPage = () => {
    setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    api.get(`/rockets/${id}`).then((response) => {
      setLoading(true);
      setRocketId(response.data);
    });
  }, [id]);

  const addRocket = (data) => {
    api
      .post("/rockets", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("success");
        setModalADD(false);
      })
      .catch((error) => toast.error("erro"));
  };

  const UpdateRockets = (data, id) => {
    api
      .patch(`/rockets/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("success");
      });
  };

  const deleteRocket = (id) => {
    api
      .delete(`/rockets/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Rocket deletado");
      })
      .catch((err) => toast.error("error"));
  };

  return (
    <RocketContext.Provider
      value={{
        page,
        rocketList,
        nextPage,
        previousPage,
        setId,
        rocketId,
        id,
        allRockets,
        addRocket,
        setModalADD,
        modalADD,
        UpdateRockets,
        deleteRocket,
        loading,
      }}
    >
      {children}
    </RocketContext.Provider>
  );
};

export const useRocket = () => useContext(RocketContext);
