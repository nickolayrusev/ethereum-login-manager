import contract from '../services/Contract'

const FETCH_MINIMUM_ETHER = 'auth/FETCH_MINIMUM_ETHER';
const FETCH_MINIMUM_ETHER_SUCCESS = 'auth/FETCH_MINIMUM_ETHER_SUCCESS';
const FETCH_MINIMUM_ETHER_FAILED = 'auth/FETCH_MINIMUM_ETHER_FAILED';


const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILED = 'auth/REGISTER_FAILED';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MINIMUM_ETHER: {
            return {
                ...state,
                isLoading: true
            }
        }
        case FETCH_MINIMUM_ETHER_SUCCESS: {
            return {
                ...state,
                minEther: action.payload.minEther,
                isLoading: false
            }
        }
        case FETCH_MINIMUM_ETHER_FAILED: {
            return {
                ...state,
                isLoading: false
            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                isAuthenticated:true
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

export const register = (value) => {
    return dispatch => {
        dispatch({type: REGISTER});
        contract.register({value: value, gasPrice: 10000, gas: 60000}, (e, r) => {
            if (e)
                dispatch({type: REGISTER_FAILED});
            else
                dispatch({type: REGISTER_SUCCESS, payload: r})

        })
    }
};
