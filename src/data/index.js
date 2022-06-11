import { initializeApp } from "firebase/app";
import {getFirestore,doc,getDoc,query,where,collection,getDocs,Timestamp, addDoc} from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyCaZyqP1hToHcKwuzcZs7_77i_whuCxC6U",
  authDomain: "reactproducts-849a2.firebaseapp.com",
  projectId: "reactproducts-849a2",
  storageBucket: "reactproducts-849a2.appspot.com",
  messagingSenderId: "301214161431",
  appId: "1:301214161431:web:6980a9217e94b85ac6da52",
  measurementId: "G-X66HZT3MXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;
export async function getAllItems(){
    const miColec = collection(firestoreDB,'Products'); 
    const productSnap = await getDocs(miColec);
    return productSnap.docs.map(doc=>{
        return {
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItemsByCategory(categoryId){
    const miColec = collection(firestoreDB,'Products');
    const queryProduct = query(miColec, where("category","==",categoryId));
    const productSnap = await getDocs(queryProduct);
    return productSnap.docs.map(doc=>{
        return {
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItem(id){
    const miColec = collection(firestoreDB,'Products');
    const productRef = doc(miColec,id);
    const productSnap = await getDoc(productRef);
    return {
        ...productSnap.data(),id:productSnap.id}
}

export async function createBuyOrder(orderData){
    const buyTimeStamp = Timestamp.now();
    const orderWithDate = {
        ...orderData,
        date:buyTimeStamp
    };
    const miColec = collection(firestoreDB,"buyOrders");
    const orderDoc = await addDoc(miColec,orderWithDate);
    console.log("orden lista con id:",orderDoc.id); 

    return (orderDoc.id);    
}

