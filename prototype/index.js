// 1. Tambahkan method study() menggunakan prototype yang akan mengembalikan (gunakan return) string "I study at " + this.school pada objek Student di bawah method greeting().

// 2. Di bawah kode instance objek myStudent, lakukan console.log() untuk memanggil data name, school, method greeting(), dan method study() dari instance objek myStudent.

function Student(name, grade, score) {
    this.name = name;
    this.grade = grade;
    this.score = score;
  }
  
  Student.prototype.school = "Skilvul";
  
  Student.prototype.greeting = function () {
    return "Hello " + this.name;
  };
  
  Student.prototype.study = function () {
    return "I study at " + this.school;
  };
  
  // Buat kode kamu dibawah ini
  let myStudent = new Student("Sarah", 20, 100);
  console.log(myStudent.name);
  console.log(myStudent.school);
  console.log(myStudent.greeting());
  console.log(myStudent.study());



//   Data Type Prototyping

// 1. Buatlah method baru pada tipe data string bernama tambahKata() yang memiliki parameter str dan mengembalikan method concat() di dalamnya.

// Contoh output dari method yang akan dibuat:

// console.log("Belajar ".tambahKata("coding"));
// Output "Belajar coding"
// Contoh penggunaan method concat():

// let string1 = "Hello ";
// let string2 = "world!";
// let result = string1.concat(string2);
  
// console.log(result) // Output: Hello world!

// 2. Panggil method yang sudah kamu buat yang menggabungkan string "Belajar" dan "coding" seperti ini:

// console.log('Belajar '.tambahKata("coding"));

String.prototype.tambahKata = function(str) {
    return this.concat(str);
}

console.log('Belajar '.tambahKata("coding"));