import contract from '../services/Contract'
import web3 from '../services/web3';

const FETCH_MINIMUM_ETHER = 'auth/FETCH_MINIMUM_ETHER';
const FETCH_MINIMUM_ETHER_SUCCESS = 'auth/FETCH_MINIMUM_ETHER_SUCCESS';
const FETCH_MINIMUM_ETHER_FAILED = 'auth/FETCH_MINIMUM_ETHER_FAILED';


const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILED = 'auth/REGISTER_FAILED';

const WITHDRAW = 'auth/WITHDRAW';
const WITHDRAW_SUCCESS = 'auth/WITHDRAW_SUCCESS';
const WITHDRAW_FAILED = 'auth/WITHDRAW_FAILED';


const DELETE = 'auth/DELETE';
const DELETE_SUCCESS = 'auth/DELETE_SUCCESS';
const DELETE_FAILED = 'auth/DELETE_FAILED';

const initialState = {isLoading:false, isAuthenticated:false};

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
                isAuthenticated: true
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
            else {
                console.log('entire result', web3.fromWei(r).toString())
                dispatch({type: FETCH_MINIMUM_ETHER_SUCCESS, payload: {minEther: Number(web3.fromWei(r).toString())}})
            }
        })
    };
};

export const register = (value) => {
    return dispatch => {
        dispatch({type: REGISTER});
        contract.register({value: value, gasPrice: web3.toWei(10, 'gwei'), gas: 100000}, (e, r) => {
            if (e) dispatch({type: REGISTER_FAILED, payload: {reason: e}});
            else dispatch({type: REGISTER_SUCCESS, payload: {hash: r}})
            console.log('receipt hash ', r)
            // web3.eth.getTransactionReceipt(r.toString(), (err, receipt) => {
            //     console.log('receipt is ', receipt, err)
            //     if(err)
            //         dispatch({type: REGISTER_FAILED, payload: {reason: err}});
            //     else
            //         dispatch({type: REGISTER_SUCCESS, payload: JSON.stringify(receipt)})
            // })
        })
    }
};

export const withdraw = () => {
    return dispatch => {
        dispatch({type: WITHDRAW});
        contract.withdraw({value: 0, gasPrice: web3.toWei(10, 'gwei'), gas: 100000}, (e, r) => {
            if (e) dispatch({type: WITHDRAW_FAILED, payload: {reason: e}});
            else dispatch({type: WITHDRAW_SUCCESS, payload: {hash: r}})
            console.log(' withdraw success receipt hash ', r)
        })
    }
};

export const deleteMyData = () => {
    return dispatch => {
        dispatch({type: DELETE});
        contract.deleteUser({value: 0, gasPrice: web3.toWei(10, 'gwei'), gas: 100000}, (e, r) => {
            if (e) dispatch({type: DELETE_FAILED, payload: {reason: e}});
            else dispatch({type: DELETE_SUCCESS, payload: {hash: r}})
            console.log(' delete success receipt hash ', r)
        })
    }
};

export const logout = () => {
  localStorage.clear();
};
