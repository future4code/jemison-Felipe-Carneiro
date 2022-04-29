//Exercícios de interpretação de código

//const filme = {
	//nome: "Auto da Compadecida", 
	//ano: 2000, 
	//elenco: [
		//"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		//"Virginia Cavendish"
		//], 
	//transmissoesHoje: [
		//{canal: "Telecine", horario: "21h"}, 
		//{canal: "Canal Brasil", horario: "19h"}, 
		//{canal: "Globo", horario: "14h"}
		//]
//}

//console.log(filme.elenco[0])
//console.log(filme.elenco[filme.elenco.length - 1])
//console.log(filme.transmissoesHoje[2])

//1- O que vai ser impresso no console?

// Resposta: A) Matheus Nachtergaele
//B) Virginia cavendish
//C) Globo, horário, 14h

//const cachorro = {
	//nome: "Juca", 
	//idade: 3, 
	//raca: "SRD"
//}

///const gato = {...cachorro, nome: "Juba"}

//const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//console.log(cachorro)
//console.log(gato)
//console.log(tartaruga)

// Resposta

//a) O que vai ser impresso no console?
//nome juca, idade 3, raça srd
//nome juba, idade 3 , raça srd
//nome jubo, idade 3 , raça srd

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Serve para copia de um obejto ou [array] inteiro.


//function minhaFuncao(objeto, propriedade) {
	//return objeto[propriedade]
//}

//const pessoa = {
 // nome: "Caio", 
 // idade: 23, 
 // backender: false,
 

//}

//console.log(minhaFuncao(pessoa, "backender"))
//console.log(minhaFuncao(pessoa, "altura"))

//a) O que vai ser impresso no console?
// false
//undefined

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// o valor FALSE sobre ele ser backender está correto devido o mesmo ter sido lançado dentro do objeto. o valor UNDEFINED não foi impressa nenhuma outra resposta , pois a mesma não foi lançada dentro do obejto um valor referente a altura.


//Exercícios de escrita de código

//1. Resolva os passos a seguir: 
    
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**


//const pessoa = {
//nome: "Felipe",
//apelidos: ["Lipe" , "ribeiro","Lipão"],
//}

//function chamarFrase(pessoa){

//console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

//}


//chamarFrase(pessoa)


//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
//const pessoaDois = {
  //  ...pessoa,
  //  apelidos: ["lipezito", "lipezin", "lipesco"],
  
//}

//chamarFrase(pessoaDois)


//2. Resolva os passos a seguir: 
    
//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
  //  let lista ={
//nome: "felipe",
//idade: 35,
//profissao: "programador"
   // }

    //let listaDois ={
//nome: "fabio",
//idade: 39,
//profissao: "CFTV"


    //}
//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

//function irmaosLista (listatres){
//let array = [listatres.nome, listatres.nome.length, listatres.idade, listatres.profissao, listatres.profissao.length]
//    return console.log(array)
//}

//irmaosLista(lista)
//irmaosLista(listaDois)


//3. Resolva os passos a seguir: 
    
//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

//c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

//d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**



//let carrinho = []

//let frutaUm = {

    //nome: "banana",
    //disponibilidade: true
//}

//let frutaDois = {

 //   nome: "manga",
 //   disponibilidade: true
//}

//let frutaTres = {

  //  nome: "morango",
  //  disponibilidade: true
//}

//function listaFruta (fruta){

   // carrinho.push(fruta)
   // return carrinho
//}

//listaFruta(frutaUm)
//listaFruta(frutaDois)
//listaFruta(frutaTres)

//console.log(carrinho)

let nome = "hareane";



if(nome == "felipe") {console.log("Bem vindo, felipe");
}

else if(nome == "hareane") {console.log("Bem vinda, hareane");
}