import validator from 'validator'


export const validateEmail = (e) => {
    if (validator.isEmail(e)) {
        return true
    } else {
        return false
    }
}