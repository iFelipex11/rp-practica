/*En esta pestaña vamos a ver los arrays y sus metodos */

var nombresdcpulos = ["Juan","Pedro","Felipe","Santiago","Judas","Andres","Mateo","Maria","Jesus","Bartolomé","Tomas","Simon"];

console.log(nombresdcpulos.push("Santiago,el menor")); // Este metodo sirve para añadir un elemento al final de la lista
console.log(nombresdcpulos.pop()); // Este metodo sirve para eliminar el ultimo elemento del array
console.log(nombresdcpulos.shift());// Este metodo sirve para eliminar el primer elemento del array
console.log(nombresdcpulos.unshift());// Este metodo sirve para añador un elemento del array al inicio
console.log(nombresdcpulos.indexOf("Pedro"));// Este metodo sirve para ubicar el index de un elemento del array

// Otros Metodos para los arrays
/*


var articulosfiltrados = articulos.filter(function(articulo)
{
    return articulo.costo <= 500
});

var nombrearticulos = articulos.map(function(artic)
{
    return artic.nombre;
});


// Nos devuelve un articulo que sea estrictamente igual 
// Y solo el primero, los demas no los verifica


var algunArticulo = articulos.find(function (articulo)
{
    return (articulo.nombre === "Laptop")
  })

articulos.forEach(function (articulo) // Devuelve cada articulo 
{
    console.log(articulo) 
  });



  var existeArticulo = articulos.some(function (articulo) // Solo regresa verdadero o falso
   {
    return articulo.costo <= 700
  });

*/
  /*

find() : Devuelve el primer elemento del array que cumpla con la condición dada
foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
filter() : Devuelve todos los elementos del array que cumplan con la condición dada
y nos devuelve un nuevo array, Devolviendo true or false y creando en un nuevo array los elementos true

.map() : crea un nuevo array con los resultados de la llamada a la función indicada 
aplicados a cada uno de sus elementos o transformados como es el caso de potencias en una lista de numeros

*/