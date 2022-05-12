// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   
let tamArray = array.length

return tamArray

}
// EXERCÍCIO 02
function retornaArrayInvertido(array) {s
  let tamArray = array.reverse()
  return  tamArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
return array.sort((a,b)=> a - b)

}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let par = []
    array.map((item)=>
    {if(item %2 === 0)
        par.push(item)

})
      return par  
       
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let par = []
 let elevado = []
 array.map((item)=>
 {if(item %2 === 0)
     elevado.push(item * item)
 })
return elevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  const maximo = Math.max(...array)
return maximo
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maiorNumero = Math.max(num1, num2)
let menorNumero = Math.min(num1, num2)
let maiorDivisivelPorMenor = ((maiorNumero % menorNumero) == 0 )
let diferenca = maiorNumero - menorNumero
return {
  maiorNumero,
  maiorDivisivelPorMenor,
  diferenca
}
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = [];
  for (let i = 0; numerosPares.length < n; i++) {
      if (i % 2 == 0) {
          numerosPares.push(i);
      }
  }
  return numerosPares;
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

  if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
    return "Escaleno"
  } else if(ladoA === ladoB && ladoB === ladoC){
    return "Equilátero"
  } else 
  return "Isósceles"
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

 

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
 let array = {...pessoa, nome:"ANÔNIMO"}
 return array
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter((item) => {
     return (item.idade > 14 && item.idade < 60 && item.altura > 1.5)
   })
  }

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
 
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort((a,b) => {
    if (a.nome < b.nome){
return -1
} else {return true}

})
return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {


}