import "../../App.css";
import GoodButton from "../GoodButton/GoodButton";
import OkButton from "../OkButton/OkButton";
import BadButton from "../BadButton/BadButton"
import ResetButton from "../ResetButton/ResetButton";

function App() {
  
  return (
    <>
      <h1>Button app</h1>
      <div className="card">
        <ul>
          <GoodButton></GoodButton>
          <OkButton></OkButton>
          <BadButton></BadButton>
        </ul>
        <ResetButton></ResetButton>
      </div>
    </>
  );
}

export default App;
