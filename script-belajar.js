//===Bagian A: Kenalan dengan JavaScript===
console.log("Halo, JavaScript!");

const hewan = "Elang";
console.log("Hewan favoritku: " + hewan);

const umur = 5;
console.log("Hewan favoritku " + hewan + ", umurnya " + umur + " tahun");

// let favorit = prompt("Apa hewan favoritmu?");
// alert("Hewan favoritmu: " + favorit + "!");

//===Bagian B: Ambil Elemen dan Ubah Teks===
const judul = document.querySelector("#judul h1");
judul.textContent = "Mengenal Hewan Nusantara";

const kontak = document.querySelector("#kontak h2");
kontak.textContent = "Hubungi Kami";

//===Bagian C: Tombol Suka (BLOK 1, versi 1 kartu)===
// let jumlahSuka = 0;
// const tombolSuka = document.querySelector(".btn-suka");
// const teksSuka = document.querySelector(".jumlah-suka");
//
// function tambahSuka() {
//   jumlahSuka = jumlahSuka + 1;
//   teksSuka.textContent = jumlahSuka;
// }
//
// tombolSuka.addEventListener("click", tambahSuka);

//===Bagian D: Baca Selengkapnya (BLOK 2, versi 1 kartu)===
// const tombolBaca = document.querySelector(".btn-baca");
// const teksLengkap = document.querySelector(".selengkapnya");
//
// function bukaTutup() {
//   teksLengkap.classList.toggle("sembunyi");
//
//   if (teksLengkap.classList.contains("sembunyi")) {
//     tombolBaca.textContent = "Baca selengkapnya";
//   } else {
//     tombolBaca.textContent = "Tutup";
//   }
// }
//
// tombolBaca.addEventListener("click", bukaTutup);

//===Bagian D: Mode Gelap (BLOK 3)===
const tombolGelap = document.querySelector("#tombol-gelap");

function gantiMode() {
  document.body.classList.toggle("gelap");

  if (document.body.classList.contains("gelap")) {
    tombolGelap.textContent = "Mode Terang";
  } else {
    tombolGelap.textContent = "Mode Gelap";
  }
}

tombolGelap.addEventListener("click", gantiMode);

//===Bagian E: Semua Kartu Sekaligus===
const semuaKartu = document.querySelectorAll("article");

semuaKartu.forEach(function (kartu) {
  let jumlahSuka = 0;
  const tombolSuka = kartu.querySelector(".btn-suka");
  const teksSuka = kartu.querySelector(".jumlah-suka");

  tombolSuka.addEventListener("click", function () {
    jumlahSuka = jumlahSuka + 1;
    teksSuka.textContent = jumlahSuka;
  });

  const tombolBaca = kartu.querySelector(".btn-baca");
  const teksLengkap = kartu.querySelector(".selengkapnya");

  tombolBaca.addEventListener("click", function () {
    teksLengkap.classList.toggle("sembunyi");

    if (teksLengkap.classList.contains("sembunyi")) {
      tombolBaca.textContent = "Baca selengkapnya";
    } else {
      tombolBaca.textContent = "Tutup";
    }
  });
});

//===Bagian E3: Kotak Cari Hewan===
const kotakCari = document.querySelector("#cari");

kotakCari.addEventListener("input", function () {
  const kataKunci = kotakCari.value.toLowerCase();

  semuaKartu.forEach(function (kartu) {
    const judulKartu = kartu.querySelector("h3").textContent.toLowerCase();

    if (judulKartu.includes(kataKunci)) {
      kartu.classList.remove("sembunyi");
    } else {
      kartu.classList.add("sembunyi");
    }
  });
});