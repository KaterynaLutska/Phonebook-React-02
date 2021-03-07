const Filter = ({ filter, changeFilter }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          placeholder="Search..."
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};
export default Filter;
