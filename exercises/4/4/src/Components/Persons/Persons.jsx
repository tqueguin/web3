const Persons = ({ persons, nameSearch, removePerson }) => {
  return persons
    .filter((person) =>
      person.name.toLowerCase().includes(nameSearch.toLowerCase())
    )
    .map((person) => {
      const handleDelete = e => {
        e.preventDefault();
        removePerson(person)
      }

      return (
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={handleDelete}>Delete</button>
        </div>
      );
    });
};

export default Persons;
