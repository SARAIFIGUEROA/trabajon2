var sueldo = parseInt(prompt("ingrese su sueldo"))
var hijos = confirm("tiene hijos?")
if (hijos) {
    alert("el prestamo asignado es de: $" + sueldo * 0.5)
} else {
    alert("el prestamo asignado es de: $"+ sueldo * 0.25)
}