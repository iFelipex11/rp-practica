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



class course
{
    constructor({
        name,
        classes = [],
        comments = [],
        isFree = false,
        lang = "spanish",
    })
    {
        this._name = name;
        this.classes = classes;
        this.comments = comments;
        this.isFree = isFree;
        this.lang = lang;
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
            console.error("Prohibido cambiar el nombre");
        }
        else{
            this._name = nuevoNombre;
        }
        
    }
}



class FreeStudent extends Student
{
    constructor(props)
    {
        super(props);
    }

    approveCourse(newCourse)
    {
        if(newCourse.isFree)
        {
            this.approveCourses.push(newCourse);
        }
        else
        {
            console.warn("Lo sentimos, "+ this.name + ", solo puedes tomar cursos abiertos");
        }

    }
}



class BasicStudent extends Student {
    constructor(props)
    {
        super(props);
    }

    approveCourse(newCourse)
    {
        if(newCourse.lang !== "english")
        {
            this.approveCourses.push(newCourse);
        }
        else
        {
            console.warn("Lo sentimos, "+ this.name + ", no puedes tomar cursos en ingles");
        }

    }

}



const cursoprg_basica = new course({
    name: "Curso Gratis de Programacion Basica",
    classes:["Que es la programacion",],
    isFree: true,
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
    lang: "english",
});




class ExpertStudent extends Student{
    constructor(props)
    {
        super(props);
    }

    approveCourse(newCourse)
    {

            this.approveCourses.push(newCourse);
        

    }

}



const juan = new FreeStudent(
    {
        name: "JuanDC",
        username: "juandc",
        email: "juanito@juanito.com",
        twitter: "fjuandc",
        
        
    }
);

const miguelito = new BasicStudent
({
    name: "Miguelito",
    username: "miuelitofeliz",
    email: "miguelito@juanito.com",
    twitter: "miguelito_feliz",
    
});