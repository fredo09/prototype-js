console.log("🚀 ~ estamos aqui para entender prototipos en JS 🚀!! ");
console.log("🚀 ~ ********************************************* :");

/*
 * Ejemplo de prototipo en JS 
 */

const cheff = {
    type: 'Cocina Basica',
    cook: function(plato) {
        console.log(`🚀 ~ Cook ${plato} 🍳 `);
    }
}

const freddy = {
    name: 'Freddy',
    age: 39,
    profetion: 'Developer 💻  JS',
    type: 'Front-End'
}

//Formas de asignar prototipes entre dos objetos

/**
 * Ejemplo 1: 
 * Asignamos "cheff" la propiedad oculta "__proto__" de freddy 
 * freddy.__proto__ = cheff;
 * "Todos los objetos tienen esta propiedad oculta".
 * Ejemplo 2:
 * Object.setPrototypeOf(<Objeto que se le delegara>, Objeto que hara la delegacion);
 */

//! En proyectos no es aconsejable hacer esto
//freddy.__proto__ = cheff;
//! En proyectos no es aconsejable hacer esto
Object.setPrototypeOf(freddy, cheff);

console.log(`🚀 ~ ${freddy.cook('pizza')}:`);

/**
 * Esto es mucho mas facil "Evitando herencia por prototipos" mejor "Delegacion de objetos"
 * 
 * Ademas Js al objeto que estos accediendo si tiene "__proto__" accedera sin problemas pero si no
 * buscara al siguiente que le este delegando
 */

/**
 * Que pasa cuando el prototipo y el objeto tienen la misma propiedad
 */

console.log(`🚀 ~ ${freddy.type} `);

/**
 * Buscara primero en el objeto que se este accediendo y si no lo encuentra
 * buscara en su prototipo
 */

/**
 * Concepto importante "Ocultamiento de propiedades (Property Shadowing)"
 * Ocultar propiedades o metodo que se encuentra en el prototipo de un objeto
 * que repiten el mismo nombre.
 */