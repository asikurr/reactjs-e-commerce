// import SHOP_DATA from "./shop.data";
import shopActionType from "./shop.type"

const INITIAL_STATE = {
    collections:null
};

const shopDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionType.UPDATE_COLLECTIONS:
            return {
              ...state,
              collections: action.payload
            };
        default:
            return state;
    }
};

export default shopDataReducer;