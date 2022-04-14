
// imprimindo no console
console.log("Olá mundo!")
console.log("Olá Turma Jemison!")

// usando o prompt
prompt("Qual é o seu nome?");

// guardando na variável
const anoDeNascimento = 1996;
console.log(anoDeNascimento);

let idadeEmString = "Vinte e cinco";
console.log(idadeEmString);

console.log("Tenho", idadeEmString, "anos de idade. Nasci em", anoDeNascimento, "sadlkjslkdjsdkljkl");
console.log("Novo parágrafo");

// Exercício 1
let primeiroNome = "Jefferson";
const sobrenome = "Vieira";
let idadeDoJefferson = 27;
let eEstudante = true;

console.log("Meu nome é", primeiroNome, sobrenome, "e tenho", idadeDoJefferson, "anos de idade. Sou estudante?", eEstudante, ".");

// mostrando o typeof
console.log(typeof eEstudante);
console.log(typeof sobrenome);

// Exercício 2
const nome = prompt("Qual é o seu nome?");
let idade = prompt("Informe a sua idade:");

console.log("O tipo de nome é", typeof nome);
console.log("O tipo de idade é", idade);

// conversão de tipo
const idadeEmNumeros = 23;
const idadeEmStringConversao = idadeEmNumeros.toString();
console.log("Em numero: ", idadeEmNumeros);
console.log("Em string:", idadeEmStringConversao);