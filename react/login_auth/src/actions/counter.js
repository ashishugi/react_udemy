import {DECREASE_COUNT , INCREASE_COUNT} from './actionTypes';

export function increase(count){
    return {
        type:'INCREASE_COUNT',
        count:count
    }
}

export function decrease(count){
    return {
        type:'DECREASE_COUNT',
        count:count
    }
}

