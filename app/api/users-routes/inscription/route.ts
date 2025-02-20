import { auth, db } from "@/database/firebaseConfig"
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {

    try {
        let data = await req.json()
        //Création d'un utilisateur acheteur
        const userInfo = await createUserWithEmailAndPassword(auth, data.email, data.password)
        //await updateProfile(auth.currentUser!, { displayName: data.name })
        await sendEmailVerification(auth.currentUser!)
        const uid = userInfo.user.uid
        data.password = null
        data.type_connexion = "standard"
        //Enregistrons notre utilisateur acheteur dans la base de donnée
        await setDoc(doc(db, "users", uid), data)
        return NextResponse.json({ messge: "ok", data })
    } catch (error) {
        console.log(error)
        return NextResponse.json("Erreur rencontée lors de création de compte de l'utilisateur achéteur")
    }
}