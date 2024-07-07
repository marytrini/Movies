import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
    setQuery(""); // Reset the query after submission
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="rounded-s-md w-40 h-8 p-2"
          id="query"
          name="dia"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busca..."
        />
        <button
          className="w-40 border-blue-950 border-solid border-2 rounded-e-lg mr-4 font-pop text-white font-semibold p-1 bg-blue-700 hover:text-black"
          type="submit"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;