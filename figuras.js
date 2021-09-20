// Codigo del cuadradro
console.group("Cuadrados");

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}

console.log("El perimetro del cuadrado es: " + perimetroCuadrado(6) + "cm");

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}

console.log("El area del cuadrado es: " + areaCuadrado(5) + "cm^2");
console.groupEnd();

console.group("Triangulos");
// codigo triangulo


function permitroTriangulo(ladoTringulo1, ladoTringulo2, baseTriangulo) {
  return parseInt(ladoTringulo1) + parseInt(ladoTringulo2) + parseInt(baseTriangulo);
}
console.log("El perimetro del tringulo es: " + permitroTriangulo(2, 2, 5) + "cm");



function areaTringulo(baseTriangulo, alturaTriangulo){
    return baseTriangulo * alturaTriangulo / 2;
}
console.log("El area del tringulo es: " + areaTringulo(3,4) + "cm^2");


console.groupEnd();

console.group("Circulos");

function diametro(radio){
    return radio * 2;
}

//
function perimetro(radio){
    return diametro(radio) * Math.PI;
}
console.log("El perimetro del circulo es: " + perimetro(2) + "cm");

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}
console.log("El area del circulo es: " + areaCirculo(2) + "cm");


console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("lado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("lado");
    const value = input.value;
    const perimetro = areaCuadrado(value);
    alert(perimetro);
}


function calcularPerimetroTriangulo(){
    const input = document.getElementById("ladot1");
    const lado1 = input.value;

    const input2 = document.getElementById("ladot2");
    const lado2 = input2.value;

    const input3 = document.getElementById("baset");
    const base = input3.value;

    const perimetro = permitroTriangulo(lado1, lado2, base);
    alert(perimetro);
}


function calcularAreaTriangulo(){

    const inputAltura = document.getElementById("basea");
    const altura = inputAltura.value;

    const input3 = document.getElementById("baset");
    const base = input3.value;

    const area = areaTringulo(base, altura);
    alert(area);
}
