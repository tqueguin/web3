import { useState } from "react";
import Statistics from 'components/Statistics/Statistics';
import Button from "components/Button/Button";
import Loading from "components/Loading/Loading";

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [loading, setLoading] = useState(true);


  const handleClick = (e) => {
    if (e.target.className === 'good') setGood(good + 1);
    else if (e.target.className === 'neutral') setNeutral(neutral + 1);
    else setBad(bad + 1);
  };

  setTimeout(() => setLoading(false), 3000);

  if(loading){
    return(<div>
      <Loading />

      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Number of votes : {points[selected]}</p>
      <button onClick={() => {
        const copyPoints = [...points];
        copyPoints[selected] = copyPoints[selected]+1;
        setPoints(copyPoints);
      }
      }>Vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>Another one</button>

      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[points.indexOf(Math.max(...points))]}</p>
    </div>)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleClick} value="good"/>
      <Button onClick={handleClick} value="neutral"/>
      <Button onClick={handleClick} value="bad"/>

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>

      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Number of votes : {points[selected]}</p>
      <button onClick={() => {
        const copyPoints = [...points];
        copyPoints[selected] = copyPoints[selected]+1;
        setPoints(copyPoints);
      }
      }>Vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>Another one</button>

      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[points.indexOf(Math.max(...points))]}</p>
    </div>
  );
};

export default App;
