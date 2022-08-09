
var valorContador = 0;
var titleDOM = "Contador DOM"

function increase(){
    valorContador++; //Incrementar de 1 en 1
    document.getElementById("contador").innerHTML = valorContador;
    document.getElementById("Counter").innerHTML = titleDOM;
}

function decrease(){
valorContador--; //Decrementar de 1 en 1
document.getElementById("contador").innerHTML = valorContador;
document.getElementById("Counter").innerHTML = titleDOM;
}

function reset(){
    valorContador = 0;
    document.getElementById("contador").innerHTML = valorContador;
    document.getElementById("Counter").innerHTML = titleDOM;
}

function final(){
    valorContador = 0;
    document.getElementById("Counter").innerHTML = "Hecho por";
    document.getElementById("contador").innerHTML = "Angel Martinez :D";
}

