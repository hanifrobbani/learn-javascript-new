// setTimeout(() => {
//     console.log("hello1")
// }, 2000);
// setTimeout(() => {
//     console.log("hello2");
// }, 3000);
// setTimeout(() => {
//     console.log("hello3")
// }, 2000);

// function greeting(name) {
//     console.log(`Halo ${name}, selamat datang di Skilvul!`);
// }

// function introduction(firstName, lastName, callback) {
//     const fullName = `${firstName} ${lastName}`;

//     callback(fullName);
// }

// introduction("Miftah", "Faris", greeting);

// Buat kode kamu di bawah ini
// function mandi() {
//     console.log("Mandi");
// }
// function sarapan(callback) {
//     setTimeout(() => {
//         console.log("Sarapan tertunda 3 detik");
//         callback();
//     }, 3000);
// }
// function berangkatSekolah() {
//     console.log("Berangkat Sekolah");
// }

// mandi()
// sarapan()
// berangkatSekolah()

// function mandi() {
//     console.log("Mandi");
// }
// function sarapan() {
//     console.log("sarapan");
// }
// function sekolah() {
//     console.log("sekolah");
// }

// mandi(sarapan)
// sekolah()

// const condition = true;

// let newPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         // apa yang dilakukan jika promise 'fulfilled'
//         resolve("Berhasil");
//     } else {
//         // apa yang dilakukan jika promise 'rejected'
//         reject(new Error("Error Gagal"));
//     }
// });

// newPromise.then((result) => {
//     return result;
//     // console.log(result)
// })
// .then((result2) => {
//     console.log(result2 + "!!"); // Output: Berhasil!!
// });

// console.log('Versi ECMAScript:', Object.getPrototypeOf(Function).constructor.prototype.ecmaVersion);

// Definisikan dahulu promise yang ingin digunakan
// let condition = true;
// let tesAsyncAwait = async (condition) => {
//     if (condition) {
//         return "Condition is fulfilled!";
//     } else {
//         throw "Condition is rejected!";
//     }
// };

// // Membuat fungsi run menjadi asynchronous menggunakan async/await
// const run = async (condition) => {
//     try {
//         const message = await tesAsyncAwait(condition);
//         console.log(message);  // Output: Condition is fulfilled!
//         console.log("After condition is fulfilled"); // Output: After condition is fulfilled
//     } catch (error) {
//         console.log(error);
//     }
// };

// console.log(tesAsyncAwait(true))

//Fungsi untuk mengambil data pengguna
function ambilDataUser() {
  fetch("https://api.jikan.moe/v4/characters?q=Sasuke")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response error: ${response}`);
      }
      return response.json();
    })
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

ambilDataUser();

// async function fetchAnimeInfo() {
//     try {
//         const response = await fetch('https://api.jikan.moe/v4/anime');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//     }
// }

// fetchAnimeInfo();
