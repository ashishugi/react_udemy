import { connect } from 'react-redux';
import { useState } from 'react';

import './style.css'
import {login} from '../../actions/auth';

const Login = (props) => {
    const [email,setEmail] = useState(null);
    const [password , setPassword] = useState(null);
    const {auth} = props;
   
    const handleSubmit = (e)=>{
        props.dispatch(login(email,password));
        e.preventDefault();
        console.log('validate the email');
    }
    return (
        <div className="login-wrapper">
            <form onSubmit={(e)=> handleSubmit(e)}> 
                <label> Email </label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}  required />
                <label> Password </label>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" required />
                <br/>   
                <button onClick={(e)=> handleSubmit(e)} disabled={auth.inProgress} >Submit</button>
            </form>
            <div>
                here :{auth.inProgress}
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    return {
      auth: state.auth,
    };
  }
export default connect(mapStateToProps)(Login);
