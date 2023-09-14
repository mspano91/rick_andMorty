// import { Link } from "react-router-dom";
// import { addFav, removeFav } from "../redux/action";
// import { connect } from "react-redux";
// import { useState, useEffect } from "react";

// function Card({
//   id,
//   name,
//   species,
//   status,
//   gender,
//   origin,
//   image,
//   onClose,
//   removeFav,
//   addFav,
//   myFavorites,
// }) {
//   const [isFav, setIsFav] = useState(false);

//   const [closeBtn, setCloseBtn] = useState(true);

//   const handleFavorite = () => {
//     if (isFav) {
//       setIsFav(false);
//       removeFav(id);
//     } else {
//       setIsFav(true);
//       addFav({ id, name, species, status, gender, origin, image });
//     }
//   };

//   useEffect(() => {
//     if (!onClose) {
//       setCloseBtn(false);
//     }
//   }, []);

//   useEffect(() => {
//     myFavorites?.forEach((fav) => {
//       if (fav.id === id) {
//         setIsFav(true);
//       }
//     });
//   }, [myFavorites]);

//   return (
//     <div className="card_container">
//       {closeBtn && <button onClick={() => onClose(id)}>X</button>}
//       <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
//       <Link to={`/detail/${id}`}>
//         <h2 className="userName">{name}</h2>
//       </Link>
//       <img className="card_img" src={image} alt="" />
//       <h2>Specie: {species}</h2>
//       <h2>Gender: {gender}</h2>
//       <h2>is {status}</h2>
//       <h2>From {origin}</h2>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFav: (char) => dispatch(addFav(char)),
//     removeFav: (id) => dispatch(removeFav(id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Card);

import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Card({ id, name, species, status, gender, origin, image, onClose }) {
  const [isFav, setIsFav] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, species, status, gender, origin, image }));
    }
  };

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  useEffect(() => {
    myFavorites?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    // <div className="card_container">
    //   {closeBtn && <button onClick={() => onClose(id)}>X</button>}
    //   <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
    //   <Link to={`/detail/${id}`}>
    //     <h2 className="userName">{name}</h2>
    //   </Link>
    //   <img className="card_img" src={image} alt="" />
    //   <h2>Specie: {species}</h2>
    //   <h2>Gender: {gender}</h2>
    //   <h2>is {status}</h2>
    //   <h2>From {origin}</h2>
    // </div>
    <div className="myCard">
      <div className="innerCard">
        <div className="frontSide">
          <img className="card_img" src={image} alt="" />
        </div>
        <div className="backSide">
          {closeBtn && (
            <button className="closeBut" onClick={() => onClose(id)}>
              XClose
            </button>
          )}
          <button className="favBtn" onClick={handleFavorite}>
            {isFav ? "❤️" : "🤍"}
          </button>

          <h1>Name: {name}</h1>
          <p>Specie: {species}</p>
          <Link className="detail" to={`/detail/${id}`}>
            <p>+ Details</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
