
//- **Exercícios de interpretação de código**
    
//Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

///1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    // Resposta: 10

//let valor = 0
//for(let i = 0; i < 5; i++) {
//  valor += i
//}
//console.log(valor)
    
//2. Leia o código abaixo:
//const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//for (let numero of lista) {
  //if (numero > 18) {
///		console.log(numero)
//	}
//}
   
    
    //a) O que vai ser impresso no console?
    // Resposta: 19, 21, 23, 25, 27, 30
    //b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
    
//3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
// REsposta : *
//            **
//            ***
//            ****
//const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
//let quantidadeAtual = 0
//while(quantidadeAtual < quantidadeTotal){
//  let linha = ""
 // for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
 //   linha += "*"
 // }
 // console.log(linha)
///  quantidadeAtual++
//}



//EXERCICIOS DE ESCRITA DE CODIGO
//Exercicio 01

let array = []
let quantidadeDePets = Number(prompt("Quantos bichos você possui?"))
if (quantidadeDePets === 0){
    console.log("Que pena! Você pode adotar um pet!")
}else{
    for (let nomeDoPet = quantidadeDePets; quantidadeDePets > 0; quantidadeDePets--){
       let nomeDoPet = prompt("Digite nome do pet")
      
       array.push(nomeDoPet)
    
    }
    console.log(array)
}


//Exercicio 02
// letra A
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function arrayUm(idx){
    idx = [idx]
    console.log(arrayOriginal[idx])

}
arrayUm([0])
arrayUm([1])
arrayUm([2])
arrayUm([3])
arrayUm([4])
arrayUm([5])
arrayUm([6])
arrayUm([7])
arrayUm([8])
arrayUm([9])
arrayUm([10])
arrayUm([11])


// letra B
function arrayDois(idx){
    idx = [idx]
    console.log(arrayOriginal[idx] / 10)
}

arrayDois([0])
arrayDois([1])
arrayDois([2])
arrayDois([3])
arrayDois([4])
arrayDois([5])
arrayDois([6])
arrayDois([7])
arrayDois([8])
arrayDois([9])
arrayDois([10])
arrayDois([11])

//Exercicio 03
// letra C
   let arrayQuatro = []
   function arrayTres(){
    for (let par of arrayOriginal){
    if (par % 2 === 0)
    arrayQuatro.push(par)
    }
    console.log(arrayQuatro)
}

arrayTres()


//Exercicio 04
//letra D
let arrayIdx = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
function idxArray(){
    for (i = 0; i < arrayOriginal.length; i++){
       let arraystring = (`O elemento do índex ${i} é ${arrayIdx[i]}`)
       console.log(arraystring)

    }
}
idxArray()

//Exercicio 05
// letra E

let numeroMaior = arrayOriginal =>{
        let numeroMaior = arrayOriginal[0]
        for (let numeroEmAnalise of arrayOriginal)
           if (numeroEmAnalise > numeroMaior){
               
            numeroMaior = numeroEmAnalise
           }
     return numeroMaior
    }
    console.log ("O número maior da array é:", numeroMaior(arrayOriginal))
    
    let numeroMenor = arrayOriginal =>{
        let numeroMenor = arrayOriginal[0]
          for (let numeroEmAnalise of arrayOriginal)
            if (numeroEmAnalise < numeroMenor){
                numeroMenor = numeroEmAnalise
    }
    return numeroMenor
    }
      console.log ("O número menor da array é:", numeroMenor(arrayOriginal))