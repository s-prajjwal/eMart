import { BEER_IMAGES_START, BEER_IMAGES_SUCCESS, BEER_LIST_START, BEER_LIST_SUCCESS, STOP_LOADING } from "../actionTypes";

const initialState = {
    beerList: [],
    beerImages: [],
    loading: false,
};

export default function beerReducer(state=initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case BEER_LIST_START :
        case BEER_IMAGES_START:
        case STOP_LOADING:
            return {
                ...state,
                ...payload
            }
        case BEER_LIST_SUCCESS:
            return {
                ...state,
                beerList: payload
            };
        case BEER_IMAGES_SUCCESS: 
            return {
                ...state,
                beerImages: payload
            };
        default: 
            return { ...state };
    }
}