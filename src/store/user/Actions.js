
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config'

export const logIn = async (context, { email, password }) => {
    
    
    const response = await signInWithEmailAndPassword(auth, email, password)
    
    if (response) {
        
        context.commit('SET_USER', response.user)

    } else {
        throw new Error('Login Failed')
    }
}

export const Register = async (context, { email, password }) => {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    if (response) {
        
        context.commit('SET_USER', response.user)

    } else {
        throw new Error('Register Failed')
    }
}
