export type ModalType = {
    show?: boolean,
    setShow?: React.Dispatch<React.SetStateAction<boolean>>,
    closeModal?: () => void,
    MarchandPage?: () => void,
    OpenModal?: () => void
}

export type LoadingType = {
    visible: boolean,
    height: string,
    width: string,
    color: string,
    strokeWidth: string,
    animationDuration: string,
    ariaLabel: string,
    wrapperStyle: {}
    wrapperClass: string,
    text: string
}

export type usersType = {
    nom?: string,
    prenom?: string,
    email?: string,
    password?: string,
    sexe?: string,
    tel?: string,
    profession?: string,
    uid?: string
}