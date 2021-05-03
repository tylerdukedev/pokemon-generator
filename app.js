let con = document.querySelector('#container');
let ask = document.querySelector('#input');

window.onload = () => {
	ask.onpaste = (e) => e.preventDefault();
};

ask.addEventListener('keyup', function (e) {
	e.preventDefault();
	if (e.key === 'Enter') {
		document.querySelector('#btn').click();
	}
});

function limit() {
	if (ask.value.length > 3) {
		let sliced = ask.value.slice(0, 3);
		ask.value = sliced;
	}
}

function preventNonNumericalInput(e) {
	e = e || window.event;
	var charCode = typeof e.which == 'undefined' ? e.keyCode : e.which;
	var charStr = String.fromCharCode(charCode);

	if (!charStr.match(/^[0-9]+$/)) e.preventDefault();
};

function generate() {
	let value = ask.value;
	
	if (value > 0 && value < 152 && value) {
		con.innerHTML = '';
		for (i = 0; i < value; i++) {
			let pokeball = document.createElement('img');
			pokeball.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(
				Math.random() * 152
			)}.png`;
			con.append(pokeball);
			console.log(`${value}`);
		}
	} else if (value > 152 || value < 0) {
		con.innerHTML = '';
	}
};
