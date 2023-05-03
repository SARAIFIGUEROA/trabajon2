var primerlado = parseInt(prompt("ingrese el primer lado del triangulo"))
var segundolado = parseInt(prompt("ingrese el segundo lado del triangulo"))
var tercerlado = parseInt(prompt("ingrese el tercer lado del triangulo"))
if (primerlado == segundolado && segundolado == tercerlado) {
    alert("es equilatero")
} else {
    if (primerlado != segundolado && segundolado != tercerlado) {
        alert("es escaleno")
    } else {
        alert("es isosceles")
    }
}