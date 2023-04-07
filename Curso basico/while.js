var estudiantes = ["Maria","Rosa","Juan","Pedro","Daniel","Sebastian"];

function saludar_Est(estudiante)
{
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0)
{
    
    var estudiante = estudiantes.shift();
    saludar_Est(estudiante);
}


function x()
{
var num = 0;
while(num < 345)
{
    num +=15;
    console.log(num)
}
}
x();


