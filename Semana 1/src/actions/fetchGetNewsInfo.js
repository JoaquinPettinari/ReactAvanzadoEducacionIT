import axios from "axios";
import { API_KEY } from "../constants";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./action";

export const fetchGetNews = (query = "") => async dispatch => {  
    await dispatch(fetchDataRequest());
    try{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`)
        return dispatch(fetchDataSuccess(response.data));
    }
    catch(error) {
        return dispatch(fetchDataError(error))
  };
}
