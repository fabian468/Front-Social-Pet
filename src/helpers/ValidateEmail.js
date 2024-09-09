import validator from 'validator'


export const validateEmail = (e) => {
    console.log(e)
    if (validator.isEmail(e)) {
        return true
    } else {
        return false
    }
}