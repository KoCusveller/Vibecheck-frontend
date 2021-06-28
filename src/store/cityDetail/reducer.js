import { FETCH_CITYDETAIL_SUCCESS } from "./actions";

const initialState = {};

export default function cityDetailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITYDETAIL_SUCCESS:
      return { ...action.payload };

    default:
      return state;
  }
}
