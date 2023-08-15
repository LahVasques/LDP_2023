
// Criar uma função
function nome(){
    //codigo
}

//FUNÇÃO PARA EXIBIR UMA MENSAGEM
function exibirMsg(){
    console.log("Boa tarde")
    console.log("Hoje é" + Date())
}

exibirMsg();

// FUNÇÃO PARAMETRIZaDA
function somar(v1 = 0,v2 = 0 /*valor padrão*/){
    let resultado = 0 ;
    resultado = v1 + v2;
    console.log(resultado)
}

// Sempre definir os parametros
let a = 45;
let b = 20;
somar (a,b);

somar (1,2);

//FUNÇÃO COM RETORNO
function somar2(v1 = 0,v2 = 0 /*valor padrão*/){
    //let resultado = 0 ;
    //resultado = v1 + v2;
    return /*resultado*/ v1 + v2;
}
console.log(somar2(b))

const x = somar2(10,30);
console.log("Soma = "+ x)

function subtrai(){
    let x = 5;
    let y = 10;
    let resultado = y - x;
    return resultado
}
console.log("Subtração: " + subtrai())

function calcular(){
    let n1 = 27;
    if( n1 % 2 == 0){
        return "Par"
    }else{
        return "Ímpar"
    }
}
console.log("Esse número é " + calcular())

//PARÂMETROS REST
function somar3(...numeros){
    let tam = numeros
    .length;
    let resultado = 0
    for(let posicao = 0; posicao < tam; posicao++){
        resultado += numeros[posicao];
    }
    return resultado;
}
console.log(somar3(1, 2, 3, 4, 5))