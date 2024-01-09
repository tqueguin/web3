import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [sortedOpinions, setOpinions] = useState([]);

  const addOpinion = (opinion) => {
    const newUUID = uuidv4();
    setOpinions(
      sortedOpinions.concat({ id: newUUID, name: opinion, votes: 1 })
    );
  };

  const addVote = (opinionName) => {
    const newSortedOpinions = [...sortedOpinions];
    const opinionToUpdate = newSortedOpinions.find(
      (opinion) => opinion.name === opinionName
    );
    if (!opinionToUpdate) return undefined;

    opinionToUpdate.votes += 1;
    newSortedOpinions.sort((a, b) => b.votes - a.votes);
    setOpinions(newSortedOpinions);
  };

  const exposedValue = {
    sortedOpinions,
    addOpinion,
    addVote,
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };
