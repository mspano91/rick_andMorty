import Card from "./Card";
// import { connect } from "react-redux";
import { filterCards, orderCards } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select className="btn_filter" placeholder="sort" onChange={handleOrder}>
        {[
          { name: "Ascendente", value: "A" },
          { name: "Descendente", value: "D" },
        ].map((order) => (
          <option key={order.name} value={order.value}>
            {order.name}
          </option>
        ))}

        {/* <option value="A">Ascendente</option>
        <option value="D">Descendente</option> */}
      </select>

      <select className="btn_filter" onChange={handleFilter}>
        {["Male", "Female", "unknown", "Genderless", "allCharacters"].map(
          (gender) => (
            <option key="gender" value={gender}>
              {gender}
            </option>
          )
        )}
        {/* <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allCharacters">All chars</option> */}
      </select>

      <div className="cards_container">
        {myFavorites?.map((fav) => {
          return (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              species={fav.species}
              gender={fav.gender}
              image={fav.image}
            />
          );
        })}
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };

// export default connect(mapStateToProps, null)(Favorites);

export default Favorites;
