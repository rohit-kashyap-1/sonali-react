import React from 'react'

export default function Login() {
  return (
    <div>
      
      <h3>User Login Form</h3>
      <form action='' method=''>
        <div className='row'>
            <div className='col-md-4'>
                <div className='form-group mb-3'>
                    <label className='form-label'>Username</label>
                    <input type='text' className='form-control' placeholder='eg.uusername' />
                </div>
                <div className='form-group mb-3'>
                    <label className='form-label'>Password</label>
                    <input type='password' className='form-control' placeholder='eg.password' />
                </div>
                <button className='btn btn-success'>Login</button>
            </div>
        </div>
      </form>
    </div>
  )
}
