function calcular() {
  var pes = window.document.getElementById("peso");
  var altu = window.document.getElementById("altura");
  var res = document.getElementById("res");
  var n1 = Number(pes.value);
  var n2 = Number(altu.value);
  var r = n1 / (n2 * n2);
  res.innerHTML = `O seu IMC é:  ${r} Kg`;
}
