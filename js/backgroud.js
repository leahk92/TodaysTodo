const images = ["mountain.jpg", "cactus.jpg", "Albuquerque.jpg", "mountain2.jpg", "mountain3.jpg", "sheep1.jpg", "sheep2.jpg", "cow1.jpg", "desert1.jpg", "penguin1.jpg", "sky1.jpg", "cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat6.jpg", "cat7.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url("../img/${chosenImage}")`;
