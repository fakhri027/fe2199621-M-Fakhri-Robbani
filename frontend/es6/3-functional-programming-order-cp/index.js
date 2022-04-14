/**
 * Customisable greeting
 * Buatlah fungsi untuk memformat nama ada sebuah ucapan.
 * Fungsi terebut menerima dua argumen sebagai input
 * Argumen pertama berupa objek user, contoh: let user = { firstName: "John", lastName: "Doe" };
 * Argumen kedua berupa callback untuk memformat nama user.
 *
 */

function customisableGreeting(user, formatCallback) {
  // TODO: answer here
  let { firstName, lastName } = user;
  return `Hi name is ${formatCallback({ firstName, lastName })}, how are you?`;
}
module.exports = customisableGreeting