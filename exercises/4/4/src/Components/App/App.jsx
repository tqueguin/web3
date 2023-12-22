import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../Filter/Filter";
import PersonForm from "../PersonForm/PersonForm";
import Persons from "../Persons/Persons";


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameSearch, setNameSearch] = useState("");

  const hook = () => {
    axios.get("http://localhost:3001/persons").then(
      response => {
        setPersons(response.data);
      }
    )
  }

  useEffect(hook, []);

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
