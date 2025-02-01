function tambah() {
  let bil1 = parseFloat(document.getElementById("bil1").value);
  let bil2 = parseFloat(document.getElementById("bil2").value);
    
  let hasil = bil1 + bil2;
  document.getElementById("hasil").value = hasil;
}
function kurang() {
  let bil1 = parseFloat(document.getElementById("bil1").value);
  let bil2 = parseFloat(document.getElementById("bil2").value);
    
  let hasil = bil1 - bil2;
  document.getElementById("hasil").value = hasil;
}
function kali() {
  let bil1 = parseFloat(document.getElementById("bil1").value);
  let bil2 = parseFloat(document.getElementById("bil2").value);
    
  let hasil = bil1 * bil2;
  document.getElementById("hasil").value = hasil;
}
function bagi() {
  let bil1 = parseFloat(document.getElementById("bil1").value);
  let bil2 = parseFloat(document.getElementById("bil2").value);
    
  let hasil = bil1 / bil2;
  document.getElementById("hasil").value = hasil;
}
function cleara() {
   document.getElementById("bil1").value = '';
   document.getElementById("bil2").value = '';
   document.getElementById("hasil").value = '';

}
