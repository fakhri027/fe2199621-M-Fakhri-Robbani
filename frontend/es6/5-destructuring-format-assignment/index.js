/** Format nama user menjadi "John - john@example.com - Unemployed",
 *  dan akses data user dengan teknik destrucuring assignment
 *  gunakan default value ketika atribut tidak ditemukan
 */

const format = (user) => {
  // TODO: answer here
  const { name = "John Doe", email = " ", job = "Unemployed" } = user;
  return `${name} - ${email} - ${job}`;
}
console.log(format({ name: "John", email: "john@example.com" }));

module.exports = format