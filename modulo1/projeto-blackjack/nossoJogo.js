/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    // montando o jogo



console.log("Bem vindo ao Blackjack(21)!")
const inicio = confirm("Gostaria de jogar BlackJack?")

if (inicio){
   const cartaJogaUm = comprarCarta()
   const cartaJogaDois = comprarCarta()
   const cartaRbtUm = comprarCarta()
   const cartaRbtDois = comprarCarta()

   const jogaUmPontos = cartaJogaUm.valor + cartaJogaDois.valor
   const rbtPontos = cartaRbtUm.valor + cartaRbtDois.valor

   console.log("Suas cartas", cartaJogaUm.texto, cartaJogaDois.texto, "Sua Pontuação é:", jogaUmPontos)
   console.log("Cartas rbt", cartaRbtUm.texto, cartaRbtDois.texto, "Pontuação rbt é:", rbtPontos)

   if (jogaUmPontos > rbtPontos){
   console.log("Você ganhou!!!")
   }else if(jogaUmPontos < rbtPontos){
   console.log("Você Perdeu!!!")
   }else{(jogaUmPontos = rbtPontos)
   console.log("Foi empate!!!")
 }
 }else{
    console.log("O jogo acabou!!!")
 }