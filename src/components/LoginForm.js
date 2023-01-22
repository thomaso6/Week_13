import React, { useState } from "react";


export const LogIn = () =>{
    const [username, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const submitForm = () =>{
        
        console.log(username)
    }
    return(
        <div class="login">
        <form class="form">
            <h3>Log in:</h3>
            <input type="username" placeholder="UserName" id="username" name="username"/>
            <input type="password" placeholder="Password" id="password" name="password"/>
            <button type="submit">Go!</button>
        </form>
        </div>
    )
}