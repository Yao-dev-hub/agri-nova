"use client"
import Link from 'next/link';
import SignUpForm from './SignUpForm';
import { FaArrowCircleRight } from "react-icons/fa";

function page() {



    return (
        <div className='container-fluid ' id='inscription-acheteur'>
            <div className="container">
                <div className="row p-lg-5">
                    <div className="container  d-flex justify-content-center align-items-center ">
                        <div className="col-lg-7 " id='banniere-inscription-acheteur'>
                            <div className="row p-5">
                                <div className="col-lg-10">
                                    <h2 className='fw-bold text-white'>Bienvenue sur <span className='logo'>Agri Nova</span>, vous êtes sur la page d'inscription pour les acheteurs.</h2>
                                </div>
                                <div className="col-lg-10 text-white" >
                                    <h5 className='mb-4'> Si vous êtes vendeur, utilisez le bouton <span className='fw-bold text-white'>vendeur</span> pour vous inscrire.</h5>
                                    <p className='mb-4'>Une fois inscrit(e), vous bénéficierez de tous les avantages de notre application pour vendre vos produits agricoles, gérer vos transactions, et atteindre une large communauté d'acheteurs en toute simplicité.</p>
                                    <Link href="../marchand/sign-up" type='button' className="btn btn-success mt-2 fw-bold">Vendeur <FaArrowCircleRight /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 bg-inscription" >
                            <h4 className='text-center fw-bold mb-4 titre-formulaire'>Créer un compte</h4>
                            <SignUpForm />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default page