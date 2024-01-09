import { useContext, useState } from "react";
import { Context as ApplicationContext } from "contexts/context";

const AddScore = ({jokeid}) => {
  const { addScore } = useContext(ApplicationContext);

  const [username, setUsername] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addScore({
      username,
      date: Date.now().toString(),
      score:parseInt(score),
      joke: jokeid,
    });
  };

  return (
    <div>
      <h3>Add new score</h3>
      <form onSubmit={handleSubmit}>
        <div>
          Username
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          Score
          <input
            name="score"
            value={score}
            type="number"
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <button>Add score</button>
      </form>
    </div>
  );
};

export default AddScore;
