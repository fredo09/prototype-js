console.log("🚀 ~ Prototype Chain (Cadena de prototipos) ⛓ ");

/**
 * Siempre escribimos prototipos en JS
 */

const cheff = {
    type: 'Cocina Basica',
    cook: function(plato) {
        console.log(`🚀 ~ Cook ${plato} 🍳 `);
    },
    sayHello: function() { //-> que pasa aqui en this?? 🤔 
        console.log(`🚀 ~ Hola soy un cheff especializado en ${this.type}:`);
    }
}

const freddy = {
    name: 'Freddy',
    age: 39,
    profetion: 'Developer 💻  JS',
    type: 'Front-End'
}

Object.setPrototypeOf(freddy, cheff);

//Agregar una nueva funcion a mi prototipo
cheff.cut = function(ingredient) {
    console.log(`🚀 ~ cut ${ingredient} 🗡 `);
};

console.log(`🚀 ~ ${freddy.cut('onions')}:`);

/**
 * Estos seran prototipos
 */

//* Una nueva instancia
const pepe = { name: 'pepe'};
//* Una array
const arrayNumbers = [1,2,3];
//* una Funcion 
const sumar= (a, b) => a + b;
//* Una expresion regular
const regExp = /\d+/gi;
//* Una fecha
const now = new Date();

/**
 * Object.prototype:
 * Es el objeto prototipo de todos los objetos en JS
 * Entonces si quieremos hacer esto:
 * freddy.toString === object -> Nos dara true ya que apuntan a la misma referencia
 * y tambien es la "freddy" tiene delegado el prototipo "Object"
 */
console.log("🚀 ~ esto es por que todos tienen la misma referencia???  🤔 ", freddy.toString === pepe.toString);

/**
 * Tambien todos los que no son datos promitivos usan su prototipo
 * 1.- Array.prototype
 * 2.- Date.prototype
 * 3.- RegExp.prototype
 * 4.- Function.prototype
 * 
 * Ojo: 
 * Aqui todos los prototipos "heredan" osea tiene como delegado
 * "Object.prototype" y esto es asi en el lenguaje
 * Hay mas alla de Object.prototype?? 🤔 
 * Object.prototype.__proto__;
 * y este es el final de la cadena de prototipos esto siempre nos regresara "null"
 */

/**
 * Solo podemos acceder a la cadena de prototipos 
 * solo cuando accedemos a una propiead o metodo.
 * No cuando hacemos alguna asignacion
 */

//!Aqui solo estamos asignando la funcion cook al objecto freddy pero no se ejecuta la cadena de prototipos
freddy.cocinar= function() {
    console.log("Porfin ya se concinar");
}

/**
 * Hay modo de saber si un objeto es un prototipo de otro? 🤔 
 */

//!Ejemplo 1 -> Recuerda que no es bueno hacer este tipo de consultas "__proto__" ⚠ 
console.log("🚀 ~ si tengo este prototipo 🤔 :", freddy.__proto__ === cheff );

//Ejemplo 2 Y la mas confiable ✔ 
console.log("🚀 ~ si tengo este prototipo parte 2 cheff 🤔:", cheff.isPrototypeOf(freddy));
console.log("🚀 ~ si tengo este prototipo parte 3 Object 🤔:", Object.isPrototypeOf(freddy));

/**
 * Y que pasa cuando usamos this??? 🤔 
 * Aqui deberia de darnos type -> 'Fron-End'
 */

console.log("🚀 ~ que tiene this?? 🤔 :", freddy.sayHello());

/**
 * Las 4 maneras de usar protoipos en javascript
 */

//*  Objetos Literales ✍ 

const mario = { name: 'mario'}; // -> Object.prototype
const numbers = [ 3,4,5 ];  // -> Array.prototype
const restar = (a, b) => a - b; // -> Function.prototype

/**
 * Aqui tenemos la asignacion del objeto "__proto__" ya que el lenguaje hace esa asignacion por nosotros
 */

//* Object.create(proto)

const jose = Object.create(cheff);

/**
 * Aqui le pasamos como prototipo cheff a jose
 * Esto al hacer un nuevo objeto
 */

//* Funciones contructoras y clases

function cheffInitial(type = 'Cocina basica') {
    this.type = type;
}

cheffInitial.prototype.cooking = function(plate) {
    console.log(`🚀 ~ Cook ${plate}:`);
}

cheffInitial.prototype.sayHello = function() {
    console.log(`🚀 ~ Hola! Soy un cheff especializado!!`);
}

const juan = new cheffInitial();

/**
 * TAMBIEN PODEMOS USAR UN CLASSE DE ECMASCRIPT 6 ✔ 
 */

//* Usar Object.setPropertieOf(<obj>, <proto>) y <obj>.__proto__ = <proto> pero no es buena practica 👎