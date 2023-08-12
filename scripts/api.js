const adviceNumber = document.querySelector('h1');
const adviceContent = document.querySelector('h2');
const diceButton = document.querySelector('button');

const API_ADVICE_URL = "https://api.adviceslip.com/advice";

diceButton.addEventListener('click', () => {
  fetch(API_ADVICE_URL)
  .then(res => res.json())
  .then(data => {
    const id = data.slip.id;
    const advice = data.slip.advice;
    adviceNumber.textContent = `Advice #${id}`;
    adviceContent.textContent = `"${advice}"`;
  })
  .catch(error => {
    console.error('An error occured:', error);
  })
})

