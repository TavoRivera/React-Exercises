const nombre = 'Octavio';
const apellido = 'Rivera';

const nombreCompleto = ` ${nombre} ${apellido} `

console.log(nombreCompleto);

function getSaludo(nombre){
    return `Hola Mundo! Te saluda ${nombre}`;
}

console.log(`este es un texto: ${getSaludo(nombreCompleto)}`)