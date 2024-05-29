import React, { useState } from 'react'

export default function Form() {

    let [username,setUsername] = useState({value:'',error:'',suggestion:'',infoClass:''})
    let [password,setPassword] = useState({value:'',error:'',suggestion:'',infoClass:''})
    let [role,setRole] = useState({value:'',error:'',suggestion:'',infoClass:''})

    function handleSubmit(e){
        e.preventDefault()
        // if(username.value.length<10){
        //     setUsername({value:username.value,error:'Please enter a valid username',suggestion:''})
        // }else{
        //     if(username.value.indexOf(" ")){
        //         setUsername({value:username.value,error:'Spaces are not allowed',suggestion:'Please use underscore and hyphen(-) in username'})
        //     }
        // }

        

        // if(password.value.length<10){
        //     setPassword({value:password.value,error:'Please enter a valid password'})
        // }else{

        // }

        //JSON

        let data = {username:username.value, password:password.value, role:role.value }
        data = JSON.stringify(data)
        console.log(data)
    }

    function handleUsername(event){
        let value = event.target.value
        //0
        let sp = (value.indexOf(" ")>-1)?true:false
        if(value.length<10 || sp){
            setUsername({value:value,error:'Please enter a valid username',infoClass:'border-danger'})
        }else{
            setUsername({value:value,error:'',infoClass:'border-success'})
        }
        
    }

    function handlePassword(event){
        let value = event.target.value
        let sp = (value.indexOf(" ")>-1)?true:false
        if(value.length<10 || sp){
            setPassword({value:value,error:'Please enter a valid password',infoClass:'border-danger'})
        }else{
            setPassword({value:value,error:'',infoClass:'border-success'})
        }
    }

    function handleRole(event){
        let value = event.target.value
        if(value==2){
            setRole({value:value,error:'Manager Role are disabled at this time',infoClass:'border-danger'})
        }else{
            setRole({value:value,error:'',infoClass:'border-success'})
        }
    }
    //validation
  return (
    <div>
      <form action='' method='' onSubmit={handleSubmit} >
        <h1>User Login</h1>
        <div className='mb-3'>
            <label className='form-label'>Username</label>
            <input type='text' className={'form-control mb-2 ' + username.infoClass } onChange={handleUsername} value={username.value} />
            <span className='text-danger' style={{ fontSize:'16px',color:'red !important' }}> {username.error}</span>
            <span className='text-info' style={{ fontSize:'16px'}}> {username.suggestion}</span>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input type='password' className={'form-control mb-2 ' + password.infoClass} onChange={handlePassword} value={password.value} />
            <span className='text-danger' style={{ fontSize:'16px',color:'red !important' }}>{password.error}</span>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Role</label>
            <select className={'form-control mb-2 ' + role.infoClass} value={role.value} onChange={handleRole}>
                <option value={''}>Select Role</option>
                <option value={1}>Administrator</option>
                <option value={2}>Manager</option>
                <option value={3}>Editor</option>
            </select>
            <span className='text-danger' style={{ fontSize:'16px',color:'red !important' }}>{role.error}</span>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

//username, username error
//password, password error
