// import SHOP_DATA from "./shop.data";
import shopActionType from "./shop.type"

const INITIAL_STATE = {
    collections:null,
    isFetching : false,
    errorMessage:undefined
};

const shopDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionType.FETCH_COLLECTIONs_START:
            return {
                ...state,
                isFetching: true
            };
        case shopActionType.FETCH_COLLECTIONs_SUCCESS:
            return {
              ...state,
              isFetching: false,
              collections: action.payload
            };
        case shopActionType.FETCH_COLLECTIONs_FAILUR:
            return {
                ...state,
                isFetching: false,
                errorMessage:action.payload
            };
        default:
            return state;
    }
};

export default shopDataReducer;