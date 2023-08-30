const isOkPassword = (password) =>{
    const hasLowercase = /[a-z]/.test(password)
    const hasUppercase = /[A-Z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|]/.test(password)

    if(hasLowercase && hasUppercase && hasNumber && hasSpecialCharacter && password.length >8){
        return true
    }
    return false
}
export default isOkPassword