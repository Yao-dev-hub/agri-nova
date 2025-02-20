"use client"
import { Divider } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import GoogleComponent from '../clients/users-pages/google/GoogleComponent'
import { Toast } from 'primereact/toast'
import { useRouter } from 'next/navigation'

function LoginForm() {

    const redirecte = useRouter()

    const toast = useRef<Toast>(null)
    const formRef = useRef<HTMLFormElement | null>(null)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [load, setLoad] = useState(false)
    const [showToast, setShowToast] = useState(false)

    const loginForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        try {
            const data = { email, password }

            const req = await fetch("/api/users-routes/connexion", {
                headers: { "Content-type": "application/json" },
                method: "POST",
                body: JSON.stringify(data)
            })
            const res = await req.json()
            if (res && res.data) {
                localStorage.setItem("user", JSON.stringify(res.data))
                if (res.data.type_compte === "client") redirecte.push("/clients/dashbord/acheteur")
                else redirecte.push("clients/dashbord/vendeur")
            } else {
                toast.current?.show({
                    severity: "error",
                    summary: "Erreur",
                    detail: res,
                    life: 5000,
                })
                setLoad(false)
            }
        } catch (error) {
            console.log(error)
            toast.current?.show({
                severity: "error",
                summary: "Erreur",
                detail: "Une erreur est survenue. Ressayez plus tard",
                life: 3000,
            })
            setLoad(false)
        }
    }

    return (
        <>
            <Toast ref={toast} />
            <form ref={formRef} onSubmit={(e) => loginForm(e)} className='row justify-content-center align-items-center p-3'>
                <div className="col-lg-12 mb-3">
                    <div className="mb-1">
                        <input type="email" className="form-control" id="email" required placeholder="Entrez votre email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="col-lg-12 mb-3">
                    <div className="mb-1">
                        <input type="password" className="form-control" id="password" required placeholder="Entrez votre mot de passe" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                {
                    !load ? (
                        <div className="col-lg-12 mb-3">
                            <button type='submit' className='btn btn-danger form-control p-2 text-center fw-bold'>Se connecter</button>
                        </div>
                    ) : (
                        <div className="col-lg-12 mb-3">
                            <p className='fw-bold text-center p-2 btn btn-outline-primary form-control h5'>
                                <i className=" fas fa-spinner fa-spin me-2 "></i>
                                Veillez patienter quelque instants !</p>
                        </div>
                    )
                }
                <span className=' w-50'>Pas de compte ?</span>
                <Link href="./clients/users-pages/acheteur/sign-up" className='w-50 text-decoration-none text-end fw-bold'>s'inscrire</Link>
                <div className="row d-flex justify-content-evenly my-2">
                    <div className="col-lg-5">
                        <Divider className='fw-bold text-dark bg-dark' style={{ height: '2px', margin: '20px 0' }} />
                    </div>
                    ou
                    <div className="col-lg-5">
                        <Divider className='fw-bold text-dark bg-dark' style={{ height: '2px', margin: '20px 0' }} />
                    </div>
                </div>
                <div className="col-lg-12 mb-2">
                    <GoogleComponent />
                </div>

            </form>
        </>
    )
}

export default LoginForm