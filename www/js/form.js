import { getMahasiswas, addMahasiswa, serverTimeStamp } from "./firebase.js";

// Get element
const form = document.querySelector("#form");
const nama = document.querySelector("#nama");
const nim = document.querySelector("#nim");
const angkatan = document.querySelector("#angkatan");

// When form is submitted
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get data from form
  const mahasiswa = {
    nama: nama.value,
    nim: nim.value,
    angkatan: angkatan.value,
    createdAt: serverTimeStamp(),
    updatedAt: serverTimeStamp(),
  };

  // Add mahasiswa to firestore
  const id = await addMahasiswa(mahasiswa);

  //   Redirect
  window.location.href = "index.html";
});

console.log(await getMahasiswas());
