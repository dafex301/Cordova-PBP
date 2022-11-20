// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmr7zmNA0EXJvi2mi7JtMQDZ1hVNlAWuA",
  authDomain: "cordova-pbp.firebaseapp.com",
  projectId: "cordova-pbp",
  storageBucket: "cordova-pbp.appspot.com",
  messagingSenderId: "74242470813",
  appId: "1:74242470813:web:06a861d914f01d2b063574",
  measurementId: "G-RS4LZCEZSG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

// ======================== FIRESTORE OPERATION ========================
// Collection ref
const usersCollection = collection(db, "mahasiswas");

// Get all mahasiswas
export const getMahasiswas = async () => {
  let mahasiswas = [];
  const querySnapshot = await getDocs(usersCollection);
  querySnapshot.forEach((doc) => {
    mahasiswas.push({ ...doc.data(), id: doc.id });
  });
  return mahasiswas;
};

// Get all mahasiswas ordey by createdAt
const q = query(usersCollection, orderBy("createdAt", "desc"));
export const getMahasiswasOrderByCreatedAt = async () => {
  let mahasiswas = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    mahasiswas.push({ ...doc.data(), id: doc.id });
  });
  return mahasiswas;
};

// Get mahasiswa by id
export const getMahasiswa = async (id) => {
  const docRef = doc(db, "mahasiswas", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

// Add mahasiswa
export const addMahasiswa = async (mahasiswa) => {
  const docRef = await addDoc(usersCollection, mahasiswa);
  return docRef.id;
};

// Delete mahasiswa
export const deleteMahasiswa = async (id) => {
  const docRef = doc(db, "mahasiswas", id);
  await deleteDoc(docRef);
};

// Update mahasiswa
export const updateMahasiswa = async (id, mahasiswa) => {
  const docRef = doc(db, "mahasiswas", id);
  await updateDoc(docRef, mahasiswa);
};

export const createUser = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export const signInUser = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      console.log('user :>> ', user);

      //redirect
      window.location.href = "index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log('errorMessage :>> ', errorMessage);
    });
}

export const signOutUser = async () => {
  await signOut(auth).then(() => {
    // Sign-out successful.
    window.location.href = "login.html";
  }).catch((error) => {
    // An error happened.
  });
}




export const serverTimeStamp = serverTimestamp;
