const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salariosOrdenados = salariosCol.sort(
    function (a, b) {
        return a-b
    }
);


function esPar(numero) {
    return numero % 2 === 0;
}


// mediana generañ
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    let mediana = 0;
    if (esPar(lista.length)) {
        mediana = (lista[mitad] + lista[mitad -1]) / 2;
    } else {
        mediana = lista[mitad];
    }

    return mediana;
}

const medianaGeneral = medianaSalarios(salariosOrdenados);

// mediana top 20
const spliceStart = (salariosOrdenados.length * (100 - 20)) / 100;
const spliceCount = salariosOrdenados.length - spliceStart;
const salariosTop20 = salariosOrdenados.splice(spliceStart, spliceCount);

    const medianaTop20 = medianaSalarios(salariosTop20);

console.log({
    medianaGeneral,
    medianaTop20
    });