
import faker from "faker";
import React from "react";
import axios from 'axios';


import Button from "./components/Button/Button";
import Latitude from "./components/Latitude/Latitude";
import Counter from "./components/Counter/Counter";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageList from "./components/ImageList/ImageList";
import Dropdown from "./components/Hooks/Dropdown/Dropdown";

class App extends React.Component{ 
  constructor(props){
    super(props);
    this.state={
      imageResult :[],
    }
  };
  onSearchSubmit = async(e)=>{
    
    // promises method 

    // axios.get(`https://api.unsplash.com/search/photos`,{
    //   params:{
    //     query:e
    //   },
    //   headers:{
    //     Authorization: 'Client-ID g8R4qOJAKvGZJisE-DieccINyp9iYXbl0P5Uxj2FZJ0'
    //   }
    // }).then((response)=>{ // this the promise which return the 
    //   console.log(response.data.results);
    // })

    // async -await method
    const response  = await axios.get(`https://api.unsplash.com/search/photos`,{
      params:{
        query:e
      },
      headers:{
        Authorization: 'Client-ID g8R4qOJAKvGZJisE-DieccINyp9iYXbl0P5Uxj2FZJ0'
      }
    });
    console.log(response.data.results);
    this.setState({
      imageResult: response.data.results
    })
  }
  render(){
    const buttonName = ["Home", "About Us","Contact Us", "Carrer","Submit"];
    
    
    return (
    
      <div>
        {
          buttonName.map((x,i) => {
            if(i === 4){
              return <Button name={x}  key={i} />
            }
            return <Button name={x} key={i} url={faker.internet.url()} />
          })
        }
        <Latitude/>
        <Counter/> 
        {/* <SearchBar onSubmit={this.onSearchSubmit}/>
        {
          this.state.imageResult.map((x,index)=>{
            return <ImageList imageData = {x} key={index}/>
          })
        } */}

        <div>
          <Dropdown/>
        </div>
      </div>
    )
  }
}

export default App;
