function clear_div(element) {
	console.log('Clearing div');

	const div = document.getElementById(element);
	div.innerHTML = '';
}

function hash_invalidator() {
	console.log('Runing hash invalidator');

	const div = document.getElementById('hash_invalidator');
	const text = '<br> Lorem ipsum dolor sit amet, consectetur adipiscing elit';
	for (let i = 0; i < 100; i++) {
		div.innerHTML = div.innerHTML + text;
	}
}

function variable_size_invalidator() {
	console.log('Runing variable size invalidator');

	const random_int = Math.floor(Math.random() * 20);
	for (let i = -2; i < random_int; i++) {
		hash_invalidator();
	}
}

function ten_percent_invalidator() {
	console.log('Runing ten percent invalidator');

	const random_int = Math.floor(Math.random() * 10);
	if (random_int === 0) {
		clear_div('hash_invalidator');
	}
}

function delayed_hash_invalidator() {
	setTimeout(hash_invalidator, 5000);
}

function title_changer() {
	console.log('Changing title');
	document.title = Math.random();
}
