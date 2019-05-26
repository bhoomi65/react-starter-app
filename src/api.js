const getData = async function (url) {
	return await fetch(url)
		.then(res => res.json())
		.then(gists => {
			console.log('data coming from fetchData');
			return gists
		}).catch((error) => {
			console.log(error);
		});
};

export default getData;