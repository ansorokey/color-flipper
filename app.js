const colors = ['green', 'red', 'blue', 'yellow', 'orange', 'violet', 'indigo']
const button = document.querySelector('#btn');
const color = document.querySelector('.color');

const getRandomNum = () => {
    // Return anything from 0 to 0.999...
    // Never returns 1
    // To create a range, multiply by the excluded outer bound and round down
    // 3 * 0.999... = 2.999... & will never be 3
    // We can round down using Math.floor to round down to the nearest integer
    return Math.floor(Math.random() * colors.length);
}

button.addEventListener('click', () => {
    const randomNum = getRandomNum();
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
});
