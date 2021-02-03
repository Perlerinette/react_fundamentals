import React, { useState } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';

//sfc
const Auth = () => {

    const [showLogin, setShowLogin] = useState(true);

    function handleToggle() {
        // showLogin ? setShowLogin(false) : setShowLogin(true);
        setShowLogin(!showLogin);
    }

    return ( 
        <div>
            {showLogin ? <Login /> : <Signup />} 
            <br/>
            <button onClick={handleToggle}>Click to Toggle</button>
        </div>
    );
}
 
export default Auth;



