const drag = document.querySelector('.drag');
const spin = document.querySelector('.spin');
const img = spin.getElementsByTagName('img');
const ground = document.querySelector('.ground');
const aEle = [...img]; // ...aVid
const radius = 240;
const autoRotate = true;
const rotateSpeed = -60;
const imgWidth = 150;
const imgHeight = 190;

// size of img
spin.style.width = imgWidth + 'px';
spin.style.height = imgHeight + 'px';

// size of ground - depend on radius
ground.style.width = radius * 3 + 'px';
ground.style.height = radius * 3 + 'px';

const init = (daleyTime) => {
    for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform =
            'rotateY(' +
            i * (360 / aEle.length) +
            'deg) translateZ(' +
            radius +
            'px)';
        aEle[i].style.transition = 'transform 1s';
        aEle[i].style.transitionDelay =
            daleyTime || (aEle.length - i) / 3 + 's';
    }
};

const applyTransform = (obj) => {
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;
    obj.style.transform = 'rotateX(' + tY + 'deg) rotateY(' + tX + 'deg)';
};

let sX,
    sY,
    nX,
    nY,
    desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

const playSpin = (yes) => {
    spin.style.animationPlayState = yes ? 'running' : 'paused';
};
setTimeout(init, 3000);

// auto spin

if (autoRotate) {
    const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
    spin.style.animation = `${animationName} ${Math.abs(
        rotateSpeed
    )}s infinite linear`;
}

// add backgraund music

const bgMusicURL = '/adele-hello.mp3';
const bgMusicControls = false;

if (bgMusicURL) {
    document.getElementById(
        'music-container'
    ).innerHTML = `<audio src=${bgMusicURL} ${
        bgMusicControls ? 'controls' : ' '
    } autoplay loop>;

	 <p> if you are reading this, it is bacause your browser does not support the audio element. </p>

	 </audio>`;
}
