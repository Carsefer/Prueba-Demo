import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovie } from "../../redux/actions";
import Toastify from "toastify-js";
import Style from "./Navbar.module.css";
import "toastify-js/src/toastify.css";
const NavBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const toastCorrect = (text) =>
    Toastify({
      text: text,
      duration: 2000,
      position: "center",
      classNameName: Style.toast,
      backgroundColor: "#0d6efd",
    }).showToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchMovie(input));
    setInput("");
    toastCorrect("Searching...");
  };

  return (
    <div>
      <nav className={`${Style.navbar} navbar`}>
        <div className="container-fluid">
          <h2>Movies Gallery</h2>
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className="form-control me-2"
              type="text"
              value={input}
              onChange={(e) => handleChange(e)}
              placeholder="Search a movie"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
