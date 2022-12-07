export function translateMessage(message) {
    let newMessage;
    switch (message) {
        case "auth/wrong-password":
            newMessage = "Yanlış parola girdiniz!"
            break;
        case "auth/user-not-found":
            newMessage = "Bu bilgilerde bir kullanıcı bulunamadı!"
            break;
        case "auth/email-already-in-use":
            newMessage = "Bu email adresi ile daha önce kayıt olunmuş!"
            break;
        case "auth/invalid-email":
            newMessage = "Yazdığınız email formatı geçersizdir!"
            break;
        case "auth/weak-password":
            newMessage = "Parolanız minimum 6 karakter olmalıdır."
            break;
    
        default:
            newMessage = message
            break;
    }

    return newMessage;
}