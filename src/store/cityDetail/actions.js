import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";

export const FETCH_CITYDETAIL_SUCCESS = "FETCH_CITYDETAIL_SUCCESS";

export const fetchCityDetailSuccess = (cityDetail) => {
  return {
    type: FETCH_CITYDETAIL_SUCCESS,
    payload: cityDetail,
  };
};

export const fetchCityDetail = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    try {
      const response = await axios.get(`${apiUrl}/city/${id}`);

      console.log("cityDetail response:", response);
      dispatch(fetchCityDetailSuccess(response.data.cityDetails));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("Error:", error);
      dispatch(appDoneLoading());
    }
  };
};
