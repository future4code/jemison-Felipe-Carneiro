//Exercícios de interpretação de código

//const respostaDoUsuario = prompt("Digite o número que você quer testar")
//const numero = Number(respostaDoUsuario)

//if (numero % 2 === 0) {
  //console.log("Passou no teste.")
//} else {
 // console.log("Não passou no teste.")
//}

//a) Explique o que o código faz. Qual o teste que ele realiza? 
// Resposta: o código solicita um valor para saber se ele é igual a zero.
//b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Resposta: O console imprime somente passou no teste os números pares
//c) Para que tipos de números a mensagem é "Não passou no teste"?
// Resposta: Para todos os números ímpares.


//O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

//let fruta = prompt("Escolha uma fruta")
//let preco
//switch (fruta) {
 // case "Laranja":
 //   preco = 3.5
 //   break;
 // case "Maçã":
 //   preco = 2.25
 //   break;
 // case "Uva":
 //   preco = 0.30
  //  break;
  //case "Pêra":
  //  preco = 5.5
  //  break; // BREAK PARA O ITEM c.
  //default:
  //  preco = 5
  //  break;
//}
//console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima?
// Resposta: Para informar o preço de cada fruta.
//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// Resposta: vai informar que o valor é de 2,25
//c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// Resposta: Ele informaria que o preço da pêra é de 5 reias e não de 5.5.


//3) Leia o código abaixo:

//const numero = Number(prompt("Digite o primeiro número."))

//if(numero > 0) {
  //console.log("Esse número passou no teste")
	//let mensagem = "Essa mensagem é secreta!!!"
//}

//console.log(mensagem)

//a) O que a primeira linha está fazendo?
// Resposta: Ele que saber se o número informado é maior que zero. se for irá imprmir a mensagem passou no teste.
//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Resposta: Esse número passou no teste. se colocar -10 fica em branco.
//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Resposta: não haverá impressão devido não possuir o ELSE.

//Exercícios de escrita de código

//1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
    //a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    //b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    //c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

    let idadeUsuario = Number(prompt("Qual sua idade?"))

    if (idadeUsuario >= 18) {
       console.log("Você pode dirigir")

   } 
    else  console.log("Você não pode dirigir")


 // 2) Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

 let turnoDia = prompt("Digite M ( Matutino), V(Vespertino) ou N (Noturno) ")

 

 if (turnoDia === "M") {
     console.log("Bom Dia!")  
     }
 else if (turnoDia === "V") {
     console.log("Boa Tarde!")
     }
 else if (turnoDia === "N") {
     console.log("Boa Noite!")
     }

//3) Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let turnoDiaUm = prompt("Digite o seu turno: Manhã, Tarde ou Noite")
switch (turnoDiaUm) {

case `Manhã`:
console.log("Bom dia")
break

case `Tarde`:
console.log("Boa Tarde")
break    

case `Noite`:
console.log("Boa Noite")
break

default:
console.log("Turno não existe")
break
}

//4) Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

let generoFilme = prompt("Qual gênero de filme quer assitir ?")
let valorIngresso = prompt("Qual valor do ingresso você pode pagar?")

if (generoFilme === "fantasia" && valorIngresso < 15) {
    console.log("Bom Filme!!!")
}
else console.log("Escolha outro filme :(")

//DESAFIOS

// 1) Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

let lanchinho = prompt("Qual lanchinho você vai comprar ? chocolate, sorvete , amendoin")

if (lanchinho === "chocolate", "sorvete","amendoin") {

    console.log("Bom filme !!!")
}
else lanchinho === ("chocolate", "sorvete", "amendoin") 

    console.log("Aproveite o seu",lanchinho)



// 2) 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
    //- Nome completo;
    //- Tipo de jogo: IN indica internacional; e DO indica doméstico;
    //- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    //- Categoria: pode ser as opções 1, 2, 3 ou 4;
    //- Quantidade de ingressos  




