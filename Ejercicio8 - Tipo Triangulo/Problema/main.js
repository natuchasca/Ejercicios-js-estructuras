var lado1, lado2, lado3;
lado1 = prompt("Ingrese medidas triangulo lado A");
lado2 = prompt("Ingrese medidas triangulo lado B");
lado3 = prompt("Ingrese medidas triangulo lado C");
// Lados iguales
if ((lado1 == lado2) && (lado1 == lado3)  && (lado2 == lado3)) {
  alert("El triangulo es equilatero") 
}
// 2 Lados iguales 1 distinto
if ((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3)) {
  alert("El triangulo es isósceles") 
}
// Lados distintos
if ((lado1 !== lado2) && (lado1 !== lado3)  && (lado2 !== lado3)) {
  alert("El triangulo es escaleno")
}



