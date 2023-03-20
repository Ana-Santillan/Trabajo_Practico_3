/*
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
esta operación.
*/

const resultados = Array(11).fill(0);

for (let i = 0; i < 50; i++) {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;
    //Comprobar resultado
    document.write(`Dado1 = ${dado1}`);
    document.write("<br>");
    document.write(`Dado2 = ${dado2}`);
    document.write("<br>");
    document.write(`Suma = ${suma}`)
    document.write("<hr>");
    resultados[suma - 2]++;
}
//Generar tabla
document.write("<table><tbody>")
document.write("<tr>")
document.write(`<td>Suma</td>`);
document.write(`<td>Apariciones</td>`);
document.write("</tr>");
for (let i = 0; i < resultados.length; i++) {
    document.write("<tr>")
    document.write(`<td>${i+2}</td>`);
    document.write(`<td>${resultados[i]}</td>`);
    document.write("<br>");
    document.write("</tr>");
}
document.write("</tbody></table>");