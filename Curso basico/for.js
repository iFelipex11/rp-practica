var estudiantes = ["Maria","Rosa","Juan","Pedro","Daniel","Sebastian"];

function saludar_Est(estudiante)
{
    console.log(`Hola, ${estudiante}`);
}


/* Esta es una forma:
for(var i = 0; i < estudiantes.length; i++)
{
    // Ejemplo: console.log(estudiantes[i]);
    saludar_Est(estudiantes[i]);
}
*/
//En el for of se inicializa una variable en singular de un array en plural, y este no se detiene hasta que acaben los elementos del array 
for(var estudiante of estudiantes)//estudiante es la variable(la cual puede tener otros nombres) con la cual vamos a hacer el ciclo for y estudiantes el array
{
    saludar_Est(estudiante);
}