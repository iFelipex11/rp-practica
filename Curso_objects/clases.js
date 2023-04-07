// Prototipos con la sintaxis de Clases
class Student2 {

    constructor(name,age,cursosAprobados)
    {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    
    aprobarCurso(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2("Miguel",
    28,
    [
    "Curso de Analisis de Negocios para Ciencia de Datos",
    "Curso de Principios de Visualizacion de Datos para BI",
    ],
);

class Student3
{
    constructor({
        name,
        age,
        cursosAprobados = [],
        email,
    
    })
    {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados,
        this.email = email;
    }
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
        }
}
const juan = new Student3(
    {
        name: "juan",
        age: 29,
        email: "pequeñojuan@platzi.com",
    }
);