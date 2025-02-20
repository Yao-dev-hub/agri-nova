import React from "react";
import { Dialog } from 'primereact/dialog';
import { ModalType } from "@/types";
import { FaCheck } from "react-icons/fa";
import { Button } from 'primereact/button';
import { useRouter } from "next/navigation";

export default function ModalComponent({ visible, setVisible }: ModalType) {

    const router = useRouter()

    const login = () => {
        router.push("/login")
    }

    return (
        <div className="card flex justify-content-center">
            <Dialog visible={visible} onHide={() => setVisible!(false)}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <div className="row justify-content-center align-items-center">
                    <h6 className="text-center text-success fw-bold"><FaCheck className="fs-1 me-2" /> Inscription réussie avec succès </h6>
                    <p className="mt-2 fw-bold text-center text-primary">
                        Votre compte a été créé avec succès. Un mail vous a été envoyé pour valider votre compte
                    </p>
                    <p className="text-center">Après avoir cliqué sur le lien qui vous a été envoyé , connezctez-vous en cliquant sur <span className="text-danger">Se connecter</span></p>
                </div>
            </Dialog>
        </div>
    )
}