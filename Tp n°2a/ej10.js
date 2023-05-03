var montodeventa = parseInt(prompt("ingrese su monto de venta"))
if (montodeventa > 1000) {
    alert("la comision es del 20%")
} else {
    if (montodeventa > 500) {
        alert("la comision es del 15%")
    } else {
        if (montodeventa > 100) {
            alert("la comision es del 12%")
        } else {
            if (montodeventa > 0) {
                alert("la comision es del 10%")
            } else {
                alert("monto incorrecto")
            }
        }
    }
}