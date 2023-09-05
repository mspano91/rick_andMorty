import { ADD_FAV, REMOVE_FAV, ORDER_CARDS, FILTER_CARD } from "./action-type";

const addFav = (character) => {
  return { type: ADD_FAV, payload: character };
};

const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

const filterCards = (gender) => {
  return { type: FILTER_CARD, payload: gender };
};

const orderCards = (order) => {
  return { type: ORDER_CARDS, payload: order };
};

export { addFav, removeFav, filterCards, orderCards };
