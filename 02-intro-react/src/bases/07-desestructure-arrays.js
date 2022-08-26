// desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks']

// un tip es si vamos a cambiar el nombre de una variable, al pulsar f2 sobre esa variable se cambiaran de igual forma todas las referencias

const [,,p3] = personajes;

console.log(p3);


const retornaArreglo = () => {
    return [ 'ABC', 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras);
console.log(numeros);


const funcionsita = (valor) => {
    return [ valor, (valor)=>{console.log(`hola mundo don ${valor}`)}];
};
const [nombre, setNombre] = funcionsita('Goku');

console.log(nombre)
setNombre('Vegeta')
