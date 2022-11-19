import { getMahasiswas } from "./firebase.js";

// Get element
const mahasiswa_list = document.querySelector("#mahasiswa_list");

// Get mahasiswas
const mahasiswas = await getMahasiswas();

// Show mahasiswas
mahasiswas.forEach((mahasiswa) => {
  const item = document.createElement("div");
  item.innerHTML = `
        <div class="card">
        <div class="card-body">
            <h5 class="card-title
            ">${mahasiswa.nama}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${mahasiswa.nim}</h6>
            <p class="card-text">${mahasiswa.angkatan}</p>
        </div>
        </div>
    `;
  mahasiswa_list.appendChild(item);
});
