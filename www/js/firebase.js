// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
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
