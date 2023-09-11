import { ADD_FAV, REMOVE_FAV, ORDER_CARDS, FILTER_CARD } from "./action-type";
import axios from "axios";

const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";

  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};

const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;

  return async (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      console.log(data);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };
};

const filterCards = (gender) => {
  return { type: FILTER_CARD, payload: gender };
};

const orderCards = (order) => {
  return { type: ORDER_CARDS, payload: order };
};

export { addFav, removeFav, filterCards, orderCards };
