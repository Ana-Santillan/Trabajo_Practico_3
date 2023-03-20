/*
Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas.
*/

let frase = prompt("Ingrese un texto");

function cadena(frase){
    if(frase === frase.toLowerCase()){
        document.write("El texto ingresado esta formado por minúsculas");
    } else if(frase === frase.toUpperCase()){
        document.write("El texto ingresado esta formado por mayúsculas");
    } else{
        document.write("El texto esta formado por mayúsculas y minúsculas");
    }
}
cadena(frase);
