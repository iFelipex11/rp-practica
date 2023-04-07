// Juego de piedra papel o tijera con if
/*var pdr = "Piedra";
var ppl = "Papel";
var tjr = "Tijera";

game(ppl);

function game(per,maq) {
    if(per == pdr && maq == ppl)
    {
        console.log("Ganaste");
    }
    else if(per == ppl && maq == tjr)
    {
        console.log("Ganaste");
    }
    else if(per == tjr && maq == ppl)
    {
        console.log("Ganaste");
    }
    else if(per == maq)
    {
        console.log("Empate");
    }
    else
    {
        console.log("Perdiste");
    }
}

*/
/////////////////////////////////////////////////////////////////////////

//reto piedra papel o tijera con switch
/*
var us 
var maq
var pdr = "Piedra";
var ppl = "Papel";
var tjr = "Tijera";

game2();
function game2(us,maq){
    switch(true)// El true permite que los datos pasen, por eso es que se usa en este tipo de ejercicios
    { 
        case us == ppl && maq == pdr:{
            console.log("ganaste")
            break;
        }
        case us == tjr && maq == ppl:{
            
            console.log("ganaste")
            break;
        }
        case us == pdr && maq == tjr:{
            
            console.log("ganaste")
            break;
        }
        case us == maq:{
            console.log("Empate")
            break;
        }
        default:{
            console.log("Perdiste")
            break;
        }
    }

}
*/
/////////////////////////////////////////////

// Reto de arrays
/*
function solution(estudiantes, deathCount, nuevo) {

    if(deathCount > 0)
    {
        while(deathCount > 0)
        {
            return estudiantes.splice(-deathCount, deathCount) && estudiantes.push(nuevo) && estudiantes;
            
        }
    }
    else if(deathCount == 0)
    {

        return estudiantes.push(nuevo) && estudiantes;

    }
    

}
//Reto

function solution(arraySecreto) {
    return typeof(arraySecreto[0]) == "string" ? true : false; // Nota: cuando se quiera comparar un string se debe poner "string" con s minuscula y no String que es lo que autocompleta el compilador
  }

  solution(["Huevo", "Gallina", "Vaca"]);
  

solution(["Nico", "Zule"], 0, "Santi");
solution(["Juan", "Juanita", "Daniela"], 1, "Julian")
*/
//////////////////////////////////////////////////////
//Reto de funciones constructoras
// Reto crear una funcion constructora y un loop que creen 30 carros de forma automatica
/*
var brand =[
    "Toyota",
    "Tesla",
    "Bugatti",
    "Lamborghini",
    "Bmw",
    "Chevrolet",
    "Ford"
]
var model = [
    "Hilux",
    "S",
    "Bugatti Chiron",
    "Lamborghini Veneno",
    "BMW i7.",
    "Camaro",
    "Mustang"
]

var year = [
    "2017",
    "2018",
    "2019", 
    "2020",
    "2021",
    "2022",
    "2023"
]
function car(brand,model,year)
{
    this.brand = brand;
    this.model = model;
    this.year = year;

}
for(var i=0; brand.length > i && model.length > i && year.length > i;  i++)
{
    var newcar = new car(brand[i],model[i],year[i]);
    console.log(newcar) 
}
*/
// Reto de permiso para conducir
/*
function solution(car) {


        this.car = car;
        if (car.licensePlate == null) {
          car.drivingLicense = false
        }
        else {
          car.drivingLicense = true 
      
        }
        return car
      }

// Prueba 1
solution({
color: 'red',
brand: 'Kia',
});

// Prueba 2
solution({
color: 'gray',
brand: 'Chevrolet',
licensePlate: 'AAA111',
});

// Prueba 3
solution({ licensePlate: 'RGB255' });
*/