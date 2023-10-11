import { useState } from "react";
import Filter from "../Filter/Filter";
import PersonForm from "../PersonForm/PersonForm";
import Persons from "../Persons/Persons";


const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameSearch, setNameSearch] = useState("");

  const addNote = (event) => {
    event.preventDefault();

    let alreadyAdded = false;
    persons.forEach((person) => {
      if (person.name === newName) {
        alreadyAdded = true;
        alert(`${newName} is already added!`);
      }
    });

    if (!alreadyAdded) {
      const personObject = {
        id: persons.length + 1,
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNameSearchChange = (event) => {
    setNameSearch(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameSearch={nameSearch} handleNameSearchChange={handleNameSearchChange} />

      <h2>Add new</h2>
      <PersonForm addNote={addNote} newName = {newName} handleNameChange = {handleNameChange} newNumber = {newNumber} handleNumberChange = {handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} nameSearch={nameSearch}/>

    </div>
  );
};

export default App;
