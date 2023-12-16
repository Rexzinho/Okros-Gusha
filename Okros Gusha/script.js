var socos = 10
var soco = 12
var eletrico = 6
var forca = 9
var resultado = 0
var aux = 0
const suspense = new Audio()
suspense.src = "./Suspense.mp3"

document.getElementById("Socos").innerText = socos
document.getElementById("Soco").innerText = soco
document.getElementById("Eletrico").innerText = eletrico
document.getElementById("Forca").innerText = forca
document.getElementById("Resultado").innerText = resultado

function socosFunction(number){
    socos-=number
    document.getElementById("Socos").innerText = socos
}   

function socoFunction(number){
    soco-=number
    document.getElementById("Soco").innerText = soco
}   

function eletricoFunction(number){
    eletrico-=number
    document.getElementById("Eletrico").innerText = eletrico
}   

function forcaFunction(number){
    forca-=number
    document.getElementById("Forca").innerText = forca
}   

function calcular(){
    if(socos>0 && soco>0 && eletrico>0 && forca>0){
    console.clear();
    for(aux=0;aux<socos;aux++){
        resultado += Math.floor(Math.random() * soco + 1)
        console.log(aux+1, `+1d12`, resultado)
        resultado += Math.floor(Math.random() * eletrico + 1)
        console.log(aux+1, `+1d6`, resultado)
        resultado += forca
        console.log(aux+1, `+9`, resultado)
    }
    document.getElementById("Resultado").innerText = resultado
    }
}

function som(){
    suspense.play()
    resultado=0
    document.getElementById("Resultado").innerText = resultado
}

