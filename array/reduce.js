/*
1. Lakukan operasi perhitungan pada array nilai menggunakan .reduce().
Tambahkan callback function dengan parameter total dan item.
Lalu berikan return statement di dalam callback function yang mengembalikan nilai penjumlahan dari variabel total dan item. Gunakan operator + untuk melakukan penjumlahan.


2. Buat variabel baru bernama jumlahNilai. Assign seluruh kode sebelumnya ke variabel jumlahNilai menggunakan operator =.


3. Buatlah variabel baru bernama rataRata di luar blok kode .reduce().
Lalu assign variabel rataRata dengan proses perhitungan rata-rata nilai yang ada pada data array nilai.
Caranya lakukan pembagian dari data total nilai pada array sebelumnya yang telah kita lakukan .reduce() yaitu jumlahNilai dibagi (gunakan operator /) dengan panjang data array nilai (gunakan property bawaan array yaitu .length)

Nilai rata-rata = Jumlah nilai/banyaknya data

4. Lakukan console.log() untuk menampilkan nilai rataRata dan pastikan harus bernilai 84. Cek tab Console untuk melihat hasilnya. */

let nilai = [100, 80, 80, 70, 90];

// Buat kode kamu di bawah ini
let jumlahNilai = nilai.reduce((total, item) => {
    return total + item;
});

let rataRata = jumlahNilai/nilai.length;

console.log(rataRata);
