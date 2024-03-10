function clear_div(element) {
	console.log('Clearing div');
	let div = document.getElementById(element);
	div.innerHTML = '';
}

function hash_invalidator() {
	console.log('Runing hash invalidator');
	let div = document.getElementById('hash_invalidator');
	let text = '<br> Lorem ipsum dolor sit amet, consectetur adipiscing elit';
	for (let i = 0; i < 100; i++) {
		div.innerHTML = div.innerHTML + text;
	}
}

function delayed_hash_invalidator() {
	setTimeout(hash_invalidator, 1000);
}

function title_changer() {
	console.log('Changing title');
	document.title = Math.random();
}
