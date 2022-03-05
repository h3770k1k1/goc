const goodAnswers = [
	"biegnę do kota, żeby go złapać i przebiec z im na drugą strone",
	"gapię się na niego",
	"łapię go z powrotem-muszę znaleźć właściciela tego kotazanim znowu wejdzie pod auto",
];
const badAnswers = [
	"idę jak szedłem",
	"mówię-ojej biedactwo mje kochane tulituli",
	"odchodzę",
];
const questions = [
	"Wracasz do domu z zajęć, co jakiś czas przejzdza jakiś samochód. Ogólnie jest spokojnie. Nagle widzisz jak gruby biały kot wbiega na ulice...prosto pod koła ciężarówki.",
	"łapiesz kota na ręce i ledwo udaje wam się się uniknąć udeżenia przez auto, skaczesz na chodnik, wywracasz się z kotem na rękach, kot się turla kawałek dalej po czym staje a dwóch łapach i gapi się na ciebie.",
	"kot obraca się i idzie w swoją stronę, po chwili ogląda się na ciebie z pytającym wzrokiem po czym odbiega",
];

const answers1 = [badAnswers[0], badAnswers[1], goodAnswers[2]];
const answers2 = [goodAnswers[0], goodAnswers[1], badAnswers[2]];

const question = document.getElementById("question");
const answer1 = document.getElementById("answear-1");
const answer2 = document.getElementById("answear-2");
const buttonsContainer = document.getElementById("answer-buttons");

function giveText(index) {
	question.innerHTML = questions[index];
	answer1.innerHTML = answers1[index];
	answer2.innerHTML = answers2[index];
}

function giveGameOver(button, array, index) {
	if (button.innerHTML == array[index]) {
		buttonsContainer.innerHTML = "game over";
	}
}

function winningAnnouncment(button, array, index) {
	if (button.innerHTML == array[index]) {
		question.innerHTML = "win win";
	}
}

let i = 0;
giveText(i);

answer1.addEventListener("click", function () {
	giveGameOver(answer1, badAnswers, i);

	if (i <= 2) {
		i += 1;
		giveText(i);
	}
	if (i > 2) {
		question.innerHTML = "";
		answer1.innerHTML = "win";
		answer2.innerHTML = "win";
	}
});

answer2.addEventListener("click", function () {
	giveGameOver(answer2, badAnswers, i);

	if (i <= 2) {
		i += 1;
		giveText(i);
	}
	if (i > 2) {
		question.innerHTML = "";
		answer1.innerHTML = "win";
		answer2.innerHTML = "win";
	}
});
