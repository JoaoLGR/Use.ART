const button = document.getElementById('inputLogin');

button.addEventListener('click', login())

var usuario = document.getElementById('user')
var senha = document.getElementById('password')

function login() {
  console.log('Deu certo')
}
/* Contador do slider */
let count = 1

document.getElementById('radio1').checked = true

setInterval(function () {
  nextImage()
}, 2000)

function nextImage() {
  count++
  if (count > 4) {
    count = 1
  }
  document.getElementById('radio' + count).checked = true
}