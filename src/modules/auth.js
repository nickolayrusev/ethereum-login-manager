import contract from '../services/Contract'

const FETCH_MINIMUM_ETHER = 'auth/FETCH_MINIMUM_ETHER';
const FETCH_MINIMUM_ETHER_SUCCESS = 'auth/FETCH_MINIMUM_ETHER_SUCCESS';
const FETCH_MINIMUM_ETHER_FAILED = 'auth/FETCH_MINIMUM_ETHER_FAILED';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MINIMUM_ETHER: {
            return {
                ...state,
                isLoading: true
            }
        }
        case FETCH_MINIMUM_ETHER_SUCCESS:{
            return {
                ...state,
                minEther : action.payload.minEther,
                isLoading: false
            }
        }
        case FETCH_MINIMUM_ETHER_FAILED: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
};

export const fetchMinimumEther = () => {
    return dispatch => {
        dispatch({
            type: FETCH_MINIMUM_ETHER
        });
        contract.minEther((e, r) => {
            if (e)
                dispatch({type: FETCH_MINIMUM_ETHER_FAILED});
            else
                dispatch({type: FETCH_MINIMUM_ETHER_SUCCESS, payload: {minEther: r.c[0]}})
        })
    };
};

export const register = () => {
};
