let con = document.querySelector('#container');
let ask = document.querySelector('#input');
ask.addEventListener('keyup', function (e) {
	e.preventDefault();
	if (e.key === 'Enter') {
		document.querySelector('#btn').click();
	}
});

function generate() {

	if (ask.value > 0 && ask.value < 152) {
		con.innerHTML = '';
		for (i = 0; i < ask.value; i++) {
			let pokeball = document.createElement('img');
			pokeball.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(
				Math.random() * 152
			)}.png`;
			con.append(pokeball);
			console.log(`${ask.value}`);
		}
	} else if (ask.value > 152 || ask.value < 0) {
		con.innerHTML = '';
		con.appendChild('no');
	}
}

// for (i = 0; i < 7; i++){
//     let pokeball = document.createElement('img');
//     pokeball.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(Math.random() * 152)}.png`;
//     con.appendChild(pokeball);
// }
