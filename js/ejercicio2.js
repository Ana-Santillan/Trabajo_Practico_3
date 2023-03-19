/*
Crear un script que solicite al usuario mediante un prompt el nombre de
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
● Mostrar la longitud del arreglo.
● Mostrar en el documento web los ítems de las posiciones primera, tercera y
última.
● Añade en última posición la ciudad de París.
● Escribe por pantalla el elemento que ocupa la segunda posición.
● Sustituye el elemento que ocupa la segunda posición por la ciudad de
'Barcelona'.
*/

let  vueltas = 0;
let ciudades = [];

do{
        let ciudad = prompt("Ingrese una ciudad");
        ciudades.push(ciudad);
        vueltas++;
    }while(confirm("¿Quiere ingresar otra ciudad?"))

document.write("<h2>Lista de Ciudades</h2>");
document.write("<ul>")
for(let i=0; i < ciudades.length; i++){
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write("</ul>");

document.write("<h2>Longitud del arreglo</h2>");
document.write(`<li>La longitud del arreglo es: ${ciudades.length}</li>`);

document.write("<h2>Ítems de las posiciones primera, tercera y última del arreglo</h2>");
document.write(`<li>El elemento en la posición 1 del arreglo es: ${ciudades[1]}</li>`);
document.write(`<li>El elemento en la posición 3 del arreglo es: ${ciudades[3]}</li>`);
let ultima = ciudades[ciudades.length-1];
document.write(`<li>El elemento de la última posición del arreglo es: ${ultima}</li>`);

ciudades.push("Paris");
document.write("<h2>Añade en última posición la ciudad de París</h2>");
document.write("<ul>")
for(let i=0; i < ciudades.length; i++){
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write("</ul>");

document.write("<h2>Elemento en la segunda posición</h2>");
document.write(`<li>El elemento en la posición 2 del arreglo es: ${ciudades[2]}</li>`);

ciudades[2] = "Barcelona";
document.write("<h2>Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'</h2>");
document.write("<ul>")
for(let i=0; i < ciudades.length; i++){
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write("</ul>");


