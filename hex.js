const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const button = document.querySelector('#btn');
const color = document.querySelector('.color');

const getRandomHex = () => {
    let h = '#';
    for(let i = 0; i < 6; i++){
        let num = Math.floor(Math.random() * hex.length);
        h += hex[num];
    }
    return h;
}

button.addEventListener('click', () => {
    let newColor =
    document.body.style.backgroundColor = getRandomHex();
    color.textContent = getRandomHex();
});
