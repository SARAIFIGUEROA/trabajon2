var numero1 = parseInt(prompt("ingrese el primer numero"))
var numero2 = parseInt(prompt("ingrese el segundo numero"))
var numero3 = parseInt(prompt("ingrese el tercer numero"))
if (numero1>numero2 && numero1>numero3) {
    alert("el numero mayor es: " + numero1)
} else {
    if (numero2>numero1 && numero2>numero3) {
        alert("el numero mayor es: " + numero2)
    } else {
        alert("el numero mayor es: " + numero3)
    }
}