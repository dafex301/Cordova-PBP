import { getMahasiswa, updateMahasiswa } from "./firebase.js";

// get mahasiswa id from url
const id = window.location.search.split("=")[1];
// get element
const form = document.querySelector("#form");
const nama = document.querySelector("#nama");
const nim = document.querySelector("#nim");
const angkatan = document.querySelector("#angkatan");
// get mahasiswa data
const mahasiswa = await getMahasiswa(id);
// set mahasiswa data to form
nama.value = mahasiswa.nama;
nim.value = mahasiswa.nim;
angkatan.value = mahasiswa.angkatan;
// when form is submitted
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  // get data from form
  const mahasiswa = {
    nama: nama.value,
    nim: nim.value,
    angkatan: angkatan.value,
  };
  // update mahasiswa
  await updateMahasiswa(id, mahasiswa);
  // redirect
  window.location.href = "index.html";
});
