'use strict';

const ageInputTextEle = document.querySelector('.textInput');
const heightTextEle = document.getElementById('height');
const weightTextEle = document.getElementById('weight');
const calculateBtn = document.querySelector('.calculate');
let resultEle = document.getElementById('result');
let msgEle = document.querySelector('.linkDownload');

calculateBtn.addEventListener('click', function () {
	const ageInput = ageInputTextEle.value;
	const height = heightTextEle.value;
	const weight = weightTextEle.value;

	if (ageInput && height && weight) {
		let bmi = weight / (height / 100) ** 2;
		resultEle.textContent = bmi;

		if (bmi <= 18.5) {
			msgEle.textContent = `BMI ${bmi} is Underweight`;
		} else if (bmi > 18.5 && bmi <= 25) {
			msgEle.textContent = `BMI ${bmi} is Normal weight`;
		} else if (bmi > 25 && bmi <= 30) {
			msgEle.textContent = `BMI ${bmi} is Overweight`;
		} else if (bmi >= 30) {
			msgEle.textContent = `BMI ${bmi} is Obesity`;
		}
	} else {
		alert('Don not forget to enter the value.');
	}
});
