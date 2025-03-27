// Firebase configuration
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInAnonymously 
} from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// User Authentication Functions
export const signUpUser = async (email, password, name, username, careerAspiration, linkedinProfile) => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Store additional user information in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      username: username,
      careerAspiration: careerAspiration,
      linkedinProfile: linkedinProfile,
      email: email,
      createdAt: new Date(),
      progress: {
        coursesStarted: [],
        coursesCompleted: []
      },
      coursePreferences: [],
    });
    
    return user;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    // For simplicity, we're using email as username
    // In a real app, you'd query Firestore to find the email associated with the username
    const userSnapshot = await getDoc(doc(db, "users", username));
    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      const userCredential = await signInWithEmailAndPassword(auth, userData.email, password);
      return userCredential.user;
    } else {
      throw new Error("User not foun