function prevention(event) {
  event.preventDefault();
}
const listagem = document.getElementById('minhalista');
listagem.addEventListener('submit', prevention);
function calc() {
  let y1 = parseFloat(document.getElementById('opt1').value)
  let y2 = parseFloat(document.getElementById('opt2').value)
  let y3 = parseFloat(document.getElementById('opt3').value)
  let y4 = parseFloat(document.getElementById('opt4').value)
  let y5 = parseFloat(document.getElementById('opt5').value)
  let y6 = parseFloat(document.getElementById('opt6').value)
  let y7 = parseFloat(document.getElementById('opt7').value)
  let y8 = parseFloat(document.getElementById('opt8').value)
  let y9 = parseFloat(document.getElementById('opt9').value)

  y1 = y1 * (document.lista.qt1.value) / 6
  y2 = y2 * (document.lista.qt2.value) / 6
  y3 = y3 * (document.lista.qt3.value) / 6
  y4 = y4 * (document.lista.qt4.value) / 6
  y5 = y5 * (document.lista.qt5.value) / 6
  y6 = y6 * (document.lista.qt6.value) / 6
  y7 = y7 * (document.lista.qt7.value) / 6
  y8 = y8 * (document.lista.qt8.value) / 6
  y9 = y9 * (document.lista.qt9.value) / 6

  let z = (y1 + y2 + y3 + y4 + y5 + y6 + y7 + y8 + y9) * (document.lista.preco.value)
  toString(z)
  return 'R$' + z
}

function show_calc() {
  alert(calc())
  console.log(calc())
  document.getElementById('resul').innerHTML = calc()

}
