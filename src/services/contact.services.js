import { db } from "../firebase";
import { collection,getDoc,getDocs,addDoc, updateDoc,deleteDoc,doc } from "firebase/firestore";
const collRef = collection(db,"contact")
class contactService{
    addData = (newData) =>{
        return addDoc(collRef,newData)
    }
}

export default new contactService();