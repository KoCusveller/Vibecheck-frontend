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
      const response = await axios.get(`${apiUrl}/city?offset=0&limit=9`);

      const cities = response.data.cities;

      // console.log("offset:", offset);

      // console.log("cities:", cities);

      console.log("Fetch cities response:", response);
      dispatch(fetchCitiesSuccess(cities));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("Error:", error);
      dispatch(appDoneLoading());
    }
  };
};

export const fetchMoreCities = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    try {
      const offset = getState().cities.length;

      const response = await axios.get(
        `${apiUrl}/city?offset=${offset}&limit=9`,
      );

      const cities = response.data.cities;

      console.log("offset:", offset);

      // console.log("cities:", cities);

      // console.log("Fetch cities response:", response);
      dispatch(fetchCitiesSuccess(cities));
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
