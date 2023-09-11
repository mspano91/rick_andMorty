import { ADD_FAV, REMOVE_FAV, ORDER_CARDS, FILTER_CARD } from "./action-type";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      console.log(payload);
      return { ...state, myFavorites: payload, allCharactersFav: payload };

    case REMOVE_FAV:
      console.log(payload);
      return { ...state, myFavorites: payload, allCharactersFav: payload };

    case FILTER_CARD:
      const allCharactersFiltered = state.allCharactersFav.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites:
          payload === "allCharacters"
            ? [...state.allCharactersFav]
            : allCharactersFiltered,
      };

    case ORDER_CARDS:
      const allOrder = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allOrder.sort((a, b) => a.id - b.id)
            : allOrder.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;
