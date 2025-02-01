console.log(document.title);

document.title = "Halo apa kabar?";
const body = document.body;

// isi bagain body dengan append
// body.append("Contoh isi body");

// create element html dengan DOM JS
const h1 = document.createElement("h4");
h1.textContent = "INI CONTOH ELEMENT H4 DENGAN JS";

// Tampilkan hasil proses nya ke dalam web browser
body.appendChild(h1);

const btn1 = document.getElementById("btn1");  //document.getElementsByTagName (memanggil dengan nama tag HTML)
const btn2 = document.querySelector("#btn2"); //memanggil element lebih universal/tidak spesifik

const defaulttext = "Klik Saya"
btn1.textContent = defaulttext

btn1.style.width = "70px";
btn1.style.height = "40px";
btn1.style.fontSize = "15px";
btn1.style.backgroundColor = "orange";
btn1.style.cursor = "pointer";

btn2.style.width = "70px";
btn2.style.height = "40px";
btn2.style.fontSize = "15px";
btn2.style.backgroundColor = "orange";
btn2.style.cursor = "pointer";

function gantiBtn() {
  const Nama = document.createElement("p");
  Nama.innerHTML = "<marquee>Muka lu ganteng</marquee>";
  body.append(Nama)

}
function gantiteks(){
    btn1.textContent = 'Jangan Di Klik' 

}
function ubahSemula(){
    btn1.textContent = defaulttext
}

function munculTeks(){
    const teks = document.createElement("b");
    teks.innerHTML = 'Hai ganteng</br>' 
    teks.style.color = 'black'
    body.append(teks)
}

function warnateks(){
    const teks = document.querySelector('b')
    teks.style.color = 'red'

}   

