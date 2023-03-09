//if

function si(a,b)
{
    if(a == b)
    {
        console.log("Son iguales");
    }
    else if(a > b)
    {
        console.log("El primer numero es mayor");
    }
    else if(a < b)
    {
        console.log("El segundo numero es mayor");
    }

}
si(2,2);

//////////////////////////////////////////////

function wh(c)
{
    while(a <= 10)
    {
        console.log(a++);
    }
}
wh(5);
///////////////////////////////////////////////

function fr()
{
    const estudiantes = ["Maria","Rosa","Juan","Pedro","Daniel","Sebastian"];
    
    function saludar_Est(estu)
    {
        console.log(`Hola, ${estu}`);
    }

    
    
    for(var estu of estudiantes)
    {
        saludar_Est(estu);
    }
}
fr();

///////////////////////////////////////////////

function sw(d,e)
{
    switch(true) // Es un protip para que siga a los condicionales
    {
        case a == b:
            {
                console.log("Son iguales");
                break;
            }
        case a < b:
            {
                console.log("El primer numero es menor que el segundo");
                break;
            }
        case a > b:
            {
                console.log("El Segundo numero es menor que el primero");
                break;
            }
    }
}
sw(10,5);