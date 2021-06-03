let count = 0;
let history = '';
let result = '';

document.querySelector('#btnGuess').onclick = (e) => {
    let inputNumber = Number(document.querySelector('#inputNumber').value);
    let guessedNumber = Math.round(Math.random() * 10);

    let delta = inputNumber - guessedNumber;

    let template = {
        larger: ` <p>${inputNumber} > ${guessedNumber}</p>
        <p>Your number is LARGER</p>`,
        smaller: ` <p>${inputNumber} < ${guessedNumber}</p>
        <p>Your number is SMALLER</p>`,
        exact: `
        <p>${inputNumber} = ${guessedNumber}</p>
        <p>AMAZING GOOD JOB !</p>
        <p>Your number is CORRECT.</p>
        `,
    }

    if (delta > 0) {
        result = template.larger;
    } else if (delta < 0) {
        result = template.smaller;
    } else {
        result = template.exact;
        count++;

        let scoreArr = [];

        for (let i = 1; i <= count; i++) {
            scoreArr.push(inputNumber);
        }

        history += `
        <p>Your score ${scoreArr.length}: ${inputNumber}</p>
        `;

    }

    document.querySelector('#guessedNumber').innerHTML = guessedNumber;
    document.querySelector('#result').innerHTML = result;
    document.querySelector('#historyResult').innerHTML = history;
};

document.querySelector('#resetHistory').onclick = (e) => {
    window.location.reload();
}