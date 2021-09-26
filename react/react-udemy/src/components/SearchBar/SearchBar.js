import React from "react";

import './style.css';
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText:''
        }
    }
    handleSearchbar = (e) => {
        console.log(this.state.searchText);
        this.setState({
            searchText:e.target.value,
        });
    }
    handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.searchText);
        this.props.onSubmit(this.state.searchText);
    }
    render(){
        return(
            <div className="wrapper">
               <form onSubmit={(e)=> this.handleFormSubmit(e)}>
                   <input className="searchBar"
                    value={this.state.searchText}
                    type="search" 
                    onChange={(e)=> this.handleSearchbar(e)}
                   />

               </form>
               <div>{this.state.searchText}</div>
            </div>
        );
    }
}

export default SearchBar;