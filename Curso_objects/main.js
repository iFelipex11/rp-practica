const natalia =
{
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo HTML y CSS",
        "Curso Practico HTML y CSS"
    ],

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)

    }

};

// // Hacer que Natalia apruebe otro curso
// natalia.cursosAprobados.push();

function Student(name,age,cursosAprobados){

    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function(nuevoCursito)
    // {
    //     this.cursosAprobados.push(nuevoCursito)
    // }


}

Student.prototype.aprobarCurso = function(nuevoCursito)
{
    this.cursosAprobados.push(nuevoCursito)
}

const juanita = new Student("Juanita Alejandra",
15,
[
"Curso de introduccion a videojuegos",
"Curso de aprobacion de personajes"
]
);

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
        cursosAprobados: [],
    }
);