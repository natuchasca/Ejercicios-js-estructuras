n1 = prompt("Ingrese numero1");
n2 = prompt("Ingrese numero2");

if (n1 > n2) {
  suma = parseInt(n1) + parseInt(n2);
  resta = parseInt(n1) - parseInt(n2);
  alert("la suma de " + n1 + " y " + n2 + " es igual a " + suma);
  alert("la resta de " + n1 + " y " + n2 + " es igual a " + resta)
}
if (n1 == n2) {
  alert("Ambos numeros son iguales");
}
if (n1 < n2) {
  multiplicar = parseInt(n1) * parseInt(n2);
  dividir = parseInt(n1) / parseInt(n2);
  alert("la multiplicacion de " + n1 + " y " + n2 + " es igual a " + multiplicar);
  alert("la division de " + n1 + " y " + n2 + " es igual a " + dividir);
}



