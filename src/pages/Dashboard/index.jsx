import React, { useState } from "react";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { useRocket } from "../../providers/Rockets";
import { useUser } from "../../providers/User";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";

const DashBoard = () => {
  const { isAuth } = useUser();
  const { allRockets, modalADD, deleteRocket } = useRocket();
  const {id} = useRocket
  const history = useHistory();

  if (!isAuth) {
    return history.push("/");
  }

  const deleteOneRocket = (id) => {
    deleteRocket(id);
  };


  return (
    <>
      {modalADD && <Modal />}
      {allRockets.map((element) => (
        <Container key={element.id} >
          <Header />
          <img src={element.image} alt="foto do foguete" />
          <div>
            <h1>Name:{element.name}</h1>
            <p>Description: {element.description}</p>
            <span>Height: {element.height}</span>
            <span>Diameter: {element.diameter}</span>
            <span>Mass: {element.mass}</span>
            <button onClick={() => deleteOneRocket(element.id)}>Delete</button>
          </div>
        </Container>
      ))}
    </>
  );
};

export default DashBoard;
