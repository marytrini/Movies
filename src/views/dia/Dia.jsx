import SearchBar from "../../components/searchBar/SearchBar";

const Dia = () => {
  const handleSearch = (query) => {
    console.log("película estrenada este día", query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default Dia;
