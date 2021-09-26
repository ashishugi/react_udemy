import { 
    LOGIN_FAILED,
    LOGIN_SUCCESS, 
    LOGIN_START,                                                                
} from "./actionTypes";

import {APIUrls} from '../helper/urls';
import {getFormBody} from "../helper/utils"
export const loginStart = ()=>{
    return {
        type:'LOGIN_START'  
    }
}
export const loginSuccess = (user)=>{
    return {
        type:'LOGIN_SUCCESS',
        user:user  
    }
}
export const loginFailed = (error)=>{
    console.log('called');
    return {
        type:'LOGIN_START',
        err: error
    }
}

export function login(email,password){
    return (dispatch) => {
        dispatch(loginStart());
        const url = APIUrls.login();
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: getFormBody({ email, password }),
        })  
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            if(data.success){
                dispatch(loginSuccess(data.data.user));
                return;
            }
            dispatch(loginFailed(data.message));
        });
    };
}