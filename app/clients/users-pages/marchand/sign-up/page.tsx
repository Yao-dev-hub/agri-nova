"use client"
import Link from 'next/link';
import SignUpForm from './SignUpForm';
import { FaArrowCircleRight } from "react-icons/fa";

function page() {



    return (
        <div className='container-fluid ' id='inscription-vendeur'  >
            <div className="container">
                <div className="row p-lg-5">

                    <div className="container  d-flex justify-content-center align-items-center ">
                        <div className="col-lg-7 " id='banniere-inscription-vendeur'>
                            <div className="row p-5">
                                <div className="col-lg-10">
                                    <h2 className='fw-bold text-white'>Bienvenue sur <span className='logo'>Agri Nova</span>, vous êtes sur la page d'inscription pour les vendeurs.</h2>
                                </div>
                                <div className="col-lg-10 text-white" >
                                    <h5 className='mb-4'> Si vous êtes un acheteur, utilisez le bouton <span className='fw-bold text-white'>acheteur</span> pour vous inscrire.</h5>
                                    <p className='mb-4'>Une fois inscrit(e), vous bénéficierez de tous les avantages de notre application pour vendre vos produits agricoles, gérer vos transactions, et atteindre une large communauté d'acheteurs en toute simplicité.</p>
                                    <Link href="../acheteur/sign-up" type='button' className="btn btn-secondary text-white mt-2 fw-bold">Acheteur <FaArrowCircleRight /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 p-3 bg-inscription-vendeur" >
                            <h4 className='text-center fw-bold mb-4 '>Créer un compte</h4>
                            <SignUpForm />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default page