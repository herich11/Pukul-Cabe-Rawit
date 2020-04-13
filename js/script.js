const tanah = document.querySelectorAll('.tanah');
const cabe = document.querySelectorAll('.cabe');
const papanSkor = document.querySelector('.papan-skor');
const sound = document.querySelector('#sound');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
	const t = Math.floor(Math.random() * tanah.length);
	const tRandom = tanah[t];
	if(tRandom == tanahSebelumnya) {
		randomTanah(tanah);
	}
	tanahSebelumnya = tRandom;
	return tRandom;
}

function randomWaktu(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

function munculkanCabe() {
	const tRandom = randomTanah(tanah);
	const wRandom = randomWaktu(300, 1000);
	tRandom.classList.add('muncul');

	setTimeout(() => {
		tRandom.classList.remove('muncul');
		if(!selesai) {
			munculkanCabe();
		}
	}, wRandom);
}

function mulai() {
	selesai = false;
	skor = 0;
	papanSkor.textContent = 0;
	munculkanCabe();
	setTimeout(() => {
		selesai = true;
	}, 600000);
}

function pukul() {
	skor++;
	this.parentNode.classList.remove('muncul');
	sound.play();
	papanSkor.textContent = skor;
}

cabe.forEach(c => {
	c.addEventListener('click', pukul);
}); 