import {
    LOGIN_FAILED,
    LOGIN_START,
    LOGIN_SUCCESS,
    AUTHENTICATE_USER,
    LOG_OUT,
    CLEAR_AUTH_STATE,
  } from '../actions/actionTypes';

const intialState={
    user:{},
    error:null,
    isLoggedIn:false,
    inProgress:false,
};
export default function auth(state=intialState,action){
    switch(action.type){
        case 'LOGIN_START':
            return{
                ...state,
                inProgress:true,
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                inProgress:false,
                isLoggedIn:true,
            }
        case 'LOGIN_FAILED':
            return {
                ...state,
                error:action.err,
                isLoggedIn:false,
                inProgress:false
            }
        default: 
            return state;
    }
} 