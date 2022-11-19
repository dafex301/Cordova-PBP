import {
  getMahasiswas,
  getMahasiswa,
  deleteMahasiswa,
  updateMahasiswa,
  getMahasiswasOrderByCreatedAt,
} from "./firebase.js";

// Get element
const mahasiswa_list = document.getElementById("mahasiswa_list");

// Get mahasiswas
const mahasiswas = await getMahasiswasOrderByCreatedAt();

// Show mahasiswas
let i = 0;
mahasiswas.forEach((mahasiswa) => {
  const item = document.createElement("div");
  item.innerHTML = `
        <div class="flex justify-between bg-white rounded-2xl mx-10 my-4 shadow-gray-300 shadow-md w-auto h-auto">
          <div class="p-4">
              <p class="text-base font-bold">${mahasiswa.nama}</p>
              <p class="text-xs text-slate-400">${mahasiswa.nim}</h6>
              <p class="text-xs text-slate-400">${mahasiswa.angkatan}</p>
              <input type="hidden" id="id-${i}" value="${mahasiswa.id}"/>
          </div>
          <div class="flex flex-row justify-between ">
            <div class="flex px-2 items-center active:bg-gray-100">
              <div class="update-btn items-center"><svg class="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></div>
            </div>
            <div class="flex px-2 items-center rounded-r-2xl active:bg-gray-100">
              <div class="delete-btn items-center rounded-r-2xl"><svg class="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></div>
            </div>
          </div>
        </div>
    `;
  mahasiswa_list.appendChild(item);
  i++;
});

// delete mahasiswa by id
const deleteBtns = document.querySelectorAll(".delete-btn");
i = 0;
deleteBtns.forEach((btn) => {
  const id_input = document.getElementById(`id-${i}`);
  btn.addEventListener("click", async (e) => {
    const id = id_input.value;
    e.preventDefault();
    await deleteMahasiswa(id);
    window.location.href = "index.html";
  });
  i++;
});

// update mahasiswa by id
const updateBtns = document.querySelectorAll(".update-btn");
i = 0;
updateBtns.forEach((btn) => {
  const id_input = document.getElementById(`id-${i}`);
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const id = id_input.value;
    window.location.href = `update.html?id=${id}`;
  });
  i++;
});
