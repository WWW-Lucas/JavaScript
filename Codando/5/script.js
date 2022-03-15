//5. Faça um programa que leia dois valores informados pelo usuário e exiba uma das três mensagens a seguir: ‘Números iguais’, caso os números sejam iguais ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo seja maior que o primeiro.//

var n1 = parseInt(prompt("Insira o primeiro valor: "))
var n2 = parseInt(prompt("Insira o segundo valor: "))

if (n1 == n2){
    alert("Números Iguais")
}
if(n1 > n2){
    alert("Primeiro é maior")
}
if(n1 < n2){
alert("Segundo é maior")
}

