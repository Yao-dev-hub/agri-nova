import Link from 'next/link'
import React from 'react'

export default function ChooseInscriptin() {
    return (

        <div className='container'>
            <div className="col-lg-6">
                <Link href="/clients/users-pages/acheteur/sign-up" className='btn btn-success fw-bold p-2'>Je suis un marchand</Link>
            </div>
        </div>
    )
}
