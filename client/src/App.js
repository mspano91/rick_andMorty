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

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);

  //esta funcion solo la pegue de la consigna
  // function login(userData) {
  //   const { email, password } = userData;
  //   const URL = "http://localhost:3001/rickandmorty/login/";
  //   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //     const { access } = data;
  //     setAccess(access);
  //     access && navigate("/home");
  //   });
  // }

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // const onSearch = (id) => {
  //   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
  //     ({ data }) => {
  //       if (data.name) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         window.alert("¡No hay personajes con este ID!");
  //       }
  //     }
  //   );
  // };

  async function onSearch(id) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        throw new Error("¡this character doesnt exist! try numbers before 826");
      }
    } catch (error) {
      console.log(error);
      alert("try with other number please");
    }
  }

  async function randomHandler() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${randomId}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert("¡No hay personajes con este ID!");
      }
    } else {
      alert("ese personaje ya esta agregado!");
    }
  }

  const onClose = (id) => {
    let charactersFiltered = characters.filter(
      (character) => Number(character.id) !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  const clearCharacters = () => {
    setCharacters([]);
  };

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav
          randomHandler={randomHandler}
          onSearch={onSearch}
          setAccess={setAccess}
          clearCharacters={clearCharacters}
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
