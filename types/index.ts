export type ModalType = {
    visible: boolean,
    setVisible: ((value: boolean) => void) | undefined
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