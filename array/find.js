/*
1. Lakukan pencarian pada array hewan menggunakan method .find(). Beri callback function dengan parameter item sebagai value dari data array.

2. Di dalam method .find() tambahkan return statement untuk melakukan pencarian nama hewan dengan kondisi nama hewan diawali oleh huruf "J" dan diakhiri huruf "h" (tanpa menggunakan if). Gunakan comparison operator dari JavaScript.

3. Buatlah variabel cariHewan dan assign seluruh kode kamu sebelumnya ke dalam variabel cariHewan menggunakan operator =.

4. Lakukan console.log() di luar blok kode .find() untuk menampilkan data pada variabel cariHewan dan pastikan data berisi teks string Jerapah.
Cek pada tab Console untuk melihat data. */

let hewan = ["Harimau", "Gajah", "Jerapah", "Ular"];

// Buat kode kamu di bawah ini

let cariHewan = hewan.find((item) => {
  return item.startsWith('J') && item.endsWith('h');
});

console.log(cariHewan);

/*
1. Lakukan pencarian untuk mendapatkan nilai index menggunakan .findIndex() pada array angka. Beri callback function dengan parameter item sebagai value dari elemen array.

2. Buat return statement di dalam callback function, kemudian tambahkan suatu kondisi untuk mendapatkan nilai item yang akan habis jika dibagi dengan 5 dan 10(tanpa menggunakan if).

Hint: Gunakan comparison operator dan modulus.

3. Buatlah sebuah variabel baru bernama cariIndexAngka lalu assign semua kode yang kamu buat sebelumnya ke dalam variabel cariIndexAngka.

4. Lakukan console.log() untuk menampilkan data pada variabel cariIndexAngka dan pastikan data berisi nilai 3. Cek tab Console untuk melihat data. */

let angka = [14, 24, 55, 60, 32, 85];

// Buat kode kamu di bawah ini
let cariIndexAngka = angka.findIndex((item) => {
  return item % 5 === 0 && item % 10 === 0 ; 
});

console.log(cariIndexAngka);