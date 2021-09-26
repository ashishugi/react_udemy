import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
    componentDidUpdate(){
        console.log("again the update function called");
    }
    componentWillUnmount(){
        console.log('unmounted');
    }
    increase(){
        this.setState({
            count:this.state.count+1,
        })
    }
    render(){
        return(
            <div>
                Counter : {this.state.count}
                <button onClick={()=> this.increase()}>Increament</button>
            </div>
        );
    }
}

export default Counter;