var produdeunidades = parseInt(prompt("ingrese la cantidad de unidades que se produjeron en esta semana"))
if (produdeunidades > 100) {
    alert("recibio un incentivo \n paga total: $"+(produdeunidades * 15) * 1.10)
} else {
    alert("paga total: $"+produdeunidades * 15)
    
}