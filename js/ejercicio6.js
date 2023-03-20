/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
● La fórmula del perímetro es p = 2*(a +b)
Ejemplo:
Input:
lado A = 24
lado B = 5
Output: 58
*/

const lado1 = parseInt(prompt("Ingrese el primer lado"));
const lado2 = parseInt(prompt("Ingrese el segundo lado"));

function perimetro(lado1, lado2){
    let p = 2*(lado1 + lado2);
    document.write(`El perimetro del  rectángulo es ${p}`);
}

perimetro(lado1, lado2);