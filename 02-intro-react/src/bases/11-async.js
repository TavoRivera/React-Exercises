/*en lugar de trabajar con new promise que resulta ser una estructura
mas grande, con async permiten devolver la  misma promesa con menor cantidad de codigo
*/

const getImagen = async() => {
   try{
    const api_key = '72ARGivcOl7oSvYpabagMJ1Xbwmq48ny';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`); //esperar a que la promesa se cumpla antes de ejecutar la siguiente linea de codigo

    const {data} = await resp.json();

    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
   }
   catch (error){
    //imprime el error
   }
}

getImagen();


// const api_key = '72ARGivcOl7oSvYpabagMJ1Xbwmq48ny'

// const peticionhttp = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

// peticionhttp
// .then(resp => resp.json())
// .then(({data}) => {
//         const {url} = data.images.original;

//         const img = document.createElement('img');
//         img.src=url;
//         document.body.append(img)

//     })


//.catch(console.warn);