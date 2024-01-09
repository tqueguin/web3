import React, { useEffect, useState } from "react";
import JokeAPI from "services/jokeApi";
import ScoreAPI from "services/scoreApi";

const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
  const [allJokes, setAllJokes] = useState([]);
  const [allScores, setAllScores] = useState([]);

  const initialLoad = () => {
    JokeAPI.getAll()
      .then((jokes) => {
        ScoreAPI.getAll().then((scores) => {
          setAllScores(scores);
          let modifiedJokes = [];
          for (let index = 0; index < jokes.length; index++) {
            const element = jokes[index];
            const scoreCount = scores.filter(
              (score) => score.joke === element.id
            ).length;
            let totalScore = scores
              .filter((s) => s.joke === element.id)
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue.score,
                0
              );
            const averageScore = scoreCount === 0 ? 0 : totalScore / scoreCount;

            modifiedJokes.push({
              ...element,
              scoreCount,
              averageScore,
            });
          }
          setAllJokes(modifiedJokes);
        });
      })
      .catch((error) => console.warn(error));
  };
  useEffect(initialLoad, []);

  const getJokeWithScores = (id) => {
    const joke = allJokes.filter((joke) => joke.id === id);
    const scores = allScores.filter((score) => score.joke === id);
    const scoreCount = scores.length;
    let totalScore = scores
      .filter((s) => s.joke === id)
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue.score,
        0
      );
    const averageScore = scoreCount === 0 ? 0 : totalScore / scoreCount;
    return {
      ...joke[0],
      scores,
      scoreCount,
      averageScore
    }
  };

  const addScore = (newScore) => {
    ScoreAPI.create(newScore);
  }

  const exposedValue = {
    allJokes,
    getJokeWithScores,
    addScore
  };

  return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };
