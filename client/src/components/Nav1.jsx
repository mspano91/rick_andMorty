import SearchBar from "./SearchBar";
import { NavLink, useNavigate } from "react-router-dom";
import image from "../images/name.png";

const Nav = ({ onSearch, setAccess, randomHandler, clearCharacters }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setAccess(false);
    navigate("/");
  };

  return (
    <div className="nav_container">
      <div className="navImg_container">
        <img className="navImg" src={image} />
      </div>

      <div className="nav_fav">
        <button className="btnnav homeBtn">
          <NavLink to="/home"> Home</NavLink>
        </button>

        <button onClick={randomHandler} className="addBtn">
          ADD RANDOM
        </button>
        <SearchBar onSearch={onSearch} clearCharacters={clearCharacters} />
        <button className="btnnav favoritesBtn">
          <NavLink to="/favorites"> Favorites</NavLink>
        </button>
      </div>

      <div className="about_logOut">
        <button className="btnnav aboutBtn">
          <NavLink to="/about"> About</NavLink>
        </button>
        <button className="btnnav logOutBtn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Nav;
