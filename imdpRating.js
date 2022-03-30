const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'imdb-data-searching.p.rapidapi.com',
		'X-RapidAPI-Key': 'd09500ecf7msh0f3ca7d9a05cbcbp16f4d0jsn4679689d0987'
	}
};

fetch('https://imdb-data-searching.p.rapidapi.com/om?t=the%20game%20', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



// I have generated from rapid api for using imdb api for free 