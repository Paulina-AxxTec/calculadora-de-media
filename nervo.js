var nome = "Alex";
var notaDoPrimeiroBimestre = prompt("Digite a nota do 1º Bim: ");
var notaDoSegundoBimestre = prompt("Digite a nota do 2º Bim: ");
var notaDoTerceiroBimestre = prompt("Digite a nota do 3º Bim: ");
var notaDoQuartoBimestre = prompt("Digite a nota do 4º Bim: ");

var convertido1bim = parseInt(notaDoPrimeiroBimestre);
console.log(convertido1bim); // 10
console.log(typeof convertido1bim); // Number

var convertido2bim = parseInt(notaDoSegundoBimestre);
console.log(convertido2bim); // 10
console.log(typeof convertido2bim); // Number

var convertido3bim = parseInt(notaDoTerceiroBimestre);
console.log(convertido3bim); // 10
console.log(typeof convertido3bim); // Number

var convertido4bim = parseInt(notaDoQuartoBimestre);
console.log(convertido4bim); // 10
console.log(typeof convertido4bim); // Number

var notaFinal = ((convertido1bim + convertido2bim + convertido3bim + convertido4bim)/4)

var notaFinalTotal = document.getElementById("valorConvertido");

console.log("Bem-vindo, " + nome + "!");
console.log("Sua nota final é " + notaFinal);

if (notaFinal >= 7) {
  notaFinalTotal.innerHTML = "O Aluno " + nome + " foi APROVADO!";
} 

else {
  notaFinalTotal.innerHTML = nome + ", infelizmente não foi dessa vez... ";
}
