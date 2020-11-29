import { BEER_IMAGES_API_URL, BEER_LIST_API_URL } from "../../utils";
import {
  BEER_IMAGES_SUCCESS,
  BEER_LIST_START,
  BEER_LIST_SUCCESS,
  STOP_LOADING,
} from "../actionTypes";

export const getBeersList = () => {
  return (dispatch) => {
    dispatch({
      type: BEER_LIST_START,
      payload: {
        loading: true,
      },
    });
    fetch(BEER_LIST_API_URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: BEER_LIST_SUCCESS,
          payload: data,
        });
      })
      .then(() => {
        fetch(BEER_IMAGES_API_URL)
          .then((response) => response.json())
          .then((data) => {
            dispatch({
              type: BEER_IMAGES_SUCCESS,
              payload: data,
            });
          })
          .catch((err) => {
            console.log(err);
            throw new Error(err);
          });
      })
      .then(() => {
        dispatch({
          type: STOP_LOADING,
          payload: {
            loading: false,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        throw new Error(err);
      });
  };
};
