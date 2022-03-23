// Pengecekan angka positif, negatif, atau 0 dengan nested if

// Masukan suatu angka
const number = parseInt(prompt("Masukan bilangan: "));

// TODO: answer here
if (number > 0){
        console.log("angka Positif");
    }else if(number == 0){
        console.log("angka 0");
    }else if(number < 0){
        console.log("angka negatif");
    }