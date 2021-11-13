import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseconfig'
const initializefirebase = ()=>{
    initializeApp(firebaseConfig);
}
export default initializefirebase;