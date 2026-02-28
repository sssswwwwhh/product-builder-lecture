const generatorBtn = document.getElementById('generator-btn');
const lottoNumbersContainer = document.querySelector('.lotto-numbers');

generatorBtn.addEventListener('click', () => {
    lottoNumbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const circle = document.createElement('div');
        circle.textContent = number;
        circle.style.backgroundColor = getColor(number);
        lottoNumbersContainer.appendChild(circle);
    });
});

function getColor(number) {
    if (number <= 10) {
        return '#fbc400';
    } else if (number <= 20) {
        return '#69c8f2';
    } else if (number <= 30) {
        return '#ff7272';
    } else if (number <= 40) {
        return '#aaa';
    } else {
        return '#b0d840';
    }
}
