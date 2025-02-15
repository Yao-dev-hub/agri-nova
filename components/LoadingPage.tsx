import { LoadingType } from '@/types';
import React, { useEffect, useState } from 'react'
import { RotatingLines } from "react-loader-spinner";

function LoadingPage() {
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    })

    const loadingProps: LoadingType = {
        visible: true,
        height: "96", // Doit être une chaîne de caractères comme vous l'aviez indiqué
        width: "96",  // Idem pour width
        color: "grey",
        strokeWidth: "5",  // strokeWidth comme string
        animationDuration: "0.75", // animationDuration en string
        ariaLabel: "rotating-lines-loading",
        wrapperStyle: {},  // Style personnalisé (objet vide ici)
        wrapperClass: "",  // Classe CSS vide ici,
        text: "Chargment en ours ..."
    }

    return (
        <>
            {load &&
                <div id='div-loading' className='text-success'>
                    <RotatingLines {...loadingProps} />
                    {loadingProps.text && <p className='text-dark fw-bold'>{loadingProps.text}</p>}
                </div>
            }
        </>
    )
}

export default LoadingPage