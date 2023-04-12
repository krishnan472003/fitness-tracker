import { db } from "../firebase";
import { collection,getDocs,where,addDoc, query,doc,orderBy,limit } from "firebase/firestore";
const collRef = collection(db,"users")
class dataService{
    addData = (newData) =>{
        return addDoc(collRef,newData)
    }
    getData = async () => {
      const uid = await localStorage.getItem('uid')
      const q = await query(collRef, where('users', '==', uid), orderBy('date', 'desc'));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log('No matching documents.');
        return null;
      } else {
        let allData=[];
        allData = querySnapshot.docs.map(doc => doc.data());
        return allData;
      }
    }
         
    
}

export default new dataService();
// , orderBy('date', 'desc')