import {Context as CountersContext} from "../../contexts/countersContext"
import { useContext } from "react";

const ResetButton = () => {
    const {resetAll} = useContext(CountersContext);
    return (
        <button onClick={resetAll}>Reset all scores</button>
    );
  };
  
  export default ResetButton;
  