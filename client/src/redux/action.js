import { ADD_FAV, REMOVE_FAV, ORDER_CARDS, FILTER_CARD } from "./action-type";
import axios from "axios";

const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const filterCards = (gender) => {
  return { type: FILTER_CARD, payload: gender };
};

const orderCards = (order) => {
  return { type: ORDER_CARDS, payload: order };
};

export { addFav, removeFav, filterCards, orderCards };
