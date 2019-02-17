if('serviceWorker' in navigator){
	navigator.serviceWorker.register('sw.js',{
		scope:'./'

	})
	.then(reg=>{
		console.log("duccess");

	})
	.catch(error=>{
		console.log("error");
	});
}