let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let numero = 0
do {
numero = parseInt(window.prompt("Introduce un número entre 0 y 10"));
if (numero >= 0 && numero <= 10) {
  array[numero] = array[numero] + 1;
  console.log(array[numero]);
} else if (numero > 10) {
  window.alert("El número introducido es incorrecto");
} else {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i}       ${array[i]}`);
  }
}
}while ( numero >= 0)
