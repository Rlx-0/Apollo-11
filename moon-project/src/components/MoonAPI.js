const url = 'https://moon-phase.p.rapidapi.com/advanced?lat=51.4768&lon=-0.0004';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ea752ba19amshfb504aa314bebacp12ba6bjsn57d76cbdd911',
		'X-RapidAPI-Host': 'moon-phase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

