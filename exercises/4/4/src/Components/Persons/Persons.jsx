const Persons = ({persons, nameSearch}) => {
    return(      persons.filter((person) => person.name.toLowerCase().includes(nameSearch.toLowerCase()))
        .map((person) => {
          return (
            <p key={person.id}>
              {person.name} {person.number}
            </p>
          );
        }));
}

export default Persons;