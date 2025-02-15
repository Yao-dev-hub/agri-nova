import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';


function ModalComponent() {
    const router = useRouter()
    const [showModal, setshowModal] = useState(false)

    useEffect(() => {
        //On affiche le modal à 3 seconde après le lancement de la page
        const timer = setTimeout(() => {
            setshowModal(true)
        }, 2000)
        console.log(showModal)
        //On nettoie le
        return () => clearTimeout(timer)
    }, [])

    const closeModal = () => setshowModal(false)
    const MarchandPage = () => router.push("/clients/users-pages/marchand/sign-up")

    return (
        <>

            <Modal
                show={showModal}
                onHide={closeModal}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <h6 className='fw-bold text-center h5'>Vous êtes sur la page d'inscription pour les acheteurs.</h6>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-6">
                            <Image src="/images/sign-in2.jpg" width={350} height={260} alt="une image" />
                        </div>
                        <div className="col-lg-6">
                            <h5 className='mb-4'> Si vous êtes marchand, utilisez le bouton <span className='text-danger'>Page Marchand</span> pour vous inscrire..</h5>
                            <p className='mb-4'>Une fois inscrit(e), vous bénéficierez de tous les avantages de notre application pour vendre vos produits agricoles, gérer vos transactions, et atteindre une large communauté d'acheteurs en toute simplicité.</p>
                            <button type='button' className="btn btn-primary mt-2 form-control" onClick={MarchandPage}>page marchand</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalComponent