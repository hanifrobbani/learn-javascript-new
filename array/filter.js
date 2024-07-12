/*
1. Lakukan filter pada data array angka menggunakan method .filter().
Beri callback function dengan parameter item.
Tambahkan return statement di dalam callback function yang mengembalikan nilai dari variabel item.


2. Tambahkan kondisi pada return untuk mengembalikan item jika nilainya merupakan bilangan genap (tanpa menggunakan if).

Hint:
Mencari nilai ganjil:
Jika suatu kondisi pada bilangan x % 2 !== 0 bernilai true,
maka x adalah bilangan ganjil.

Mencari nilai genap:
Jika suatu kondisi pada bilangan x % 2 === 0 bernilai true,
maka x adalah bilangan genap.

3. Buatlah variabel baru bernama genap. Assign seluruh kode kamu sebelumnya ke dalam variabel genap menggunakan operator =.


4. Lakukan console.log() pada variabel genap di luar blok kode .filter() dan pastikan data yang ada bernilai [2, 4, 6, 8, 10]. Cek pada tab Console untuk melihat data.
 */

let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Buat kode kamu di bawah ini
let genap = angka.filter((item) => {
  return item % 2 === 0;
});

console.log(genap);