/*
Escribir el código de una función a la que se pasa como parámetro un número
entero y devuelve como resultado una cadena de texto que indica si el número es
par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/
let num = parseInt(prompt("Ingrese un número"));
function numero(num){
    if(num % 2 ===0){
        let par = document.write("El número es par");
        return par;
    }else{
        let impar = document.write("El número es impar");
        return impar;
    }
}
numero(num);