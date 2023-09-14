import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className="dad_container_detail">
      <div className="detail_container">
        <div className="header_detail">
          <Link className="backBtn" to={`/home`}>
            <p>X</p>
          </Link>
          <h1>N°: {character?.id}</h1>
          <h1 className="detail_tittle">{character?.name}</h1>
          <hr />
        </div>
        <img
          className="detail_picture"
          src={character?.image}
          alt={character?.name}
        />
        <div className="div_details">
          <p>
            is {character?.species}, Gender: {character?.gender}
          </p>
          <p>
            Actual Condition: {character?.status}, from {character?.origin}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
