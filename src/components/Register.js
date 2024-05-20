import React from 'react'

export default function Register() {
  return (
    <div>
      
      <h3>User Registration Form</h3>
      <form action='' method=''>
        <div className='row'>
            <div className='col-md-4'>
                <div className='form-group mb-3'>
                    <label className='form-label'>Username</label>
                    <input type='text' className='form-control' placeholder='eg.uusername' />
                </div>
                <div className='form-group mb-3'>
                    <label className='form-label'>Create Password</label>
                    <input type='password' className='form-control' placeholder='eg.password' />
                </div>
                <button className='btn btn-success'>Register</button>
            </div>
        </div>
      </form>
    </div>
  )
}
