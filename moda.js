const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];


function calcularModa(lista){
    const lista1Count = {};

    lista.map(
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );

    const lista1Array = Object.entries(lista1Count);

    const listaOrdenada = lista1Array.sort(function (a, b) {
        return b[1]-a[1];
    });


    return listaOrdenada[0][0];
}

console.log("LA MODA ES: " + calcularModa(lista1));