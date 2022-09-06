//importar programas en el directorio
import heroes from '../data/heroes'

//import heroes, {owners} from './data/heroes'

//console.log(owners)

// uso de find de js devuelve 1 elemento, el mas cercano
export const getHeroeById = (id) => heroes.find(hero => hero.id === id);

//console.log(getHeroeById(1));
// uso de filter, devuelve mas de 1 elemento
export const getHeroesByOwner = (owner) => {
    return heroes.filter(hero => hero.owner === owner);
}

//console.log(getHeroesByOwner('Marvel'));