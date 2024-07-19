/*
1. Buatlah sebuah function bernama ambilDataUser().
2. Gunakan fetch() untuk mengambil data dari endpoint API berikut: https://jsonplaceholder.typicode.com/users.
3. Gunakan promise untuk melakukan fetch(). Tambahkan .then() di bawah kode fetch(). Isi parameter .then() berupa callback function yang memiliki argumen bernama response. Di dalamnya, lakukan return terhadap response dan gunakan method .json().
4. Tambahkan .then() yang kedua di bawah kode .then() yang pertama. Isi parameter .then() berupa callback function yang memiliki argumen bernama users. Di dalamnya, lakukan console.log() terhadap variabel users.
5. Panggil function ambilDataUser() di luar blok kode function ambilDataUser. Cek pada tab Console untuk melihat data. */


// Buat kode kamu di bawah ini
// const tesFetchAsync = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   response = await response.json();
//   console.log(response);
// };
// tesFetchAsync();

function ambilDataUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
       return response.json()
    })
    .then(users => {
        console.log(users)
    })
}


ambilDataUser()