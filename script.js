function calcular() {
  const pes = window.document.getElementById("peso");
  const altu = window.document.getElementById("altura");
  const res = document.getElementById("res");
  const n1 = Number(pes.value);
  const n2 = Number(altu.value);
  const imc = n1 / (n2 * n2);
  if (imc <= 18.5) {
    console.log((res.innerHTML = `Seu imc é ${imc}. Você está abaixo do peso`));
  } else if(imc >= 18.5 && imc <= 24.9) {
    console.log((res.innerHTML = `Seu imc é ${imc}. Seu peso é normal`));
  } else if(imc >= 25.0 && imc <= 29.9) {
    console.log((res.innerHTML = `Seu imc é ${imc}. Você está com sobrepeso`));
  } else if(imc >= 30.0 && imc <= 34.9) {
    console.log((res.innerHTML = `Seu imc é ${imc}. Você está com abesidade`));
  }
}
