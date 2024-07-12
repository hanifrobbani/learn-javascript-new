const arrayKu = ['🤣', '😎', '😀', '😁','😂' ]

console.log(arrayKu)

console.log(arrayKu.length)

if (arrayKu.length < 5){
    console.log('array nya dikit')
}
else{
    console.log('arraynya banyak')
}

let hour = 10;
let libur = true;

if (hour < 10 || hour > 18 || libur) {
  console.log( 'The office is closed.' ); // akhir minggu
}

console.log( !!"non-empty string" ); // true
console.log( !!undefined ); // false

//This is a object
let Orang = {
  nama: 'Hanif',
  Umur: 16,
  Alamat: 'Jalan Percobaan no 17'
}

console.log(Orang.nama, Orang.Umur, Orang.Alamat);

//With Statement tidak direkomendasikan
const Siapa = {
  Nama: 'Hanif',
  Umur: 17,
  country: 'Indonesia'
};

with (Siapa) {
  console.log(Nama, Umur, country);
}

function NamaOtomatis(){
  const User = document.getElementById('user').value;

  document.getElementById('hasil').innerHTML = (`Hello ${User} `);

  if(User === null || User === undefined || User === ''){
    document.getElementById('hasil').textContent = '';
  }
  
}

  const element = document.createElement('p');
  
  element.innerHTML = "<b> Saya suka Belajar JavaScript </b>";
  
  document.body.append(element);

function nyoba(nilai){
  document.getElementById('nyoba').value += nilai;
}

function clearAja(){
  document.getElementById('nyoba').value = '' ;
}


try{
  console.log(hah);
}catch{
  console.log('Terjadi Error');
}


//cara 1
const newelement = document.createElement('b');

newelement.innerHTML = "ini adalah contoh element dengan dom js";
document.body.append(newelement);

//cara 2
const elmbaru = document.createElement('p');
const teksbaru = document.createTextNode('teks anyar');

elmbaru.appendChild(teksbaru);

// Simpan ke dalam variable
const newelm = document.querySelector('p');

if (newelm) {
  newelm.appendChild(elmbaru); // Menambahkan elmbaru ke dalam newelm
} else {
  console.log("Elemen dengan kelas 'a' tidak ditemukan.");
}

// function greet(name, umur){
//   return{
//     sayName: `Hello ${name} how are you today? `,
//     sayOld: `Waw you ${umur} years old`
//   }; 
// }

// const nama = prompt('siapa nama mu?');
// const umur = parseInt(prompt('Berapa usia mu?'));
// console.log(greet(nama, umur).sayName);
// console.log(greet(nama, umur).sayOld);


 