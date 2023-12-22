import "../../App.css";
import { Context as VotesContext } from "../../contexts/votesContext";
import { useContext } from "react";
import AddButton from "../Button/AddButton";

function App() {
  const { addVote, sortedOpinions } = useContext(VotesContext);

  return (
    <>
      <h2>Sorted votes</h2>
      <div className="card">
        <ul>
          {sortedOpinions.map((opinion) => {
            return (
              <li key={opinion.id}>
                Opinion {opinion.name} : {opinion.votes}{" "}
                <button value={opinion.name} onClick={() => addVote(opinion.name)}>Vote</button>
              </li>
            );
          })}
        </ul>
        <AddButton></AddButton>
      </div>
    </>
  );
}

export default App;
