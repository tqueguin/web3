const Filter = ({ nameSearch, handleNameSearchChange }) => {
  return (
    <div>
      Filter: <input value={nameSearch} onChange={handleNameSearchChange} />
    </div>
  );
};

export default Filter;
