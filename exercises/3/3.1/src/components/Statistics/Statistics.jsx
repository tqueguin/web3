import StatisticLine from "components/StatisticLine/StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) return <div>No feedback given so far.</div>;

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={good + neutral + bad} />
        <StatisticLine
          text="Average"
          value={(good - bad) / (good + neutral + bad)}
        />
        <StatisticLine
          text="Positive"
          value={(good / (good + neutral + bad)) * 100}
        />
      </tbody>
    </table>
  );
};

export default Statistics;
