import { useMutation, useQuery } from "@apollo/client";
import { ALL_AUTHORS, EDIT_AUTHOR_BIRTH } from "../queries";
import { useState } from "react";

const SetAuthorBirth = () => {
  const [author, setAuthor] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const [editAuthor] = useMutation(EDIT_AUTHOR_BIRTH, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  });

  const submit = async (event) => {
    event.preventDefault();

    editAuthor({
      variables: { name: author, setBornTo: parseInt(birthYear) },
    });

    setAuthor("");
    setBirthYear("");
  };

  const result = useQuery(ALL_AUTHORS);

  if(result.loading){
    return <div>loading...</div>
  }

  const authors = result.data.allAuthors;

  return (
    <div>
      <h2>Set author birth</h2>
      <form onSubmit={submit}>
      Author
        <div>
          <select onChange={({ target }) => setAuthor(target.value)}>
            {authors.map((auth) => <option key={auth.id} value={auth.name}>{auth.name}</option>)}
          </select>
        </div>
        <div>
          Birth
          <input
            type="number"
            value={birthYear}
            onChange={({ target }) => setBirthYear(target.value)}
          />
        </div>
        <button type="submit">Change birth</button>
      </form>
    </div>
  );
};

export default SetAuthorBirth;
