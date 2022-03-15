//4. Faça um programa que leia 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.//
var n1 = parseInt(prompt("INFORME O PRIMEIRO NUMERO: "))
var n2 = parseInt(prompt("INFORME O SEGUNDO NUMERO: "))
var n3 = parseInt(prompt("INFORME O TERCEIRO NUMERO: "))

if (n1 > n2 && n1 > n3){
    if (n2 > n3){
        alert("A soma dos dois maiores números é" +(n1 + n2))
    }
    else{
        alert("A soma dos maiores números é " +(n1+n3))
    }
}
if (n2 > n1 && n2 > n3){
    if (n1 > n3){
        alert("A soma dos maiores números é " +(n2+n1))
    }
    else{
        alert("A soma dos maiores números é " +(n2+n3))
    }
}
if (n3 > n1 && n3 > n2){
    if (n2 > n1){
        alert("A soma dos maiores números é " +(n3+n2))
    }
    else{
        alert("A soma dos maiores números é " +(n3+n1))
    }
}