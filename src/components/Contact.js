import React, { useState } from "react";

import Login from "./Login";

import Register from "./Register";

import Form from "./Form";

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
            <Form />
        </div>
    )
}

export default Contact