var a; // declarar
var b = 'b'; //declaramos / asignamos

b = 'bb'; // reasignar

var a = 'aa'; //redeclaracion
// --

// Global Scope
var fruit = 'apple'; // Global
console.log(fruit);

function bestFruit(){ //Bloque
  console.log(fruit);
}

bestFruit(); // visualizamos la variable fruit
// --

// CUIDADO
// Al no declarar una variable pasa al scope global

function countries(){
  country = 'Colombia'; // global
  console.log(country);
}

countries();
console.log(country);

// CTRL + ALT + N, para ejecutar js con la extensión "code runner"