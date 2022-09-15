import { useForm } from "react-hook-form";
import { useRocket } from "../../providers/Rockets";
import { Container } from "./styles";

const Modal = () => {
  const { register, handleSubmit } = useForm();
  const { addRocket, setModalADD } = useRocket();

  const addOneRocket = (data) => {
    addRocket(data);
  };

  return (
    <Container>
      <div className="modal-add-title">
        <h3>Cadastrar Rocket</h3>
        <button onClick={() => setModalADD(false)}>X</button>
      </div>
      <form onSubmit={handleSubmit(addOneRocket)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          {...register("name")}
        />
        <label htmlFor="">Description</label>
        <input
          type="text"
          name="description"
          placeholder="description"
          {...register("description")}
        />
        <label htmlFor="">Height</label>
        <input
          type="number "
          name="height"
          placeholder="height"
          {...register("height", { valueAsNumber: true }, { step: "any" })}
        />
        <label htmlFor="">Diameter</label>
        <input
          type="number"
          name="diameter"
          placeholder="diameter"
          {...register("diameter", { valueAsNumber: true }, { step: "any" })}
        />
        <label htmlFor="">Mass</label>
        <input
          type="number"
          name="mass"
          placeholder="mass"
          {...register("mass", { valueAsNumber: true }, { step: "any" })}
        />
        <label htmlFor="">Image URL</label>
        <input
          type="text"
          placeholder="image"
          name="image"
          {...register("image")}
        />
        <button type="submit">Add Rocket</button>
      </form>
    </Container>
  );
};

export default Modal;
