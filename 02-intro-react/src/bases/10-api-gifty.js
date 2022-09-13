const api_key = '72ARGivcOl7oSvYpabagMJ1Xbwmq48ny'

const peticionhttp = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

peticionhttp
.then(resp => resp.json())
.then(({data}) => {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src=url;
        document.body.append(img)

    })


.catch(console.warn);