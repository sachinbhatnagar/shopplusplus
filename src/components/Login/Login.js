import React, {useState} from 'react';
import './Login.css'
import {Link, useHistory} from 'react-router-dom';
import Image from '../../images/shopplus.png'
import {auth} from '../../firebase'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => {
          // Create an error display component which can be used to display the error. window.alert() is blocking and must be avoided
            alert(error.message);
        })
    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                history.push('/');
            }
        })
        .catch(error => {
          // Create an error display component which can be used to display the error. window.alert() is blocking and must be avoided
            alert(error.message);
        })
    }

    return (
        <div className='login'>
        <Link to='/'>
            <img className='login-logo' src={Image} />
        </Link>
            <div className='login-container'>
                <h1>Sign-In</h1>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <br />
                    <br />
                    <button onClick={signIn} className='login-signin-button'>Sign-In</button>
                <p> 
                    By signing in, you're agreeing to ShopPlusPLUS's (FAKE) Terms and Conditions of Use and Sale. <br></br>
                    Please see Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login-register-button'>Create Shop+PLUS Account</button>
            </div>
        </div>
    )
}

export default Login;
