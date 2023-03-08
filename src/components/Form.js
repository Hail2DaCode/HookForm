import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirm, setConfirm] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstname, lastname, email, password };
        console.log("Welcome", newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirm("");
    };
    
    return(
        <div className='container'>
            <form onSubmit={ createUser }>
                <div className="input">
                    <label>First Name: </label> 
                    <input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
                </div>
                <div className="input">
                    <label>Last Name: </label> 
                    <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
                </div>
                <div className="input">
                    <label>Email: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className="input">
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className="input">
                    <label>Confirm Password: </label>
                    <input type="password" value={confirm} onChange={ (e) => setConfirm(e.target.value) } />
                </div>
                <input type="submit" value="Create User" className="input" id = "button"/>
            </form>
            <h1>Your Form Data</h1>
            <div className = "bottom">
                <p className = "label">First Name </p>
                <p className='word'>{ firstname } </p>
            </div>
            <div className = "bottom">
                <p className = "label">Last Name  </p>
                <p className = "word"> { lastname }</p>
            </div>
            <div className = "bottom">
                <p className = "label">Email </p>
                <p className='word'> { email } </p>
            </div>
            <div className = "bottom">
                <p className = "label"> Password  </p>
                <p className='word'> { password } </p>

            </div>
            <div className = "bottom">
                <p className = "label">Confirm Password  </p>
                <p className='word'>  { confirm }</p>
            </div>
            
        </div>
        
    );
};
    
export default UserForm;
