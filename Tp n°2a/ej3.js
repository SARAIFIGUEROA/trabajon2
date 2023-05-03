var cantidaddelapices = parseInt(prompt("ingrese la cantidad de lapices"))
if (cantidaddelapices >= 1000) {
    alert("el total a pagar es: $"+cantidaddelapices)
} else {
    alert("el total a pagar es: $"+cantidaddelapices * 1.5)
}