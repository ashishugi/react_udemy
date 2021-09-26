import React from 'react';

const getSeason = (lat,month)=>{
    if(month > 2 && month< 9){
        return lat> 0 ? 'summer' : 'winter';
    }else{
        return lat> 0 ? 'winter' : 'summer';
    }
}
const Sesoning = (props)=>{
    const {lat} = props;
    const season = getSeason(props.lat , new Date().getMonth());
    return (
        <div>
            lat from Sesoning : {lat}
            season is : { season}
        </div>
    )
}

export default Sesoning;