if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('../sw.js')
	.the((reg)=>console.log('Service worker registrado'));
	.catch((err)=>console.log('Service worker não registrado',err));
}
