import { auth, db } from "@/database/firebaseConfig"
import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        const { email, password } = await req.json()
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        if (user.emailVerified) {
            const uid = user.uid
            const snap = await getDoc(doc(db, "users", uid))
            if (snap.exists()) {
                const data = snap.data()
                return NextResponse.json({ data })
            } else {
                return NextResponse.json("Email ou mot de passe incorrect")
            }
        } else {
            sendEmailVerification(auth.currentUser!)
            return NextResponse.json("Email non verifié. Un mail vous a été envoyé pour valider votre email. Merci de bien vouloir verifier votre boite email ou vos spams")
        }

    } catch (error) {
        console.log("Firebase error", error)
        return NextResponse.json("Identifiants inconnue ou verifiez votre connexion.")
    }
}