import SearchBar from "../searchBar/SearchBar";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const NavBar = ({ onSearch, placeholder }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex 2xl:justify-around sm:justify-evenly w-auto">
      <div>
        <button
          className="sm:max-w-20 lg:w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white sm:text-base 2xl:text-xl font-semibold p-1 hover:bg-blue-700 hover:text-black"
          onClick={handleClick}
        >
          Home
        </button>
      </div>
      <div>
        <SearchBar onSearch={onSearch} placeholder={placeholder} />
      </div>
    </div>
  );
};
NavBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default NavBar;
