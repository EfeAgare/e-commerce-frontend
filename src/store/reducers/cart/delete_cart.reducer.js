import * as Actions from '../../actions/cart';

const initialState = {
    data: {},
    isLoading: false,
    error: false
};

const deleteCartReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.DELETE_CART: {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.DELETE_CART_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.DELETE_CART_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default deleteCartReducer;