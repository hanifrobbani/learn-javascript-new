function tampilData(){
    let nama = document.getElementById('nama').value;
    let domis = document.getElementById('domisili').value;

    //hasil.append();

    document.getElementById('tampil').innerText = `Nama mu ${nama} tinggal di ${domis}` 
}