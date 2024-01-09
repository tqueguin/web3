import { Context as CountersContext } from "../../contexts/countersContext";
import { useContext } from "react";

const GoodButton = () => {
    const { good, increaseGood } = useContext(CountersContext )
    return (
      <li>
        Good : {good} <button onClick={increaseGood}>Increase good</button>
      </li>
    );
  };
  
  export default GoodButton;
  