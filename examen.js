// Problema 1
// Random par o impar
let num;
for(let i = 0; i<5; i++){
    num = Math.floor(Math.random() * 100);
    if(num % 2 == 0){
        console.log("El numero " + num + " es par");
    } else {
        console.log("El numero " + num + " es impar")
    }
}
// Problema 2
// Múltiplos de un número dado
let n = 3;
if(!Number.isInteger(n) || n < 1 || n > 100){
    console.log("El número debe ser un entero entre 1 y 100");
}
else {
    let multiplo = 0;
    console.log("Los multiplos son:");
    while(multiplo < 100){
        multiplo += n;
        console.log(multiplo);
    }
}
// Problema 3
// Cuenta cuantas veces se repite un caracter en específico
let cadena = "hola como estas";
let caracter = "z";
let cont = 0;
for(let i = 0; i<cadena.length; i++){
    if(cadena[i] == caracter){
        cont++;
    }
}
console.log("El caracter " + caracter + " se repite " + cont + " veces en " + '"' + cadena + '"');
// Problema 4
// Invertir un array
let array = [23, 5, 34, 56, 98, "cadena", 7];
let arrayInverso = [];
array.forEach(val => {
    arrayInverso.unshift(val);
})
console.log(arrayInverso);
// Problema 5
// Nuevos jugadores
class Persona{
    nombre;
    apellido;
    edad;
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    getDetalles(){
        console.log(this.nombre + " " + this.apellido + " tiene " + this.edad + " años");
    }
}
class Jugador extends Persona{
    posicion;
    constructor(nombre, apellido, edad, posicion){
        super(nombre, apellido, edad);
        this.posicion = posicion;
    }
    getDetalles(){
        super.getDetalles();
        console.log("Su posición es " + this.posicion);
    }
}
class Entrenador extends Persona{
    aniosExperiencia;
    idFederacion;
    constructor(nombre, apellido, edad, aniosExperiencia, idFederacion = Math.floor(Math.random()*90000)+10000){
        super(nombre, apellido, edad);
        this.anionsExperiencia = aniosExperiencia;
        this.idFederacion = idFederacion;
    }
    getDetalles(){
        super.getDetalles();
        console.log("Es un entrenador con " + this.anionsExperiencia + " años de experiencia");
        console.log("Su id de federación es " + this.idFederacion);
    }
}
class Equipo{
    entrenador;
    jugadores;
    constructor(entrenador, jugadores){
        this.entrenador = entrenador;
        this.jugadores = jugadores;
    }
    getDetalles(){
        this.entrenador.getDetalles();
        this.jugadores.forEach(jugador => {
            jugador.getDetalles();
        })
    }
}
let jugs = [];
jugs.push(new Jugador("Juan", "Pérez", 17, "Portero"));
jugs.push(new Jugador("Miguel", "Rodríguez", 22, "Defensa"));
jugs.push(new Jugador("Pedro", "Suárez", 27, "Medio"));
jugs.push(new Jugador("Carlos", "Jiménez", 23, "Delantero"));
let ent = new Entrenador("Manuel", "De León", 35, 6);
let equipo1 = new Equipo(ent, jugs);
equipo1.getDetalles();
// Ejercicio bonus
// Convertir caracteres a mayúsculas
let fraseInicial = "www.techacademy.com";
let fraseFinal = "";
for(let i = 0; i<fraseInicial.length; i++){
    if(fraseInicial[i] != "."){
        fraseFinal += fraseInicial[i].toUpperCase();
    } else {
        fraseFinal += fraseInicial.slice(i);
        break;
    }
}
console.log("entrada: " + fraseInicial);
console.log("salida: " + fraseFinal);