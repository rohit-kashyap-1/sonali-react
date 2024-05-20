import React, { useState } from "react";

import Login from "./Login";

import Register from "./Register";

function Contact(){

    let [form,setForm] = useState('login')

    function loadLogin(){
        setForm('login')
    }
    function loadRegister(){
        setForm('register')
    }
    return (
        <div>
            <h1 className="display-6">Hire Me</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <hr />
            <br />
            <button className="btn btn-dark " onClick={loadLogin}>Login</button>  &nbsp;
            <button className="btn btn-dark " onClick={loadRegister}>Register</button>
            <br />
            <br />
            {(form==='login')?<Login />:<Register />}

            {console.log(form)}
            
        </div>
    )
}

export default Contact