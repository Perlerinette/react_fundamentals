import React, {useState} from 'react';


const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onEmailChange(event){
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    function onPasswordChange(event){
        console.log(event.target.value);
        setPassword(event.target.value);
    }



    return ( 
        <>
            <h3>SignUp</h3>
            <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => onEmailChange(e)}
            />
            <br/>
            <input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => onPasswordChange(e)}
            />

        </>
     );
}
 
export default Signup;