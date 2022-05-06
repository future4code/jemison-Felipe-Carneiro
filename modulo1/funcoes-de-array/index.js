// Exercícios de interpretação de código

//const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
 //  { nome: "Laís Petra", apelido: "Laura" },
 //   { nome: "Letícia Chijo", apelido: "Chijo" }
 // ]
  
 // const novoArrayA = usuarios.map((item, index, array) => {
 //   console.log(item, index, array)
 // })

// 1 )
// a) O que vai ser impresso no console?
// Resposta : O console vai imprimir os nomes, apelidos de cada uma em arrays diferentes.


//const usuarios = [
   // { nome: "Amanda Rangel", apelido: "Mandi" },
  //  { nome: "Laís Petra", apelido: "Laura" },
//{ nome: "Letícia Chijo", apelido: "Chijo" },
 // ]
  
  //const novoArrayB = usuarios.map((item, index, array) => {
  //   return item.nome
  //})
  
  //console.log(novoArrayB)

// 2)
// a) O que vai ser impresso no console?
// Resposta : ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']. O código ta solicitando o retorno  somente dos nomes.


//const usuarios = [
 //   { nome: "Amanda Rangel", apelido: "Mandi" },
 //   { nome: "Laís Petra", apelido: "Laura" },
  //  { nome: "Letícia Chijo", apelido: "Chijo" },
  //]
  
  //const novoArrayC = usuarios.filter((item, index, array) => {
 //    return item.apelido !== "Chijo"
 // })
  
  //console.log(novoArrayC)

  // 3)
// a) O que vai ser impresso no console?
// Resposta : o console vai imprimir os nomes e apelidos de amanda rangel e laís petra. o nome de leticia chijo não será impresso devido solicitar os nomes diferente ao chijo.



//- **Exercícios de escrita de código**
//1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**

// a) Crie um novo array que contenha apenas o nome dos doguinhos

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const novoArrayPets = pets.map((pets,array,index) => {
    return pets.nome
 })
 console.log(novoArrayPets)

 
 // b) Crie um novo array apenas com os cachorros salsicha

 const novoArraySalsicha = pets.filter((pets,array,index) => {
    return pets.raca === "Salsicha"
 })
 console.log(novoArraySalsicha)

 // c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

 const cupomDesconto = pets.filter((pets,array,index) => {
    return pets.raca === "Poodle"
 })
 console.log(cupomDesconto)

 const nomeCupomDesconto = cupomDesconto.map((pets,array,index) => {
    nome = pets.nome

    return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${nome}`)
 })

 console.log(nomeCupomDesconto)


 // 2) Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a) Crie um novo array que contenha apenas o nome de cada item

 const novoArrayProdutos = produtos.map((produtos,array,index) => {
        return produtos.nome
 })
 console.log(novoArrayProdutos)

 // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

 const arrayDesconto = produtos.map((item,indice,array) => {

    return {nome: item.nome, preco: (item.preco * 0.95).toFixed(2)}

 })

 console.log(arrayDesconto)



 // c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

 const arrayBebidas = produtos.filter((produtos,array,index) => {

    return produtos.categoria === "Bebidas"
 })
 console.log(arrayBebidas)


 // d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

 const ypeArray = produtos.filter((produtos,index,array) => {

    return produtos.nome.includes("Ypê")

 })

console.log(ypeArray)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const nomePreco = ypeArray.map ((item,index) => {

nome = item.nome
preco = item.preco

return (`Compre ${nome} "por R$" ${preco} !`) 

})
 console.log(nomePreco)
