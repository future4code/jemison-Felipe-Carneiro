// Exercícios de interpretação de código

// 1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// A) false
// B) false
// C) true
// D) boolean

// 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 


// Resposta exercício 2: No exercício acima foi necessário converter de string para Number por estar realizando uma soma. caso não realize a conversão os números não seriam somados. 

// 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

// Resposta 3: Foi adicionado Number no código para o mesmo conseguir realizar a soma dos números.

// let primeiroNumero = Number (prompt("Digite um numero!"))
// let segundoNumero = Number (prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// Exercícios de escrita de código

// 1 1. Faça um programa que:
    
   // a) Pergunte a idade do usuário
    
   // b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
   // c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
   // d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

   let idadeDoUsuario = Number (prompt('Digite sua idade'))
   let idadeDoAmigo = Number (prompt ("idade amigo"))

   let resultado = (idadeDoUsuario > idadeDoAmigo)
   let diferencaDeIdade = (idadeDoUsuario - idadeDoAmigo)

   console.log("Sua idade é maior que a do seu melhor amigo?", resultado,".")
   console.log(" A diferença de idade entre eu e meu melhor amigo é de:", diferencaDeIdade, "anos de idade.")

   // 2. 2. Faça um programa que:
    
   // a) Peça ao usuário que insira um número **par**
    
   // b) Imprima na console **o resto da divisão** desse número por 2.
    
   // c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
  //  d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

  let numeroPar = Number(prompt("Digite um número Par"))
  let resto = (numeroPar % 2)

  console.log (resto)

  // Resposta C: Foi verificado que qualquer número par adicionado, a resposta será ZERO (0).
  // Resposta D: Foi verificado que qualquer número Ímpar adicionado, a resposta será UM (1)


  // 3. 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    //a) A idade do usuário em meses
    
    //b) A idade do usuário em dias
    
   // c) A idade do usuário em horas

   let idadeEmAnos = Number(prompt("Quantos anos você tem ? "))
   let idadeMeses = (idadeEmAnos*12)
   let idadeDias = (idadeMeses*31)
   let idadeHoras = (idadeDias*24)

   console.log("Qual sua idade:", idadeEmAnos,"anos.")
   console.log("Qual sua idade em meses:", idadeMeses,"Meses.")
   console.log("Qual sua idade em Dias", idadeDias,"Dias.")
   console.log("Qual sua idade em Horas", idadeHoras,"Horas.")

   // 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

   // O primeiro numero é maior que segundo? 
   //O primeiro numero é igual ao segundo? 
   //O primeiro numero é divisível pelo segundo? 
   //O segundo numero é divisível pelo primeiro? 

   let numeroUm = Number(prompt("Digite um número"))
   let numeroDois = Number(prompt("digite outro número"))

   let valor1 = numeroUm > numeroDois
   let valor2 = numeroUm === numeroDois
   let valor3 = numeroUm > numeroDois
   let valor4 = numeroDois < numeroUm

   console.log(numeroUm, numeroDois) 
   console.log("O primeiro numero é maior que segundo?", valor1,".")
   console.log("O primeiro numero é igual ao segundo? ", valor2,".")
   console.log("O primeiro numero é divisível pelo segundo? ",valor3,".")
   console.log("O segundo numero é divisível pelo primeiro? ",valor4,".")




