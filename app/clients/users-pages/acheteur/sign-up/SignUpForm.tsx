"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Divider from '@mui/material/Divider';
import GoogleComponent from '../../google/GoogleComponent';
import { Toast } from 'primereact/toast';

function SignUpForm() {

    const toast = useRef<Toast>(null);
    const formRef = useRef<HTMLFormElement | null>(null)

    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [sexe, setSexe] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [tel, setTel] = useState("")
    const [profession, setProfession] = useState("")
    const [load, setLoad] = useState(false)
    const [message, setMessage] = useState("")
    // variable pour afficher le toast en cas de succès
    const [showToast, setShowToast] = useState(false)

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        setMessage("")
        try {
            const data = { nom, prenom, email, password, sexe, tel, profession }
            const req = await fetch("/api/users-routes/acheteur/inscription", {
                headers: { "Content-type": "application/json" },
                method: "POST",
                body: JSON.stringify(data)
            })

            const res = await req.json()
            if (res.data) {
                console.log(res.data)
                localStorage.setItem("usersInfos", JSON.stringify(res.data))
                setTimeout(() => {
                    setShowToast(true)

                    if (formRef.current) {
                        formRef.current.reset()
                    }
                    setMessage("utilisateur crée avec succès")
                }, 3000)
            }

        } catch (error) {
            console.log(error)
            setMessage("Erreur survenue lors de la création de compte !")

        } finally {
            setTimeout(() => {
                setLoad(false)
            }, 3000)
        }
    }

    useEffect(() => {
        if (showToast && toast.current) {
            const success = true
            if (success) {
                toast.current.show({
                    severity: "success",
                    summary: "Inscription réussie",
                    detail: "Votre compte a été créé avec succès.",
                    life: 3000,
                });
            } else {
                toast.current.show({
                    severity: "error",
                    summary: "error",
                    detail: "Une erreur est survenue !",
                    life: 3000,
                });
            }

            setShowToast(false)
        }
    }, [])

    return (
        <>
            <Toast ref={toast} />
            <form ref={formRef} onSubmit={(e) => submitForm(e)} className='row px-lg-4 '>
                <div className="col-lg-6 mb-3">
                    <div className="p-1">
                        <input type="text" className="form-control " id="nom" placeholder="Entrez votre nom" required onChange={(e) => setNom(e.target.value)} />
                    </div>
                </div>
                <div className="col-lg-6 mb-3">
                    <div className="p-1">
                        <input type="text" className="form-control" id="prenom" placeholder="Entrez votre prenom" required onChange={(e) => setPrenom(e.target.value)} />
                    </div>
                </div>
                <div className="col-lg-12 mb-3">
                    <div className="mb-1">
                        <input type="email" className="form-control" id="email" placeholder="Entrez votre email" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="col-lg-12 mb-3">
                    <div className="mb-1">
                        <input type="password" className="form-control" id="password" placeholder="Entrez votre mot de passe" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="col-lg-12 mb-3">
                    <div className="mb-1">
                        <input type="text" className="form-control" id="profession" placeholder="Entrez votre profession" required onChange={(e) => setProfession(e.target.value)} />
                    </div>
                </div>
                <div className="col-lg-12 mb-3">
                    <select className="form-select form-control p-2" aria-label="Default select example" required onChange={(e) => setSexe(e.target.value)}>
                        <option >Selectionnez votre sexe</option>
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                    </select>
                </div>
                <div className="col-lg-12 mb-3">
                    <div className="mb-1">
                        <input type="tel" className="form-control" id="tel" placeholder="Entrez votre numéro de téléphone" required onChange={(e) => setTel(e.target.value)} />
                    </div>
                </div>
                {
                    !load ? (
                        <div className="col-lg-12 mb-3">
                            <button type="submit" className='fw-bold text-center p-2 btn btn-danger form-control'>Créer un compte</button>
                        </div>
                    ) : (
                        <div className="col-lg-12 mb-3">
                            <p className='fw-bold text-center p-2 btn btn-outline-primary form-control h5'>
                                <i className=" fas fa-spinner fa-spin me-2 "></i>
                                Veillez patienter quelque instants !</p>
                        </div>
                    )
                }
                <span className=' w-50'>Déja un compte ?</span>
                <Link href="clients/users-pages/login" className='w-50 text-decoration-none text-end fw-bold'>se connecter</Link>
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

export default SignUpForm