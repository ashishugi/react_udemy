import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {increase,decrease} from "../../actions/counter";
const CounterHooks = (props) =>{
    const count = useSelector((state)=> state.counter.count);
    console.log('here at hooks part', count);
    const dispatch = useDispatch();
    const handleDecrease=(e)=>{
       dispatch(decrease(count));
    }
    const handleIncrease=(e)=>{
        dispatch(increase(count));
    }
    return (
        <div>
            <h2>
                This Counter is made using the hooks with Store+Redux
            </h2>
            <h2>
                Counter : {count}
                <br/>
                <br/>
                <button onClick={(e)=> handleIncrease(e)}>
                    Increase
                </button>
                <button onClick={(e)=> handleDecrease(e)}>
                    Decrease
                </button>
            </h2>
        </div>
    )
}

export default CounterHooks;