// objetos
const persona = {
    nombre : 'Tonny',
    apellido : 'Stark',
    edad : 37,
    direccion : {
        ciudad : 'Managua',
        lat : 14.000,
        lon : 15.000,
    }
};

//console.table( persona);



// esta asignacion no se tiene que hacer porque copia la referencia en memoria
// no el valor
/*    const persona2 = persona;   */

// lo ideal es crear el objeto desde 0

const persona2 = { ...persona } ;//esto de dos puntos crea un clon de persona a persona2
persona2.nombre = 'Octavio';


console.log(persona);
console.log(persona2);

