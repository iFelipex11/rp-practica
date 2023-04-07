// Existen distintos tipos de funciones

// Funciones Declarativas

function Suma(a,b)
{
    let x = a + b;
    return x;
}

Suma(); // Esta es la llamada

// Funciones expresivas / Anonimas

const Resta = function(c,d)
{
    let r = c-d;
    return r;
}

Resta();