// var passwordMeter = function(){
//   if(password.length < 6) {
//     return 'worst'
//   } else {
//     return 'good'
//   }
// }


var passwordMeter = (password) => {
  if(password.length < 6) {
    return 'worst'
  } else {
    return 'good'
  }
}

module.exports = passwordMeter
