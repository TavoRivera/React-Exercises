import {getHeroeById} from './bases/08-exp-imp'


// const promise = new Promise((resolve, reject)=>
// {
//     setTimeout(()=>{
//         //console.log('5 segundos despues');
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         //reject('no se pudo hallar el heroe')
//     }, 2000)
// });

// promise.then((heroe)=>{
//     console.log('El heroe es',heroe);
// })

// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {

    const promesa = new Promise((resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if( heroe !== undefined)
            {
                resolve(heroe);
            }
            else
            {
                reject('heroe no encontrado')
            }
            
            
        }, 2000)
    })

    return promesa;
}

getHeroeByIdAsync(9)
//.then(heroe=>console.log('Heroe es',heroe))
.then(console.log)
//.catch(err => console.warn(err));
.catch(console.warn);