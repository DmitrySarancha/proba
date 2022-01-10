const drag = document.querySelector('.drag');
const spin = document.querySelector('.spin');
const img = spin.getElementsByTagName('img');
const aEle = [...img]; // ...aVid

const radius = 240;
const autoRotate = true;
const rotateSpeed = -60;
const imgWidth = 120;
const imgHeight = 170;

// size of img
const ground = document.querySelector('.ground');
ground.style.width = imgWidth + 'px';
ground.style.width = imgHeight + 'px';
