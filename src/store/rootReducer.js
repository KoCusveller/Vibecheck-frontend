import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import cities from "./cities/reducer";
import cityDetail from "./cityDetail/reducer";

export default combineReducers({
  appState,
  user,
  cities,
  cityDetail,
});
