// Soal
// 1. Lakukan perulangan pada array hewan menggunakan .forEach(). Beri callback function dengan parameter item sebagai value dari data array.

// 2. Di dalam callback function yang tadi dibuat, gunakan if statement sebagai conditional untuk mendapatkan list nama binatang dengan awalan huruf sebelum huruf "C" (contoh, "A" < "B"). Kemudian tampilkan item menggunakan console.log(). Klik tab Console untuk melihat list data.


let hewan = ["Ayam", "Buaya", "Cicak", "Domba"];

hewan.forEach((item) => {
  if (item[0] < 'C') {
    console.log(item);
  } else {
    console.log('A < B');
  }
});    