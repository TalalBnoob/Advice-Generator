const adviceBody = document.querySelector('.card-body');
const adviceID = document.querySelector('#advice');
const btn = document.querySelector('.card-btn');

function getRandomId() {
	const randomId = Math.floor(Math.random() * 224 + 1);
	getData(randomId);
}

async function getData(id) {
	const url = `https://api.adviceslip.com/advice/${id}`;
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	setAdvice(data);
}

function setAdvice(data) {
	adviceID.innerText = data.slip.id;
	adviceBody.innerText = data.slip.advice;
}

btn.addEventListener('click', getRandomId);

getRandomId();
