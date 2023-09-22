import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function Card({ id, name, species, status, gender, origin, image, onClose }) {
  const [isFav, setIsFav] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true);

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
      toast.success("Removed from favorites."); //toast de https://react-hot-toast.com/docs/toast
    } else {
      setIsFav(true);
      dispatch(
        addFav({ id: Number(id), name, species, status, gender, origin, image })
      );
      toast.success("Added to favorites."); //toast de https://react-hot-toast.com/docs/toast
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

          <h1>{name}</h1>
          <p>{species}</p>
          <Link className="detail" to={`/detail/${id}`}>
            <p>+ Details</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
