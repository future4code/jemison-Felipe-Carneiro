// - **Exercícios de interpretação de código**
    
// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.**

// 1)  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.


//let array
//console.log('a. ', array)
 //Resposta: undefined

 //array = null
 //console.log('b. ', array)
 // Resposta: null
 
 //array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 //console.log('c. ', array.length)
 // Resposta: 11
 
 //let i = 0
 //console.log('d. ', array[i])
 // Resposta: 3
 
  //array[i+1] = 19
  //console.log('e. ', array)
 // Resposta: Array(11). independete de manter o número 4 ou número 19 dentro da array , a mesma vai conter um total de (11).
 
 //const valor = array[i+6]
 //console.log('f. ', valor)
 // Resposta: 9

// 2) Leia o código abaixo com atenção 

//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
// Resposta: 29

//Exercícios de escrita de código:

//1) Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:

let emailDousuario = prompt("qual seu email?")
let nomeDoUsuario = prompt("Qual seu nome?")

console.log("O email",emailDousuario,"foi cadastrado com sucesso. Seja bem-vinda(o)",nomeDoUsuario,"!")

//2) Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

//a) Imprima no console o array completo

let comidasFavoritas = ["churrasco", 
"japones", 
"pizza",
 "macarrão", 
 "salpicão"]
console.log(comidasFavoritas)

// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
console.log("Essas são as minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
let comidaPreferida = prompt("Qual sua comida preferida?")
comidasFavoritas.splice(1, 1, comidaPreferida)
console.log(comidasFavoritas)

// 3) Faça um programa, seguindo os passos:

//a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas

let listaDeTarefas = []

//b)  Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
let lista1 = prompt("primeira atividade")
let lista2 = prompt("segunda atividade")
let lista3 = prompt("tercceira atividade")
listaDeTarefas = [lista1,lista2,lista3]
//c) Imprima o array no console

console.log([lista1,lista2,lista3])

//d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
let indiceUsuario = prompt("Digite o número da tarefa realizada")

//e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(indiceUsuario, 1)

// f) Imprima o array no console

console.log(listaDeTarefas)
