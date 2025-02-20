"use client"
import React from 'react'
import LoginForm from './LoginForm'

function page() {
  return (
    <div className='container-fluid  d-flex justify-content-center align-items-center bg-login p-lg-5'>
      <div className="row justify-content-center align-items-center">
        <div className="container p-lg-5 d-flex justify-content-center align-items-center">
          <div className="col-lg-5 login-form p-lg-5">
            <h6 className="text-center mb-4 h4">Connectez-vous à votre compte !</h6>
            <LoginForm />
          </div>
          <div className="col-lg-7 login-banniere-achateur"></div>
        </div>
      </div>
    </div>
  )
}

export default page