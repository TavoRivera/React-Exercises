// desestructuracion

const persona = {
    nombre: 'Tony',
    apellido: 'Aguirre',
    edad: 37,
    clave: 'Ironman',
}

//const {nombre, edad, clave} = persona; // lo mismo que hacer const nombre = persona.nombre

//console.log(persona.nombre)
// console.log(nombre)
// console.log(edad)
// console.log(clave)

const retornaPersona = (user) => {
    const {nombre, apellido, edad, clave} = user;
   // console.log(nombre, apellido, edad, clave);
}

const retornaPersona2 = ({nombre, apellido, edad, clave}) => {
    //console.log(nombre, apellido);
    return {
        nombreClave : clave,
        anos : edad,
        latlong : {
            lat: 14.103,
            long: 15.405,
        }

    }
}

//retornaPersona(persona);
//retornaPersona2(persona);
const avenger = retornaPersona2(persona)
console.log(avenger.nombreClave)

//con desestructuracion
const { nombreClave, anos, latlong:{lat,long} } = retornaPersona2(persona)
console.log(nombreClave, anos)
console.log(lat, long)