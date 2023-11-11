class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / (Math.pow(this.altura, 2));
  }

  verificarImc() {
    const imc = this.calcularImc();

    if (imc < 18.5) {
      return `Me chamo ${this.nome}, tenho ${this.peso}Kg de peso corporal e ${this.altura} de altura, possuo um IMC de ${imc.toFixed(2)} e estou abaixo do peso`
    } else if (imc >= 18.5 && imc <= 25) {
      return `Me chamo ${this.nome}, tenho ${this.peso}Kg de peso corporal e ${this.altura} de altura, possuo um IMC de ${imc.toFixed(2)} e estou com o peso ideal`
    } else if (imc >= 25 && imc <= 30) {
      return `Me chamo ${this.nome}, tenho ${this.peso}Kg de peso corporal e ${this.altura} de altura, possuo um IMC de ${imc.toFixed(2)} e estou acima do peso`
    } else if (imc >= 30 && imc <= 40) {
      return `Me chamo ${this.nome}, tenho ${this.peso}Kg de peso corporal e ${this.altura} de altura, possuo um IMC de ${imc.toFixed(2)} e estou obeso`
    } else {
      return `Me chamo ${this.nome}, tenho ${this.peso}Kg de peso corporal e ${this.altura} de altura, possuo um IMC de ${imc.toFixed(2)} e estou com obesidade grave`
    }
  }
}

const pessoa1 = new Pessoa ('Elias', 80, 1.75);
console.log(pessoa1.verificarImc());



