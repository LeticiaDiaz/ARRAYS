let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let numero;

do {
  numero = parseInt(window.prompt("Introduce un número entre 0 y 9"));
  console.log(array[numero]);
  array[numero] = array[numero] * 2;
} while (numero >= 0 && numero <= 9);
