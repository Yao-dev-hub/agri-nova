"use client"
import React from 'react'
import { FcGoogle } from "react-icons/fc";

function GoogleComponent() {
    return (
        <button type='button' className='btn btn-light p-2 form-control border'>
            <FcGoogle className='fs-5' /> <span className='ms-1 fw-bold'>Se connecter avec google</span>
        </button>
    )
}

export default GoogleComponent