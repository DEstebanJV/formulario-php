/* Ambos ciclos se ocupan el for y el while con for podemos definir un fin de intentos y con el while
mientras se cunpla que lo siga haciendo.

Es como decir en while seria, seguir cocinando el pollo mientras siga crudo, realmente no sabremos cuando
estara cocinado, si usaramos for podria quedarnos crudo o muy quemado
*/

var estudiantes = ["maria", "sergio","david","rosa"];

function saludarEstudiantes(nombre){
console.log(`hola, ${nombre}`); // con las comillas `` aceptamos adentro variables concatenadas que la sintaxis es ${var}

}

/* Mientras lo que este adentro sea verdad lo otro va a pasar 

sintaxis while(estudientes.length > 0){
    var estudiante= estudiantes.shift();
    saludarEstudiantes(estudiante);

}*/

while(estudiantes.length > 0){
    var estudiante= estudiantes.shift();
    saludarEstudiantes(estudiante);

}