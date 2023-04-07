// Ejemplos de switch

var edad = 17

switch (edad) {
    case edad >= 17 && edad <= 20: {
        console.log("Estoy entre 17 y 20");
        break
    }
    case 22: {
        console.log("Tengo 22");
        break
    }
    default: {

        console.log("No estas en el rango de edades")

        }
}

