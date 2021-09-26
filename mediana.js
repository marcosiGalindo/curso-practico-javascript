const lista1 = [
    50,
    100,
    200,
    300,
    500
];

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function ordenarListaDemenorAmayor(lista) {
    return lista.sort(function (a, b) {
        return a-b;
    });
}


function calcularMediana(lista) {
    const listaOrdenada = ordenarListaDemenorAmayor(lista);
    console.log("listaOrdenada: " + listaOrdenada);
    const mitadLista1 = listaOrdenada.length / 2;
    let mediana;

    if (esPar(listaOrdenada.length)) {
        mediana = (listaOrdenada[parseInt(mitadLista1)] + listaOrdenada[parseInt(mitadLista1-1)]) / 2;
    } else {
        mediana = listaOrdenada[parseInt(mitadLista1)];
    }

    console.log("La mediana es: " + mediana);
}






