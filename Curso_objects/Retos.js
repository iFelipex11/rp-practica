class Banda {
    constructor({
      nombre,
      generos = [],
      integrantes = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = integrantes;
    }
    agregarIntegrante(integranteNuevo) {
        // Agregar un contador por cada baterista
        // En esta parte recibi ayuda de la ia y todavia no he visto el => que usa este codigo
    const bateristas = this.integrantes.filter(integrante => integrante.instrumento === "Bateria");
    if (bateristas.length > 0 && integranteNuevo.instrumento === "Bateria") {
        console.log("Ya existe un baterista en la banda.");
        return;
    }
    this.integrantes.push(integranteNuevo);
}

    
  }
  
  //Crear clase Integrante
  class Integrante {
    constructor({
        nombre,
        instrumento,
    })
    {
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
  
  }
  const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
  }
  const banda = new Banda(data)
  banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))
  export {
    Banda,
    Integrante,
  }
///////////////////////////////////////



class Course {
  constructor({
    name,
    classes = [],
  }) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;

  }

  set name(nuevoNombrecito) {
    if(typeof nuevoNombrecito === "string")
    {
      
      this._name = nuevoNombrecito.charAt(0).toUpperCase() + nuevoNombrecito.slice(1);
    }
    else
    {
      console.error("Solo se pueden strings")
    }
  

  }

}
const courseName = "curso de programación básica";
const nombreMaysuculas = new Course({
    name: courseName,
})

/*


nombreMayusculas.name
typeof(nombreMaysuculas)
if(nombreMaysuculas === "string"){

   nuevoNombrecito.charAt(0).toUpperCase() + nuevoNombrecito.slice(1);
   console.log(nuevoNombrecito); 
 }
 else
 {
   console.log(String(nuevoNombrecito)) ;
 }

 */