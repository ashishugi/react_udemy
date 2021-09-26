import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import './style.css';

const DropdownCard = (props) => {
    const {options} = props;
    console.log(options);
    const [color,setColor] = useState(options[0]);
    useEffect(()=>{
        console.log(color);
    },[color]);
    return (
        <div className="wrapper">
             <div>
            {color.value}
            </div>
            
            <select >
                {
                    options.map((x)=>{  
                        return (
                            <option value={x} onChange={(e)=> setColor(x)}>
                                {x.label}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default DropdownCard;