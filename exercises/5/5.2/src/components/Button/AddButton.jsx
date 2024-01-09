import { Context as VotesContext } from "../../contexts/votesContext";
import { useContext, useState } from "react";

const AddButton = () => {
  const { addOpinion } = useContext(VotesContext);
  const [newOpinion, setNewOpinion] = useState('');

  const handleOnChange = (e) => {
    setNewOpinion(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addOpinion(newOpinion);
    setNewOpinion('');
  };
  return (
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnChange} value={newOpinion}></input>
        <button type="submit">Add opinion</button>
      </form>
  );
};

export default AddButton;
