import { Link } from "react-router-dom";

const Jokes = ({jokes}) => (
    <div>
        {jokes.map(joke => <p><Link to={`/jokes/${joke.id}`}> {joke.question} {joke.answer}</Link></p>)}
    </div>
    
  );
  
  export default Jokes;
  