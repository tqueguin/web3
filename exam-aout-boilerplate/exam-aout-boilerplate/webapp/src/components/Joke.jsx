import AddScore from "./AddScore";

const Joke = ({ joke }) => {
  
  joke.scores.sort((a, b) => {
    if (a.score !== b.score) {
      return b.score - a.score;
    }
  
    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
  });
 

  
  return (
    <div>
      <p><b>Question</b> : {joke.question}</p>
      <p><b>Answer</b> : {joke.answer}</p>
      <p><b>Category</b> : {joke.category}</p>
      <p><b>Votes : </b> {joke.scoreCount} vote(s)</p>
      <p><b>Average score</b> : {joke.averageScore}</p>
      <h3>List of scores</h3>
      <ul>
      {joke.scores.map(score => <li key={score.id}>{score.username} {score.score} {score.date}</li>)}
      </ul>
      <AddScore jokeid={joke.id}/>
    </div>
  );
};

export default Joke;
