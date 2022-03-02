import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

// This file will be used to store the global state of the application so we can keep track of thing's like who is signed and anything else we need to remember across the application.

export const Store = createContext();

const initialState = {
  // if a user exists in the cookies, then we will set the userInfo to the userInfo stored in the cookies otherwise we will set it to null.
  modalControl: false,
  binder: {
    cards: Cookies.get("cards") ? JSON.parse(Cookies.get("cards")) : [],
  },
  userInfo: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : null,

  modalData: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL": {
      return { ...state, modalControl: true };
    }
    case "CLOSE_MODAL": {
      return { ...state, modalControl: false, loading: false };
    }
    case "SET_MODAL_DATA": {
      return { ...state, modalData: action.payload };
    }
    case "USER_LOGIN": {
      return { ...state, userInfo: action.payload };
    }
    case "USER_LOGOUT": {
      return { ...state, userInfo: null };
    }
    case "ADD_TO_BINDER": {
      const newCard = action.payload;
      const duplicateCard = state.binder.cards.find(
        (card) => card._id === newCard._id
      );
      const cards = duplicateCard
        ? state.binder.cards.map((card) =>
            card.id === duplicateCard.id ? newCard : card
          )
        : [...state.binder.cards, newCard];
      Cookies.set("cards", JSON.stringify(cards));
      return { ...state, binder: { ...state.binder, cards } };
    }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
