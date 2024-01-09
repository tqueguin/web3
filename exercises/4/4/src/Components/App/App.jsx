import { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import Filter from "../Filter/Filter";
import PersonForm from "../PersonForm/PersonForm";
import Persons from "../Persons/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameSearch, setNameSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

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

      personService.create(personObject).then((returnedPerson) => {
        axios.post("http://localhost:3001/persons", personObject).then((response) => {
        setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
      });
    }
  };

  const deletePerson = (person) => {
    if (window.confirm("Do you really want to delete?")) {
      personService
        .deleteOne(person.id)
        .then(() => {
          console.log(persons.filter((listItem) => listItem.id !== person.id));
          setPersons(persons.filter((listItem) => listItem.id !== person.id))
        }
          
        );
      });
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
      <Filter
        nameSearch={nameSearch}
        handleNameSearchChange={handleNameSearchChange}
      />
      <Filter
        nameSearch={nameSearch}
        handleNameSearchChange={handleNameSearchChange}
      />

      <h2>Add new</h2>
      <PersonForm
        addNote={addNote}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} nameSearch={nameSearch} />
    </div>
  );
};

export default App;
