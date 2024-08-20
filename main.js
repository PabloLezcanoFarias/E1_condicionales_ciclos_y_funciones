
// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.//


// function encontrarNumeroPar(num) {
//   if (num % 2 === 0) {
//     console.log(`El número ingresado es par`);
//   } else {
//     console.log(`El número es impar`);
//   }
// }

// let numero = Number(prompt(`Ingrese un número: `));

// let numeroPar = encontrarNumeroPar(numero);


// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.//

// function encontrarNumMayor(num1, num2) {
//   if (num1 === num2) {
//     console.log(`Ambos números son iguales.`);
//   } else if (num1 > num2) {
//     console.log(`El número ${num1} es mayor que el número ${num2}`);
//   } else {
//     console.log(`El número ${num2} es mayor que el número ${num1}`);
//   }
// }

// let numero1 = Number(prompt(`Ingrese un numero: `));
// let numero2 = Number(prompt(`Ingrese otro numero: `));
// let numeros = encontrarNumMayor(numero1, numero2);


// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.//

// function hallarMultiploCinco(num) {
//   if (num % 5 === 0) {
//     console.log(`El número ingresado es múltiplo de 5.`)
//   } else {console.log(`El número ingresado no es múltiplo de 5`)}
// }

// let numero = Number(prompt(`Ingrese un número: `));
// hallarMultiploCinco(numero);


// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.//

// function imprimirNums(num){
//   for (i = 0; i <= num; i++){
//     console.log(i)}
//   }

// let number = Number(prompt(`Ingrese un número: `));
// imprimirNums(number);


// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.//

// function imprimirPalabra(word, num) {
//   for (i = 0; i < num; i++){
//     console.log(word)
//   }
// }

// let palabra = prompt(`Ingrese una palabra: `);
// let numero = Number(prompt(`Ingrese una palabra: `));
// imprimirPalabra(palabra, numero);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.//

// function imprimirArr(elem) {
//   for (let valor of elem) {
//     console.log(valor)
//   }
// }

// const elementos = [1, 2, 3, 4, `A`, `B`, `C`, `D`];
// imprimirArr(elementos);


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

// function imprimirNums(lista) {
//   for (let num of lista) {
//     if (indice !== 5) {
//       console.log(num)
//     }
//     indice++;
//   }
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// indice = 0;
// imprimirNums(arr);


// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

// function imprimirNumMulti(nums, num) {
//   for (let x of nums) {
//     let multi = x * num;
//     console.log(multi);
//   }
// }

// const arr = [1, 2, 3, 4, 5];
// const numero = Number(prompt(`Ingrese un número: `));
// imprimirNumMulti(arr, numero);