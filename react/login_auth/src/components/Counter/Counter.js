import { useState } from "react";
import { connect } from "react-redux";

import {increase,decrease} from "../../actions/counter";

const Counter =(props)=>{
    const {count} = props.counter;
    console.log('counter', props.counter);
    const handleDecrease=(e)=>{
        props.dispatch(decrease(count));
    }
    const handleIncrease=(e)=>{
        props.dispatch(increase(count));
    }
    return (
        <div>
            <h2>Counter : <span>{count}</span> </h2>
            <div>
                <button onClick={(e)=> handleIncrease(e)}>
                    Increase
                </button>
                <button onClick={(e)=> handleDecrease(e)}>
                    Decrease
                </button>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        counter:state.counter
    }
}

export default connect(mapStateToProps)(Counter);