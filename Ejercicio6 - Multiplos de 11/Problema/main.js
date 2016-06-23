var numero, multiplos;
numero = 11;
var suma = 0;

for (var i = 1 ; i < 270; i++) {
  multiplos = (numero)*i; 
  console.log(multiplos); 
  suma+=(multiplos)+(multiplos);
};

console.log("La suma de todos los multiplos de 11 es " + suma);



