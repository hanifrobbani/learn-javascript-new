function tampilHasil(hasil) {
  document.getElementById("tampil").value += hasil;
}

function clearTampilan() {
  document.getElementById("tampil").value = "";
}

function kalkulasi() {
  const hasil = eval(document.getElementById("tampil").value);

  try {
    document.getElementById("tampil").value = hasil;
  } catch {
    document.getElementById("tampil").value = "terjadi error";
  }
}
