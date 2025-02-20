"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Divider from '@mui/material/Divider';
import GoogleComponent from '../../google/GoogleComponent';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/navigation';
import ModalComponent from '@/components/ModalComponent';

function SignUpForm() {

    const router = useRouter()
    const toast = useRef<Toast>(null);
    const formRef = useRef<HTMLFormElement | null>(null)

    const [nom, setNom] = useState("")
    const [entreprise, setEntreprise] = useState("")
    const [sexe, setSexe] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [tel, setTel] = useState("")
    const [load, setLoad] = useState(false)
    const [ville, setVille] = useState("")
    const [pays, setPays] = useState("")
    const [showModal, setShowModal] = useState(false)

    //Création d'une fonction pour afficher le modal en cas de succès
    const show = () => {
        setShowModal(true)
    }

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        try {
            const data = { nom, entreprise, email, password, sexe, tel, pays, ville, type_compte: "marchand" }
            const req = await fetch("/api/users-routes/inscription", {
                headers: { "Content-type": "application/json" },
                method: "POST",
                body: JSON.stringify(data)
            })
            const res = await req.json()
            if (res.data) {
                console.log(res.data)
                localStorage.setItem("usersInfos", JSON.stringify(res.data))
                toast.current?.show({
                    severity: "success",
                    summary: "Inscription réussie",
                    detail: "Votre compte a été créé avec succès. Un mail vous a été envoyé pour valider votre compte",
                    life: 5000,
                });
                if (formRef.current) {
                    formRef.current.reset()
                }
                setTimeout(() => {
                    show()
                }, 7000)
            } else {
                toast.current?.show({
                    severity: "error",
                    summary: "Erreur",
                    detail: res,
                    life: 3000,
                });
            }
            setLoad(false)

        } catch (error) {
            console.log(error)
            toast.current?.show({
                severity: "error",
                summary: "Erreur",
                detail: "Une erreur est survenue, reessayez plus tard !",
                life: 3000,
            });
            setLoad(false)
        }
    }

    return (
        <>
            <Toast ref={toast} />
            <ModalComponent visible={showModal} setVisible={setShowModal} />
            <form ref={formRef} onSubmit={(e) => submitForm(e)} className='row px-lg-4 '>
                <div className="col-lg-12 mb-3">
                    <div className="p-1">
                        <input type="text" className="form-control " id="nom" placeholder="Entrez votre nom complet" required onChange={(e) => setNom(e.target.value)} />
                    </div>
                </div>
                <div className="col-lg-12 mb-3">
                    <div className="p-1">
                        <input type="text" className="form-control" id="entreprise" placeholder="Entrez le nom de votre entreprise" required onChange={(e) => setEntreprise(e.target.value)} />
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
                        <input type="text" className="form-control" id="pays" placeholder="Entrez votre pays" required onChange={(e) => setPays(e.target.value)} />
                    </div>
                </div>
                <div className="col-lg-12 mb-3">
                    <div className="mb-1">
                        <input type="text" className="form-control" id="ville" placeholder="Entrez votre ville" required onChange={(e) => setVille(e.target.value)} />
                    </div>
                </div>
                <div className="col-lg-12 mb-3">
                    <div className="mb-1">
                        <input type="tel" className="form-control" id="tel" placeholder="Entrez votre numéro de téléphone" required onChange={(e) => setTel(e.target.value)} />
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
                <Link href="/login" className='w-50 text-decoration-none text-end text-success fw-bold'>se connecter</Link>
                <div className="row d-flex justify-content-evenly my-2">
                    <div className="col-lg-5">
                        <Divider className='fw-bold text-dark bg-dark' style={{ height: '2px', margin: '20px 0' }} />
                    </div>
                    ou
                    <div className="col-lg-5">
                        <Divider className='fw-bold text-dark bg-dark' style={{ height: '2px', margin: '20px 0' }} />
                    </div>
                </div>
                <div className="col-lg-12 mb-3">
                    <GoogleComponent />
                </div>
            </form>
        </>

    )
}

export default SignUpForm


