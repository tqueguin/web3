const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>;
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises = {props.parts[0].exercises}/>
      <Part name={props.parts[1].name} exercises = {props.parts[1].exercises}/>
      <Part name={props.parts[2].name} exercises = {props.parts[2].exercises}/>
    </div>
  );
};

const Total = (props) => {
  return (<p>Number of exercises {props.total}</p>);
}

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const parts = [
    { name: part1, exercises: exercises1 },
    { name: part2, exercises: exercises2 },
    { name: part3, exercises: exercises3 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={exercises1+exercises2+exercises3} />
    </div>
  );
};

export default App;
