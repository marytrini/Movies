import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import PropTypes from "prop-types";

const NavBar = ({ onSearch }) => {
  return (
    <div className="flex justify-between">
      <div>
        <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
          <Link to="/">Home</Link>
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
