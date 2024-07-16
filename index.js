// dont mind my bad variable naming (working on it) :>
const inputEl = document.querySelector('input');
const btnEl = document.querySelector('#btn');
const lengthParaEl = document.querySelector('#length');
const volumeParaEl = document.querySelector('#volume');
const massParaEl = document.querySelector('#mass');

// dynamic input event (makes input width increase with each value added in inputVal)
document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('input');

  input.addEventListener('input', function () {
    if (this.value.length > 1) {
      // Increase width by 30px for each additional digit
      this.style.width = 36 + (this.value.length - 1) * 32 + 'px';
    } else {
      // Reset to default width
      this.style.width = '36px';
    }
  });
});

// just for visual purpose didnt want the .subtitle to be empty when you load the DOM
document.addEventListener('DOMContentLoaded', function () {
  const inputVal = inputEl.value;

  const meterFeet = (inputVal * 3.281).toFixed(2);
  const feetMeter = (inputVal / 3.281).toFixed(2);
  const literGallon = (inputVal * 0.264).toFixed(2);
  const gallonLiter = (inputVal / 0.264).toFixed(2);
  const kilogramPound = (inputVal * 2.204).toFixed(2);
  const poundKilogram = (inputVal / 2.204).toFixed(2);

  lengthParaEl.textContent = `${inputVal} meters = ${meterFeet} feet | ${inputVal} feet = ${feetMeter} meters`;
  volumeParaEl.textContent = `${inputVal} liters = ${literGallon} gallons | ${inputVal} gallons = ${gallonLiter} liters`;
  massParaEl.textContent = `${inputVal} kilograms = ${kilogramPound} pounds | ${inputVal} kilograms = ${poundKilogram} pounds`;
});

// the most important click event to convert the new added values
btnEl.addEventListener('click', function () {
  const inputVal = inputEl.value;

  const meterFeet = (inputVal * 3.281).toFixed(2);
  const feetMeter = (inputVal / 3.281).toFixed(2);
  const literGallon = (inputVal * 0.264).toFixed(2);
  const gallonLiter = (inputVal / 0.264).toFixed(2);
  const kilogramPound = (inputVal * 2.204).toFixed(2);
  const poundKilogram = (inputVal / 2.204).toFixed(2);

  lengthParaEl.textContent = `${inputVal} meters = ${meterFeet} feet | ${inputVal} feet = ${feetMeter} meters`;
  volumeParaEl.textContent = `${inputVal} liters = ${literGallon} gallons | ${inputVal} gallons = ${gallonLiter} liters`;
  massParaEl.textContent = `${inputVal} kilograms = ${kilogramPound} pounds | ${inputVal} kilograms = ${poundKilogram} pounds`;
});
