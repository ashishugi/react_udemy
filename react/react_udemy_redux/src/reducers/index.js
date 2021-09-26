import { combineReducers } from "redux";

const songsReducer = () =>{
    return [
        {title:'song 1',duration:'1:30'},
        {title:'song 2',duration:'3:30'},
        {title:'song 3',duration:'2:30'},
        {title:'song 4',duration:'12:30'},
    ]
}
const selectedSongsReducer = (state=null, action)=>{
    switch(action.type){
        case 'SONG_SELECTED':
            return action.payload;
        default: 
            return state;
    }
}

export default combineReducers({
    songs:songsReducer,
    selectedSongs: selectedSongsReducer
})