import { Context as CountersContext } from "../../contexts/countersContext";
import { useContext } from "react";

const BadButton = () => {
    const { bad, increaseBad } = useContext(CountersContext )
    return (
      <li>
        Bad : {bad} <button onClick={increaseBad}>Increase bad</button>
      </li>
    );
  };
  
  export default BadButton;
  