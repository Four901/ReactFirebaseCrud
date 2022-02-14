
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'


const app=firebase.initializeApp({
    apiKey: "AIzaSyCEgRjpNo2x93NKLN2_wbTM6-_KUUIU2NY",
    authDomain: "auth-dev-7e087.firebaseapp.com",
    databaseURL: "https://auth-dev-7e087-default-rtdb.firebaseio.com",
    projectId: "auth-dev-7e087",
    storageBucket: "auth-dev-7e087.appspot.com",
    messagingSenderId: "657304767567",
    appId: "1:657304767567:web:b551e4bc96e904ee926e3a",
    measurementId: "G-VC5K3JLGH8"
})

export const auth=app.auth()
export default app