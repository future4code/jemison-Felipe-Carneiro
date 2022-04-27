//Exercícios de interpretação de código

//function minhaFuncao(variavel) {
	//return variavel * 5
//}

//minhaFuncao(2)
//minhaFuncao(10)



//Exercício 1:
// Respostas Exercício 1:
// A) multiplicação entre as variáveis ( valor=10 e 50)
// B) Sem o console.log a função continuaria a mesma, mas não apareceria nenhuma informação no console.

//Exercício 2:

//a. Explique o que essa função faz e qual é sua utilidade
 // R: A função vai transformar a frase em minusculo e vai verificar se dentro da frase tem a palavra cenoura(s).


//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     //i.   `eu gosto de cenoura` R: true 
     //ii.  `cenoura é bom pra vista` R: true
    //iii. `cenouras crescem na terra` R: true

//let textoDoUsuario = prompt("Insira um texto");

//const outraFuncao = function(texto) {
//return texto.toLowerCase().includes("cenoura")
//}

//const resposta = outraFuncao(textoDoUsuario)
//console.log(resposta)


// Exercícios de escrita de código:

// 1. Escreva as funções explicadas abaixo:
    
//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
 
function DadosPessoais() {
 console.log("Eu sou felipe, tenho 35 anos, moro no rio de janeiro e sou estudante")

}

DadosPessoais()

// B) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

function DadosPessoais2(nome, idade , cidade, profissao){


    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissao}`)

}
DadosPessoais2("Felipe", 35 , "Rio de Janeiro" , "Desenvolvedor")
DadosPessoais2("Hareane", 28 , "Rio de Janeiro" , "Advogada")

// 2)Escreva as funções explicadas abaixo:
    
    //a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado
function doisNumeros(numb1 , numb2){
    
let soma = numb1 + numb2
return console.log(soma)

}
doisNumeros(10,20)

    // b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
function number2(n1 , n2){

let maiorIgual = n1 >= n2
return console.log(maiorIgual)
}  
number2(150, 300)

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function umNumero(umN){

    let soma = umN % 2 === 0
    return console.log(soma)

}
umNumero(100)

// d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.


function mensagem2(mensagem){
console.log(mensagem.toUpperCase())
console.log(mensagem.length)


}
mensagem2('batatafrita')

// 3) Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

let usuario = Number(prompt("insira dois numeros"))
let usuario2 = Number(prompt("insira dois numeros"))

function adicao (nu1, nu2){
let soma = nu1 + nu2
return soma
}

function subtra (nu1, nu2){
    let soma = nu1 - nu2
    return soma

}

function divi (nu1, nu2){
let soma = nu1 / nu2
return soma


}

function multi (nu1, nu2){
let soma = nu1 * nu2
return soma

}



console.log("soma", adicao(usuario,usuario2),"subtracao:", subtra(usuario,usuario2), "divisao", divi(usuario,usuario2), "multiplicacao", multi(usuario,usuario2))


