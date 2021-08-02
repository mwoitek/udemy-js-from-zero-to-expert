let currentImg;
const imgPath1 = 'img/img-1.jpg';
const imgPath2 = 'img/img-2.jpg';

const createImage = (imgPath) =>
  new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.addEventListener('load', () => {
      document.querySelector('.images').append(img);
      resolve(img);
    });
    img.addEventListener('error', () => reject(new Error('Error loading the image')));
    img.src = imgPath;
  });

const wait = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 10 ** 3));

createImage(imgPath1)
  .then((img) => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage(imgPath2);
  })
  .then((img) => {
    currentImg = img;
    return wait(2);
  })
  .then(() => (currentImg.style.display = 'none'))
  .catch((error) => console.error(error));
