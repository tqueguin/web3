import { Context as CountersContext } from "../../contexts/countersContext";
import { useContext } from "react";

const OkButton = () => {
    const { ok, increaseOk } = useContext(CountersContext )
    return (
      <li>
        Ok : {ok} <button onClick={increaseOk}>Increase ok</button>
      </li>
    );
  };
  
  export default OkButton;
  