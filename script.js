//Cálculo 
function calcularImc(peso, altura) {
  return peso / (Math.pow(altura, 2));
}
//Verificação
function classificarImc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso"
  } else if (imc >= 18.5 && imc <= 25) {
    return "Peso normal"
  } else if (imc >= 25 && imc <= 30) {
    return "Acima do peso"
  } else if (imc >= 30 && imc <= 40) {
    return "Obeso"
  } else {
    return "Obesidade grave"
  }
}

// Main
(function () {
  //Dados
  let altura = 1.80;
  let peso = 70;

  let imc = calcularImc(peso, altura)
  console.log(classificarImc(imc));
})();

