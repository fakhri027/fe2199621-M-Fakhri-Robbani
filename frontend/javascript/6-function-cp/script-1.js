// Mengembalikan teks yang berkebalikan
//
// contoh: 
// teks = hello world
// hasil:
// dlrow olleh

function reverseString(str) {
    // TODO: answer here
    // cara 1
    var kata = '';
    for (let i = str.length - 1; i >= 0; i--) {  
        kata += str[i];
    }
    return kata;

    // cara 2
    // var pisahTeks = str.split('');
    // var balikTeks = pisahTeks.reverse();
    // var gabungTeks = balikTeks.join('');
    // return gabungTeks;
}

const string = prompt('Masukan teks: ');

const result = reverseString(string);
console.log(result);