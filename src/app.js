class Usuario {
    constructor(nombre, edad, correo) {
        this.nombre = nombre;
        this.edad = edad,
        this.correo = correo;
    }

    mostarSaludo(mensaje) {
        return mensaje;
    }

    mostrarInfo() {
        return `
            Nombre: ${this.nombre} <br>
            Edad : ${this.edad} <br>
            Correo: ${this.correo} <br>
        `;
    }
}

const ricardo = new Usuario('Ricardo', 27, 'correo@correo.com');

document.write(ricardo.mostrarInfo() + "<br><hr>"); 

class Estudiante extends Usuario{
    constructor(nombre, edad, correo, carrera) {
        super(nombre, edad, correo);
        this.carrera = carrera;
    }

    mostrarInfo() {
        return `
            Nombre: ${this.nombre} <br>
            Edad : ${this.edad} <br>
            Correo: ${this.correo} <br>
            Carrera: ${this.carrera} <br>            
        `;
    }
}


const ale = new Estudiante('Alejandro', 19, 'correo@correo.com', 'Ing Sistemas');
document.write(ale.mostrarInfo());