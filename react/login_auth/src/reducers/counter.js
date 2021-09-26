import { INCREASE_COUNT , DECREASE_COUNT} from '../actions/actionTypes';

const intitalState= {
    count:0
};
export default function counter(state=intitalState,action){
    switch(action.type){
        case 'INCREASE_COUNT':
            console.log('in in'+action.count);
            return {
                ...state,
                count:action.count+1
            }
        case 'DECREASE_COUNT':
            return {
                count:state.count-1
            }
        default: 
            return state;
    }
}