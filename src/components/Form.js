import React, { useState } from 'react'

export default function Form() {

    let [name,setName] = useState('Rohit')
    let [phone,setPhone] = useState('')
    let [email,setEmail] = useState('')
    let [city,setCity] = useState('')
    let [gender,setGender] = useState('')
    let [skills,setSkills] = useState([])

    function handleSubmit(e){

        console.log(skills)
        let data = {name:name,email:email,phone:phone,city:city,gender:gender,skills:skills.toString()}
        let json = JSON.stringify(data)
        console.log(json)
        e.preventDefault()
    }

    function handleName(e){
        //e.target.value
        let value = e.target.value
        setName(value)
    }
    function handlePhone(e){
        //e.target.value
        let value = e.target.value
        setPhone(value)
    }
    function handleEmail(e){
        //e.target.value
        let value = e.target.value
        setEmail(value)
    }


    function handleGender(e){
        let value = e.target.value
        setGender(value)
    }

    function handleCity(e){
        let value = e.target.value
        setCity(value)
    }
    
    function handleSkill(e){
        let value =e.target.value
        let tmp = skills
        if(e.target.checked==true){
            tmp.push(value)
        }else{
            
        }

        setSkills(tmp)
    }
   
  return (
    <div>
      <form action='' method='' onSubmit={handleSubmit} style={{ width:'400px' }}>
        <input type='text' name='' className='form-control mb-3' placeholder='Enter Your Name' value={name} onChange={handleName} />

        <input type='text' name='' className='form-control mb-3' placeholder='Enter phone number' value={phone} onChange={handlePhone} />

        <input type='text' name='' className='form-control mb-3' placeholder='Enter email address' value={email} onChange={handleEmail} />


        <div className='mb-3 d-flex ' style={{ gap:'20px' }}>
            <label><input type='radio' value='Male' name='gender' onChange={handleGender} /> Male</label>
            <label><input type='radio' value='Female' name='gender' onChange={handleGender} /> Female</label>
        </div>

        <select name='' className='form-control mb-3' value={city} onChange={handleCity}>
            <option value={''}>Select City</option>
            <option value={'Delhi'}>Delhi</option>
            <option value={'Jaipur'}>Jaipur</option>
            <option value={'Gwalior'}>Gwalior</option>
            <option value={'Mundika'}>Mundika</option>
        </select>

        <label className='fw-bold'>Skills</label>
        <div className='mb-3 d-flex' style={{ gap:'14px',flexWrap:'wrap' }}>
            
            <label><input type='checkbox' name='' value='HTML' onChange={handleSkill} /> HTML</label>
            <label><input type='checkbox' name='' value='CSS' onChange={handleSkill} /> CSS</label>
            <label><input type='checkbox' name='' value='JavaScript' onChange={handleSkill} /> JavaScript</label>
            <label><input type='checkbox' name='' value='jQuery' onChange={handleSkill} /> jQuery</label>
            <label><input type='checkbox' name='' value='Bootstrap' onChange={handleSkill} /> Bootstrap</label>
            <label><input type='checkbox' name='' value='ReactJS'  onChange={handleSkill} /> ReactJS</label>
        </div>

        <button className='btn btn-success '>Submit</button>
      </form>
    </div>
  )
}
