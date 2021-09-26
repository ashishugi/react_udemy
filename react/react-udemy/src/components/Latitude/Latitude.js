
import React from 'react';
 
import Sesoning from '../Sesoning/Sesoning';

class Latitude extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          latitute:null,
          errorMessage:''
        }
    }
    componentDidMount = ()=>{
        window.navigator.geolocation.getCurrentPosition(

            (data)=> {
            console.log(data)
            this.setState({
                latitute: data.coords.latitude,
            })
            },
            (err)=>{
                    console.log(err)
                    this.setState({
                        errorMessage: err.message,
                    })
                }
        ); // success , error
    }
    render(){
        return (
            <>
                Latitude : {
                    this.state.latitute ? this.state.latitute : <div> Loading...</div>
                }
                {
                    this.state.errorMessage && <div>{this.state.errorMessage}</div>
                }
                <div>
                    <Sesoning lat={this.state.latitute}/>
                </div>
            </>
        );
    }

}

export default Latitude;