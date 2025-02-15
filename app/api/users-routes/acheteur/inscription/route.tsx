import { auth, db } from "@/database/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {

    try {
        const { nom, prenom, email, password, tel, profession, sexe } = await req.json()
        //Création d'un utilisateur acheteur
        const acheteur = await createUserWithEmailAndPassword(auth, email, password)
        const uid = acheteur.user.uid

        //On récupère les données
        const data = { nom, prenom, email, tel, profession, sexe, uid }

        //Enregistrons notre utilisateur acheteur dans la base de donnée
        await setDoc(doc(db, "Acheteurs", uid), data)

        return NextResponse.json({ massge: "ok", data })

    } catch (error) {
        console.log(error)
        return NextResponse.json("Erreur rencontée lors de création de compte de l'utilisateur achété")
    }
}