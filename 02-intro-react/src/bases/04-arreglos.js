// const arr = new Array(100); //arreglo con size definido
const arr = [1,2,3];
// arr.push(1)  //sube  item al arreglo
// arr.push(2)  //sube  item al arreglo
// arr.push(3)  //sube  item al arreglo

//push no lo utilizamos porque modifica al objeto principal. Usamos Spreed ... para copiar

let arr2 = [...arr, 4]; // copiamos con ... los items del primer arr y agregamos un item 4
//arr2.push(4);

// otra forma de copiar, esta funcion itera dentro del arreglo y va copiando por cada item
const arr3 = arr2.map(function(numero){
    return numero*2;
});


console.log(arr);
console.log(arr2);
console.log(arr3)