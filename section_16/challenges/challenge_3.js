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

const loadNPause = async function (imgPath1, imgPath2) {
  try {
    let img = await createImage(imgPath1);
    await wait(2);
    img.style.display = 'none';
    img = await createImage(imgPath2);
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.error(error);
  }
};

// loadNPause('img/img-1.jpg', 'img/img-2.jpg');

const loadAll = async function (imgArr) {
  try {
    const imgs = await Promise.all(
      imgArr.map(async (imgPath) => await createImage(imgPath))
    );
    imgs.forEach((img) => img.classList.add('parallel'));
  } catch (error) {
    console.error(error);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
