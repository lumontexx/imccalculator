function calcular() {
  var pes = window.document.getElementById("peso");
  var altu = window.document.getElementById("altura");
  var res = document.getElementById("res");
  var n1 = Number(pes.value);
  var n2 = Number(altu.value);
  var imc = n1 / (n2 * n2);
  console.log((res.innerHTML = `Seu imc é ${imc}`));
}
