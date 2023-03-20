/*
Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario.
*/

const num = parseInt(prompt("Ingrese un número"));

function tabla(num){
    for(let i=1; i <=10; i++){
        let multiplicar = i * num;
        document.write(`${num} x ${i} = ${multiplicar}`);
        document.write("<br>")
    }
}
tabla(num);