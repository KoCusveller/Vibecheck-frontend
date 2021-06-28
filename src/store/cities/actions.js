import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";
import { selectToken } from "../user/selectors";

export const FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS";
export const CREATE_CITY_SUCCES = "CREATE_CITY_SUCCES";

export const fetchCitiesSuccess = (cities) => {
  return {
    type: FETCH_CITIES_SUCCESS,
    payload: cities,
  };
};

export const createCitySucces = (city) => {
  return {
    type: CREATE_CITY_SUCCES,
    payload: city,
  };
};

export const fetchCities = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    try {
      const response = await axios.get(`${apiUrl}/city`);

      console.log("Fetch cities response:", response.data.cities);
      dispatch(fetchCitiesSuccess(response.data.cities));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("Error:", error);
      dispatch(appDoneLoading());
    }
  };
};

export const createCity = (name, imgUrl, vidUrl, songUrl) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const userToken = selectToken(getState());
      const response = await axios.post(
        `${apiUrl}/city/create`,
        {
          name,
          imgUrl,
          vidUrl,
          songUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      console.log(
        "Congrats! You added a new city to vibe to!",
        response.data.newCity,
      );
      dispatch(createCitySucces(response.data.newCity));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("Error:", error);
      dispatch(appDoneLoading());
    }
  };
};
