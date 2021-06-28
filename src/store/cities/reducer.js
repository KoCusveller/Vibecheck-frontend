import { FETCH_CITIES_SUCCESS, CREATE_CITY_SUCCES } from "./actions";

const initialState = [];

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITIES_SUCCESS:
      return [...action.payload];

    case CREATE_CITY_SUCCES:
      return [action.payload, ...state];

    default:
      return state;
  }
}
