import React, {useState} from 'react';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function emailOnChange(event) {
        //event.target.value
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    function passwordOnChange(event) {
        setPassword(event.target.value);
    }

    return (  
        <>
            <h3>Login</h3>
            <input 
                type="text" 
                placeholder="email" 
                value={email}
                onChange={(e) => emailOnChange(e)}
            />
            <br/>
            <input 
                type="text" 
                placeholder="password"
                value={password}
                onChange={(e) => passwordOnChange(e)}
            />
        </>
    );
}
 
export default Login;

