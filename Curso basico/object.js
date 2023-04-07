var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,

    detalledelauto: function()
        {
            console.log(`Auto ${this.modelo} ${this.año}`); // this es una variable que hace referencia a un objeto
            // En este caso el this seria como poner miAuto.modelo etc..
        }
    }
console.log(miAuto);
// una forma de llamar un elemento de un objeto es: miAuto.marca


// Variable constructora

function car(brand, model, year)
{
    this.brand = brand;
    this.model = model;
    this.year = year;
}
var newcar = new car("Tesla","S","2023");

var newcar2 = new car("Tesla", "X", "2018");

var newcar3 = new car("Tesla", "Y","2019");

// Otros metodos de arrays

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
]
// filter ayuda a filtrar arrays, en este caso con la funcion
// Al igual que filter busca todos los que cumplan con la condicion
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

  /*
find() : Devuelve el primer elemento del array que cumpla con la condición dada
foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
filter() : Devuelve todos los elementos del array que cumplan con la condición dada
y nos devuelve un nuevo array.
.map() : crea un nuevo array con los resultados de la llamada a la función indicada 
aplicados a cada uno de sus elementos.
  */