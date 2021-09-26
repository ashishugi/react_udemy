import React, {useState,useEffect} from 'react';
import axios from 'axios';


import {ItemList} from './Data';
import DropdownCard from "../DropdownCard/DropdownCard";
const options = [
    {
        label:'The color red',
        value:'red'
    },
    {
        label:'the color green',
        value:'green'
    },
    {
        label:'the color blue',
        value:'blue'
    }
]
const Dropdown = () => {
    const [currIndex,setCurrIndex] = useState(null);
    const [searchInput , setSearchInput] = useState('');
    const [result,setResult]=useState([]);
    console.log(result);
    // we cannot use async inside the useEffect.
    // first time , 2nd argument => [ ]
    // first time + component re render , 2nd argument => .. nothing ..
    // first time + component re render + some data gets changed, 2nd argument => [data variable for which render required]
    useEffect(() => { // funcction  , [array]
       const search = async ()=>{
           const {data} = await axios.get(`https://en.wikipedia.org/w/api.php`,{
            params:{
              action:'query',
              list:'search',
              origin:'*',
              format:'json',
              srsearch:searchInput
            },
          });
          setResult(data.query.search);
       }
       const setTimeOutId = setTimeout(()=>{
        if(searchInput){
            search();
          }
       },2000);
       // for making search after 5 sec ,
       return ()=>{
           clearTimeout(setTimeOutId);
       }
        
    //we can also use promises
    }, [searchInput]);


    const closeOther = (curr) =>{
       console.log(curr);
       setCurrIndex(curr);
    }
    return (
        <>
        <div>
            <h1>Dropdown</h1>
            {
                ItemList.map((item,index=0) => {
                    return (
                        <div className="wrapper">
                        <div className="title">
                           <h3 onClick={(e)=> closeOther(index)}> <strong> &#8594; </strong>  { item.title }</h3>
                        </div>
                        
                        <div style={ currIndex !== index ? {display:'none'} : {display:''}}>
                            {item.content}
                        </div>
                        
                    </div>
                    )
                } )
            }

        </div>
         <div>
         <h2>
             Searching here
         </h2>
         <div>
             <input type="search"
                 value={searchInput}
                 onChange={(e)=> setSearchInput(e.target.value)}
             />
             {result.map((x,index)=>{
                 return <div>{index}</div>
             })}

         </div>
         <div>
             <h3>DropDown Card</h3>
             <DropdownCard options={options}/>
         </div>
     </div>
     </>
    )
}

export default Dropdown;