// const saludar =function( nombre ){
//     return `hola ${nombre}`;
// };

const saludar2 = (nombre) => {
    return `hola ${nombre}`;
};

console.log(saludar2('paniar'))

// const getUser = () => {
//     return {
//         uid : '111',
//         username : 'user1',
//     };
// };
// lo de arriba es lo mismo que hacer esto

const getUser = () => ({uid: 111, username: 'pepe'})
// a esto se le denomina funcion implicita
console.log(getUser())


const usuarioActivo = (nombre) => ({uid : 'ABC567', username: nombre});
console.log(usuarioActivo('Octavio'));