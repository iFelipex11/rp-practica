//Ejemplo de if

var precio = 10 
if (articulos >= 5 && articulos < 10){
   precio = precio * (1-0.10)
} else if (articulos >= 10 && articulos < 15){
    precio = precio * (1-0.15)
} else {
    precio = precio * (1-0.20)
}

//operador ternario 

condicion ? true : false;

//Ejemplo

var numero = 1;

var resultado = numero === 1 ? "Soy un uno" : "No soy un uno";

console.log(resultado);