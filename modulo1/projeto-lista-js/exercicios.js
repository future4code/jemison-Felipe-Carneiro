// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  let altura = Number(prompt("Digite a altura"))
  let largura = Number(prompt("Digite a largura"))

  let resultado = (altura*largura)

  console.log(resultado)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  let anoAtual = Number(prompt("Digite o ano Atual"))
  let anoDeNascimento = Number(prompt("Digite o Ano de Nascimento"))

  let resultado = (anoAtual-anoDeNascimento)

  console.log(resultado)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  let IMC = (peso/(altura*altura))

  return IMC;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let nome = prompt("digite seu nome")
  let idade = Number(prompt("digite sua idade"))
  let email = prompt("digite seu email")

  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  let cor1 = prompt("Digite cor 1")
  let cor2 = prompt("Digite cor 2")
  let cor3 = prompt("Digite cor 3")
  
  console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 
  return string.toUpperCase()
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  let calculaIngressosEspetaculo = (custo/valorIngresso)

  return calculaIngressosEspetaculo;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return (array[array.length -1])

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui


  let pri1 = array[0]
  let pri2 = array[array.length - 1]
  let pri3 = pri1
  array[0] = pri2
  array[array.length - 1] = pri3

  return array
=======





}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

let pri1 = string1.toUpperCase()
let pri2 = string2.toUpperCase()
return (pri1 === pri2)
=======

>>>>>
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}