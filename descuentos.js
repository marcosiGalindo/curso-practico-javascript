const precioOriginal = 100;
const descuento = 18;


const precioConDescuento = (precioOriginal * (100 - descuento)) / 100;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    return (precio * porcentajePrecioConDescuento) / 100;
}


function calculatePrice(){
    const price = document.getElementById("price");
    const discount = document.getElementById("discount");
    const priceValue = price.value;
    const discountValue = discount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const result = document.getElementById("ResultPrice");
    result.innerText = "EL precio Con Descuento es : $" + precioConDescuento;

}

// console.log({precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento})
