class course
{
    constructor({
        name,
        classes = [],
        comments = [],
    })
    {
        this._name = name;
        this.classes = classes;
        this.comments = comments;
    } 
    
    get name(){
        return this._name;
    };
    // ChangeName()
    // {
    //     this._name = nuevoNombre;
    // }
    set name(nuevoNombre)
    {
        if(nuevoNombre === "Curso Malo de programacion Basica")
        {
            console.error("Web.. no");
        }
        else{
            this._name = nuevoNombre;
        }
        
    }
}

//cursoprg_basica.name = "",
//cursoprg_basica.ChangeName = "",


const cursoprg_basica = new course({
    name: "Curso Gratis de Programacion Basica",
    classes:["Que es la programacion",],

});

const cursoDefinitivoHTML = new course({
    name: "Curso definitivo de HTML y CSS",
    classes:["Que es HTML y CSS",],
});

const cursoDtbsnss = new course({
    name: "Curso de DataBuisness",
    classes:["Que es el DataBuisness",],
});
const cursoDtvz = new course({
    name: "Curso DataViz",
    classes:["Que es DataViz",],
});
const cursoTbleau = new course({
    name: "Curso de Tableau",
    classes:["Que es Tableau",],
});
const cursoProducvgs = new course({
    name: "Curso de introduccion a la Produccion de vgs",
    classes:["Como se producen los videojuegos",],
});
const cursoUnity = new course({
    name: "Curso de Unity 3D",
    classes:["Que es Unity",],
});
const cursoUnreal = new course({
    name: "Curso de Unreal Engine",
    classes:["Que es Unreal Engine",],
});
const cursoPractico = new course({
    name: "Curso Practico de HTML y CSS",
    classes:["Como trabajar de forma practica HTML y CSS",],
});



class LearningPaths
{
    constructor({
        nameesc,
        courses = [],
    })
    {
        this._nameesc = nameesc;
        this.courses = courses;
    }  


    get nameesc()
    {
        return this._nameesc;
    };
    // chnm()
    // {
    //     this._nameesc = nwname;
    // }
    
    set nameesc(nwname)
    {
        if(nwname === "joe")
        {
            console.error("No se puede cambiar el nombre");
        }
        else
        {
            this._nameesc = nwname;
        }
    }
}

const escweb = new LearningPaths(
    {
        nameesc: "Escuela de Desarrollo Web",
        courses: 
        [
            cursoprg_basica,
            cursoDefinitivoHTML,
            cursoPractico,
        ],
    }
);
const escdata = new LearningPaths(
    {
        nameesc: "Escuela de Datascience",
        courses: 
        [
            cursoprg_basica,
            cursoDtbsnss,
            cursoDtvz,
            cursoTbleau,
            
        ],
    }
);
const escvgs = new LearningPaths(
    {
        nameesc: "Escuela de Produccion de Videojuegos",
        courses: 
        [
            cursoprg_basica,
            cursoProducvgs,
            cursoUnity,
            cursoUnreal,
            
        ],
    }
);


class Student
{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approveCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialmedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approveCourses = approveCourses;
        this.learningPaths = learningPaths;
    }


};


const juan2 = new Student(
    {
        name: "JuanDC",
        username: "juandc",
        email: "juanito@juanito.com",
        twitter: "fjuandc",
        learningPaths: [escdata,escvgs],
        
    }
);

const miguelito2 = new Student
({
    name: "Miguelito",
    username: "miuelitofeliz",
    email: "miguelito@juanito.com",
    twitter: "miguelito_feliz",
    learningPaths: [escweb, escdata],
});



/*
    Crear una clase LearningPaths{
        crear el constructor para la ruta de aprendizaje
    }

    crear una instancia de esta clase para cada escuela, por ejemplo la escuela web 
    Las escuelas van a ser:
    escuelaweb
    escueladatascience
    escuelaVGS
    ejemplo de como debe quedar:
    learningPaths:
    [
        escuelaweb,
        escuelaVGS,
    ],
*/