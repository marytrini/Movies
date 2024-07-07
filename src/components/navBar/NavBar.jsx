import SearchBar from "../searchBar/SearchBar";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-between">
      <div>
        <button
          className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black"
          onClick={handleClick}
        >
          Home
        </button>
      </div>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};
NavBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default NavBar;
