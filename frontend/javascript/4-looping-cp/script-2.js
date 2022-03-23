// Mengembalikan pola * yang menurun di setiap barisnya
//
// contoh: 
// baris = 5
// hasil:
// *****
// ****
// ***
// **
// *

// Masukan jumlah baris
const n = parseInt(prompt("Masukan jumlah baris: "));

// TODO: answer here
var stars = "";
for (let i = n; i >= 1; i--) {
  for (let j = 0; j <i ; j++) {
    stars += "*";
  }
  stars += "\n";
}
console.log(stars);