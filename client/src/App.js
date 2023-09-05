import "./index.scss";
import Nav from "./components/Nav1";
import About from "./components/About";
import Detail from "./components/Detail";
import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./components/Login";
import Favorites from "./components/favorites";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/Home";

const email = "1";
const password = "1";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [acess, setAcess] = useState(false);

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAcess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !acess && navigate("/");
  }, [acess]);

  // https://rym2-production.up.railway.app/api/character/$%7Bid%7D?key=henrym-mspano91

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  function randomHandler() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      axios(`https://rickandmortyapi.com/api/character/${randomId}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            alert("¡No hay personajes con este ID!");
          }
        }
      );
    } else {
      alert("ese personaje ya esta agregado!");
    }
  }

  const onClose = (id) => {
    let charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav
          randomHandler={randomHandler}
          onSearch={onSearch}
          setAcess={setAcess}
        />
      )}
      <Routes>
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Login login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
